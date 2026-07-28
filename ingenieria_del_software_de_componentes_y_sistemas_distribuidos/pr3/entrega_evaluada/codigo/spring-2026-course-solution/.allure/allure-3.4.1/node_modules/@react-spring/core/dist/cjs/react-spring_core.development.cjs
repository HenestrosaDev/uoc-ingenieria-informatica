Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) {
				__defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
		}
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
let _react_spring_shared = require("@react-spring/shared");
let react = require("react");
react = __toESM(react);
let _react_spring_animated = require("@react-spring/animated");

//#region src/helpers.ts
function callProp(value, ...args) {
	return _react_spring_shared.is.fun(value) ? value(...args) : value;
}
/** Try to coerce the given value into a boolean using the given key */
const matchProp = (value, key) => value === true || !!(key && value && (_react_spring_shared.is.fun(value) ? value(key) : (0, _react_spring_shared.toArray)(value).includes(key)));
const resolveProp = (prop, key) => _react_spring_shared.is.obj(prop) ? key && prop[key] : prop;
/** Get the default value being set for the given `key` */
const getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
const noopTransform = (value) => value;
/**
* Extract the default props from an update.
*
* When the `default` prop is falsy, this function still behaves as if
* `default: true` was used. The `default` prop is always respected when
* truthy.
*/
const getDefaultProps = (props, transform = noopTransform) => {
	let keys = DEFAULT_PROPS;
	if (props.default && props.default !== true) {
		props = props.default;
		keys = Object.keys(props);
	}
	const defaults = {};
	for (const key of keys) {
		const value = transform(props[key], key);
		if (!_react_spring_shared.is.und(value)) defaults[key] = value;
	}
	return defaults;
};
/**
* These props are implicitly used as defaults when defined in a
* declarative update (eg: render-based) or any update with `default: true`.
*
* Use `default: {}` or `default: false` to opt-out of these implicit defaults
* for any given update.
*
* Note: These are not the only props with default values. For example, the
* `pause`, `cancel`, and `immediate` props. But those must be updated with
* the object syntax (eg: `default: { immediate: true }`).
*/
const DEFAULT_PROPS = [
	"config",
	"onProps",
	"onStart",
	"onChange",
	"onPause",
	"onResume",
	"onRest"
];
const RESERVED_PROPS = {
	config: 1,
	from: 1,
	to: 1,
	ref: 1,
	loop: 1,
	reset: 1,
	pause: 1,
	cancel: 1,
	reverse: 1,
	immediate: 1,
	default: 1,
	delay: 1,
	onProps: 1,
	onStart: 1,
	onChange: 1,
	onPause: 1,
	onResume: 1,
	onRest: 1,
	onResolve: 1,
	items: 1,
	trail: 1,
	sort: 1,
	expires: 1,
	initial: 1,
	enter: 1,
	update: 1,
	leave: 1,
	children: 1,
	onDestroyed: 1,
	keys: 1,
	callId: 1,
	parentId: 1
};
/**
* Extract any properties whose keys are *not* reserved for customizing your
* animations. All hooks use this function, which means `useTransition` props
* are reserved for `useSpring` calls, etc.
*/
function getForwardProps(props) {
	const forward = {};
	let count = 0;
	(0, _react_spring_shared.eachProp)(props, (value, prop) => {
		if (!RESERVED_PROPS[prop]) {
			forward[prop] = value;
			count++;
		}
	});
	if (count) return forward;
}
/**
* Clone the given `props` and move all non-reserved props
* into the `to` prop.
*/
function inferTo(props) {
	const to = getForwardProps(props);
	if (to) {
		const out = { to };
		(0, _react_spring_shared.eachProp)(props, (val, key) => key in to || (out[key] = val));
		return out;
	}
	return { ...props };
}
function computeGoal(value) {
	const resolved = (0, _react_spring_shared.getFluidValue)(value);
	if (_react_spring_shared.is.arr(resolved)) return resolved.map(computeGoal);
	if ((0, _react_spring_shared.isAnimatedString)(resolved)) return _react_spring_shared.Globals.createStringInterpolator({
		range: [0, 1],
		output: [resolved, resolved]
	})(1);
	return resolved;
}
function hasProps(props) {
	for (const _ in props) return true;
	return false;
}
function isAsyncTo(to) {
	return _react_spring_shared.is.fun(to) || _react_spring_shared.is.arr(to) && _react_spring_shared.is.obj(to[0]);
}
/** Detach `ctrl` from `ctrl.ref` and (optionally) the given `ref` */
function detachRefs(ctrl, ref) {
	ctrl.ref?.delete(ctrl);
	ref?.delete(ctrl);
}
/** Replace `ctrl.ref` with the given `ref` (if defined) */
function replaceRef(ctrl, ref) {
	if (ref && ctrl.ref !== ref) {
		ctrl.ref?.delete(ctrl);
		ref.add(ctrl);
		ctrl.ref = ref;
	}
}

//#endregion
//#region src/hooks/useChain.ts
/**
* Used to orchestrate animation hooks in sequence with one another.
* This is best used when you specifically want to orchestrate different
* types of animation hook e.g. `useSpring` & `useTransition` in
* sequence as opposed to multiple `useSpring` hooks.
*
*
* ```jsx
* export const MyComponent = () => {
*  //...
*  useChain([springRef, transitionRef])
*  //...
* }
* ```
*
* @param refs – An array of `SpringRef`s.
* @param timeSteps – Optional array of numbers that define the
* delay between each animation from 0-1. The length should correlate
* to the length of `refs`.
* @param timeFrame – Optional number that defines the total duration
*
* @public
*/
function useChain(refs, timeSteps, timeFrame = 1e3) {
	(0, _react_spring_shared.useIsomorphicLayoutEffect)(() => {
		if (timeSteps) {
			let prevDelay = 0;
			(0, _react_spring_shared.each)(refs, (ref, i) => {
				const controllers = ref.current;
				if (controllers.length) {
					let delay = timeFrame * timeSteps[i];
					if (isNaN(delay)) delay = prevDelay;
					else prevDelay = delay;
					(0, _react_spring_shared.each)(controllers, (ctrl) => {
						(0, _react_spring_shared.each)(ctrl.queue, (props) => {
							const memoizedDelayProp = props.delay;
							props.delay = (key) => delay + callProp(memoizedDelayProp || 0, key);
						});
					});
					ref.start();
				}
			});
		} else {
			let p = Promise.resolve();
			(0, _react_spring_shared.each)(refs, (ref) => {
				const controllers = ref.current;
				if (controllers.length) {
					const queues = controllers.map((ctrl) => {
						const q = ctrl.queue;
						ctrl.queue = [];
						return q;
					});
					p = p.then(() => {
						(0, _react_spring_shared.each)(controllers, (ctrl, i) => (0, _react_spring_shared.each)(queues[i] || [], (update) => ctrl.queue.push(update)));
						return Promise.all(ref.start());
					});
				}
			});
		}
	});
}

//#endregion
//#region src/constants.ts
const config = {
	default: {
		tension: 170,
		friction: 26
	},
	gentle: {
		tension: 120,
		friction: 14
	},
	wobbly: {
		tension: 180,
		friction: 12
	},
	stiff: {
		tension: 210,
		friction: 20
	},
	slow: {
		tension: 280,
		friction: 60
	},
	molasses: {
		tension: 280,
		friction: 120
	}
};

//#endregion
//#region src/AnimationConfig.ts
const defaults = {
	...config.default,
	mass: 1,
	damping: 1,
	easing: _react_spring_shared.easings.linear,
	clamp: false
};
var AnimationConfig = class {
	constructor() {
		this.velocity = 0;
		Object.assign(this, defaults);
	}
};
function mergeConfig(config, newConfig, defaultConfig) {
	if (defaultConfig) {
		defaultConfig = { ...defaultConfig };
		sanitizeConfig(defaultConfig, newConfig);
		newConfig = {
			...defaultConfig,
			...newConfig
		};
	}
	sanitizeConfig(config, newConfig);
	Object.assign(config, newConfig);
	for (const key in defaults) if (config[key] == null) config[key] = defaults[key];
	let { frequency, damping } = config;
	const { mass } = config;
	if (!_react_spring_shared.is.und(frequency)) {
		if (frequency < .01) frequency = .01;
		if (damping < 0) damping = 0;
		config.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
		config.friction = 4 * Math.PI * damping * mass / frequency;
	}
	return config;
}
function sanitizeConfig(config, props) {
	if (!_react_spring_shared.is.und(props.decay)) config.duration = void 0;
	else {
		const isTensionConfig = !_react_spring_shared.is.und(props.tension) || !_react_spring_shared.is.und(props.friction);
		if (isTensionConfig || !_react_spring_shared.is.und(props.frequency) || !_react_spring_shared.is.und(props.damping) || !_react_spring_shared.is.und(props.mass)) {
			config.duration = void 0;
			config.decay = void 0;
		}
		if (isTensionConfig) config.frequency = void 0;
	}
}

//#endregion
//#region src/Animation.ts
const emptyArray = [];
/** An animation being executed by the frameloop */
var Animation = class {
	constructor() {
		this.changed = false;
		this.values = emptyArray;
		this.toValues = null;
		this.fromValues = emptyArray;
		this.config = new AnimationConfig();
		this.immediate = false;
	}
};

