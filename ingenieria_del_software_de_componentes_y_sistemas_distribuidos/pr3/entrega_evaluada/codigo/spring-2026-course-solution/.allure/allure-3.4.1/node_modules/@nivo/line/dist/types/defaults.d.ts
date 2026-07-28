import { CommonLineProps, LineSvgPropsWithDefaults, LineCanvasPropsWithDefaults, DefaultSeries, LineLayerId } from './types';
export declare const commonDefaultProps: Omit<CommonLineProps<DefaultSeries>, 'data' | 'xFormat' | 'yFormat' | 'layers' | 'width' | 'height' | 'margin' | 'theme' | 'pointSymbol' | 'gridXValues' | 'gridYValues' | 'onMouseEnter' | 'onMouseMove' | 'onMouseLeave' | 'onMouseDown' | 'onMouseUp' | 'onClick' | 'onDoubleClick' | 'onTouchStart' | 'onTouchMove' | 'onTouchEnd'> & {
    layers: LineLayerId[];
};
export declare const svgDefaultProps: Omit<LineSvgPropsWithDefaults<DefaultSeries>, 'data' | 'width' | 'height' | 'margin' | 'theme'>;
export declare const canvasDefaultProps: Omit<LineCanvasPropsWithDefaults<DefaultSeries>, 'data' | 'width' | 'height' | 'margin' | 'theme'>;
//# sourceMappingURL=defaults.d.ts.map