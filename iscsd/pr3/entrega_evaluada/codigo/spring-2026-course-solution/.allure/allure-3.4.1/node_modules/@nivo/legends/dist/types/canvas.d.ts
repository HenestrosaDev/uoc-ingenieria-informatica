import { Theme } from '@nivo/theming';
import { AnchoredContinuousColorsLegendProps, LegendCanvasProps } from './types';
export declare const renderLegendToCanvas: (ctx: CanvasRenderingContext2D, { data, containerWidth, containerHeight, translateX, translateY, anchor, direction, padding: _padding, justify, itemsSpacing, itemWidth, itemHeight, itemDirection, itemTextColor, symbolSize, symbolSpacing, theme, }: LegendCanvasProps) => void;
export declare const renderContinuousColorLegendToCanvas: (ctx: CanvasRenderingContext2D, { containerWidth, containerHeight, anchor, translateX, translateY, scale, length, thickness, direction, ticks: _ticks, tickPosition, tickSize, tickSpacing, tickOverlap, tickFormat, title, titleAlign, titleOffset, theme, }: AnchoredContinuousColorsLegendProps & {
    theme: Theme;
}) => void;
//# sourceMappingURL=canvas.d.ts.map