Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) {
		__defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	}
	if (!no_symbols) {
		__defProp(target, Symbol.toStringTag, { value: "Module" });
	}
	return target;
};

//#endregion
let _react_spring_rafz = require("@react-spring/rafz");
let react = require("react");

//#region src/helpers.ts
function noop() {}
const defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
	value,
	writable: true,
	configurable: true
});
const is = {
	arr: Array.isArray,
	obj: (a) => !!a && a.constructor.name === "Object",
	fun: ((a) => typeof a === "function"),
	str: (a) => typeof a === "string",
	num: (a) => typeof a === "number",
	und: (a) => a === void 0
};
/** Compare animatable values */
function isEqual(a, b) {
	if (is.arr(a)) {
		if (!is.arr(b) || a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
		return true;
	}
	return a === b;
}
/** Minifiable `.forEach` call */
const each = (obj, fn) => obj.forEach(fn);
/** Iterate the properties of an object */
function eachProp(obj, fn, ctx) {
	if (is.arr(obj)) {
		for (let i = 0; i < obj.length; i++) fn.call(ctx, obj[i], `${i}`);
		return;
	}
	for (const key in obj) if (obj.hasOwnProperty(key)) fn.call(ctx, obj[key], key);
}
const toArray = (a) => is.und(a) ? [] : is.arr(a) ? a : [a];
function flush(queue, iterator) {
	if (queue.size) {
		const items = Array.from(queue);
		queue.clear();
		each(items, iterator);
	}
}
/** Call every function in the queue with the same arguments. */
const flushCalls = (queue, ...args) => flush(queue, (fn) => fn(...args));
const isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

//#endregion
//#region src/globals.ts
var globals_exports = /* @__PURE__ */ __exportAll({
	assign: () => assign,
	colors: () => colors$1,
	createStringInterpolator: () => createStringInterpolator$1,
	skipAnimation: () => skipAnimation,
	to: () => to,
	willAdvance: () => willAdvance
});
let createStringInterpolator$1;
let to;
let colors$1 = null;
let skipAnimation = false;
let willAdvance = noop;
const assign = (globals) => {
	if (globals.to) to = globals.to;
	if (globals.now) _react_spring_rafz.raf.now = globals.now;
	if (globals.colors !== void 0) colors$1 = globals.colors;
	if (globals.skipAnimation != null) skipAnimation = globals.skipAnimation;
	if (globals.createStringInterpolator) createStringInterpolator$1 = globals.createStringInterpolator;
	if (globals.requestAnimationFrame) _react_spring_rafz.raf.use(globals.requestAnimationFrame);
	if (globals.batchedUpdates) _react_spring_rafz.raf.batchedUpdates = globals.batchedUpdates;
	if (globals.willAdvance) willAdvance = globals.willAdvance;
	if (globals.frameLoop) _react_spring_rafz.raf.frameLoop = globals.frameLoop;
};

//#endregion
//#region src/FrameLoop.ts
const startQueue = /* @__PURE__ */ new Set();
let currentFrame = [];
let prevFrame = [];
let priority = 0;
/**
* The frameloop executes its animations in order of lowest priority first.
* Animations are retained until idle.
*/
const frameLoop = {
	get idle() {
		return !startQueue.size && !currentFrame.length;
	},
	/** Advance the given animation on every frame until idle. */
	start(animation) {
		if (priority > animation.priority) {
			startQueue.add(animation);
			_react_spring_rafz.raf.onStart(flushStartQueue);
		} else {
			startSafely(animation);
			(0, _react_spring_rafz.raf)(advance);
		}
	},
	/** Advance all animations by the given time. */
	advance,
	/** Call this when an animation's priority changes. */
	sort(animation) {
		if (priority) _react_spring_rafz.raf.onFrame(() => frameLoop.sort(animation));
		else {
			const prevIndex = currentFrame.indexOf(animation);
			if (~prevIndex) {
				currentFrame.splice(prevIndex, 1);
				startUnsafely(animation);
			}
		}
	},
	/**
	* Clear all animations. For testing purposes.
	*
	* ☠️ Never call this from within the frameloop.
	*/
	clear() {
		currentFrame = [];
		startQueue.clear();
	}
};
function flushStartQueue() {
	startQueue.forEach(startSafely);
	startQueue.clear();
	(0, _react_spring_rafz.raf)(advance);
}
function startSafely(animation) {
	if (!currentFrame.includes(animation)) startUnsafely(animation);
}
function startUnsafely(animation) {
	currentFrame.splice(findIndex(currentFrame, (other) => other.priority > animation.priority), 0, animation);
}
function advance(dt) {
	const nextFrame = prevFrame;
	for (let i = 0; i < currentFrame.length; i++) {
		const animation = currentFrame[i];
		priority = animation.priority;
		if (!animation.idle) {
			willAdvance(animation);
			animation.advance(dt);
			if (!animation.idle) nextFrame.push(animation);
		}
	}
	priority = 0;
	prevFrame = currentFrame;
	prevFrame.length = 0;
	currentFrame = nextFrame;
	return currentFrame.length > 0;
}
/** Like `Array.prototype.findIndex` but returns `arr.length` instead of `-1` */
function findIndex(arr, test) {
	const index = arr.findIndex(test);
	return index < 0 ? arr.length : index;
}

//#endregion
//#region src/clamp.ts
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);

