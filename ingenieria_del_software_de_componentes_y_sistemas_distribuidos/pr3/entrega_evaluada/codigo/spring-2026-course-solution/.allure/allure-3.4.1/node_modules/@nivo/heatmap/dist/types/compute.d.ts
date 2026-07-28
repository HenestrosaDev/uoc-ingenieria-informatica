import { ComputedCell, HeatMapCommonProps, HeatMapDataProps, HeatMapDatum, SizeVariationConfig } from './types';
export declare const computeLayout: ({ width: _width, height: _height, rows, columns, forceSquare, }: {
    width: number;
    height: number;
    rows: number;
    columns: number;
    forceSquare: boolean;
}) => {
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;
};
export declare const computeCells: <Datum extends HeatMapDatum, ExtraProps extends object>({ data, width: _width, height: _height, xInnerPadding, xOuterPadding, yInnerPadding, yOuterPadding, forceSquare, }: {
    data: HeatMapDataProps<Datum, ExtraProps>["data"];
    width: number;
    height: number;
} & Pick<HeatMapCommonProps<Datum>, "xOuterPadding" | "xInnerPadding" | "yOuterPadding" | "yInnerPadding" | "forceSquare">) => {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    xScale: import("@nivo/scales").ScaleBand<Datum["x"]>;
    yScale: import("@nivo/scales").ScaleBand<string>;
    minValue: number;
    maxValue: number;
    cells: Omit<ComputedCell<Datum>, "color" | "opacity" | "borderColor" | "label" | "formattedValue" | "labelTextColor">[];
};
export declare const computeSizeScale: (size: false | SizeVariationConfig, min: number, max: number) => ((value: number | null) => number);
export declare const getCellAnnotationPosition: <Datum extends HeatMapDatum>(cell: ComputedCell<Datum>) => {
    x: number;
    y: number;
};
export declare const getCellAnnotationDimensions: <Datum extends HeatMapDatum>(cell: ComputedCell<Datum>) => {
    size: number;
    width: number;
    height: number;
};
//# sourceMappingURL=compute.d.ts.map