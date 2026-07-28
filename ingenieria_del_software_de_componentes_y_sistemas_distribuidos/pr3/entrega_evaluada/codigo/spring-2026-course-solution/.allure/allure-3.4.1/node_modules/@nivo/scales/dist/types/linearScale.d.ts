import { NumberValue, ScaleLinear as D3ScaleLinear } from 'd3-scale';
import { ScaleLinearSpec, ScaleLinear, ComputedSerieAxis, ScaleAxis } from './types';
export declare const linearScaleDefaults: Required<ScaleLinearSpec>;
export declare const createLinearScale: <Output extends NumberValue>({ min, max, stacked, reverse, clamp, nice, round, }: ScaleLinearSpec, data: ComputedSerieAxis<Output>, size: number, axis: ScaleAxis) => ScaleLinear<number>;
export declare const castLinearScale: <Range, Output>(scale: D3ScaleLinear<Range, Output>, stacked?: boolean) => ScaleLinear<number>;
//# sourceMappingURL=linearScale.d.ts.map