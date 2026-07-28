import { MouseEvent, MutableRefObject, TouchEvent } from 'react';
import { Delaunay } from 'd3-delaunay';
import { Margin } from '@nivo/core';
import { TooltipAnchor, TooltipPosition } from '@nivo/tooltip';
import { VoronoiCommonProps, VoronoiDatum, VoronoiCustomLayerProps, NodeMouseHandler, NodePositionAccessor, NodeTouchHandler } from './types';
export declare const useVoronoiMesh: <Node>({ points, getNodePosition, width, height, margin, debug, }: {
    points: readonly Node[];
    getNodePosition?: NodePositionAccessor<Node>;
    margin?: Margin;
    width: number;
    height: number;
    debug?: boolean;
}) => {
    points: readonly [number, number][];
    delaunay: Delaunay<Delaunay.Point>;
    voronoi: import("d3-delaunay").Voronoi<Delaunay.Point> | undefined;
};
export declare const useVoronoi: ({ data, width, height, xDomain, yDomain, }: {
    data: VoronoiDatum[];
    width: number;
    height: number;
    xDomain: VoronoiCommonProps["xDomain"];
    yDomain: VoronoiCommonProps["yDomain"];
}) => {
    points: {
        x: number;
        y: number;
        data: VoronoiDatum;
    }[];
    delaunay: Delaunay<Delaunay.Point>;
    voronoi: import("d3-delaunay").Voronoi<Delaunay.Point>;
};
/**
 * Memoize the context to pass to custom layers.
 */
export declare const useVoronoiLayerContext: ({ points, delaunay, voronoi, }: VoronoiCustomLayerProps) => VoronoiCustomLayerProps;
export declare const useMeshEvents: <Node, ElementType extends Element>({ elementRef, nodes, getNodePosition, delaunay, setCurrent: setCurrentNode, margin, detectionRadius, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onMouseDown, onMouseUp, onClick, onDoubleClick, onTouchStart, onTouchMove, onTouchEnd, enableTouchCrosshair, tooltip, tooltipPosition, tooltipAnchor, }: {
    elementRef: MutableRefObject<ElementType | null>;
    nodes: readonly Node[];
    getNodePosition?: NodePositionAccessor<Node>;
    delaunay: Delaunay<Node>;
    setCurrent?: (node: Node | null) => void;
    margin?: Margin;
    detectionRadius?: number;
    isInteractive?: boolean;
    onMouseEnter?: NodeMouseHandler<Node>;
    onMouseMove?: NodeMouseHandler<Node>;
    onMouseLeave?: NodeMouseHandler<Node>;
    onMouseDown?: NodeMouseHandler<Node>;
    onMouseUp?: NodeMouseHandler<Node>;
    onClick?: NodeMouseHandler<Node>;
    onDoubleClick?: NodeMouseHandler<Node>;
    onTouchStart?: NodeTouchHandler<Node>;
    onTouchMove?: NodeTouchHandler<Node>;
    onTouchEnd?: NodeTouchHandler<Node>;
    enableTouchCrosshair?: boolean;
    tooltip?: (node: Node) => JSX.Element;
    tooltipPosition?: TooltipPosition;
    tooltipAnchor?: TooltipAnchor;
}) => {
    current: [number, Node] | null;
    handleMouseEnter: ((event: MouseEvent<ElementType>) => void) | undefined;
    handleMouseMove: ((event: MouseEvent<ElementType>) => void) | undefined;
    handleMouseLeave: ((event: MouseEvent<ElementType>) => void) | undefined;
    handleMouseDown: ((event: MouseEvent<ElementType>) => void) | undefined;
    handleMouseUp: ((event: MouseEvent<ElementType>) => void) | undefined;
    handleClick: ((event: MouseEvent<ElementType>) => void) | undefined;
    handleDoubleClick: ((event: MouseEvent<ElementType>) => void) | undefined;
    handleTouchStart: ((event: TouchEvent<ElementType>) => void) | undefined;
    handleTouchMove: ((event: TouchEvent<ElementType>) => void) | undefined;
    handleTouchEnd: ((event: TouchEvent<SVGRectElement>) => void) | undefined;
};
/**
 * Compute a voronoi mesh and corresponding events.
 */
export declare const useMesh: <Node, ElementType extends Element>({ elementRef, nodes, getNodePosition, width, height, margin, isInteractive, detectionRadius, setCurrent, onMouseEnter, onMouseMove, onMouseLeave, onMouseDown, onMouseUp, onClick, onDoubleClick, tooltip, tooltipPosition, tooltipAnchor, debug, }: {
    elementRef: MutableRefObject<ElementType | null>;
    nodes: readonly Node[];
    getNodePosition?: NodePositionAccessor<Node>;
    width: number;
    height: number;
    margin?: Margin;
    isInteractive?: boolean;
    detectionRadius?: number;
    setCurrent?: (node: Node | null) => void;
    onMouseEnter?: NodeMouseHandler<Node>;
    onMouseMove?: NodeMouseHandler<Node>;
    onMouseLeave?: NodeMouseHandler<Node>;
    onMouseDown?: NodeMouseHandler<Node>;
    onMouseUp?: NodeMouseHandler<Node>;
    onClick?: NodeMouseHandler<Node>;
    onDoubleClick?: NodeMouseHandler<Node>;
    tooltip?: (node: Node) => JSX.Element;
    tooltipPosition?: TooltipPosition;
    tooltipAnchor?: TooltipAnchor;
    debug?: boolean;
}) => {
    delaunay: Delaunay<Delaunay.Point>;
    voronoi: import("d3-delaunay").Voronoi<Delaunay.Point> | undefined;
    current: [number, Node] | null;
    handleMouseEnter: ((event: MouseEvent<ElementType, globalThis.MouseEvent>) => void) | undefined;
    handleMouseMove: ((event: MouseEvent<ElementType, globalThis.MouseEvent>) => void) | undefined;
    handleMouseLeave: ((event: MouseEvent<ElementType, globalThis.MouseEvent>) => void) | undefined;
    handleMouseDown: ((event: MouseEvent<ElementType, globalThis.MouseEvent>) => void) | undefined;
    handleMouseUp: ((event: MouseEvent<ElementType, globalThis.MouseEvent>) => void) | undefined;
    handleClick: ((event: MouseEvent<ElementType, globalThis.MouseEvent>) => void) | undefined;
    handleDoubleClick: ((event: MouseEvent<ElementType, globalThis.MouseEvent>) => void) | undefined;
};
//# sourceMappingURL=hooks.d.ts.map