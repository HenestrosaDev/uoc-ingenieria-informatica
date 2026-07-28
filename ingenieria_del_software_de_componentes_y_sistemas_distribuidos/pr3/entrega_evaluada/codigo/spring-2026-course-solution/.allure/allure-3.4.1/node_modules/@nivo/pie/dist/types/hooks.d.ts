import { MayHaveLabel, CompletePieSvgProps, ComputedDatum, DatumId, PieCustomLayerProps, LegendDatum, CommonPieProps } from './types';
/**
 * Format data so that we get a consistent data structure.
 * It will also add the `formattedValue` and `color` property.
 */
export declare const useNormalizedData: <RawDatum extends MayHaveLabel>({ data, id, value, valueFormat, colors, }: Pick<CompletePieSvgProps<RawDatum>, "id" | "value" | "valueFormat" | "colors"> & {
    data: readonly RawDatum[];
}) => Omit<ComputedDatum<RawDatum>, "arc" | "fill">[];
/**
 * Compute arcs, which don't depend yet on radius.
 */
export declare const usePieArcs: <RawDatum>({ data, startAngle, endAngle, innerRadius, outerRadius, padAngle, sortByValue, activeId, activeInnerRadiusOffset, activeOuterRadiusOffset, hiddenIds, forwardLegendData, }: {
    data: Omit<ComputedDatum<RawDatum>, "arc" | "fill">[];
    startAngle: number;
    endAngle: number;
    innerRadius: number;
    outerRadius: number;
    padAngle: number;
    sortByValue: boolean;
    activeId: null | DatumId;
    activeInnerRadiusOffset: number;
    activeOuterRadiusOffset: number;
    hiddenIds: DatumId[];
    forwardLegendData?: CommonPieProps<RawDatum>["forwardLegendData"];
}) => {
    dataWithArc: Omit<ComputedDatum<RawDatum>, "fill">[];
    legendData: LegendDatum<RawDatum>[];
};
/**
 * Compute pie layout using explicit radius/innerRadius,
 * expressed in pixels.
 */
export declare const usePie: <RawDatum>({ data, radius, innerRadius, startAngle, endAngle, padAngle, sortByValue, cornerRadius, activeInnerRadiusOffset, activeOuterRadiusOffset, activeId: activeIdFromProps, onActiveIdChange, defaultActiveId, forwardLegendData, }: Pick<Partial<CompletePieSvgProps<RawDatum>>, "startAngle" | "endAngle" | "padAngle" | "sortByValue" | "cornerRadius" | "activeInnerRadiusOffset" | "activeOuterRadiusOffset" | "activeId" | "onActiveIdChange" | "defaultActiveId" | "forwardLegendData"> & {
    data: Omit<ComputedDatum<RawDatum>, "arc">[];
    radius: number;
    innerRadius: number;
}) => {
    arcGenerator: import("@nivo/arcs").ArcGenerator;
    setActiveId: (id: DatumId | null) => void;
    toggleSerie: (id: DatumId) => void;
    dataWithArc: Omit<ComputedDatum<RawDatum>, "fill">[];
    legendData: LegendDatum<RawDatum>[];
};
/**
 * Compute pie layout using a box to find radius/innerRadius,
 * expressed in ratio (0~1), can optionally use the `fit`
 * attribute to find the most space efficient layout.
 *
 * It also returns `centerX`/`centerY` as those can be altered
 * if `fit` is `true`.
 */
export declare const usePieFromBox: <RawDatum>({ data, width, height, innerRadius: innerRadiusRatio, startAngle, endAngle, padAngle, sortByValue, cornerRadius, fit, activeInnerRadiusOffset, activeOuterRadiusOffset, activeId: activeIdFromProps, onActiveIdChange, defaultActiveId, forwardLegendData, }: Pick<CompletePieSvgProps<RawDatum>, "width" | "height" | "innerRadius" | "startAngle" | "endAngle" | "padAngle" | "sortByValue" | "cornerRadius" | "fit" | "activeInnerRadiusOffset" | "activeOuterRadiusOffset"> & Pick<Partial<CompletePieSvgProps<RawDatum>>, "activeId" | "onActiveIdChange" | "defaultActiveId" | "forwardLegendData"> & {
    data: Omit<ComputedDatum<RawDatum>, "arc">[];
}) => {
    centerX: number;
    centerY: number;
    radius: number;
    innerRadius: number;
    debug: {
        box: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        ratio: number;
        points: [number, number][];
    } | undefined;
    dataWithArc: Omit<ComputedDatum<RawDatum>, "fill">[];
    legendData: LegendDatum<RawDatum>[];
    arcGenerator: import("@nivo/arcs").ArcGenerator;
    activeId: DatumId | null;
    setActiveId: (id: DatumId | null) => void;
    toggleSerie: (id: DatumId) => void;
};
/**
 * Memoize the context to pass to custom layers.
 */
export declare const usePieLayerContext: <RawDatum>({ dataWithArc, arcGenerator, centerX, centerY, radius, innerRadius, }: PieCustomLayerProps<RawDatum>) => PieCustomLayerProps<RawDatum>;
//# sourceMappingURL=hooks.d.ts.map