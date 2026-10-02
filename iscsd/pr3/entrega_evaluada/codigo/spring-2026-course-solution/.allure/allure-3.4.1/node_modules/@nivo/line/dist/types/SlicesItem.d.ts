import { LineSeries, SliceData, CommonLineProps, LineSvgProps } from './types';
export declare const NonMemoizedSlicesItem: <Series extends LineSeries>({ slice, slices, axis, debug, tooltip, isCurrent, setCurrent, onMouseEnter, onMouseMove, onMouseLeave, onMouseDown, onMouseUp, onClick, onDoubleClick, onTouchStart, onTouchMove, onTouchEnd, }: {
    slice: SliceData<Series>;
    slices: readonly SliceData<Series>[];
    axis: Exclude<LineSvgProps<Series>["enableSlices"], undefined | false>;
    debug: boolean;
    tooltip: CommonLineProps<Series>["sliceTooltip"];
    isCurrent: boolean;
    setCurrent: (slice: SliceData<Series> | null) => void;
    onMouseEnter?: CommonLineProps<Series>["onMouseEnter"];
    onMouseMove?: CommonLineProps<Series>["onMouseMove"];
    onMouseLeave?: CommonLineProps<Series>["onMouseLeave"];
    onMouseDown?: CommonLineProps<Series>["onMouseDown"];
    onMouseUp?: CommonLineProps<Series>["onMouseUp"];
    onClick?: CommonLineProps<Series>["onClick"];
    onDoubleClick?: CommonLineProps<Series>["onDoubleClick"];
    onTouchStart?: CommonLineProps<Series>["onTouchStart"];
    onTouchMove?: CommonLineProps<Series>["onTouchMove"];
    onTouchEnd?: CommonLineProps<Series>["onTouchEnd"];
}) => import("react/jsx-runtime").JSX.Element;
export declare const SlicesItem: typeof NonMemoizedSlicesItem;
//# sourceMappingURL=SlicesItem.d.ts.map