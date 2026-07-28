import { CssMixBlendMode } from '@nivo/core';
import { LineSeries, ComputedSeries, AreaGenerator } from './types';
declare const NonMemoizedAreas: <Series extends LineSeries>({ areaGenerator, areaOpacity, areaBlendMode, series, }: {
    areaGenerator: AreaGenerator;
    areaOpacity: number;
    areaBlendMode: CssMixBlendMode;
    series: readonly ComputedSeries<Series>[];
}) => import("react/jsx-runtime").JSX.Element;
export declare const Areas: typeof NonMemoizedAreas;
export {};
//# sourceMappingURL=Areas.d.ts.map