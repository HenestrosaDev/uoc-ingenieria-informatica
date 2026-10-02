import { ScaleDiverging, ScaleQuantize, ScaleSequential } from 'd3-scale';
import { SequentialColorScaleConfig, SequentialColorScaleValues } from './sequentialColorScale';
import { DivergingColorScaleConfig, DivergingColorScaleValues } from './divergingColorScale';
import { QuantizeColorScaleConfig, QuantizeColorScaleValues } from './quantizeColorScale';
export type ContinuousColorScaleConfig = SequentialColorScaleConfig | DivergingColorScaleConfig | QuantizeColorScaleConfig;
export type ContinuousColorScaleValues = SequentialColorScaleValues | DivergingColorScaleValues | QuantizeColorScaleValues;
export declare const isSequentialColorScaleConfig: (config: ContinuousColorScaleConfig) => config is SequentialColorScaleConfig;
export declare const isDivergingColorScaleConfig: (config: ContinuousColorScaleConfig) => config is DivergingColorScaleConfig;
export declare const isQuantizeColorScaleConfig: (config: ContinuousColorScaleConfig) => config is QuantizeColorScaleConfig;
export declare const isContinuousColorScale: (config: unknown) => config is ContinuousColorScaleConfig;
export declare const getContinuousColorScale: <Config extends ContinuousColorScaleConfig>(config: Config, values: ContinuousColorScaleValues) => ScaleSequential<string, never> | ScaleDiverging<string, never> | ScaleQuantize<string, never>;
export declare const useContinuousColorScale: (config: ContinuousColorScaleConfig, values: ContinuousColorScaleValues) => ScaleSequential<string, never> | ScaleDiverging<string, never> | ScaleQuantize<string, never>;
export declare const computeContinuousColorScaleColorStops: (scale: ScaleSequential<string> | ScaleDiverging<string> | ScaleQuantize<string>, steps?: number) => {
    key: string;
    offset: number;
    stopColor: string;
}[];
//# sourceMappingURL=continuousColorScale.d.ts.map