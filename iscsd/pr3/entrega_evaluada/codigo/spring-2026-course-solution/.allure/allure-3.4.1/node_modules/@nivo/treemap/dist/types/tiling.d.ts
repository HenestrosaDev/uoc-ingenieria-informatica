import { treemapBinary, treemapDice, treemapSlice, treemapSliceDice } from 'd3-hierarchy';
export declare const tileByType: {
    readonly binary: typeof treemapBinary;
    readonly dice: typeof treemapDice;
    readonly slice: typeof treemapSlice;
    readonly sliceDice: typeof treemapSliceDice;
    readonly squarify: import("d3-hierarchy").RatioSquarifyTilingFactory;
};
export type TileType = keyof typeof tileByType;
//# sourceMappingURL=tiling.d.ts.map