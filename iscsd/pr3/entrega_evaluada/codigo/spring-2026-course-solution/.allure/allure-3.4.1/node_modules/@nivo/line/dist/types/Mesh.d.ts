import { Margin } from '@nivo/core';
import { LineSeries, Point, LineSvgProps, LineSvgPropsWithDefaults } from './types';
declare const NonMemoizedMesh: <Series extends LineSeries>({ points, width, height, margin, setCurrent, onMouseEnter, onMouseMove, onMouseLeave, onMouseDown, onMouseUp, onClick, onDoubleClick, onTouchStart, onTouchMove, onTouchEnd, tooltip, debug, enableTouchCrosshair, }: {
    points: Point<Series>[];
    width: number;
    height: number;
    margin: Margin;
    setCurrent: (point: Point<Series> | null) => void;
    onMouseEnter?: LineSvgProps<Series>["onMouseEnter"];
    onMouseMove?: LineSvgProps<Series>["onMouseMove"];
    onMouseLeave?: LineSvgProps<Series>["onMouseLeave"];
    onMouseDown?: LineSvgProps<Series>["onMouseDown"];
    onMouseUp?: LineSvgProps<Series>["onMouseUp"];
    onClick?: LineSvgProps<Series>["onClick"];
    onDoubleClick?: LineSvgProps<Series>["onDoubleClick"];
    onTouchStart?: LineSvgProps<Series>["onTouchStart"];
    onTouchMove?: LineSvgProps<Series>["onTouchMove"];
    onTouchEnd?: LineSvgProps<Series>["onTouchEnd"];
    tooltip: LineSvgPropsWithDefaults<Series>["tooltip"];
    debug: boolean;
    enableTouchCrosshair: LineSvgPropsWithDefaults<Series>["enableTouchCrosshair"];
}) => import("react/jsx-runtime").JSX.Element;
export declare const Mesh: typeof NonMemoizedMesh;
export {};
//# sourceMappingURL=Mesh.d.ts.map