import { ScaleValue, TicksSpec, AnyScale, ScaleWithBandwidth } from './types';
/**
 * Band and point scales are not centered, meaning the ticks would
 * be positioned at the beginning of each step; however, we want
 * them to be centered for each step.
 */
export declare const centerScale: <Value>(scale: ScaleWithBandwidth) => ScaleWithBandwidth | (<T extends Value>(d: T) => number);
export declare const getScaleTicks: <Value extends ScaleValue>(scale: AnyScale, spec?: TicksSpec<Value>) => any[];
//# sourceMappingURL=ticks.d.ts.map