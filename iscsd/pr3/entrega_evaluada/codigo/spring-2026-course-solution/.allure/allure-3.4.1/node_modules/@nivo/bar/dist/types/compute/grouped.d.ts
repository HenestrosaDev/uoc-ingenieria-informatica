import { Margin } from '@nivo/core';
import { OrdinalColorScale } from '@nivo/colors';
import { ScaleBand } from '@nivo/scales';
import { BarDatum, BarSvgProps, ComputedBarDatum, ComputedDatum } from '../types';
/**
 * Generates x/y scales & bars for grouped bar chart.
 */
export declare const generateGroupedBars: <D extends BarDatum>({ layout, width, height, padding, innerPadding, valueScale, indexScale: indexScaleConfig, hiddenIds, ...props }: Pick<Required<BarSvgProps<D>>, "data" | "height" | "valueScale" | "indexScale" | "innerPadding" | "keys" | "layout" | "padding" | "width"> & {
    formatValue: (value: number) => string;
    getColor: OrdinalColorScale<ComputedDatum<D>>;
    getIndex: (datum: D) => string;
    getTooltipLabel: (datum: ComputedDatum<D>) => string;
    margin: Margin;
    hiddenIds?: readonly (string | number)[];
}) => {
    xScale: import("@nivo/scales").ScaleLog | import("@nivo/scales").ScaleSymlog | import("@nivo/scales").ScaleLinear<number> | import("@nivo/scales").ScaleTime<Date | import("d3-scale").NumberValue> | ScaleBand<string> | import("@nivo/scales").ScalePoint<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue> | ScaleBand<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue>;
    yScale: import("@nivo/scales").ScaleLog | import("@nivo/scales").ScaleSymlog | import("@nivo/scales").ScaleLinear<number> | import("@nivo/scales").ScaleTime<Date | import("d3-scale").NumberValue> | ScaleBand<string> | import("@nivo/scales").ScalePoint<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue> | ScaleBand<Date | import("@nivo/scales").NumericValue | import("@nivo/scales").StringValue>;
    bars: ComputedBarDatum<D>[];
};
//# sourceMappingURL=grouped.d.ts.map