import { NextRequest, NextResponse } from "next/server";
import { parse } from "./utils/parse";

export function AdminMiddleware(request: NextRequest) {
    const {fullPath} = parse(request)
    return NextResponse.rewrite(new URL(`/admin.bookhub.com${fullPath}`, request.url))
}