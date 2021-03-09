/// <reference types="react" />

export declare type SplitterGridProps = {
    first: JSX.Element
    second: JSX.Element
    isVertical?: boolean
    isSecondInvisible?: boolean
    positionChanged?: ()=>void
}
export declare const SplitterGrid: ({ first, second, isVertical, isSecondInvisible, positionChanged }: SplitterGridProps) => JSX.Element