import { AnyScale, ScaleBand } from '@nivo/scales';
import { BarCommonProps, BarDatum, ComputedBarDatum } from '../types';
export interface BarTotalsData {
    key: string;
    x: number;
    y: number;
    value: number;
    formattedValue: string;
    animationOffset: number;
}
export declare const computeBarTotals: <D extends BarDatum>(bars: ComputedBarDatum<D>[], xScale: ScaleBand<string> | AnyScale, yScale: ScaleBand<string> | AnyScale, layout: BarCommonProps<D>["layout"] | undefined, groupMode: BarCommonProps<D>["groupMode"] | undefined, totalsOffset: number, formatValue: (value: number) => string) => BarTotalsData[];
export declare const updateTotalsByIndex: (totalsByIndex: Map<string | number, number>, indexValue: string | number, value: number) => void;
export declare const updateTotalsPositivesByIndex: (totalsPositivesByIndex: Map<string | number, number>, indexValue: string | number, value: number) => void;
export declare const updateGreatestValueByIndex: (greatestValueByIndex: Map<string | number, number>, indexValue: string | number, value: number) => void;
export declare const updateNumberOfBarsByIndex: (numberOfBarsByIndex: Map<string | number, number>, indexValue: string | number) => void;
//# sourceMappingURL=totals.d.ts.map