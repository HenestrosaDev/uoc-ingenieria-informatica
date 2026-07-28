import { ComputedSerieAxis, ScaleAxis, ScaleLog, ScaleLogSpec } from './types';
export declare const logScaleDefaults: Required<ScaleLogSpec>;
export declare const createLogScale: ({ base, min, max, round, reverse, nice, }: ScaleLogSpec, data: ComputedSerieAxis<number>, size: number, axis: ScaleAxis) => ScaleLog;
//# sourceMappingURL=logScale.d.ts.map