//#endregion
//#region src/scheduleProps.ts
/**
* This function sets a timeout if both the `delay` prop exists and
* the `cancel` prop is not `true`.
*
* The `actions.start` function must handle the `cancel` prop itself,
* but the `pause` prop is taken care of.
*/
function scheduleProps(callId, { key, props, defaultProps, state, actions }) {
	return new Promise((resolve, reject) => {
		let delay;
		let timeout;
		let cancel = matchProp(props.cancel ?? defaultProps?.cancel, key);
		if (cancel) onStart();
		else {
			if (!_react_spring_shared.is.und(props.pause)) state.paused = matchProp(props.pause, key);
			let pause = defaultProps?.pause;
			if (pause !== true) pause = state.paused || matchProp(pause, key);
			delay = callProp(props.delay || 0, key);
			if (pause) {
				state.resumeQueue.add(onResume);
				actions.pause();
			} else {
				actions.resume();
				onResume();
			}
		}
		function onPause() {
			state.resumeQueue.add(onResume);
			state.timeouts.delete(timeout);
			timeout.cancel();
			delay = timeout.time - _react_spring_shared.raf.now();
		}
		function onResume() {
			if (delay > 0 && !_react_spring_shared.Globals.skipAnimation) {
				state.delayed = true;
				timeout = _react_spring_shared.raf.setTimeout(onStart, delay);
				state.pauseQueue.add(onPause);
				state.timeouts.add(timeout);
			} else onStart();
		}
		function onStart() {
			if (state.delayed) state.delayed = false;
			state.pauseQueue.delete(onPause);
			state.timeouts.delete(timeout);
			if (callId <= (state.cancelId || 0)) cancel = true;
			try {
				actions.start({
					...props,
					callId,
					cancel
				}, resolve);
			} catch (err) {
				reject(err);
			}
		}
	});
}

//#endregion
//#region src/AnimationResult.ts
/** @internal */
const getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every((result) => result.finished));
/** No-op results are for updates that never start an animation. */
const getNoopResult = (value) => ({
	value,
	noop: true,
	finished: true,
	cancelled: false
});
const getFinishedResult = (value, finished, cancelled = false) => ({
	value,
	finished,
	cancelled
});
const getCancelledResult = (value) => ({
	value,
	cancelled: true,
	finished: false
});

//#endregion
//#region src/runAsync.ts
/**
* Start an async chain or an async script.
*
* Always call `runAsync` in the action callback of a `scheduleProps` call.
*
* The `T` parameter can be a set of animated values (as an object type)
* or a primitive type for a single animated value.
*/
function runAsync(to, props, state, target) {
	const { callId, parentId, onRest } = props;
	const { asyncTo: prevTo, promise: prevPromise } = state;
	if (!parentId && to === prevTo && !props.reset) return prevPromise;
	return state.promise = (async () => {
		state.asyncId = callId;
		state.asyncTo = to;
		const defaultProps = getDefaultProps(props, (value, key) => key === "onRest" ? void 0 : value);
		let preventBail;
		let bail;
		const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));
		const bailIfEnded = (bailSignal) => {
			const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);
			if (bailResult) {
				bailSignal.result = bailResult;
				bail(bailSignal);
				throw bailSignal;
			}
		};
		let skipAnimationCallCount = 0;
		const SKIP_ANIMATION_CALL_LIMIT = 1024;
		const animate = (arg1, arg2) => {
			const bailSignal = new BailSignal();
			const skipAnimationSignal = new SkipAnimationSignal();
			return (async () => {
				bailIfEnded(bailSignal);
				const props = _react_spring_shared.is.obj(arg1) ? { ...arg1 } : {
					...arg2,
					to: arg1
				};
				props.parentId = callId;
				(0, _react_spring_shared.eachProp)(defaultProps, (value, key) => {
					if (_react_spring_shared.is.und(props[key])) props[key] = value;
				});
				if (_react_spring_shared.Globals.skipAnimation) {
					if (++skipAnimationCallCount > SKIP_ANIMATION_CALL_LIMIT) {
						stopAsync(state);
						skipAnimationSignal.result = getFinishedResult(target, false);
						bail(skipAnimationSignal);
						throw skipAnimationSignal;
					}
					props.immediate = true;
					return await target.start(props);
				}
				const result = await target.start(props);
				bailIfEnded(bailSignal);
				if (state.paused) await new Promise((resume) => {
					state.resumeQueue.add(resume);
				});
				return result;
			})();
		};
		let result;
		try {
			let animating;
			if (_react_spring_shared.is.arr(to)) animating = (async (queue) => {
				for (const props of queue) await animate(props);
			})(to);
			else animating = Promise.resolve(to(animate, target.stop.bind(target)));
			await Promise.all([animating.then(preventBail), bailPromise]);
			result = getFinishedResult(target.get(), true, false);
		} catch (err) {
			if (err instanceof BailSignal) result = err.result;
			else if (err instanceof SkipAnimationSignal) result = err.result;
			else throw err;
		} finally {
			if (callId == state.asyncId) {
				state.asyncId = parentId;
				state.asyncTo = parentId ? prevTo : void 0;
				state.promise = parentId ? prevPromise : void 0;
			}
		}
		if (_react_spring_shared.is.fun(onRest)) _react_spring_shared.raf.batchedUpdates(() => {
			onRest(result, target, target.item);
		});
		return result;
	})();
}
/** Stop the current `runAsync` call with `finished: false` (or with `cancelled: true` when `cancelId` is defined) */
function stopAsync(state, cancelId) {
	(0, _react_spring_shared.flush)(state.timeouts, (t) => t.cancel());
	state.pauseQueue.clear();
	state.resumeQueue.clear();
	state.asyncId = state.asyncTo = state.promise = void 0;
	if (cancelId) state.cancelId = cancelId;
}
/** This error is thrown to signal an interrupted async animation. */
var BailSignal = class extends Error {
	constructor() {
		super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
	}
};
var SkipAnimationSignal = class extends Error {
	constructor() {
		super("SkipAnimationSignal");
	}
};

//#endregion
//#region src/FrameValue.ts
const isFrameValue = (value) => value instanceof FrameValue;
let nextId$1 = 1;
/**
* A kind of `FluidValue` that manages an `AnimatedValue` node.
*
* Its underlying value can be accessed and even observed.
*/
var FrameValue = class extends _react_spring_shared.FluidValue {
	constructor(..._args) {
		super(..._args);
		this.id = nextId$1++;
		this._priority = 0;
	}
	get priority() {
		return this._priority;
	}
	set priority(priority) {
		if (this._priority != priority) {
			this._priority = priority;
			this._onPriorityChange(priority);
		}
	}
	/** Get the current value */
	get() {
		const node = (0, _react_spring_animated.getAnimated)(this);
		return node && node.getValue();
	}
	/** Create a spring that maps our value to another value */
	to(...args) {
		return _react_spring_shared.Globals.to(this, args);
	}
	/** @deprecated Use the `to` method instead. */
	interpolate(...args) {
		(0, _react_spring_shared.deprecateInterpolate)();
		return _react_spring_shared.Globals.to(this, args);
	}
	toJSON() {
		return this.get();
	}
	observerAdded(count) {
		if (count == 1) this._attach();
	}
	observerRemoved(count) {
		if (count == 0) this._detach();
	}
	/** Called when the first child is added. */
	_attach() {}
	/** Called when the last child is removed. */
	_detach() {}
	/** Tell our children about our new value */
	_onChange(value, idle = false) {
		(0, _react_spring_shared.callFluidObservers)(this, {
			type: "change",
			parent: this,
			value,
			idle
		});
	}
	/** Tell our children about our new priority */
	_onPriorityChange(priority) {
		if (!this.idle) _react_spring_shared.frameLoop.sort(this);
		(0, _react_spring_shared.callFluidObservers)(this, {
			type: "priority",
			parent: this,
			priority
		});
	}
};

//#endregion
//#region src/SpringPhase.ts
/** The property symbol of the current animation phase. */
const $P = Symbol.for("SpringPhase");
const HAS_ANIMATED = 1;
const IS_ANIMATING = 2;
const IS_PAUSED = 4;
/** Returns true if the `target` has ever animated. */
const hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
/** Returns true if the `target` is animating (even if paused). */
const isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
/** Returns true if the `target` is paused (even if idle). */
const isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
/** Set the active bit of the `target` phase. */
const setActiveBit = (target, active) => active ? target[$P] |= 3 : target[$P] &= -3;
const setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= -5;