//#endregion
//#region src/colors.ts
const colors = {
	transparent: 0,
	aliceblue: 4042850303,
	antiquewhite: 4209760255,
	aqua: 16777215,
	aquamarine: 2147472639,
	azure: 4043309055,
	beige: 4126530815,
	bisque: 4293182719,
	black: 255,
	blanchedalmond: 4293643775,
	blue: 65535,
	blueviolet: 2318131967,
	brown: 2771004159,
	burlywood: 3736635391,
	burntsienna: 3934150143,
	cadetblue: 1604231423,
	chartreuse: 2147418367,
	chocolate: 3530104575,
	coral: 4286533887,
	cornflowerblue: 1687547391,
	cornsilk: 4294499583,
	crimson: 3692313855,
	cyan: 16777215,
	darkblue: 35839,
	darkcyan: 9145343,
	darkgoldenrod: 3095792639,
	darkgray: 2846468607,
	darkgreen: 6553855,
	darkgrey: 2846468607,
	darkkhaki: 3182914559,
	darkmagenta: 2332068863,
	darkolivegreen: 1433087999,
	darkorange: 4287365375,
	darkorchid: 2570243327,
	darkred: 2332033279,
	darksalmon: 3918953215,
	darkseagreen: 2411499519,
	darkslateblue: 1211993087,
	darkslategray: 793726975,
	darkslategrey: 793726975,
	darkturquoise: 13554175,
	darkviolet: 2483082239,
	deeppink: 4279538687,
	deepskyblue: 12582911,
	dimgray: 1768516095,
	dimgrey: 1768516095,
	dodgerblue: 512819199,
	firebrick: 2988581631,
	floralwhite: 4294635775,
	forestgreen: 579543807,
	fuchsia: 4278255615,
	gainsboro: 3705462015,
	ghostwhite: 4177068031,
	gold: 4292280575,
	goldenrod: 3668254975,
	gray: 2155905279,
	green: 8388863,
	greenyellow: 2919182335,
	grey: 2155905279,
	honeydew: 4043305215,
	hotpink: 4285117695,
	indianred: 3445382399,
	indigo: 1258324735,
	ivory: 4294963455,
	khaki: 4041641215,
	lavender: 3873897215,
	lavenderblush: 4293981695,
	lawngreen: 2096890111,
	lemonchiffon: 4294626815,
	lightblue: 2916673279,
	lightcoral: 4034953471,
	lightcyan: 3774873599,
	lightgoldenrodyellow: 4210742015,
	lightgray: 3553874943,
	lightgreen: 2431553791,
	lightgrey: 3553874943,
	lightpink: 4290167295,
	lightsalmon: 4288707327,
	lightseagreen: 548580095,
	lightskyblue: 2278488831,
	lightslategray: 2005441023,
	lightslategrey: 2005441023,
	lightsteelblue: 2965692159,
	lightyellow: 4294959359,
	lime: 16711935,
	limegreen: 852308735,
	linen: 4210091775,
	magenta: 4278255615,
	maroon: 2147483903,
	mediumaquamarine: 1724754687,
	mediumblue: 52735,
	mediumorchid: 3126187007,
	mediumpurple: 2473647103,
	mediumseagreen: 1018393087,
	mediumslateblue: 2070474495,
	mediumspringgreen: 16423679,
	mediumturquoise: 1221709055,
	mediumvioletred: 3340076543,
	midnightblue: 421097727,
	mintcream: 4127193855,
	mistyrose: 4293190143,
	moccasin: 4293178879,
	navajowhite: 4292783615,
	navy: 33023,
	oldlace: 4260751103,
	olive: 2155872511,
	olivedrab: 1804477439,
	orange: 4289003775,
	orangered: 4282712319,
	orchid: 3664828159,
	palegoldenrod: 4008225535,
	palegreen: 2566625535,
	paleturquoise: 2951671551,
	palevioletred: 3681588223,
	papayawhip: 4293907967,
	peachpuff: 4292524543,
	peru: 3448061951,
	pink: 4290825215,
	plum: 3718307327,
	powderblue: 2967529215,
	purple: 2147516671,
	rebeccapurple: 1714657791,
	red: 4278190335,
	rosybrown: 3163525119,
	royalblue: 1097458175,
	saddlebrown: 2336560127,
	salmon: 4202722047,
	sandybrown: 4104413439,
	seagreen: 780883967,
	seashell: 4294307583,
	sienna: 2689740287,
	silver: 3233857791,
	skyblue: 2278484991,
	slateblue: 1784335871,
	slategray: 1887473919,
	slategrey: 1887473919,
	snow: 4294638335,
	springgreen: 16744447,
	steelblue: 1182971135,
	tan: 3535047935,
	teal: 8421631,
	thistle: 3636451583,
	tomato: 4284696575,
	turquoise: 1088475391,
	violet: 4001558271,
	wheat: 4125012991,
	white: 4294967295,
	whitesmoke: 4126537215,
	yellow: 4294902015,
	yellowgreen: 2597139199
};

