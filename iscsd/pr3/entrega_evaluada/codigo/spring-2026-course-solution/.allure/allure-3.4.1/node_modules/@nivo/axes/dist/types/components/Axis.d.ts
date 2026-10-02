import { AnyScale, ScaleValue } from '@nivo/scales';
import * as React from 'react';
import { AxisProps } from '../types';
export declare const NonMemoizedAxis: <Value extends ScaleValue>({ axis, scale, x, y, length, ticksPosition, tickValues, tickSize, tickPadding, tickRotation, format, renderTick, truncateTickAt, legend, legendPosition, legendOffset, style, onClick, ariaHidden, }: AxisProps<Value> & {
    axis: "x" | "y";
    scale: AnyScale;
    x?: number;
    y?: number;
    length: number;
    onClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>, value: Value | string) => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Axis: typeof NonMemoizedAxis;
//# sourceMappingURL=Axis.d.ts.map