//#endregion
//#region src/SpringValue.ts
/**
* Only numbers, strings, and arrays of numbers/strings are supported.
* Non-animatable strings are also supported.
*/
var SpringValue = class extends FrameValue {
	constructor(arg1, arg2) {
		super();
		this.animation = new Animation();
		this.defaultProps = {};
		this._state = {
			paused: false,
			delayed: false,
			pauseQueue: /* @__PURE__ */ new Set(),
			resumeQueue: /* @__PURE__ */ new Set(),
			timeouts: /* @__PURE__ */ new Set()
		};
		this._pendingCalls = /* @__PURE__ */ new Set();
		this._lastCallId = 0;
		this._lastToId = 0;
		this._memoizedDuration = 0;
		if (!_react_spring_shared.is.und(arg1) || !_react_spring_shared.is.und(arg2)) {
			const props = _react_spring_shared.is.obj(arg1) ? { ...arg1 } : {
				...arg2,
				from: arg1
			};
			if (_react_spring_shared.is.und(props.default)) props.default = true;
			this.start(props);
		}
	}
	/** Equals true when not advancing on each frame. */
	get idle() {
		return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
	}
	get goal() {
		return (0, _react_spring_shared.getFluidValue)(this.animation.to);
	}
	get velocity() {
		const node = (0, _react_spring_animated.getAnimated)(this);
		return node instanceof _react_spring_animated.AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node) => node.lastVelocity || 0);
	}
	/**
	* When true, this value has been animated at least once.
	*/
	get hasAnimated() {
		return hasAnimated(this);
	}
	/**
	* When true, this value has an unfinished animation,
	* which is either active or paused.
	*/
	get isAnimating() {
		return isAnimating(this);
	}
	/**
	* When true, all current and future animations are paused.
	*/
	get isPaused() {
		return isPaused(this);
	}
	/**
	*
	*
	*/
	get isDelayed() {
		return this._state.delayed;
	}
	/** Advance the current animation by a number of milliseconds */
	advance(dt) {
		let idle = true;
		let changed = false;
		const anim = this.animation;
		let { toValues } = anim;
		const { config } = anim;
		const payload = (0, _react_spring_animated.getPayload)(anim.to);
		if (!payload && (0, _react_spring_shared.hasFluidValue)(anim.to)) toValues = (0, _react_spring_shared.toArray)((0, _react_spring_shared.getFluidValue)(anim.to));
		anim.values.forEach((node, i) => {
			if (node.done) return;
			const to = node.constructor == _react_spring_animated.AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
			let finished = anim.immediate;
			let position = to;
			if (!finished) {
				position = node.lastPosition;
				if (config.tension <= 0) {
					node.done = true;
					return;
				}
				let elapsed = node.elapsedTime += dt;
				const from = anim.fromValues[i];
				const v0 = node.v0 != null ? node.v0 : node.v0 = _react_spring_shared.is.arr(config.velocity) ? config.velocity[i] : config.velocity;
				let velocity;
				/** The smallest distance from a value before being treated like said value. */
				/**
				* TODO: make this value ~0.0001 by default in next breaking change
				* for more info see – https://github.com/pmndrs/react-spring/issues/1389
				*/
				const precision = config.precision || (from == to ? .005 : Math.min(1, Math.abs(to - from) * .001));
				if (!_react_spring_shared.is.und(config.duration)) {
					let p = 1;
					if (config.duration > 0) {
						/**
						* Here we check if the duration has changed in the config
						* and if so update the elapsed time to the percentage
						* of completition so there is no jank in the animation
						* https://github.com/pmndrs/react-spring/issues/1163
						*/
						if (this._memoizedDuration !== config.duration) {
							this._memoizedDuration = config.duration;
							if (node.durationProgress > 0) {
								node.elapsedTime = config.duration * node.durationProgress;
								elapsed = node.elapsedTime += dt;
							}
						}
						p = (config.progress || 0) + elapsed / this._memoizedDuration;
						p = p > 1 ? 1 : p < 0 ? 0 : p;
						node.durationProgress = p;
					}
					position = from + config.easing(p) * (to - from);
					velocity = (position - node.lastPosition) / dt;
					finished = p == 1;
				} else if (config.decay) {
					const decay = config.decay === true ? .998 : config.decay;
					const e = Math.exp(-(1 - decay) * elapsed);
					position = from + v0 / (1 - decay) * (1 - e);
					finished = Math.abs(node.lastPosition - position) <= precision;
					velocity = v0 * e;
				} else {
					velocity = node.lastVelocity == null ? v0 : node.lastVelocity;
					/** The velocity at which movement is essentially none */
					const restVelocity = config.restVelocity || precision / 10;
					const bounceFactor = config.clamp ? 0 : config.bounce;
					const canBounce = !_react_spring_shared.is.und(bounceFactor);
					/** When `true`, the value is increasing over time */
					const isGrowing = from == to ? node.v0 > 0 : from < to;
					/** When `true`, the velocity is considered moving */
					let isMoving;
					/** When `true`, the velocity is being deflected or clamped */
					let isBouncing = false;
					const step = 1;
					const numSteps = Math.ceil(dt / step);
					for (let n = 0; n < numSteps; ++n) {
						isMoving = Math.abs(velocity) > restVelocity;
						if (!isMoving) {
							finished = Math.abs(to - position) <= precision;
							if (finished) break;
						}
						if (canBounce) {
							isBouncing = position == to || position > to == isGrowing;
							if (isBouncing) {
								velocity = -velocity * bounceFactor;
								position = to;
							}
						}
						const acceleration = (-config.tension * 1e-6 * (position - to) + -config.friction * .001 * velocity) / config.mass;
						velocity = velocity + acceleration * step;
						position = position + velocity * step;
					}
				}
				node.lastVelocity = velocity;
				if (Number.isNaN(position)) {
					console.warn(`Got NaN while animating:`, this);
					finished = true;
				}
			}
			if (payload && !payload[i].done) finished = false;
			if (finished) node.done = true;
			else idle = false;
			if (node.setValue(position, config.round)) changed = true;
		});
		const node = (0, _react_spring_animated.getAnimated)(this);
		/**
		* Get the node's current value, this will be different
		* to anim.to when config.decay is true
		*/
		const currVal = node.getValue();
		if (idle) {
			const finalVal = (0, _react_spring_shared.getFluidValue)(anim.to);
			/**
			* check if they're not equal, or if they're
			* change and if there's no config.decay set
			*/
			if ((currVal !== finalVal || changed) && !config.decay) {
				node.setValue(finalVal);
				this._onChange(finalVal);
			} else if (changed && config.decay)
 /**
			* if it's changed but there is a config.decay,
			* just call _onChange with currrent value
			*/
			this._onChange(currVal);
			this._stop();
		} else if (changed)
 /**
		* if the spring has changed, but is not idle,
		* just call the _onChange handler
		*/
		this._onChange(currVal);
	}
	/** Set the current value, while stopping the current animation */
	set(value) {
		_react_spring_shared.raf.batchedUpdates(() => {
			this._stop();
			this._focus(value);
			this._set(value);
		});
		return this;
	}
	/**
	* Freeze the active animation in time, as well as any updates merged
	* before `resume` is called.
	*/
	pause() {
		this._update({ pause: true });
	}
	/** Resume the animation if paused. */
	resume() {
		this._update({ pause: false });
	}
	/** Skip to the end of the current animation. */
	finish() {
		if (isAnimating(this)) {
			const { to, config } = this.animation;
			_react_spring_shared.raf.batchedUpdates(() => {
				this._onStart();
				if (!config.decay) this._set(to, false);
				this._stop();
			});
		}
		return this;
	}
	/** Push props into the pending queue. */
	update(props) {
		(this.queue || (this.queue = [])).push(props);
		return this;
	}
	start(to, arg2) {
		let queue;
		if (!_react_spring_shared.is.und(to)) queue = [_react_spring_shared.is.obj(to) ? to : {
			...arg2,
			to
		}];
		else {
			queue = this.queue || [];
			this.queue = [];
		}
		return Promise.all(queue.map((props) => {
			return this._update(props);
		})).then((results) => getCombinedResult(this, results));
	}
	/**
	* Stop the current animation, and cancel any delayed updates.
	*
	* Pass `true` to call `onRest` with `cancelled: true`.
	*/
	stop(cancel) {
		const { to } = this.animation;
		if (!_react_spring_shared.is.und(to)) this._focus(this.get());
		stopAsync(this._state, cancel && this._lastCallId);
		_react_spring_shared.raf.batchedUpdates(() => this._stop(to, cancel));
		return this;
	}
	/** Restart the animation. */
	reset() {
		this._update({ reset: true });
	}
	/** @internal */
	eventObserved(event) {
		if (event.type == "change") this._start();
		else if (event.type == "priority") this.priority = event.priority + 1;
	}
	/**
	* Parse the `to` and `from` range from the given `props` object.
	*
	* This also ensures the initial value is available to animated components
	* during the render phase.
	*/
	_prepareNode(props) {
		const key = this.key || "";
		let { to, from } = props;
		to = _react_spring_shared.is.obj(to) ? to[key] : to;
		if (to == null || isAsyncTo(to)) to = void 0;
		from = _react_spring_shared.is.obj(from) ? from[key] : from;
		if (from == null) from = void 0;
		const range = {
			to,
			from
		};
		if (!hasAnimated(this)) {
			if (props.reverse) [to, from] = [from, to];
			from = (0, _react_spring_shared.getFluidValue)(from);
			if (!_react_spring_shared.is.und(from)) this._set(from);
			else if (!(0, _react_spring_animated.getAnimated)(this)) this._set(to);
		}
		return range;
	}
	/** Every update is processed by this method before merging. */
	_update({ ...props }, isLoop) {
		const { key, defaultProps } = this;
		if (props.default) Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
		mergeActiveFn(this, props, "onProps");
		sendEvent(this, "onProps", props, this);
		const range = this._prepareNode(props);
		if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
		const state = this._state;
		return scheduleProps(++this._lastCallId, {
			key,
			props,
			defaultProps,
			state,
			actions: {
				pause: () => {
					if (!isPaused(this)) {
						setPausedBit(this, true);
						(0, _react_spring_shared.flushCalls)(state.pauseQueue);
						sendEvent(this, "onPause", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
					}
				},
				resume: () => {
					if (isPaused(this)) {
						setPausedBit(this, false);
						if (isAnimating(this)) this._resume();
						(0, _react_spring_shared.flushCalls)(state.resumeQueue);
						sendEvent(this, "onResume", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
					}
				},
				start: this._merge.bind(this, range)
			}
		}).then((result) => {
			if (props.loop && result.finished && !(isLoop && result.noop)) {
				const nextProps = createLoopUpdate(props);
				if (nextProps) return this._update(nextProps, true);
			}
			return result;
		});
	}
	/** Merge props into the current animation */
	_merge(range, props, resolve) {
		if (props.cancel) {
			this.stop(true);
			return resolve(getCancelledResult(this));
		}
		/** The "to" prop is defined. */
		const hasToProp = !_react_spring_shared.is.und(range.to);
		/** The "from" prop is defined. */
		const hasFromProp = !_react_spring_shared.is.und(range.from);
		if (hasToProp || hasFromProp) if (props.callId > this._lastToId) this._lastToId = props.callId;
		else return resolve(getCancelledResult(this));
		const { key, defaultProps, animation: anim } = this;
		const { to: prevTo, from: prevFrom } = anim;
		let { to = prevTo, from = prevFrom } = range;
		if (hasFromProp && !hasToProp && (!props.default || _react_spring_shared.is.und(to))) to = from;
		if (props.reverse) [to, from] = [from, to];
		/** The "from" value is changing. */
		const hasFromChanged = !(0, _react_spring_shared.isEqual)(from, prevFrom);
		if (hasFromChanged) anim.from = from;
		from = (0, _react_spring_shared.getFluidValue)(from);
		/** The "to" value is changing. */
		const hasToChanged = !(0, _react_spring_shared.isEqual)(to, prevTo);
		if (hasToChanged) this._focus(to);
		/** The "to" prop is async. */
		const hasAsyncTo = isAsyncTo(props.to);
		const { config } = anim;
		const { decay, velocity } = config;
		if ((hasToProp || hasFromProp) && !config.decay) config.velocity = 0;
		if (props.config && !hasAsyncTo) mergeConfig(config, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
		let node = (0, _react_spring_animated.getAnimated)(this);
		if (!node || _react_spring_shared.is.und(to)) return resolve(getFinishedResult(this, true));
		/** When true, start at the "from" value. */
		const reset = _react_spring_shared.is.und(props.reset) ? hasFromProp && !props.default : !_react_spring_shared.is.und(from) && matchProp(props.reset, key);
		const value = reset ? from : this.get();
		const goal = computeGoal(to);
		const isAnimatable = _react_spring_shared.is.num(goal) || _react_spring_shared.is.arr(goal) || (0, _react_spring_shared.isAnimatedString)(goal);
		const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
		if (hasToChanged) {
			const nodeType = (0, _react_spring_animated.getAnimatedType)(to);
			if (nodeType !== node.constructor) if (immediate) node = this._set(goal);
			else throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
		}
		const goalType = node.constructor;
		let started = (0, _react_spring_shared.hasFluidValue)(to);
		let finished = false;
		if (!started) {
			const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
			if (hasToChanged || hasValueChanged) {
				finished = (0, _react_spring_shared.isEqual)(computeGoal(value), goal);
				started = !finished;
			}
			if (!(0, _react_spring_shared.isEqual)(anim.immediate, immediate) && !immediate || !(0, _react_spring_shared.isEqual)(config.decay, decay) || !(0, _react_spring_shared.isEqual)(config.velocity, velocity)) started = true;
		}
		if (finished && isAnimating(this)) {
			if (anim.changed && !reset) started = true;
			else if (!started) this._stop(prevTo);
		}
		if (!hasAsyncTo) {
			if (started || (0, _react_spring_shared.hasFluidValue)(prevTo)) {
				anim.values = node.getPayload();
				anim.toValues = (0, _react_spring_shared.hasFluidValue)(to) ? null : goalType == _react_spring_animated.AnimatedString ? [1] : (0, _react_spring_shared.toArray)(goal);
			}
			if (anim.immediate != immediate) {
				anim.immediate = immediate;
				if (!immediate && !reset) this._set(prevTo);
			}
			if (started) {
				const { onRest } = anim;
				(0, _react_spring_shared.each)(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
				const result = getFinishedResult(this, checkFinished(this, prevTo));
				(0, _react_spring_shared.flushCalls)(this._pendingCalls, result);
				this._pendingCalls.add(resolve);
				if (anim.changed) _react_spring_shared.raf.batchedUpdates(() => {
					anim.changed = !reset;
					onRest?.(result, this);
					if (reset) callProp(defaultProps.onRest, result);
					else anim.onStart?.(result, this);
				});
			}
		}
		if (reset) this._set(value);
		if (hasAsyncTo) resolve(runAsync(props.to, props, this._state, this));
		else if (started) this._start();
		else if (isAnimating(this) && !hasToChanged) this._pendingCalls.add(resolve);
		else resolve(getNoopResult(value));
	}
	/** Update the `animation.to` value, which might be a `FluidValue` */
	_focus(value) {
		const anim = this.animation;
		if (value !== anim.to) {
			if ((0, _react_spring_shared.getFluidObservers)(this)) this._detach();
			anim.to = value;
			if ((0, _react_spring_shared.getFluidObservers)(this)) this._attach();
		}
	}
	_attach() {
		let priority = 0;
		const { to } = this.animation;
		if ((0, _react_spring_shared.hasFluidValue)(to)) {
			(0, _react_spring_shared.addFluidObserver)(to, this);
			if (isFrameValue(to)) priority = to.priority + 1;
		}
		this.priority = priority;
	}
	_detach() {
		const { to } = this.animation;
		if ((0, _react_spring_shared.hasFluidValue)(to)) (0, _react_spring_shared.removeFluidObserver)(to, this);
	}
	/**
	* Update the current value from outside the frameloop,
	* and return the `Animated` node.
	*/
	_set(arg, idle = true) {
		const value = (0, _react_spring_shared.getFluidValue)(arg);
		if (!_react_spring_shared.is.und(value)) {
			const oldNode = (0, _react_spring_animated.getAnimated)(this);
			if (!oldNode || !(0, _react_spring_shared.isEqual)(value, oldNode.getValue())) {
				const nodeType = (0, _react_spring_animated.getAnimatedType)(value);
				if (!oldNode || oldNode.constructor != nodeType) (0, _react_spring_animated.setAnimated)(this, nodeType.create(value));
				else oldNode.setValue(value);
				if (oldNode) _react_spring_shared.raf.batchedUpdates(() => {
					this._onChange(value, idle);
				});
			}
		}
		return (0, _react_spring_animated.getAnimated)(this);
	}
	_onStart() {
		const anim = this.animation;
		if (!anim.changed) {
			anim.changed = true;
			sendEvent(this, "onStart", getFinishedResult(this, checkFinished(this, anim.to)), this);
		}
	}
	_onChange(value, idle) {
		if (!idle) {
			this._onStart();
			callProp(this.animation.onChange, value, this);
		}
		callProp(this.defaultProps.onChange, value, this);
		super._onChange(value, idle);
	}
	_start() {
		const anim = this.animation;
		(0, _react_spring_animated.getAnimated)(this).reset((0, _react_spring_shared.getFluidValue)(anim.to));
		if (!anim.immediate) anim.fromValues = anim.values.map((node) => node.lastPosition);
		if (!isAnimating(this)) {
			setActiveBit(this, true);
			if (!isPaused(this)) this._resume();
		}
	}
	_resume() {
		if (_react_spring_shared.Globals.skipAnimation) this.finish();
		else _react_spring_shared.frameLoop.start(this);
	}
	/**
	* Exit the frameloop and notify `onRest` listeners.
	*
	* Always wrap `_stop` calls with `batchedUpdates`.
	*/
	_stop(goal, cancel) {
		if (isAnimating(this)) {
			setActiveBit(this, false);
			const anim = this.animation;
			(0, _react_spring_shared.each)(anim.values, (node) => {
				node.done = true;
			});
			if (anim.toValues) anim.onChange = anim.onPause = anim.onResume = void 0;
			(0, _react_spring_shared.callFluidObservers)(this, {
				type: "idle",
				parent: this
			});
			const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal ?? anim.to));
			(0, _react_spring_shared.flushCalls)(this._pendingCalls, result);
			anim.changed = false;
			sendEvent(this, "onRest", result, this);
		}
	}
};
/** Returns true when the current value and goal value are equal. */
function checkFinished(target, to) {
	const goal = computeGoal(to);
	return (0, _react_spring_shared.isEqual)(computeGoal(target.get()), goal);
}
function createLoopUpdate(props, loop = props.loop, to = props.to) {
	const loopRet = callProp(loop);
	if (loopRet) {
		const overrides = loopRet !== true && inferTo(loopRet);
		const reverse = (overrides || props).reverse;
		const reset = !overrides || overrides.reset;
		return createUpdate({
			...props,
			loop,
			default: false,
			pause: void 0,
			to: !reverse || isAsyncTo(to) ? to : void 0,
			from: reset ? props.from : void 0,
			reset,
			...overrides
		});
	}
}
/**
* Return a new object based on the given `props`.
*
* - All non-reserved props are moved into the `to` prop object.
* - The `keys` prop is set to an array of affected keys,
*   or `null` if all keys are affected.
*/
function createUpdate(props) {
	const { to, from } = props = inferTo(props);
	const keys = /* @__PURE__ */ new Set();
	if (_react_spring_shared.is.obj(to)) findDefined(to, keys);
	if (_react_spring_shared.is.obj(from)) findDefined(from, keys);
	props.keys = keys.size ? Array.from(keys) : null;
	return props;
}
/**
* A modified version of `createUpdate` meant for declarative APIs.
*/
function declareUpdate(props) {
	const update = createUpdate(props);
	if (_react_spring_shared.is.und(update.default)) update.default = getDefaultProps(update);
	return update;
}
/** Find keys with defined values */
function findDefined(values, keys) {
	(0, _react_spring_shared.eachProp)(values, (value, key) => value != null && keys.add(key));
}
/** Event props with "active handler" support */
const ACTIVE_EVENTS = [
	"onStart",
	"onRest",
	"onChange",
	"onPause",
	"onResume"
];
function mergeActiveFn(target, props, type) {
	target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
/** Call the active handler first, then the default handler. */
function sendEvent(target, type, ...args) {
	target.animation[type]?.(...args);
	target.defaultProps[type]?.(...args);
}

//#endregion
//#region src/Controller.ts
/** Events batched by the `Controller` class */
const BATCHED_EVENTS = [
	"onStart",
	"onChange",
	"onRest"
];
let nextId = 1;
var Controller = class {
	constructor(props, flush) {
		this.id = nextId++;
		this.springs = {};
		this.queue = [];
		this._lastAsyncId = 0;
		this._lastLoopId = 0;
		this._active = /* @__PURE__ */ new Set();
		this._changed = /* @__PURE__ */ new Set();
		this._started = false;
		this._state = {
			paused: false,
			pauseQueue: /* @__PURE__ */ new Set(),
			resumeQueue: /* @__PURE__ */ new Set(),
			timeouts: /* @__PURE__ */ new Set()
		};
		this._events = {
			onStart: /* @__PURE__ */ new Map(),
			onChange: /* @__PURE__ */ new Map(),
			onRest: /* @__PURE__ */ new Map()
		};
		this._onFrame = this._onFrame.bind(this);
		if (flush) this._flush = flush;
		if (props) this.start({
			default: true,
			...props
		});
	}
	/**
	* Equals `true` when no spring values are in the frameloop, and
	* no async animation is currently active.
	*/
	get idle() {
		return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
			return spring.idle && !spring.isDelayed && !spring.isPaused;
		});
	}
	get item() {
		return this._item;
	}
	set item(item) {
		this._item = item;
	}
	/** Get the current values of our springs */
	get() {
		const values = {};
		this.each((spring, key) => values[key] = spring.get());
		return values;
	}
	/** Set the current values without animating. */
	set(values) {
		for (const key in values) {
			const value = values[key];
			if (!_react_spring_shared.is.und(value)) this.springs[key].set(value);
		}
	}
	/** Push an update onto the queue of each value. */
	update(props) {
		if (props) this.queue.push(createUpdate(props));
		return this;
	}
	/**
	* Start the queued animations for every spring, and resolve the returned
	* promise once all queued animations have finished or been cancelled.
	*
	* When you pass a queue (instead of nothing), that queue is used instead of
	* the queued animations added with the `update` method, which are left alone.
	*/
	start(props) {
		let { queue } = this;
		if (props) queue = (0, _react_spring_shared.toArray)(props).map(createUpdate);
		else this.queue = [];
		if (this._flush) return this._flush(this, queue);
		prepareKeys(this, queue);
		return flushUpdateQueue(this, queue);
	}
	/** @internal */
	stop(arg, keys) {
		if (arg !== !!arg) keys = arg;
		if (keys) {
			const springs = this.springs;
			(0, _react_spring_shared.each)((0, _react_spring_shared.toArray)(keys), (key) => springs[key].stop(!!arg));
		} else {
			stopAsync(this._state, this._lastAsyncId);
			this.each((spring) => spring.stop(!!arg));
		}
		return this;
	}
	/** Freeze the active animation in time */
	pause(keys) {
		if (_react_spring_shared.is.und(keys)) this.start({ pause: true });
		else {
			const springs = this.springs;
			(0, _react_spring_shared.each)((0, _react_spring_shared.toArray)(keys), (key) => springs[key].pause());
		}
		return this;
	}
	/** Resume the animation if paused. */
	resume(keys) {
		if (_react_spring_shared.is.und(keys)) this.start({ pause: false });
		else {
			const springs = this.springs;
			(0, _react_spring_shared.each)((0, _react_spring_shared.toArray)(keys), (key) => springs[key].resume());
		}
		return this;
	}
	/** Call a function once per spring value */
	each(iterator) {
		(0, _react_spring_shared.eachProp)(this.springs, iterator);
	}
	/**
	* Subscribe to loop iteration restarts on this controller. Returns an
	* unsubscribe function. Listeners fire synchronously inside `flushUpdate`
	* just before the next iteration is dispatched.
	* @internal
	*/
	onLoopReset(fn) {
		const set = this._onLoopReset ?? (this._onLoopReset = /* @__PURE__ */ new Set());
		set.add(fn);
		return () => {
			set.delete(fn);
		};
	}
	/** @internal Called at the end of every animation frame */
	_onFrame() {
		const { onStart, onChange, onRest } = this._events;
		const active = this._active.size > 0;
		const changed = this._changed.size > 0;
		if (active && !this._started || changed && !this._started) {
			this._started = true;
			(0, _react_spring_shared.flush)(onStart, ([onStart, result]) => {
				result.value = this.get();
				onStart(result, this, this._item);
			});
		}
		const idle = !active && this._started;
		const values = changed || idle && onRest.size ? this.get() : null;
		if (changed && onChange.size) (0, _react_spring_shared.flush)(onChange, ([onChange, result]) => {
			result.value = values;
			onChange(result, this, this._item);
		});
		if (idle) {
			this._started = false;
			(0, _react_spring_shared.flush)(onRest, ([onRest, result]) => {
				result.value = values;
				onRest(result, this, this._item);
			});
		}
	}
	/** @internal */
	eventObserved(event) {
		if (event.type == "change") {
			this._changed.add(event.parent);
			if (!event.idle) this._active.add(event.parent);
		} else if (event.type == "idle") this._active.delete(event.parent);
		else return;
		_react_spring_shared.raf.onFrame(this._onFrame);
	}
};
/**
* Warning: Props might be mutated.
*/
function flushUpdateQueue(ctrl, queue) {
	return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then((results) => getCombinedResult(ctrl, results));
}
/**
* Warning: Props might be mutated.
*
* Process a single set of props using the given controller.
*
* The returned promise resolves to `true` once the update is
* applied and any animations it starts are finished without being
* stopped or cancelled.
*/
async function flushUpdate(ctrl, props, isLoop) {
	const { keys, to, from, loop, onRest, onResolve } = props;
	const defaults = _react_spring_shared.is.obj(props.default) && props.default;
	if (loop) props.loop = false;
	const propsAny = props;
	const loopId = !isLoop && !propsAny.parentId && "loop" in props ? ++ctrl["_lastLoopId"] : isLoop ? propsAny.loopId : ctrl["_lastLoopId"];
	if (to === false) props.to = null;
	if (from === false) props.from = null;
	const asyncTo = _react_spring_shared.is.arr(to) || _react_spring_shared.is.fun(to) ? to : void 0;
	if (asyncTo) {
		props.to = void 0;
		props.onRest = void 0;
		if (defaults) defaults.onRest = void 0;
	} else (0, _react_spring_shared.each)(BATCHED_EVENTS, (key) => {
		const handler = props[key];
		if (_react_spring_shared.is.fun(handler)) {
			const queue = ctrl["_events"][key];
			props[key] = (({ finished, cancelled }) => {
				const result = queue.get(handler);
				if (result) {
					if (!finished) result.finished = false;
					if (cancelled) result.cancelled = true;
				} else queue.set(handler, {
					value: null,
					finished: finished || false,
					cancelled: cancelled || false
				});
			});
			if (defaults) defaults[key] = props[key];
		}
	});
	const state = ctrl["_state"];
	if (props.pause === !state.paused) {
		state.paused = props.pause;
		(0, _react_spring_shared.flushCalls)(props.pause ? state.pauseQueue : state.resumeQueue);
	} else if (state.paused) props.pause = true;
	const promises = (keys || Object.keys(ctrl.springs)).map((key) => ctrl.springs[key].start(props));
	const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
	if (asyncTo || cancel && state.asyncId) promises.push(scheduleProps(++ctrl["_lastAsyncId"], {
		props,
		state,
		actions: {
			pause: _react_spring_shared.noop,
			resume: _react_spring_shared.noop,
			start(props, resolve) {
				if (cancel) {
					stopAsync(state, ctrl["_lastAsyncId"]);
					resolve(getCancelledResult(ctrl));
				} else {
					props.onRest = onRest;
					resolve(runAsync(asyncTo, props, state, ctrl));
				}
			}
		}
	}));
	if (state.paused) await new Promise((resume) => {
		state.resumeQueue.add(resume);
	});
	const result = getCombinedResult(ctrl, await Promise.all(promises));
	if (loop && result.finished && !(isLoop && result.noop) && loopId === ctrl["_lastLoopId"]) {
		const nextProps = createLoopUpdate(props, loop, to);
		if (nextProps) {
			nextProps.loopId = loopId;
			ctrl["_onLoopReset"]?.forEach((fn) => fn());
			prepareKeys(ctrl, [nextProps]);
			return flushUpdate(ctrl, nextProps, true);
		}
	}
	if (onResolve) _react_spring_shared.raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
	return result;
}
/**
* From an array of updates, get the map of `SpringValue` objects
* by their keys. Springs are created when any update wants to
* animate a new key.
*
* Springs created by `getSprings` are neither cached nor observed
* until they're given to `setSprings`.
*/
function getSprings(ctrl, props) {
	const springs = { ...ctrl.springs };
	if (props) (0, _react_spring_shared.each)((0, _react_spring_shared.toArray)(props), (props) => {
		if (_react_spring_shared.is.und(props.keys)) props = createUpdate(props);
		if (!_react_spring_shared.is.obj(props.to)) props = {
			...props,
			to: void 0
		};
		prepareSprings(springs, props, (key) => {
			return createSpring(key);
		});
	});
	setSprings(ctrl, springs);
	return springs;
}
/**
* Tell a controller to manage the given `SpringValue` objects
* whose key is not already in use.
*/
function setSprings(ctrl, springs) {
	(0, _react_spring_shared.eachProp)(springs, (spring, key) => {
		if (!ctrl.springs[key]) {
			ctrl.springs[key] = spring;
			(0, _react_spring_shared.addFluidObserver)(spring, ctrl);
		}
	});
}
function createSpring(key, observer) {
	const spring = new SpringValue();
	spring.key = key;
	if (observer) (0, _react_spring_shared.addFluidObserver)(spring, observer);
	return spring;
}
/**
* Ensure spring objects exist for each defined key.
*
* Using the `props`, the `Animated` node of each `SpringValue` may
* be created or updated.
*/
function prepareSprings(springs, props, create) {
	if (props.keys) (0, _react_spring_shared.each)(props.keys, (key) => {
		(springs[key] || (springs[key] = create(key)))["_prepareNode"](props);
	});
}
/**
* Ensure spring objects exist for each defined key, and attach the
* `ctrl` to them for observation.
*
* The queue is expected to contain `createUpdate` results.
*/
function prepareKeys(ctrl, queue) {
	(0, _react_spring_shared.each)(queue, (props) => {
		prepareSprings(ctrl.springs, props, (key) => {
			return createSpring(key, ctrl);
		});
	});
}

