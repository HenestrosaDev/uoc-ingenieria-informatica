import { PropsWithChildren, ComponentProps } from 'react';
import { animated } from '@react-spring/web';
import { TextStyle } from '@nivo/theming';
type AnimatedComponentProps = ComponentProps<(typeof animated)['text']>;
export type TextProps = PropsWithChildren<Omit<AnimatedComponentProps, 'style'> & {
    style: AnimatedComponentProps['style'] & Pick<TextStyle, 'outlineWidth' | 'outlineColor' | 'outlineOpacity'>;
}>;
export declare const Text: ({ style: fullStyle, children, ...attributes }: TextProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Text.d.ts.map