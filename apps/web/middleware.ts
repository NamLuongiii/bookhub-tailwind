import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { AdminMiddleware, AppMiddleware, parse } from "./lib";
import { ADMIN_DOMAIN, ADMIN_HOSTNAMES, APP_DOMAIN, APP_HOSTNAMES } from "./lib/ constants";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { domain } = parse(request)
  
  if (APP_HOSTNAMES.has(domain)) {
    // app middleware logic
    return AppMiddleware(request)
  }

  if (ADMIN_HOSTNAMES.has(domain)) {
    // admin middleware logic
    return AdminMiddleware(request)
  }
  
  return NextResponse.redirect(
    new URL(process.env.NEXT_PUBLIC_VERCEL_APP == 'production' ?
    String(process.env.NEXT_PUBLIC_APP_DOMAIN) : 
    'localhost:3000')
  );
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
      /*
       * Match all paths except for:
       * 1. /api/ routes
       * 2. /_next/ (Next.js internals)
       * 3. /_proxy/ (special page for OG tags proxying)
       * 4. /_static (inside /public)
       * 5. /_vercel (Vercel internals)
       * 6. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt, etc.)
       */
      "/((?!api/|_next/|_proxy/|_static|_vercel|[\\w-]+\\.\\w+).*)",
    ],
  };