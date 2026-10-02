import { Margin } from '@nivo/core';
import { OrdinalColorScale } from '@nivo/colors';
import { ScaleBand } from '@nivo/scales';
import { BarDatum, BarSvgProps, ComputedBarDatum, ComputedDatum } from '../types';
/**
 * Generates x/y scales & bars for stacked bar chart.
 */
export declare const generateStackedBars: <RawDatum extends BarDatum>({ data, layout, width, height, padding, valueScale, indexScale: indexScaleConfig, hiddenIds, ...props }: Pick<Required<BarSvgProps<RawDatum>>, "data" | "height" | "valueScale" | "indexScale" | "innerPadding" | "keys" | "layout" | "padding" | "width"> & {
    formatValue: (value: number) => string;
    getColor: OrdinalColorScale<ComputedDatum<RawDatum>>;
    getIndex: (datum: RawDatum) => string;
    getTooltipLabel: (datum: ComputedDatum<RawDatum>) => string;
    margin: Margin;
    hiddenIds?: readonly (string | number)[];
}) => {
    xScale: import("@nivo/scales").ScaleLog | import("@nivo/scales").ScaleSymlog | import("@nivo/scales").ScaleLinear<number> | import("@nivo/scales").ScaleTime<Date | import("d3-scale").NumberValue> | ScaleBand<string> | import("@nivo/scales").ScalePoint<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue> | ScaleBand<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue>;
    yScale: import("@nivo/scales").ScaleLog | import("@nivo/scales").ScaleSymlog | import("@nivo/scales").ScaleLinear<number> | import("@nivo/scales").ScaleTime<Date | import("d3-scale").NumberValue> | ScaleBand<string> | import("@nivo/scales").ScalePoint<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue> | ScaleBand<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue>;
    bars: ComputedBarDatum<RawDatum>[];
};
//# sourceMappingURL=stacked.d.ts.map