import { NextRequest, NextResponse } from "next/server";
import { parse } from "./utils/parse";

export function AppMiddleware(request: NextRequest) {
    const { fullPath }  = parse(request)
    
    return NextResponse.rewrite(new URL(`/app.bookhub.com${fullPath}`, request.url))
}