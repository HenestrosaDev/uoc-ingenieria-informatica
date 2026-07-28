Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _react_spring_core = require("@react-spring/core");
let react_dom = require("react-dom");
let _react_spring_shared = require("@react-spring/shared");
let _react_spring_animated = require("@react-spring/animated");

//#region src/applyAnimatedValues.ts
const isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
	if (value == null || typeof value === "boolean" || value === "") return "";
	if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + "px";
	return ("" + value).trim();
}
const attributeCache = {};
function applyAnimatedValues(instance, props) {
	if (!instance.nodeType || !instance.setAttribute || !instance.removeAttribute) return false;
	const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
	const { className, style, children, scrollTop, scrollLeft, viewBox, ...attributes } = props;
	const values = Object.values(attributes);
	const names = Object.keys(attributes).map((name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, (n) => "-" + n.toLowerCase())));
	if (props.hasOwnProperty("children")) instance.textContent = children;
	for (const name in style) if (style.hasOwnProperty(name)) {
		const value = dangerousStyleValue(name, style[name]);
		if (isCustomPropRE.test(name)) instance.style.setProperty(name, value);
		else instance.style[name] = value;
	}
	names.forEach((name, i) => {
		const value = values[i];
		if (value !== void 0) instance.setAttribute(name, value);
		else instance.removeAttribute(name);
	});
	if (props.hasOwnProperty("className")) if (className !== void 0) instance.className = className;
	else instance.removeAttribute("class");
	if (scrollTop !== void 0) instance.scrollTop = scrollTop;
	if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft;
	if (props.hasOwnProperty("viewBox")) if (viewBox !== void 0) instance.setAttribute("viewBox", viewBox);
	else instance.removeAttribute("viewBox");
}
let isUnitlessNumber = {
	animationIterationCount: true,
	borderImageOutset: true,
	borderImageSlice: true,
	borderImageWidth: true,
	boxFlex: true,
	boxFlexGroup: true,
	boxOrdinalGroup: true,
	columnCount: true,
	columns: true,
	flex: true,
	flexGrow: true,
	flexPositive: true,
	flexShrink: true,
	flexNegative: true,
	flexOrder: true,
	gridRow: true,
	gridRowEnd: true,
	gridRowSpan: true,
	gridRowStart: true,
	gridColumn: true,
	gridColumnEnd: true,
	gridColumnSpan: true,
	gridColumnStart: true,
	fontWeight: true,
	lineClamp: true,
	lineHeight: true,
	opacity: true,
	order: true,
	orphans: true,
	tabSize: true,
	widows: true,
	zIndex: true,
	zoom: true,
	fillOpacity: true,
	floodOpacity: true,
	stopOpacity: true,
	strokeDasharray: true,
	strokeDashoffset: true,
	strokeMiterlimit: true,
	strokeOpacity: true,
	strokeWidth: true
};
const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);
const prefixes = [
	"Webkit",
	"Ms",
	"Moz",
	"O"
];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
	prefixes.forEach((prefix) => acc[prefixKey(prefix, prop)] = acc[prop]);
	return acc;
}, isUnitlessNumber);

