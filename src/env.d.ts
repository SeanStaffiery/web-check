/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Global JSX namespace for React 19 compatibility
declare global {
  namespace JSX {
    interface Element extends React.JSX.Element {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }
}

export {};
