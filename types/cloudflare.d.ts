declare module "cloudflare:workers" { export const env: Record<string, any>; }
declare interface Fetcher { fetch(request: Request): Promise<Response>; }
declare interface D1Database { prepare(query: string): unknown; }
