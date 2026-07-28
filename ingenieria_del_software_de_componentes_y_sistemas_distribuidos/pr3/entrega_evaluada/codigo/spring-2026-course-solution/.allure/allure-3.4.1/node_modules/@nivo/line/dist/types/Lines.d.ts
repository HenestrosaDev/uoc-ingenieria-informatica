import { LineSeries, ComputedSeries, LineGenerator } from './types';
export declare const NonMemoizedLines: <Series extends LineSeries>({ series, lineGenerator, lineWidth, }: {
    series: readonly ComputedSeries<Series>[];
    lineGenerator: LineGenerator;
    lineWidth: number;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Lines: typeof NonMemoizedLines;
//# sourceMappingURL=Lines.d.ts.map