declare module '*.svg';
declare module '*.png';
declare module '*.css';

declare interface Document {
    lastChild: HTMLHtmlElement
}

declare interface Window {
    supportES2023?: boolean
    root: HTMLDivElement
}