//#endregion
//#region src/SpringContext.tsx
const SpringContext = react.createContext({
	pause: false,
	immediate: false
});

//#endregion
//#region src/SpringRef.ts
const SpringRef = () => {
	const current = [];
	const SpringRef = function(props) {
		(0, _react_spring_shared.deprecateDirectCall)();
		const results = [];
		(0, _react_spring_shared.each)(current, (ctrl, i) => {
			if (_react_spring_shared.is.und(props)) results.push(ctrl.start());
			else {
				const update = _getProps(props, ctrl, i);
				if (update) results.push(ctrl.start(update));
			}
		});
		return results;
	};
	SpringRef.current = current;
	/** Add a controller to this ref */
	SpringRef.add = function(ctrl) {
		if (!current.includes(ctrl)) current.push(ctrl);
	};
	/** Remove a controller from this ref */
	SpringRef.delete = function(ctrl) {
		const i = current.indexOf(ctrl);
		if (~i) current.splice(i, 1);
	};
	/** Pause all animations. */
	SpringRef.pause = function() {
		(0, _react_spring_shared.each)(current, (ctrl) => ctrl.pause(...arguments));
		return this;
	};
	/** Resume all animations. */
	SpringRef.resume = function() {
		(0, _react_spring_shared.each)(current, (ctrl) => ctrl.resume(...arguments));
		return this;
	};
	/** Update the state of each controller without animating. */
	SpringRef.set = function(values) {
		(0, _react_spring_shared.each)(current, (ctrl, i) => {
			const update = _react_spring_shared.is.fun(values) ? values(i, ctrl) : values;
			if (update) ctrl.set(update);
		});
	};
	SpringRef.start = function(props) {
		const results = [];
		(0, _react_spring_shared.each)(current, (ctrl, i) => {
			if (_react_spring_shared.is.und(props)) results.push(ctrl.start());
			else {
				const update = this._getProps(props, ctrl, i);
				if (update) results.push(ctrl.start(update));
			}
		});
		return results;
	};
	/** Stop all animations. */
	SpringRef.stop = function() {
		(0, _react_spring_shared.each)(current, (ctrl) => ctrl.stop(...arguments));
		return this;
	};
	SpringRef.update = function(props) {
		(0, _react_spring_shared.each)(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
		return this;
	};
	/** Overridden by `useTrail` to manipulate props */
	const _getProps = function(arg, ctrl, index) {
		return _react_spring_shared.is.fun(arg) ? arg(index, ctrl) : arg;
	};
	SpringRef._getProps = _getProps;
	return SpringRef;
};

//#endregion
//#region src/hooks/useSprings.ts
/** @internal */
function useSprings(length, props, deps) {
	const propsFn = _react_spring_shared.is.fun(props) && props;
	if (propsFn && !deps) deps = [];
	const ref = (0, react.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
	const layoutId = (0, react.useRef)(0);
	const forceUpdate = (0, _react_spring_shared.useForceUpdate)();
	const state = (0, react.useMemo)(() => ({
		ctrls: [],
		queue: [],
		flush(ctrl, updates) {
			const springs = getSprings(ctrl, updates);
			return layoutId.current > 0 && !state.queue.length && !Object.keys(springs).some((key) => !ctrl.springs[key]) ? flushUpdateQueue(ctrl, updates) : new Promise((resolve) => {
				setSprings(ctrl, springs);
				state.queue.push(() => {
					resolve(flushUpdateQueue(ctrl, updates));
				});
				forceUpdate();
			});
		}
	}), []);
	const ctrls = (0, react.useRef)([...state.ctrls]);
	const updates = (0, react.useRef)([]);
	const strictModeRestartSnapshot = (0, react.useRef)([]);
	strictModeRestartSnapshot.current = [];
	const prevLength = (0, _react_spring_shared.usePrev)(length) || 0;
	(0, react.useMemo)(() => {
		(0, _react_spring_shared.each)(ctrls.current.slice(length, prevLength), (ctrl) => {
			detachRefs(ctrl, ref);
			ctrl.stop(true);
		});
		ctrls.current.length = length;
		declareUpdates(prevLength, length);
	}, [length]);
	(0, react.useMemo)(() => {
		declareUpdates(0, Math.min(prevLength, length));
	}, deps);
	/** Fill the `updates` array with declarative updates for the given index range. */
	function declareUpdates(startIndex, endIndex) {
		for (let i = startIndex; i < endIndex; i++) {
			const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
			const update = propsFn ? propsFn(i, ctrl) : props[i];
			if (update) updates.current[i] = declareUpdate(update);
		}
	}
	const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates.current[i]));
	const context = (0, react.useContext)(SpringContext);
	const hasContext = context !== (0, _react_spring_shared.usePrev)(context) && hasProps(context);
	(0, _react_spring_shared.useIsomorphicLayoutEffect)(() => {
		layoutId.current++;
		state.ctrls = ctrls.current;
		const { queue } = state;
		if (queue.length) {
			state.queue = [];
			(0, _react_spring_shared.each)(queue, (cb) => cb());
		}
		const activeUpdates = updates.current.length > 0 ? updates.current : strictModeRestartSnapshot.current;
		(0, _react_spring_shared.each)(ctrls.current, (ctrl, i) => {
			ref?.add(ctrl);
			if (hasContext) ctrl.start({ default: context });
			const update = activeUpdates[i];
			if (update) {
				replaceRef(ctrl, update.ref);
				if (ctrl.ref) ctrl.queue.push({
					...update,
					default: _react_spring_shared.is.obj(update.default) ? { ...update.default } : update.default
				});
				else ctrl.start(update);
			}
		});
		if (updates.current.length > 0) strictModeRestartSnapshot.current = updates.current;
		updates.current = [];
	});
	(0, _react_spring_shared.useOnce)(() => () => {
		(0, _react_spring_shared.each)(state.ctrls, (ctrl) => ctrl.stop(true));
	});
	const values = springs.map((x) => ({ ...x }));
	return ref ? [values, ref] : values;
}

