import { AnnotationMatcher } from '@nivo/annotations';
import { ComputedCell, DefaultHeatMapDatum, HeatMapCommonProps, HeatMapDataProps, HeatMapDatum } from './types';
export declare const useComputeCells: <Datum extends HeatMapDatum, ExtraProps extends object>({ data, width, height, xInnerPadding, xOuterPadding, yInnerPadding, yOuterPadding, forceSquare, }: {
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
export declare const useHeatMap: <Datum extends HeatMapDatum = DefaultHeatMapDatum, ExtraProps extends object = Record<string, never>>({ data, valueFormat, width: _width, height: _height, xOuterPadding, xInnerPadding, yOuterPadding, yInnerPadding, forceSquare, sizeVariation, colors, emptyColor, opacity, activeOpacity, inactiveOpacity, borderColor, label, labelTextColor, hoverTarget, }: {
    data: HeatMapDataProps<Datum, ExtraProps>["data"];
    width: number;
    height: number;
} & Partial<Pick<HeatMapCommonProps<Datum>, "valueFormat" | "xOuterPadding" | "xInnerPadding" | "yOuterPadding" | "yInnerPadding" | "forceSquare" | "sizeVariation" | "colors" | "emptyColor" | "opacity" | "activeOpacity" | "inactiveOpacity" | "borderColor" | "label" | "labelTextColor" | "hoverTarget">>) => {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    cells: ComputedCell<Datum>[];
    xScale: import("@nivo/scales").ScaleBand<Datum["x"]>;
    yScale: import("@nivo/scales").ScaleBand<string>;
    colorScale: import("d3-scale").ScaleSequential<string, never> | import("d3-scale").ScaleDiverging<string, never> | import("d3-scale").ScaleQuantize<string, never> | null;
    activeCell: ComputedCell<Datum> | null;
    setActiveCell: import("react").Dispatch<import("react").SetStateAction<ComputedCell<Datum> | null>>;
};
export declare const useCellAnnotations: <Datum extends HeatMapDatum>(cells: ComputedCell<Datum>[], annotations: AnnotationMatcher<ComputedCell<Datum>>[]) => import("@nivo/annotations").BoundAnnotation<ComputedCell<Datum>>[];
//# sourceMappingURL=hooks.d.ts.map