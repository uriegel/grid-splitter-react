/// <reference types="react" />

export declare type SplitterGridProps = {
    first: JSX.Element
    second: JSX.Element
    isVertical: boolean
    isSecondVisible: boolean
    positionChanged: ()=>void
}
export declare const SplitterGrid: ({ first, second, isVertical, isSecondVisible, positionChanged }: SplitterGridProps) => JSX.Element