//#endregion
//#region src/hooks/useSpring.ts
/** @internal */
function useSpring(props, deps) {
	const isFn = _react_spring_shared.is.fun(props);
	const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
	return isFn || arguments.length == 2 ? [values, ref] : values;
}

//#endregion
//#region src/hooks/useSpringRef.ts
const initSpringRef = () => SpringRef();
const useSpringRef = () => (0, react.useState)(initSpringRef)[0];

//#endregion
//#region src/hooks/useSpringValue.ts
/**
* Creates a constant single `SpringValue` that can be interacted
* with imperatively. This is an advanced API and does not react
* to updates from the parent component e.g. passing a new initial value
*
*
* ```jsx
* export const MyComponent = () => {
*   const opacity = useSpringValue(1)
*
*   return <animated.div style={{ opacity }} />
* }
* ```
*
* @param initial – The initial value of the `SpringValue`.
* @param props – Typically the same props as `useSpring` e.g. `config`, `loop` etc.
*
* @public
*/
const useSpringValue = (initial, props) => {
	const springValue = (0, _react_spring_shared.useConstant)(() => new SpringValue(initial, props));
	(0, _react_spring_shared.useOnce)(() => () => {
		springValue.stop();
	});
	return springValue;
};

//#endregion
//#region src/hooks/useTrail.ts
function useTrail(length, propsArg, deps) {
	const propsFn = _react_spring_shared.is.fun(propsArg) && propsArg;
	if (propsFn && !deps) deps = [];
	let reverse;
	let passedRef = void 0;
	if (!propsFn) {
		reverse = propsArg.reverse;
		passedRef = propsArg.ref;
	} else reverse = true;
	const result = useSprings(length, (i, ctrl) => {
		const props = propsFn ? propsFn(i, ctrl) : propsArg;
		if (propsFn) {
			passedRef = props.ref;
			reverse = reverse && props.reverse;
		}
		return props;
	}, deps || [{}]);
	(0, _react_spring_shared.useIsomorphicLayoutEffect)(() => {
		const ctrls = result[1].current;
		const head = ctrls[reverse ? ctrls.length - 1 : 0];
		const unsubscribers = [];
		/**
		* Run through the ref passed by the `useSprings` hook.
		*/
		(0, _react_spring_shared.each)(ctrls, (ctrl, i) => {
			const parent = ctrls[i + (reverse ? 1 : -1)];
			/**
			* If there's a passed ref then we replace the ctrl ref with it
			*/
			replaceRef(ctrl, passedRef);
			/**
			* And if there's a ctrl ref then we update instead of start
			* which means nothing is fired until the start method
			* of said passedRef is called.
			*/
			if (ctrl.ref) {
				if (parent) ctrl.update({ to: parent.springs });
			} else if (parent) ctrl.start({ to: parent.springs });
			else ctrl.start();
			if (ctrl !== head) unsubscribers.push(head.onLoopReset(() => {
				ctrl.start({ reset: true });
			}));
		});
		return () => {
			(0, _react_spring_shared.each)(unsubscribers, (unsubscribe) => unsubscribe());
		};
	}, deps);
	if (propsFn || arguments.length == 3) {
		const ref = passedRef ?? result[1];
		ref["_getProps"] = (propsArg, ctrl, i) => {
			const props = _react_spring_shared.is.fun(propsArg) ? propsArg(i, ctrl) : propsArg;
			if (props) {
				const parent = ref.current[i + (props.reverse ? 1 : -1)];
				if (parent) props.to = parent.springs;
				return props;
			}
		};
		return result;
	}
	return result[0];
}

