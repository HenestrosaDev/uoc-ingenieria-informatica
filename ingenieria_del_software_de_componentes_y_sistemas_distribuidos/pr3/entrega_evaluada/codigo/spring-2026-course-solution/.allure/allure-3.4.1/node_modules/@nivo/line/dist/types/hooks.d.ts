import { LineSeries, CommonLineProps, DataProps, InferX, InferY, InferSeriesId, LineSvgProps, LineGenerator, AreaGenerator, AllowedValue, ComputedSeries, Point, SliceData } from './types';
export declare function useLineGenerator(curve: CommonLineProps<LineSeries>['curve']): LineGenerator;
export declare function useAreaGenerator<Y extends AllowedValue>({ curve, yScale, areaBaselineValue, }: {
    curve: CommonLineProps<LineSeries>['curve'];
    yScale: (y: Y) => number;
    areaBaselineValue: Y;
}): AreaGenerator;
export declare const useSlices: <Series extends LineSeries>({ componentId, enableSlices, points, width, height, }: {
    componentId: string;
    enableSlices: Exclude<LineSvgProps<Series>["enableSlices"], undefined>;
    points: Point<Series>[];
    width: number;
    height: number;
}) => SliceData<Series>[];
export declare const LINE_UNIQUE_ID_PREFIX = "line";
export declare const useLine: <Series extends LineSeries>({ data, xScale: xScaleSpec, xFormat, yScale: yScaleSpec, yFormat, width, height, colors, curve, areaBaselineValue, pointColor, pointBorderColor, enableSlices, initialHiddenIds, }: DataProps<Series> & Pick<CommonLineProps<Series>, "xScale" | "yScale" | "colors" | "curve" | "areaBaselineValue" | "pointColor" | "pointBorderColor"> & {
    xFormat?: CommonLineProps<Series>["xFormat"];
    yFormat?: CommonLineProps<Series>["yFormat"];
} & Pick<LineSvgProps<Series>, "enableSlices" | "initialHiddenIds"> & {
    width: number;
    height: number;
}) => {
    legendData: {
        id: InferSeriesId<Series>;
        label: string;
        color: string;
        hidden: boolean;
    }[];
    toggleSeries: (id: InferSeriesId<Series>) => void;
    lineGenerator: LineGenerator;
    areaGenerator: AreaGenerator;
    getColor: (series: Series) => string;
    series: ComputedSeries<Series>[];
    xScale: (x: InferX<Series>) => number;
    yScale: (y: InferY<Series>) => number;
    slices: SliceData<Series>[];
    points: Point<Series>[];
};
//# sourceMappingURL=hooks.d.ts.map