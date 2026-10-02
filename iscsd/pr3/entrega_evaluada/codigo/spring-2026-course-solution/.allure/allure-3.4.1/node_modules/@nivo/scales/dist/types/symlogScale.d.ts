import { ComputedSerieAxis, ScaleAxis, ScaleSymlog, ScaleSymlogSpec } from './types';
export declare const symlogScaleDefaults: Required<ScaleSymlogSpec>;
export declare const createSymlogScale: ({ constant, min, max, round, reverse, nice, }: ScaleSymlogSpec, data: ComputedSerieAxis<number>, size: number, axis: ScaleAxis) => ScaleSymlog;
//# sourceMappingURL=symlogScale.d.ts.map