//#endregion
//#region src/hooks/useTransition.tsx
function useTransition(data, props, deps) {
	const propsFn = _react_spring_shared.is.fun(props) && props;
	const { reset, sort, trail = 0, reverse = false, expires = true, exitBeforeEnter = false, onDestroyed, ref: propsRef, config: propsConfig } = propsFn ? propsFn() : props;
	const ref = (0, react.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
	const items = (0, _react_spring_shared.toArray)(data);
	const transitions = [];
	const usedTransitions = (0, react.useRef)(null);
	const prevTransitions = reset ? null : usedTransitions.current;
	(0, _react_spring_shared.useIsomorphicLayoutEffect)(() => {
		usedTransitions.current = transitions;
	});
	(0, _react_spring_shared.useOnce)(() => {
		/**
		* If transitions exist on mount of the component
		* then reattach their refs on-mount, this was required
		* for react18 strict mode to work properly.
		*
		* See https://github.com/pmndrs/react-spring/issues/1890
		*/
		(0, _react_spring_shared.each)(transitions, (t) => {
			ref?.add(t.ctrl);
			t.ctrl.ref = ref;
		});
		return () => {
			(0, _react_spring_shared.each)(usedTransitions.current, (t) => {
				if (t.expired) clearTimeout(t.expirationId);
				detachRefs(t.ctrl, ref);
				t.ctrl.stop(true);
			});
		};
	});
	const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
	const expired = reset && usedTransitions.current || [];
	(0, _react_spring_shared.useIsomorphicLayoutEffect)(() => (0, _react_spring_shared.each)(expired, ({ ctrl, item, key }) => {
		detachRefs(ctrl, ref);
		callProp(onDestroyed, item, key);
	}));
	const reused = [];
	if (prevTransitions) (0, _react_spring_shared.each)(prevTransitions, (t, i) => {
		if (t.expired) {
			clearTimeout(t.expirationId);
			expired.push(t);
		} else {
			i = reused[i] = keys.indexOf(t.key);
			if (~i) transitions[i] = t;
		}
	});
	(0, _react_spring_shared.each)(items, (item, i) => {
		if (!transitions[i]) {
			transitions[i] = {
				key: keys[i],
				item,
				phase: "mount",
				ctrl: new Controller()
			};
			transitions[i].ctrl.item = item;
		}
	});
	if (reused.length) {
		let i = -1;
		const { leave } = propsFn ? propsFn() : props;
		(0, _react_spring_shared.each)(reused, (keyIndex, prevIndex) => {
			const t = prevTransitions[prevIndex];
			if (~keyIndex) {
				i = transitions.indexOf(t);
				transitions[i] = {
					...t,
					item: items[keyIndex]
				};
			} else if (leave) transitions.splice(++i, 0, t);
		});
	}
	if (_react_spring_shared.is.fun(sort)) transitions.sort((a, b) => sort(a.item, b.item));
	let delay = -trail;
	const trailedPayloads = [];
	const forceUpdate = (0, _react_spring_shared.useForceUpdate)();
	const defaultProps = getDefaultProps(props);
	const changes = /* @__PURE__ */ new Map();
	const exitingTransitions = (0, react.useRef)(/* @__PURE__ */ new Map());
	const forceChange = (0, react.useRef)(false);
	(0, _react_spring_shared.each)(transitions, (t, i) => {
		const key = t.key;
		const prevPhase = t.phase;
		const p = propsFn ? propsFn() : props;
		let to;
		let phase;
		const propsDelay = callProp(p.delay || 0, key);
		if (prevPhase == "mount") {
			to = p.enter;
			phase = "enter";
		} else {
			const isLeave = keys.indexOf(key) < 0;
			if (prevPhase != "leave") if (isLeave) {
				to = p.leave;
				phase = "leave";
			} else if (to = p.update) phase = "update";
			else return;
			else if (!isLeave) {
				to = p.enter;
				phase = "enter";
			} else return;
		}
		to = callProp(to, t.item, i);
		to = _react_spring_shared.is.obj(to) ? inferTo(to) : { to };
		/**
		* This would allow us to give different delays for phases.
		* If we were to do this, we'd have to suffle the prop
		* spreading below to set delay last.
		* But if we were going to do that, we should consider letting
		* the prop trail also be part of a phase.
		*/
		if (!to.config) {
			const config = propsConfig || defaultProps.config;
			to.config = callProp(config, t.item, i, phase);
		}
		delay += trail;
		const payload = {
			...defaultProps,
			delay: propsDelay + delay,
			ref: propsRef,
			immediate: p.immediate,
			reset: false,
			...to
		};
		if (phase == "enter" && _react_spring_shared.is.und(payload.from)) {
			const p = propsFn ? propsFn() : props;
			payload.from = callProp(_react_spring_shared.is.und(p.initial) || prevTransitions ? p.from : p.initial, t.item, i);
		}
		const { onResolve } = payload;
		payload.onResolve = (result) => {
			callProp(onResolve, result);
			const transitions = usedTransitions.current;
			const t = transitions.find((t) => t.key === key);
			if (!t) return;
			if (result.cancelled && t.phase != "update")
 /**
			* @legacy Reset the phase of a cancelled enter/leave transition, so it can
			* retry the animation on the next render.
			*
			* Note: leaving this here made the transitioned item respawn.
			*/
			return;
			if (t.ctrl.idle) {
				const idle = transitions.every((t) => t.ctrl.idle);
				if (t.phase == "leave") {
					exitingTransitions.current.delete(t);
					const expiry = callProp(expires, t.item);
					if (expiry !== false) {
						const expiryMs = expiry === true ? 0 : expiry;
						t.expired = true;
						if (!idle && expiryMs > 0) {
							if (expiryMs <= 2147483647) t.expirationId = setTimeout(forceUpdate, expiryMs);
							return;
						}
					}
				}
				if (idle && transitions.some((t) => t.expired)) {
					if (exitBeforeEnter)
 /**
					* If we have exitBeforeEnter == true
					* we need to force the animation to start
					*/
					forceChange.current = true;
					forceUpdate();
				}
			}
		};
		const springs = getSprings(t.ctrl, payload);
		trailedPayloads.push({
			payload,
			propsDelay
		});
		/**
		* Make a separate map for the exiting changes and "regular" changes
		*/
		if (phase === "leave" && exitBeforeEnter) exitingTransitions.current.set(t, {
			phase,
			springs,
			payload
		});
		else changes.set(t, {
			phase,
			springs,
			payload
		});
	});
	if (reverse && trail) {
		const total = trailedPayloads.length;
		(0, _react_spring_shared.each)(trailedPayloads, ({ payload, propsDelay }, i) => {
			payload.delay = propsDelay + (total - 1 - i) * trail;
		});
	}
	const context = (0, react.useContext)(SpringContext);
	const hasContext = context !== (0, _react_spring_shared.usePrev)(context) && hasProps(context);
	(0, _react_spring_shared.useIsomorphicLayoutEffect)(() => {
		if (hasContext) (0, _react_spring_shared.each)(transitions, (t) => {
			t.ctrl.start({ default: context });
		});
	}, [context]);
	(0, _react_spring_shared.each)(changes, (_, t) => {
		/**
		* If we have children to exit because exitBeforeEnter is
		* set to true, we remove the transitions so they go to back
		* to their initial state.
		*/
		if (exitingTransitions.current.size) {
			const ind = transitions.findIndex((state) => state.key === t.key);
			transitions.splice(ind, 1);
		}
	});
	(0, _react_spring_shared.useIsomorphicLayoutEffect)(() => {
		(0, _react_spring_shared.each)(exitingTransitions.current.size ? exitingTransitions.current : changes, ({ phase, payload }, t) => {
			const { ctrl } = t;
			t.phase = phase;
			ref?.add(ctrl);
			if (hasContext && phase == "enter") ctrl.start({ default: context });
			if (payload) {
				replaceRef(ctrl, payload.ref);
				/**
				* When an injected ref exists, the update is postponed
				* until the ref has its `start` method called.
				* Unless we have exitBeforeEnter in which case will skip
				* to enter the new animation straight away as if they "overlapped"
				*/
				if ((ctrl.ref || ref) && !forceChange.current) ctrl.update(payload);
				else {
					ctrl.start(payload);
					if (forceChange.current) forceChange.current = false;
				}
			}
		});
	}, reset ? void 0 : deps);
	const renderTransitions = (render) => /* @__PURE__ */ react.createElement(react.Fragment, null, transitions.map((t, i) => {
		const change = changes.get(t) || exitingTransitions.current.get(t);
		const { springs } = change || t.ctrl;
		const state = change ? {
			...t,
			phase: change.phase
		} : t;
		const elem = render({ ...springs }, t.item, state, i);
		const key = _react_spring_shared.is.str(t.key) || _react_spring_shared.is.num(t.key) ? t.key : t.ctrl.id;
		const isLegacyReact = react.version < "19.0.0";
		const props = elem?.props ?? {};
		const elemRef = isLegacyReact ? elem?.ref : props?.ref;
		return elem && elem.type ? /* @__PURE__ */ react.createElement(elem.type, {
			...props,
			key,
			ref: elemRef
		}) : elem;
	}));
	return ref ? [renderTransitions, ref] : renderTransitions;
}
/** Local state for auto-generated item keys */
let nextKey = 1;
function getKeys(items, { key, keys = key }, prevTransitions) {
	if (keys === null) {
		const reused = /* @__PURE__ */ new Set();
		return items.map((item) => {
			const t = prevTransitions && prevTransitions.find((t) => t.item === item && t.phase !== "leave" && !reused.has(t));
			if (t) {
				reused.add(t);
				return t.key;
			}
			return nextKey++;
		});
	}
	return _react_spring_shared.is.und(keys) ? items : _react_spring_shared.is.fun(keys) ? items.map(keys) : (0, _react_spring_shared.toArray)(keys);
}

//#endregion
//#region src/hooks/useScroll.ts
/**
* A small utility abstraction around our signature useSpring hook. It's a great way to create
* a scroll-linked animation. With either the raw value of distance or a 0-1 progress value.
* You can either use the scroll values of the whole document, or just a specific element.
*
* 
```jsx
import { useScroll, animated } from '@react-spring/web'

function MyComponent() {
const { scrollYProgress } = useScroll()

return (
<animated.div style={{ opacity: scrollYProgress }}>
Hello World
</animated.div>
)
}
```
* 
* @param {UseScrollOptions} useScrollOptions options for the useScroll hook.
* @param {MutableRefObject<HTMLElement>} useScrollOptions.container the container to listen to scroll events on, defaults to the window.
*
* @returns {SpringValues<{scrollX: number; scrollY: number; scrollXProgress: number; scrollYProgress: number}>} SpringValues the collection of values returned from the inner hook
*/
const useScroll = ({ container, ...springOptions } = {}) => {
	const [scrollValues, api] = useSpring(() => ({
		scrollX: 0,
		scrollY: 0,
		scrollXProgress: 0,
		scrollYProgress: 0,
		...springOptions
	}), []);
	(0, _react_spring_shared.useIsomorphicLayoutEffect)(() => {
		const cleanupScroll = (0, _react_spring_shared.onScroll)(({ x, y }) => {
			api.start({
				scrollX: x.current,
				scrollXProgress: x.progress,
				scrollY: y.current,
				scrollYProgress: y.progress
			});
		}, { container: container?.current || void 0 });
		return () => {
			/**
			* Stop the springs on unmount.
			*/
			(0, _react_spring_shared.each)(Object.values(scrollValues), (value) => value.stop());
			cleanupScroll();
		};
	}, []);
	return scrollValues;
};

//#endregion
//#region src/hooks/useResize.ts
/**
* A small abstraction around the `useSpring` hook. It returns a `SpringValues` 
* object with the `width` and `height` of the element it's attached to & doesn't 
* necessarily have to be attached to the window, by passing a `container` you 
* can observe that element's size instead.
* 
```jsx
import { useResize, animated } from '@react-spring/web'

function MyComponent() {
const { width } = useResize()

return (
<animated.div style={{ width }}>
Hello World
</animated.div>
)
}
```
* 
* @param {UseResizeOptions} UseResizeOptions options for the useScroll hook.
* @param {MutableRefObject<HTMLElement>} UseResizeOptions.container the container to listen to scroll events on, defaults to the window.
*
* @returns {SpringValues<{width: number; height: number;}>} SpringValues the collection of values returned from the inner hook
*/
const useResize = ({ container, ...springOptions }) => {
	const [sizeValues, api] = useSpring(() => ({
		width: 0,
		height: 0,
		...springOptions
	}), []);
	(0, _react_spring_shared.useIsomorphicLayoutEffect)(() => {
		const cleanupScroll = (0, _react_spring_shared.onResize)(({ width, height }) => {
			api.start({
				width,
				height,
				immediate: sizeValues.width.get() === 0 || sizeValues.height.get() === 0 || springOptions.immediate === true
			});
		}, { container: container?.current || void 0 });
		return () => {
			/**
			* Stop the springs on unmount.
			*/
			(0, _react_spring_shared.each)(Object.values(sizeValues), (value) => value.stop());
			cleanupScroll();
		};
	}, []);
	return sizeValues;
};

//#endregion
//#region src/hooks/useInView.ts
const defaultThresholdOptions = {
	any: 0,
	all: 1
};
function useInView(props, args) {
	const [isInView, setIsInView] = (0, react.useState)(false);
	const ref = (0, react.useRef)(void 0);
	const propsFn = _react_spring_shared.is.fun(props) && props;
	const { to = {}, from = {}, ...restSpringProps } = propsFn ? propsFn() : {};
	const intersectionArguments = propsFn ? args : props;
	const [springs, api] = useSpring(() => ({
		from,
		...restSpringProps
	}), []);
	(0, _react_spring_shared.useIsomorphicLayoutEffect)(() => {
		const element = ref.current;
		const { root, once, amount = "any", ...restArgs } = intersectionArguments ?? {};
		if (!element || once && isInView || typeof IntersectionObserver === "undefined") return;
		const activeIntersections = /* @__PURE__ */ new WeakMap();
		const onEnter = () => {
			if (to) api.start(to);
			setIsInView(true);
			const cleanup = () => {
				if (from) api.start(from);
				setIsInView(false);
			};
			return once ? void 0 : cleanup;
		};
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				const onLeave = activeIntersections.get(entry.target);
				if (entry.isIntersecting === Boolean(onLeave)) return;
				if (entry.isIntersecting) {
					const newOnLeave = onEnter();
					if (_react_spring_shared.is.fun(newOnLeave)) activeIntersections.set(entry.target, newOnLeave);
					else observer.unobserve(entry.target);
				} else if (onLeave) {
					onLeave();
					activeIntersections.delete(entry.target);
				}
			});
		};
		const observer = new IntersectionObserver(handleIntersection, {
			root: root && root.current || void 0,
			threshold: typeof amount === "number" || Array.isArray(amount) ? amount : defaultThresholdOptions[amount],
			...restArgs
		});
		observer.observe(element);
		return () => observer.unobserve(element);
	}, [intersectionArguments]);
	if (propsFn) return [ref, springs];
	return [ref, isInView];
}

