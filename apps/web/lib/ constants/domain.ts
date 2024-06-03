export const APP_HOSTNAMES = new Set([
    process.env.NEXT_PUBLIC_DOMAIN,
    'localhost:3000'
])

export const APP_DOMAIN = process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ? 
    `https://${process.env.NEXT_PUBLIC_DOMAIN}` : 'http://localhost:3000'


export const ADMIN_HOSTNAMES = new Set([
    `admin.${process.env.NEXT_PUBLIC_DOMAIN}`,
    'admin.localhost:3000'
])

export const ADMIN_DOMAIN = process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ?
    `https://admin.${process.env.NEXT_PUBLIC_DOMAIN}` : 'http://admin.localhost:3000'