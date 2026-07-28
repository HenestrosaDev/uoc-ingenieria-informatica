import { addFluidObserver, createInterpolator, defineHidden, each, eachProp, getFluidValue, hasFluidValue, is, isAnimatedString, raf, removeFluidObserver, useForceUpdate, useIsomorphicLayoutEffect, useOnce } from "@react-spring/shared";
import * as React from "react";
import { forwardRef, useCallback, useEffect, useRef } from "react";

//#region src/Animated.ts
const $node = Symbol.for("Animated:node");
const isAnimated = (value) => !!value && value[$node] === value;
/** Get the owner's `Animated` node. */
const getAnimated = (owner) => owner && owner[$node];
/** Set the owner's `Animated` node. */
const setAnimated = (owner, node) => defineHidden(owner, $node, node);
/** Get every `AnimatedValue` in the owner's `Animated` node. */
const getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
	constructor() {
		setAnimated(this, this);
	}
	/** Get every `AnimatedValue` used by this node. */
	getPayload() {
		return this.payload || [];
	}
};

//#endregion
//#region src/AnimatedValue.ts
/** An animated number or a native attribute value */
var AnimatedValue = class AnimatedValue extends Animated {
	constructor(_value) {
		super();
		this._value = _value;
		this.done = true;
		this.durationProgress = 0;
		if (is.num(this._value)) this.lastPosition = this._value;
	}
	/** @internal */
	static create(value) {
		return new AnimatedValue(value);
	}
	getPayload() {
		return [this];
	}
	getValue() {
		return this._value;
	}
	setValue(value, step) {
		if (is.num(value)) {
			this.lastPosition = value;
			if (step) {
				value = Math.round(value / step) * step;
				if (this.done) this.lastPosition = value;
			}
		}
		if (this._value === value) return false;
		this._value = value;
		return true;
	}
	reset() {
		const { done } = this;
		this.done = false;
		if (is.num(this._value)) {
			this.elapsedTime = 0;
			this.durationProgress = 0;
			this.lastPosition = this._value;
			if (done) this.lastVelocity = null;
			this.v0 = null;
		}
	}
};

//#endregion
//#region src/AnimatedString.ts
var AnimatedString = class AnimatedString extends AnimatedValue {
	constructor(value) {
		super(0);
		this._string = null;
		this._toString = createInterpolator({ output: [value, value] });
	}
	/** @internal */
	static create(value) {
		return new AnimatedString(value);
	}
	getValue() {
		const value = this._string;
		return value == null ? this._string = this._toString(this._value) : value;
	}
	setValue(value) {
		if (is.str(value)) {
			if (value == this._string) return false;
			this._string = value;
			this._value = 1;
		} else if (super.setValue(value)) this._string = null;
		else return false;
		return true;
	}
	reset(goal) {
		if (goal) this._toString = createInterpolator({ output: [this.getValue(), goal] });
		this._value = 0;
		super.reset();
	}
};

//#endregion
//#region src/context.ts
const TreeContext = { dependencies: null };

//#endregion
//#region src/AnimatedObject.ts
/** An object containing `Animated` nodes */
var AnimatedObject = class extends Animated {
	constructor(source) {
		super();
		this.source = source;
		this.setValue(source);
	}
	getValue(animated) {
		const values = {};
		eachProp(this.source, (source, key) => {
			if (isAnimated(source)) values[key] = source.getValue(animated);
			else if (hasFluidValue(source)) values[key] = getFluidValue(source);
			else if (!animated) values[key] = source;
		});
		return values;
	}
	/** Replace the raw object data */
	setValue(source) {
		this.source = source;
		this.payload = this._makePayload(source);
	}
	reset() {
		if (this.payload) each(this.payload, (node) => node.reset());
	}
	/** Create a payload set. */
	_makePayload(source) {
		if (source) {
			const payload = /* @__PURE__ */ new Set();
			eachProp(source, this._addToPayload, payload);
			return Array.from(payload);
		}
	}
	/** Add to a payload set. */
	_addToPayload(source) {
		if (TreeContext.dependencies && hasFluidValue(source)) TreeContext.dependencies.add(source);
		const payload = getPayload(source);
		if (payload) each(payload, (node) => this.add(node));
	}
};

