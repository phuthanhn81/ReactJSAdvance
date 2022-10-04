/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_ECOMMERCE_ENDPOINT: string;
    readonly VITE_ECOMMERCE_SECRET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}