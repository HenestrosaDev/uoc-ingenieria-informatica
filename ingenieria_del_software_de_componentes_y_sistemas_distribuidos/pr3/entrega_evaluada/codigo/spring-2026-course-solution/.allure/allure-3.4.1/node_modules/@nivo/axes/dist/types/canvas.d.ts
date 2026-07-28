import { Theme, PartialTheme } from '@nivo/theming';
import { ScaleValue, AnyScale, TicksSpec } from '@nivo/scales';
import { AxisLegendPosition, CanvasAxisProps, ValueFormatter } from './types';
export declare const renderAxisToCanvas: <Value extends ScaleValue>(ctx: CanvasRenderingContext2D, { axis, scale, x, y, length, ticksPosition, tickValues, tickSize, tickPadding, tickRotation, format: _format, legend, legendPosition, legendOffset, theme, style, }: {
    axis: "x" | "y";
    scale: AnyScale;
    x?: number;
    y?: number;
    length: number;
    ticksPosition: "before" | "after";
    tickValues?: TicksSpec<Value>;
    tickSize?: number;
    tickPadding?: number;
    tickRotation?: number;
    format?: string | ValueFormatter<Value>;
    legend?: string;
    legendPosition?: AxisLegendPosition;
    legendOffset?: number;
    theme: Theme;
    style?: PartialTheme["axis"];
}) => void;
export declare const renderAxesToCanvas: <X extends ScaleValue, Y extends ScaleValue>(ctx: CanvasRenderingContext2D, { xScale, yScale, width, height, top, right, bottom, left, theme, }: {
    xScale: AnyScale;
    yScale: AnyScale;
    width: number;
    height: number;
    top?: CanvasAxisProps<X> | null;
    right?: CanvasAxisProps<Y> | null;
    bottom?: CanvasAxisProps<X> | null;
    left?: CanvasAxisProps<Y> | null;
    theme: Theme;
}) => void;
export declare const renderGridLinesToCanvas: <Value extends ScaleValue>(ctx: CanvasRenderingContext2D, { width, height, scale, axis, values, }: {
    width: number;
    height: number;
    scale: AnyScale;
    axis: "x" | "y";
    values?: TicksSpec<Value>;
}) => void;
//# sourceMappingURL=canvas.d.ts.map