//#endregion
//#region src/AnimatedArray.ts
/** An array of animated nodes */
var AnimatedArray = class AnimatedArray extends AnimatedObject {
	constructor(source) {
		super(source);
	}
	/** @internal */
	static create(source) {
		return new AnimatedArray(source);
	}
	getValue() {
		return this.source.map((node) => node.getValue());
	}
	setValue(source) {
		const payload = this.getPayload();
		if (source.length == payload.length) return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
		super.setValue(source.map(makeAnimated));
		return true;
	}
};
function makeAnimated(value) {
	return (isAnimatedString(value) ? AnimatedString : AnimatedValue).create(value);
}

//#endregion
//#region src/getAnimatedType.ts
/** Return the `Animated` node constructor for a given value */
function getAnimatedType(value) {
	const parentNode = getAnimated(value);
	return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}

//#endregion
//#region src/withAnimated.tsx
const withAnimated = (Component, host) => {
	const hasInstance = !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
	return forwardRef((givenProps, givenRef) => {
		const instanceRef = useRef(null);
		const ref = hasInstance && useCallback((value) => {
			instanceRef.current = updateRef(givenRef, value);
		}, [givenRef]);
		const [props, deps] = getAnimatedState(givenProps, host);
		const forceUpdate = useForceUpdate();
		const callback = () => {
			const instance = instanceRef.current;
			if (hasInstance && !instance) return;
			if ((instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false) === false) forceUpdate();
		};
		const observer = new PropsObserver(callback, deps);
		const observerRef = useRef(void 0);
		useIsomorphicLayoutEffect(() => {
			observerRef.current = observer;
			each(deps, (dep) => addFluidObserver(dep, observer));
			return () => {
				if (observerRef.current) {
					each(observerRef.current.deps, (dep) => removeFluidObserver(dep, observerRef.current));
					raf.cancel(observerRef.current.update);
				}
			};
		});
		useEffect(callback, []);
		useOnce(() => () => {
			const observer = observerRef.current;
			each(observer.deps, (dep) => removeFluidObserver(dep, observer));
		});
		const usedProps = host.getComponentProps(props.getValue());
		return /* @__PURE__ */ React.createElement(Component, {
			...usedProps,
			ref
		});
	});
};
var PropsObserver = class {
	constructor(update, deps) {
		this.update = update;
		this.deps = deps;
	}
	eventObserved(event) {
		if (event.type == "change") raf.write(this.update);
	}
};
function getAnimatedState(props, host) {
	const dependencies = /* @__PURE__ */ new Set();
	TreeContext.dependencies = dependencies;
	if (props.style) props = {
		...props,
		style: host.createAnimatedStyle(props.style)
	};
	props = new AnimatedObject(props);
	TreeContext.dependencies = null;
	return [props, dependencies];
}
function updateRef(ref, value) {
	if (ref) if (is.fun(ref)) ref(value);
	else ref.current = value;
	return value;
}

//#endregion
//#region src/createHost.ts
const cacheKey = Symbol.for("AnimatedComponent");
const createHost = (components, { applyAnimatedValues = () => false, createAnimatedStyle = (style) => new AnimatedObject(style), getComponentProps = (props) => props } = {}) => {
	const hostConfig = {
		applyAnimatedValues,
		createAnimatedStyle,
		getComponentProps
	};
	const animated = (Component) => {
		const displayName = getDisplayName(Component) || "Anonymous";
		if (is.str(Component)) Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
		else Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
		Component.displayName = `Animated(${displayName})`;
		return Component;
	};
	eachProp(components, (Component, key) => {
		if (is.arr(components)) key = getDisplayName(Component);
		animated[key] = animated(Component);
	});
	return { animated };
};
const getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;

//#endregion
export { Animated, AnimatedArray, AnimatedObject, AnimatedString, AnimatedValue, createHost, getAnimated, getAnimatedType, getPayload, isAnimated, setAnimated };