//#endregion
//#region src/components/Spring.tsx
function Spring({ children, ...props }) {
	return children(useSpring(props));
}

//#endregion
//#region src/components/Trail.tsx
function Trail({ items, children, ...props }) {
	const trails = useTrail(items.length, props);
	return items.map((item, index) => {
		const result = children(item, index);
		return _react_spring_shared.is.fun(result) ? result(trails[index]) : result;
	});
}

//#endregion
//#region src/components/Transition.tsx
function Transition({ items, children, ...props }) {
	return useTransition(items, props)(children);
}

//#endregion
//#region src/Interpolation.ts
/**
* An `Interpolation` is a memoized value that's computed whenever one of its
* `FluidValue` dependencies has its value changed.
*
* Other `FrameValue` objects can depend on this. For example, passing an
* `Interpolation` as the `to` prop of a `useSpring` call will trigger an
* animation toward the memoized value.
*/
var Interpolation = class extends FrameValue {
	constructor(source, args) {
		super();
		this.source = source;
		this.idle = true;
		this._active = /* @__PURE__ */ new Set();
		this.calc = (0, _react_spring_shared.createInterpolator)(...args);
		const value = this._get();
		const nodeType = (0, _react_spring_animated.getAnimatedType)(value);
		(0, _react_spring_animated.setAnimated)(this, nodeType.create(value));
	}
	advance(_dt) {
		const value = this._get();
		if (!(0, _react_spring_shared.isEqual)(value, this.get())) {
			(0, _react_spring_animated.getAnimated)(this).setValue(value);
			this._onChange(value, this.idle);
		}
		if (!this.idle && checkIdle(this._active)) becomeIdle(this);
	}
	_get() {
		const inputs = _react_spring_shared.is.arr(this.source) ? this.source.map(_react_spring_shared.getFluidValue) : (0, _react_spring_shared.toArray)((0, _react_spring_shared.getFluidValue)(this.source));
		return this.calc(...inputs);
	}
	_start() {
		if (this.idle && !checkIdle(this._active)) {
			this.idle = false;
			(0, _react_spring_shared.each)((0, _react_spring_animated.getPayload)(this), (node) => {
				node.done = false;
			});
			if (_react_spring_shared.Globals.skipAnimation) {
				_react_spring_shared.raf.batchedUpdates(() => this.advance());
				becomeIdle(this);
			} else _react_spring_shared.frameLoop.start(this);
		}
	}
	_attach() {
		let priority = 1;
		(0, _react_spring_shared.each)((0, _react_spring_shared.toArray)(this.source), (source) => {
			if ((0, _react_spring_shared.hasFluidValue)(source)) (0, _react_spring_shared.addFluidObserver)(source, this);
			if (isFrameValue(source)) {
				if (!source.idle) this._active.add(source);
				priority = Math.max(priority, source.priority + 1);
			}
		});
		this.priority = priority;
		this._start();
	}
	_detach() {
		(0, _react_spring_shared.each)((0, _react_spring_shared.toArray)(this.source), (source) => {
			if ((0, _react_spring_shared.hasFluidValue)(source)) (0, _react_spring_shared.removeFluidObserver)(source, this);
		});
		this._active.clear();
		becomeIdle(this);
	}
	/** @internal */
	eventObserved(event) {
		if (event.type == "change") if (event.idle) this.advance();
		else {
			this._active.add(event.parent);
			this._start();
		}
		else if (event.type == "idle") this._active.delete(event.parent);
		else if (event.type == "priority") this.priority = (0, _react_spring_shared.toArray)(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
	}
};
/** Returns true for an idle source. */
function isIdle(source) {
	return source.idle !== false;
}
/** Return true if all values in the given set are idle or paused. */
function checkIdle(active) {
	return !active.size || Array.from(active).every(isIdle);
}
/** Become idle if not already idle. */
function becomeIdle(self) {
	if (!self.idle) {
		self.idle = true;
		(0, _react_spring_shared.each)((0, _react_spring_animated.getPayload)(self), (node) => {
			node.done = true;
		});
		(0, _react_spring_shared.callFluidObservers)(self, {
			type: "idle",
			parent: self
		});
	}
}

//#endregion
//#region src/interpolate.ts
/** Map the value of one or more dependencies */
const to = (source, ...args) => new Interpolation(source, args);
/** @deprecated Use the `to` export instead */
const interpolate = (source, ...args) => ((0, _react_spring_shared.deprecateInterpolate)(), new Interpolation(source, args));

//#endregion
//#region src/globals.ts
_react_spring_shared.Globals.assign({
	createStringInterpolator: _react_spring_shared.createStringInterpolator,
	to: (source, args) => new Interpolation(source, args)
});
/** Advance all animations by the given time */
const update = _react_spring_shared.frameLoop.advance;

//#endregion
exports.BailSignal = BailSignal;
exports.Controller = Controller;
exports.FrameValue = FrameValue;
exports.Globals = _react_spring_shared.Globals;
exports.Interpolation = Interpolation;
exports.Spring = Spring;
exports.SpringContext = SpringContext;
exports.SpringRef = SpringRef;
exports.SpringValue = SpringValue;
exports.Trail = Trail;
exports.Transition = Transition;
exports.config = config;
Object.defineProperty(exports, 'createInterpolator', {
  enumerable: true,
  get: function () {
    return _react_spring_shared.createInterpolator;
  }
});
Object.defineProperty(exports, 'easings', {
  enumerable: true,
  get: function () {
    return _react_spring_shared.easings;
  }
});
exports.inferTo = inferTo;
exports.interpolate = interpolate;
exports.to = to;
exports.update = update;
exports.useChain = useChain;
exports.useInView = useInView;
Object.defineProperty(exports, 'useIsomorphicLayoutEffect', {
  enumerable: true,
  get: function () {
    return _react_spring_shared.useIsomorphicLayoutEffect;
  }
});
Object.defineProperty(exports, 'useReducedMotion', {
  enumerable: true,
  get: function () {
    return _react_spring_shared.useReducedMotion;
  }
});
exports.useResize = useResize;
exports.useScroll = useScroll;
exports.useSpring = useSpring;
exports.useSpringRef = useSpringRef;
exports.useSpringValue = useSpringValue;
exports.useSprings = useSprings;
exports.useTrail = useTrail;
exports.useTransition = useTransition;
var _react_spring_types = require("@react-spring/types");
Object.keys(_react_spring_types).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _react_spring_types[k]; }
  });
});