//#endregion
//#region src/AnimatedStyle.ts
/** The transform-functions
* (https://developer.mozilla.org/fr/docs/Web/CSS/transform-function)
* that you can pass as keys to your animated component style and that will be
* animated. Perspective has been left out as it would conflict with the
* non-transform perspective style.
*/
const domTransforms = /^(matrix3d|matrix|translate3d|translate[XYZ]?|scale3d|scale[XYZ]?|rotate3d|rotate[XYZ]?|skew[XY]?)$/;
const pxTransforms = /^(translate)/;
const degTransforms = /^(rotate|skew)/;
/** Add a unit to the value when the value is unit-less (eg: a number) */
const addUnit = (value, unit) => _react_spring_shared.is.num(value) && value !== 0 ? value + unit : value;
/**
* Checks if the input value matches the identity value.
*
*     isValueIdentity(0, 0)              // => true
*     isValueIdentity('0px', 0)          // => true
*     isValueIdentity([0, '0px', 0], 0)  // => true
*/
const isValueIdentity = (value, id) => _react_spring_shared.is.arr(value) ? value.every((v) => isValueIdentity(v, id)) : _react_spring_shared.is.num(value) ? value === id : parseFloat(value) === id;
/**
* This AnimatedStyle will simplify animated components transforms by
* interpolating all transform function passed as keys in the style object
* including shortcuts such as x, y and z for translateX/Y/Z
*/
var AnimatedStyle = class extends _react_spring_animated.AnimatedObject {
	constructor({ x, y, z, ...style }) {
		/**
		* An array of arrays that contains the values (static or fluid)
		* used by each transform function.
		*/
		const inputs = [];
		/**
		* An array of functions that take a list of values (static or fluid)
		* and returns (1) a CSS transform string and (2) a boolean that's true
		* when the transform has no effect (eg: an identity transform).
		*/
		const transforms = [];
		if (x || y || z) {
			inputs.push([
				x || 0,
				y || 0,
				z || 0
			]);
			transforms.push((xyz) => [`translate3d(${xyz.map((v) => addUnit(v, "px")).join(",")})`, isValueIdentity(xyz, 0)]);
		}
		(0, _react_spring_shared.eachProp)(style, (value, key) => {
			if (key === "transform") {
				inputs.push([value || ""]);
				transforms.push((transform) => [transform, transform === ""]);
			} else if (domTransforms.test(key)) {
				delete style[key];
				if (_react_spring_shared.is.und(value)) return;
				const unit = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
				inputs.push((0, _react_spring_shared.toArray)(value));
				transforms.push(key === "rotate3d" ? ([x, y, z, deg]) => [`rotate3d(${x},${y},${z},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : (input) => [`${key}(${input.map((v) => addUnit(v, unit)).join(",")})`, isValueIdentity(input, key.startsWith("scale") ? 1 : 0)]);
			}
		});
		if (inputs.length) style.transform = new FluidTransform(inputs, transforms);
		super(style);
	}
};
/** @internal */
var FluidTransform = class extends _react_spring_shared.FluidValue {
	constructor(inputs, transforms) {
		super();
		this.inputs = inputs;
		this.transforms = transforms;
		this._value = null;
	}
	get() {
		return this._value || (this._value = this._get());
	}
	_get() {
		let transform = "";
		let identity = true;
		(0, _react_spring_shared.each)(this.inputs, (input, i) => {
			const arg1 = (0, _react_spring_shared.getFluidValue)(input[0]);
			const [t, id] = this.transforms[i](_react_spring_shared.is.arr(arg1) ? arg1 : input.map(_react_spring_shared.getFluidValue));
			transform += " " + t;
			identity = identity && id;
		});
		return identity ? "none" : transform;
	}
	observerAdded(count) {
		if (count == 1) (0, _react_spring_shared.each)(this.inputs, (input) => (0, _react_spring_shared.each)(input, (value) => (0, _react_spring_shared.hasFluidValue)(value) && (0, _react_spring_shared.addFluidObserver)(value, this)));
	}
	observerRemoved(count) {
		if (count == 0) (0, _react_spring_shared.each)(this.inputs, (input) => (0, _react_spring_shared.each)(input, (value) => (0, _react_spring_shared.hasFluidValue)(value) && (0, _react_spring_shared.removeFluidObserver)(value, this)));
	}
	eventObserved(event) {
		if (event.type == "change") this._value = null;
		(0, _react_spring_shared.callFluidObservers)(this, event);
	}
};

//#endregion
//#region src/primitives.ts
const primitives = [
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"bdi",
	"bdo",
	"big",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"keygen",
	"label",
	"legend",
	"li",
	"link",
	"main",
	"map",
	"mark",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"nav",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"small",
	"source",
	"span",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"title",
	"tr",
	"track",
	"u",
	"ul",
	"var",
	"video",
	"wbr",
	"circle",
	"clipPath",
	"defs",
	"ellipse",
	"foreignObject",
	"g",
	"image",
	"line",
	"linearGradient",
	"mask",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"stop",
	"svg",
	"text",
	"tspan"
];

//#endregion
//#region src/index.ts
_react_spring_core.Globals.assign({
	batchedUpdates: react_dom.unstable_batchedUpdates,
	createStringInterpolator: _react_spring_shared.createStringInterpolator,
	colors: _react_spring_shared.colors
});
const host = (0, _react_spring_animated.createHost)(primitives, {
	applyAnimatedValues,
	createAnimatedStyle: (style) => new AnimatedStyle(style),
	getComponentProps: ({ scrollTop, scrollLeft, ...props }) => props
});
const animated = host.animated;

//#endregion
exports.a = animated;
exports.animated = animated;
Object.keys(_react_spring_core).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _react_spring_core[k]; }
  });
});
