/* eslint-disable @typescript-eslint/no-explicit-any */
// src/vite-env.d.ts
/// <reference types="vite/client" />


interface ImportMeta {
    globEager<Module = { [key: string]: any }>(pattern: string): Record<string, Module>
  }
  