//#endregion
//#region src/colorMatchers.ts
const NUMBER = "[-+]?\\d*\\.?\\d+";
const PERCENTAGE = "[-+]?\\d*\\.?\\d+%";
function call(...parts) {
	return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

//#endregion
//#region src/normalizeColor.ts
function normalizeColor(color) {
	let match;
	if (typeof color === "number") return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
	if (match = hex6.exec(color)) return parseInt(match[1] + "ff", 16) >>> 0;
	if (colors$1 && colors$1[color] !== void 0) return colors$1[color];
	if (match = rgb.exec(color)) return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
	if (match = rgba.exec(color)) return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
	if (match = hex3.exec(color)) return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
	if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;
	if (match = hex4.exec(color)) return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
	if (match = hsl.exec(color)) return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
	if (match = hsla.exec(color)) return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
	return null;
}
function hue2rgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
function hslToRgb(h, s, l) {
	const q = l < .5 ? l * (1 + s) : l + s - l * s;
	const p = 2 * l - q;
	const r = hue2rgb(p, q, h + 1 / 3);
	const g = hue2rgb(p, q, h);
	const b = hue2rgb(p, q, h - 1 / 3);
	return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
function parse255(str) {
	const int = parseInt(str, 10);
	if (int < 0) return 0;
	if (int > 255) return 255;
	return int;
}
function parse360(str) {
	return (parseFloat(str) % 360 + 360) % 360 / 360;
}
function parse1(str) {
	const num = parseFloat(str);
	if (num < 0) return 0;
	if (num > 1) return 255;
	return Math.round(num * 255);
}
function parsePercentage(str) {
	const int = parseFloat(str);
	if (int < 0) return 0;
	if (int > 100) return 1;
	return int / 100;
}

//#endregion
//#region src/colorToRgba.ts
function colorToRgba(input) {
	let int32Color = normalizeColor(input);
	if (int32Color === null) return input;
	int32Color = int32Color || 0;
	return `rgba(${(int32Color & 4278190080) >>> 24}, ${(int32Color & 16711680) >>> 16}, ${(int32Color & 65280) >>> 8}, ${(int32Color & 255) / 255})`;
}

//#endregion
//#region src/createInterpolator.ts
const createInterpolator = (range, output, extrapolate) => {
	if (is.fun(range)) return range;
	if (is.arr(range)) return createInterpolator({
		range,
		output,
		extrapolate
	});
	if (is.str(range.output[0])) return createStringInterpolator$1(range);
	const config = range;
	const outputRange = config.output;
	const inputRange = config.range || [0, 1];
	const extrapolateLeft = config.extrapolateLeft || config.extrapolate || "extend";
	const extrapolateRight = config.extrapolateRight || config.extrapolate || "extend";
	const easing = config.easing || ((t) => t);
	return (input) => {
		const range = findRange(input, inputRange);
		return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
	};
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
	let result = map ? map(input) : input;
	if (result < inputMin) {
		if (extrapolateLeft === "identity") return result;
		else if (extrapolateLeft === "clamp") result = inputMin;
	}
	if (result > inputMax) {
		if (extrapolateRight === "identity") return result;
		else if (extrapolateRight === "clamp") result = inputMax;
	}
	if (outputMin === outputMax) return outputMin;
	if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
	if (inputMin === -Infinity) result = -result;
	else if (inputMax === Infinity) result = result - inputMin;
	else result = (result - inputMin) / (inputMax - inputMin);
	result = easing(result);
	if (outputMin === -Infinity) result = -result;
	else if (outputMax === Infinity) result = result + outputMin;
	else result = result * (outputMax - outputMin) + outputMin;
	return result;
}
function findRange(input, inputRange) {
	for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;
	return i - 1;
}

//#endregion
//#region src/easings.ts
const steps = (steps, direction = "end") => (progress) => {
	progress = direction === "end" ? Math.min(progress, .999) : Math.max(progress, .001);
	const expanded = progress * steps;
	return clamp(0, 1, (direction === "end" ? Math.floor(expanded) : Math.ceil(expanded)) / steps);
};
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = 2.70158;
const c4 = 2 * Math.PI / 3;
const c5 = 2 * Math.PI / 4.5;
const bounceOut = (x) => {
	const n1 = 7.5625;
	const d1 = 2.75;
	if (x < 1 / d1) return n1 * x * x;
	else if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + .75;
	else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + .9375;
	else return n1 * (x -= 2.625 / d1) * x + .984375;
};
const easings = {
	linear: (x) => x,
	easeInQuad: (x) => x * x,
	easeOutQuad: (x) => 1 - (1 - x) * (1 - x),
	easeInOutQuad: (x) => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
	easeInCubic: (x) => x * x * x,
	easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),
	easeInOutCubic: (x) => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
	easeInQuart: (x) => x * x * x * x,
	easeOutQuart: (x) => 1 - Math.pow(1 - x, 4),
	easeInOutQuart: (x) => x < .5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
	easeInQuint: (x) => x * x * x * x * x,
	easeOutQuint: (x) => 1 - Math.pow(1 - x, 5),
	easeInOutQuint: (x) => x < .5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
	easeInSine: (x) => 1 - Math.cos(x * Math.PI / 2),
	easeOutSine: (x) => Math.sin(x * Math.PI / 2),
	easeInOutSine: (x) => -(Math.cos(Math.PI * x) - 1) / 2,
	easeInExpo: (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
	easeOutExpo: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
	easeInOutExpo: (x) => x === 0 ? 0 : x === 1 ? 1 : x < .5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
	easeInCirc: (x) => 1 - Math.sqrt(1 - Math.pow(x, 2)),
	easeOutCirc: (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
	easeInOutCirc: (x) => x < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
	easeInBack: (x) => c3 * x * x * x - c1 * x * x,
	easeOutBack: (x) => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
	easeInOutBack: (x) => x < .5 ? Math.pow(2 * x, 2) * (3.5949095 * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * (3.5949095 * (x * 2 - 2) + c2) + 2) / 2,
	easeInElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
	easeOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - .75) * c4) + 1,
	easeInOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
	easeInBounce: (x) => 1 - bounceOut(1 - x),
	easeOutBounce: bounceOut,
	easeInOutBounce: (x) => x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2,
	steps
};

//#endregion
//#region src/fluids.ts
/**
* MIT License
* Copyright (c) Alec Larson
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
const $get = Symbol.for("FluidValue.get");
const $observers = Symbol.for("FluidValue.observers");
/** Returns true if `arg` can be observed. */
const hasFluidValue = (arg) => Boolean(arg && arg[$get]);
/**
* Get the current value.
* If `arg` is not observable, `arg` is returned.
*/
const getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
/** Get the current observer set. Never mutate it directly! */
const getFluidObservers = (target) => target[$observers] || null;
function callFluidObserver(observer, event) {
	if (observer.eventObserved) observer.eventObserved(event);
	else observer(event);
}
function callFluidObservers(target, event) {
	const observers = target[$observers];
	if (observers) observers.forEach((observer) => {
		callFluidObserver(observer, event);
	});
}
/**
* Extend this class for automatic TypeScript support when passing this
* value to `fluids`-compatible libraries.
*/
var FluidValue = class {
	constructor(get) {
		if (!get && !(get = this.get)) throw Error("Unknown getter");
		setFluidGetter(this, get);
	}
};
/** Define the getter called by `getFluidValue`. */
const setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer) {
	if (target[$get]) {
		let observers = target[$observers];
		if (!observers) setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
		if (!observers.has(observer)) {
			observers.add(observer);
			if (target.observerAdded) target.observerAdded(observers.size, observer);
		}
	}
	return observer;
}
function removeFluidObserver(target, observer) {
	const observers = target[$observers];
	if (observers && observers.has(observer)) {
		const count = observers.size - 1;
		if (count) observers.delete(observer);
		else target[$observers] = null;
		if (target.observerRemoved) target.observerRemoved(count, observer);
	}
}
const setHidden = (target, key, value) => Object.defineProperty(target, key, {
	value,
	writable: true,
	configurable: true
});

