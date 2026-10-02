import { Margin } from '@nivo/core';
import { LineSeries, LineSvgPropsWithDefaults, Point } from './types';
declare const NonMemoizedPoints: <Series extends LineSeries>({ points, symbol, size, borderWidth, enableLabel, label, labelYOffset, isFocusable, setCurrentPoint, tooltip, margin, ariaLabel, ariaLabelledBy, ariaDescribedBy, ariaHidden, ariaDisabled, }: {
    points: readonly Point<Series>[];
    symbol: LineSvgPropsWithDefaults<Series>["pointSymbol"];
    size: number;
    borderWidth: LineSvgPropsWithDefaults<Series>["pointBorderWidth"];
    enableLabel: LineSvgPropsWithDefaults<Series>["enablePointLabel"];
    label: LineSvgPropsWithDefaults<Series>["pointLabel"];
    labelYOffset: LineSvgPropsWithDefaults<Series>["pointLabelYOffset"];
    isFocusable: LineSvgPropsWithDefaults<Series>["isFocusable"];
    setCurrentPoint: (point: Point<Series> | null) => void;
    tooltip: LineSvgPropsWithDefaults<Series>["tooltip"];
    margin: Margin;
    ariaLabel: LineSvgPropsWithDefaults<Series>["pointAriaLabel"];
    ariaLabelledBy: LineSvgPropsWithDefaults<Series>["pointAriaLabelledBy"];
    ariaDescribedBy: LineSvgPropsWithDefaults<Series>["pointAriaDescribedBy"];
    ariaHidden: LineSvgPropsWithDefaults<Series>["pointAriaHidden"];
    ariaDisabled: LineSvgPropsWithDefaults<Series>["pointAriaDisabled"];
}) => import("react/jsx-runtime").JSX.Element;
export declare const Points: typeof NonMemoizedPoints;
export {};
//# sourceMappingURL=Points.d.ts.map