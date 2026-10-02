import { BarDatum, BarLegendProps, BarSvgProps, BarsWithHidden, LegendData, LegendLabelDatum } from '../types';
export declare const getLegendDataForKeys: <RawDatum extends BarDatum>(bars: BarsWithHidden<RawDatum>, layout: NonNullable<BarSvgProps<RawDatum>["layout"]>, direction: BarLegendProps["direction"], groupMode: NonNullable<BarSvgProps<RawDatum>["groupMode"]>, reverse: boolean, getLegendLabel: (datum: LegendLabelDatum<RawDatum>) => string) => LegendData[];
export declare const getLegendDataForIndexes: <RawDatum extends BarDatum>(bars: BarsWithHidden<RawDatum>, layout: NonNullable<BarSvgProps<RawDatum>["layout"]>, getLegendLabel: (datum: LegendLabelDatum<RawDatum>) => string) => LegendData[];
export declare const getLegendData: <RawDatum extends BarDatum>({ bars, direction, from, groupMode, layout, legendLabel, reverse, }: Pick<Required<BarSvgProps<RawDatum>>, "layout" | "groupMode"> & {
    bars: BarsWithHidden<RawDatum>;
    direction: BarLegendProps["direction"];
    from: BarLegendProps["dataFrom"];
    legendLabel: BarSvgProps<RawDatum>["legendLabel"];
    reverse: boolean;
}) => LegendData[];
//# sourceMappingURL=legends.d.ts.map