//#endregion
//#region src/regexs.ts
const numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
const unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
const rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
/**
* Parse special CSS variable format into a CSS token and a fallback.
*
* ```
* `var(--foo, #fff)` => [`--foo`, '#fff']
* ```
*
*/
const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

//#endregion
//#region src/variableToRgba.ts
/**
* takes a CSS variable and attempts
* to turn it into a RGBA value
*
* ```
* 'var(--white)' => 'rgba(255,255,255,1)'
* ```
*
* @param input string
* @returns string
*/
const variableToRgba = (input) => {
	const [token, fallback] = parseCSSVariable(input);
	if (!token || isSSR()) return input;
	const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
	if (value)
 /**
	* We have a valid variable returned
	* trim and return
	*/
	return value.trim();
	else if (fallback && fallback.startsWith("--")) {
		/**
		* fallback is something like --my-variable
		* so we try get property value
		*/
		const value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
		/**
		* if it exists, return else nothing was found so just return the input
		*/
		if (value) return value;
		else return input;
	} else if (fallback && cssVariableRegex.test(fallback))
 /**
	* We have a fallback and it's another CSS variable
	*/
	return variableToRgba(fallback);
	else if (fallback)
 /**
	* We have a fallback and it's not a CSS variable
	*/
	return fallback;
	/**
	* Nothing worked so just return the input
	* like our other FluidValue replace functions do
	*/
	return input;
};
const parseCSSVariable = (current) => {
	const match = cssVariableRegex.exec(current);
	if (!match) return [,];
	const [, token, fallback] = match;
	return [token, fallback];
};

