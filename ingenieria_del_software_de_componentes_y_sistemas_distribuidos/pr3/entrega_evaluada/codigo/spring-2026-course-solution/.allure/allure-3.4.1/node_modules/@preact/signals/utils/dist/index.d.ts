import { ReadonlySignal, Signal } from "@preact/signals-core";
import { ComponentChildren } from "preact";
interface ShowProps<T = boolean> {
    when: Signal<T> | ReadonlySignal<T> | (() => T);
    fallback?: ComponentChildren;
    children: ComponentChildren | ((value: NonNullable<T>) => ComponentChildren);
}
export declare function Show<T = boolean>(props: ShowProps<T>): ComponentChildren | null;
export declare namespace Show {
    var displayName: string;
}
interface ForProps<T> {
    each: Signal<Array<T>> | ReadonlySignal<Array<T>> | (() => Array<T> | Signal<Array<T>> | ReadonlySignal<Array<T>>);
    fallback?: ComponentChildren;
    getKey?: (item: T, index: number) => string | number;
    children: (value: T, index: number) => ComponentChildren;
}
export declare function For<T>(props: ForProps<T>): ComponentChildren | null;
export declare namespace For {
    var displayName: string;
}
export declare function useLiveSignal<T>(value: T): Signal<T>;
export declare function useSignalRef<T>(value: T): Signal<T> & {
    current: T;
};
export {};
