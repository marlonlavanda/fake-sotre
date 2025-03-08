/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENABLE_FEATURE_X: string;
  readonly VITE_API_KEY: string;
  // add more env vars here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 