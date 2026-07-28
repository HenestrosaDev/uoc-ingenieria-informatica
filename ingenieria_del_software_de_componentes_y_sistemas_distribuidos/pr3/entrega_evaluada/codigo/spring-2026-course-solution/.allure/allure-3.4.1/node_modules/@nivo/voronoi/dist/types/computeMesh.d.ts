import { Delaunay } from 'd3-delaunay';
import { Margin } from '@nivo/core';
import { NodePositionAccessor } from './types';
/**
 * The delaunay generator requires an array
 * where each point is defined as an array
 * of 2 elements: [x: number, y: number].
 *
 * Points represent the raw input data
 * and x/y represent accessors to x & y.
 */
export declare const computeMeshPoints: <Node>({ points, getNodePosition, margin, }: {
    points: readonly Node[];
    getNodePosition?: NodePositionAccessor<Node>;
    margin?: Margin;
}) => [number, number][];
export declare const computeMesh: ({ points, width, height, margin, debug, }: {
    points: readonly [number, number][];
    width: number;
    height: number;
    margin?: Margin;
    debug?: boolean;
}) => {
    points: readonly [number, number][];
    delaunay: Delaunay<Delaunay.Point>;
    voronoi: import("d3-delaunay").Voronoi<Delaunay.Point> | undefined;
};
//# sourceMappingURL=computeMesh.d.ts.map