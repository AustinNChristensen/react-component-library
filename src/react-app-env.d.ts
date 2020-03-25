/// <reference types="react-scripts" />

declare module '*.module.scss' {
    const styles: {[className: string]: string};
    export = styles;
}