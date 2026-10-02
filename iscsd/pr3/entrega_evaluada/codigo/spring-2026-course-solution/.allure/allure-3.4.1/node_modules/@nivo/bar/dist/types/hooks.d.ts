import { Margin } from '@nivo/core';
import { DataProps, BarCommonProps, BarDatum, ComputedBarDatumWithValue, LegendData, BarLegendProps } from './types';
export declare const useBar: <D extends BarDatum>({ indexBy, keys, label, tooltipLabel, valueFormat, colors, colorBy, borderColor, labelTextColor, groupMode, layout, data, margin, width, height, padding, innerPadding, valueScale, indexScale, initialHiddenIds, enableLabel, labelSkipWidth, labelSkipHeight, legends, legendLabel, totalsOffset, }: Partial<Pick<BarCommonProps<D>, "indexBy" | "keys" | "label" | "tooltipLabel" | "valueFormat" | "colors" | "colorBy" | "borderColor" | "labelTextColor" | "groupMode" | "layout" | "padding" | "innerPadding" | "valueScale" | "indexScale" | "initialHiddenIds" | "enableLabel" | "labelSkipWidth" | "labelSkipHeight" | "legends" | "legendLabel" | "totalsOffset">> & {
    width: number;
    height: number;
    margin: Margin;
    data: DataProps<D>["data"];
}) => {
    bars: import("./types").ComputedBarDatum<D>[];
    barsWithValue: {
        index: number;
        key: string;
        data: import("./types").ComputedDatum<D> & {
            value: number;
        };
        x: number;
        y: number;
        absX: number;
        absY: number;
        width: number;
        height: number;
        color: string;
        label: string;
    }[];
    xScale: import("@nivo/scales").ScaleLog | import("@nivo/scales").ScaleSymlog | import("@nivo/scales").ScaleLinear<number> | import("@nivo/scales").ScaleTime<Date | import("d3-scale").NumberValue> | import("@nivo/scales").ScaleBand<string> | import("@nivo/scales").ScalePoint<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue> | import("@nivo/scales").ScaleBand<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue>;
    yScale: import("@nivo/scales").ScaleLog | import("@nivo/scales").ScaleSymlog | import("@nivo/scales").ScaleLinear<number> | import("@nivo/scales").ScaleTime<Date | import("d3-scale").NumberValue> | import("@nivo/scales").ScaleBand<string> | import("@nivo/scales").ScalePoint<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue> | import("@nivo/scales").ScaleBand<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue>;
    getIndex: (datum: D) => string;
    getLabel: (datum: import("./types").ComputedDatum<D>) => string;
    getTooltipLabel: (datum: import("./types").ComputedDatum<D>) => string;
    formatValue: (value: number) => string;
    getColor: import("@nivo/colors").OrdinalColorScale<import("./types").ComputedDatum<D>>;
    getBorderColor: import("@nivo/colors").InheritedColorConfigCustomFunction<ComputedBarDatumWithValue<D>> | ((d: ComputedBarDatumWithValue<D>) => any);
    getLabelColor: import("@nivo/colors").InheritedColorConfigCustomFunction<ComputedBarDatumWithValue<D>> | ((d: ComputedBarDatumWithValue<D>) => any);
    shouldRenderBarLabel: ({ width, height }: {
        height: number;
        width: number;
    }) => boolean;
    hiddenIds: readonly (string | number)[];
    toggleSerie: (id: string | number) => void;
    legendsWithData: [BarLegendProps, LegendData[]][];
    barTotals: import("./compute/totals").BarTotalsData[];
};
//# sourceMappingURL=hooks.d.ts.map