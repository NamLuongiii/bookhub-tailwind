import { NextRequest } from "next/server";

export function parse(request: NextRequest) {
    let domain = request.headers.get('host')?.toString()
    domain = domain ? domain.replace('www.', '').toLowerCase() : ''
    const path = request.nextUrl.pathname
    
    const searchParams = request.nextUrl.searchParams.toString()
    const searchParamsString = searchParams.length > 0 ? `?${searchParams}` : ''
    const fullPath = `${path}${searchParamsString}`

    return { domain, path, fullPath, searchParams }
}