//#endregion
//#region src/stringInterpolation.ts
let namedColorRegex;
const rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
/**
* Supports string shapes by extracting numbers so new values can be computed,
* and recombines those values into new strings of the same shape.  Supports
* things like:
*
*     "rgba(123, 42, 99, 0.36)"           // colors
*     "-45deg"                            // values with units
*     "0 2px 2px 0px rgba(0, 0, 0, 0.12)" // CSS box-shadows
*     "rotate(0deg) translate(2px, 3px)"  // CSS transforms
*/
const createStringInterpolator = (config) => {
	if (!namedColorRegex) namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join("|")})(?!\\w)`, "g") : /^\b$/;
	const output = config.output.map((value) => {
		return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
	});
	const keyframes = output.map((value) => value.match(numberRegex).map(Number));
	const interpolators = keyframes[0].map((_, i) => keyframes.map((values) => {
		if (!(i in values)) throw Error("The arity of each \"output\" value must be equal");
		return values[i];
	})).map((output) => createInterpolator({
		...config,
		output
	}));
	const inputRange = config.range || [0, 1];
	const decimalCounts = output[0].match(numberRegex).map((_, pos) => {
		const counts = output.map((value) => {
			const token = value.match(numberRegex)[pos];
			const dot = token.indexOf(".");
			return dot === -1 ? 0 : token.length - dot - 1;
		});
		return counts.every((c) => c === counts[0]) && counts[0] > 0 ? counts[0] : null;
	});
	return (input) => {
		const keyIdx = inputRange.indexOf(input);
		if (keyIdx !== -1) return output[keyIdx];
		const missingUnit = !unitRegex.test(output[0]) && output.find((value) => unitRegex.test(value))?.replace(numberRegex, "");
		let i = 0;
		return output[0].replace(numberRegex, () => {
			const pos = i++;
			const value = interpolators[pos](input);
			const decimals = decimalCounts[pos];
			return `${decimals != null ? value.toFixed(decimals) : value}${missingUnit || ""}`;
		}).replace(rgbaRegex, rgbaRound);
	};
};

//#endregion
//#region src/deprecations.ts
const prefix = "react-spring: ";
const once = (fn) => {
	const func = fn;
	let called = false;
	if (typeof func != "function") throw new TypeError(`${prefix}once requires a function parameter`);
	return (...args) => {
		if (!called) {
			func(...args);
			called = true;
		}
	};
};
const warnInterpolate = once(console.warn);
function deprecateInterpolate() {
	warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const warnDirectCall = once(console.warn);
function deprecateDirectCall() {
	warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}

//#endregion
//#region src/isAnimatedString.ts
function isAnimatedString(value) {
	return is.str(value) && (value[0] == "#" || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}

//#endregion
//#region src/dom-events/resize/resizeElement.ts
let observer;
const resizeHandlers = /* @__PURE__ */ new WeakMap();
const getBorderBoxSize = (entry) => {
	const boxSize = Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0] : entry.borderBoxSize;
	if (!boxSize) return entry.contentRect;
	const writingMode = getComputedStyle(entry.target).writingMode;
	return writingMode.startsWith("vertical-") || writingMode.startsWith("sideways-") ? {
		width: boxSize.blockSize,
		height: boxSize.inlineSize
	} : {
		width: boxSize.inlineSize,
		height: boxSize.blockSize
	};
};
const handleObservation = (entries) => entries.forEach((entry) => {
	return resizeHandlers.get(entry.target)?.forEach((handler) => handler(getBorderBoxSize(entry)));
});
function resizeElement(handler, target) {
	/**
	* If there's a resize observer in the ENV then use that too.
	*/
	if (!observer) {
		if (typeof ResizeObserver !== "undefined") observer = new ResizeObserver(handleObservation);
	}
	/**
	* Fetch the handlers for the target
	*/
	let elementHandlers = resizeHandlers.get(target);
	/**
	* If there are no handlers create a new set for the target
	* and then add to the map
	*/
	if (!elementHandlers) {
		elementHandlers = /* @__PURE__ */ new Set();
		resizeHandlers.set(target, elementHandlers);
	}
	/**
	* Add the handler to the target's set
	* and observe the target if possible.
	*/
	elementHandlers.add(handler);
	if (observer) observer.observe(target, { box: "border-box" });
	/**
	* Cleanup the event handlers and potential observers.
	*/
	return () => {
		const elementHandlers = resizeHandlers.get(target);
		if (!elementHandlers) return;
		elementHandlers.delete(handler);
		if (!elementHandlers.size && observer) observer.unobserve(target);
	};
}

//#endregion
//#region src/dom-events/resize/resizeWindow.ts
const listeners = /* @__PURE__ */ new Set();
let cleanupWindowResizeHandler;
const createResizeHandler = () => {
	const handleResize = () => {
		listeners.forEach((callback) => callback({
			width: window.innerWidth,
			height: window.innerHeight
		}));
	};
	window.addEventListener("resize", handleResize);
	return () => {
		window.removeEventListener("resize", handleResize);
	};
};
const resizeWindow = (callback) => {
	listeners.add(callback);
	if (!cleanupWindowResizeHandler) cleanupWindowResizeHandler = createResizeHandler();
	return () => {
		listeners.delete(callback);
		if (!listeners.size && cleanupWindowResizeHandler) {
			cleanupWindowResizeHandler();
			cleanupWindowResizeHandler = void 0;
		}
	};
};

//#endregion
//#region src/dom-events/resize/index.ts
const onResize = (callback, { container = document.documentElement } = {}) => {
	if (container === document.documentElement) return resizeWindow(callback);
	else return resizeElement(callback, container);
};

//#endregion
//#region src/progress.ts
const progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);

//#endregion
//#region src/dom-events/scroll/ScrollHandler.ts
const SCROLL_KEYS = {
	x: {
		length: "Width",
		position: "Left"
	},
	y: {
		length: "Height",
		position: "Top"
	}
};
/**
* Why use a class? More extensible in the future.
*/
var ScrollHandler = class {
	constructor(callback, container) {
		this.createAxis = () => ({
			current: 0,
			progress: 0,
			scrollLength: 0
		});
		this.updateAxis = (axisName) => {
			const axis = this.info[axisName];
			const { length, position } = SCROLL_KEYS[axisName];
			axis.current = this.container[`scroll${position}`];
			axis.scrollLength = this.container[`scroll${length}`] - this.container[`client${length}`];
			axis.progress = progress(0, axis.scrollLength, axis.current);
		};
		this.update = () => {
			this.updateAxis("x");
			this.updateAxis("y");
		};
		this.sendEvent = () => {
			this.callback(this.info);
		};
		this.advance = () => {
			this.update();
			this.sendEvent();
		};
		this.callback = callback;
		this.container = container;
		this.info = {
			time: 0,
			x: this.createAxis(),
			y: this.createAxis()
		};
	}
};

//#endregion
//#region src/dom-events/scroll/index.ts
const scrollListeners = /* @__PURE__ */ new WeakMap();
const resizeListeners = /* @__PURE__ */ new WeakMap();
const onScrollHandlers = /* @__PURE__ */ new WeakMap();
const getTarget = (container) => container === document.documentElement ? window : container;
const onScroll = (callback, { container = document.documentElement } = {}) => {
	/**
	* get the current handlers for the target
	*/
	let containerHandlers = onScrollHandlers.get(container);
	/**
	* If there aren't any handlers then create a new set.
	*/
	if (!containerHandlers) {
		containerHandlers = /* @__PURE__ */ new Set();
		onScrollHandlers.set(container, containerHandlers);
	}
	/**
	* Create a new ScrollHandler class and add it to the set.
	*/
	const containerHandler = new ScrollHandler(callback, container);
	containerHandlers.add(containerHandler);
	/**
	* If there are no scrollListeners then we need to make them
	*/
	if (!scrollListeners.has(container)) {
		/**
		* Return true so RAFZ continues to run it
		*/
		const listener = () => {
			containerHandlers?.forEach((handler) => handler.advance());
			return true;
		};
		scrollListeners.set(container, listener);
		const target = getTarget(container);
		/**
		* Add resize handlers so we can correctly calculate the
		* scroll position on changes
		*/
		window.addEventListener("resize", listener, { passive: true });
		if (container !== document.documentElement) resizeListeners.set(container, onResize(listener, { container }));
		/**
		* Add the actual scroll listener
		*/
		target.addEventListener("scroll", listener, { passive: true });
	}
	/**
	* Start animation loop
	*/
	const animateScroll = scrollListeners.get(container);
	(0, _react_spring_rafz.raf)(animateScroll);
	return () => {
		/**
		* Clear it on cleanup
		*/
		_react_spring_rafz.raf.cancel(animateScroll);
		/**
		* Check if we even have any handlers for this container.
		*/
		const containerHandlers = onScrollHandlers.get(container);
		if (!containerHandlers) return;
		containerHandlers.delete(containerHandler);
		if (containerHandlers.size) return;
		/**
		* If no more handlers, remove the scroll listener too.
		*/
		const listener = scrollListeners.get(container);
		scrollListeners.delete(container);
		if (listener) {
			getTarget(container).removeEventListener("scroll", listener);
			window.removeEventListener("resize", listener);
			resizeListeners.get(container)?.();
		}
	};
};

//#endregion
//#region src/hooks/useConstant.ts
/**
* Creates a constant value over the lifecycle of a component.
*/
function useConstant(init) {
	const ref = (0, react.useRef)(null);
	if (ref.current === null) ref.current = init();
	return ref.current;
}

//#endregion
//#region src/hooks/useIsomorphicLayoutEffect.ts
/**
* Use this to read layout from the DOM and synchronously
* re-render if the isSSR returns true. Updates scheduled
* inside `useIsomorphicLayoutEffect` will be flushed
* synchronously in the browser, before the browser has
* a chance to paint.
*/
const useIsomorphicLayoutEffect = isSSR() ? react.useEffect : react.useLayoutEffect;

//#endregion
//#region src/hooks/useIsMounted.ts
const useIsMounted = () => {
	const isMounted = (0, react.useRef)(false);
	useIsomorphicLayoutEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);
	return isMounted;
};

//#endregion
//#region src/hooks/useForceUpdate.ts
/** Return a function that re-renders this component, if still mounted */
function useForceUpdate() {
	const update = (0, react.useState)()[1];
	const isMounted = useIsMounted();
	return () => {
		if (isMounted.current) update(Math.random());
	};
}

//#endregion
//#region src/hooks/useMemoOne.ts
function useMemoOne(getResult, inputs) {
	const [initial] = (0, react.useState)(() => ({
		inputs,
		result: getResult()
	}));
	const committed = (0, react.useRef)(void 0);
	const prevCache = committed.current;
	let cache = prevCache;
	if (cache) {
		if (!Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs))) cache = {
			inputs,
			result: getResult()
		};
	} else cache = initial;
	(0, react.useEffect)(() => {
		committed.current = cache;
		if (prevCache == initial) initial.inputs = initial.result = void 0;
	}, [cache]);
	return cache.result;
}
function areInputsEqual(next, prev) {
	if (next.length !== prev.length) return false;
	for (let i = 0; i < next.length; i++) if (next[i] !== prev[i]) return false;
	return true;
}

//#endregion
//#region src/hooks/useOnce.ts
const useOnce = (effect) => (0, react.useEffect)(effect, emptyDeps);
const emptyDeps = [];

//#endregion
//#region src/hooks/usePrev.ts
/** Use a value from the previous render */
function usePrev(value) {
	const prevRef = (0, react.useRef)(void 0);
	(0, react.useEffect)(() => {
		prevRef.current = value;
	});
	return prevRef.current;
}

//#endregion
//#region src/hooks/useReducedMotion.ts
/**
* Returns `boolean` or `null`, used to automatically
* set skipAnimations to the value of the user's
* `prefers-reduced-motion` query.
*
* The return value, post-effect, is the value of their prefered setting
*/
const useReducedMotion = () => {
	const [reducedMotion, setReducedMotion] = (0, react.useState)(null);
	useIsomorphicLayoutEffect(() => {
		const mql = window.matchMedia("(prefers-reduced-motion)");
		const handleMediaChange = (e) => {
			setReducedMotion(e.matches);
			assign({ skipAnimation: e.matches });
		};
		handleMediaChange(mql);
		if (mql.addEventListener) mql.addEventListener("change", handleMediaChange);
		else mql.addListener(handleMediaChange);
		return () => {
			if (mql.removeEventListener) mql.removeEventListener("change", handleMediaChange);
			else mql.removeListener(handleMediaChange);
		};
	}, []);
	return reducedMotion;
};

//#endregion
exports.FluidValue = FluidValue;
Object.defineProperty(exports, 'Globals', {
  enumerable: true,
  get: function () {
    return globals_exports;
  }
});
exports.addFluidObserver = addFluidObserver;
exports.callFluidObserver = callFluidObserver;
exports.callFluidObservers = callFluidObservers;
exports.clamp = clamp;
exports.colorToRgba = colorToRgba;
exports.colors = colors;
exports.createInterpolator = createInterpolator;
exports.createStringInterpolator = createStringInterpolator;
exports.defineHidden = defineHidden;
exports.deprecateDirectCall = deprecateDirectCall;
exports.deprecateInterpolate = deprecateInterpolate;
exports.each = each;
exports.eachProp = eachProp;
exports.easings = easings;
exports.flush = flush;
exports.flushCalls = flushCalls;
exports.frameLoop = frameLoop;
exports.getFluidObservers = getFluidObservers;
exports.getFluidValue = getFluidValue;
exports.hasFluidValue = hasFluidValue;
exports.hex3 = hex3;
exports.hex4 = hex4;
exports.hex6 = hex6;
exports.hex8 = hex8;
exports.hsl = hsl;
exports.hsla = hsla;
exports.is = is;
exports.isAnimatedString = isAnimatedString;
exports.isEqual = isEqual;
exports.isSSR = isSSR;
exports.noop = noop;
exports.onResize = onResize;
exports.onScroll = onScroll;
exports.once = once;
exports.prefix = prefix;
Object.defineProperty(exports, 'raf', {
  enumerable: true,
  get: function () {
    return _react_spring_rafz.raf;
  }
});
exports.removeFluidObserver = removeFluidObserver;
exports.rgb = rgb;
exports.rgba = rgba;
exports.setFluidGetter = setFluidGetter;
exports.toArray = toArray;
exports.useConstant = useConstant;
exports.useForceUpdate = useForceUpdate;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
exports.useMemoOne = useMemoOne;
exports.useOnce = useOnce;
exports.usePrev = usePrev;
exports.useReducedMotion = useReducedMotion;