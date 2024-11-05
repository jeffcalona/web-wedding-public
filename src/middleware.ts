// import NextAuth from "next-auth"
// import authConfig from "./auth.config"
// import { NextResponse } from "next/server"

// const { auth: middleware } = NextAuth(authConfig)

// const publicRoutes = ['/', '/admin/login', '/admin/register', '/api/auth/verify-email', '/admin/verify-email', '/api/emails']

// export default middleware((req) => {
//     const { nextUrl, auth } = req
//     const isLoggedIn = !!auth?.user

//     if (!publicRoutes.includes(nextUrl.pathname) && !isLoggedIn) {
//         return NextResponse.redirect(new URL('/admin/login', nextUrl))
//     }

//     return NextResponse.next()
// })


// //Este config me lo traje de la documentación de clerk (el cual tambien me sirve para next auth)
// export const config = {
//     matcher: [
//         // Skip Next.js internals and all static files, unless found in search params
//         '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//         // Always run for API routes
//         '/(api|trpc)(.*)',
//     ],
// }


import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { NextResponse } from "next/server"
import { getGuestAction } from "./actions/getGuestAction"

const { auth: middleware } = NextAuth(authConfig)

// const publicRoutes = ['/', '/admin/login', '/admin/register', '/api/auth/verify-email', '/admin/verify-email', '/api/emails']

const publicRoutes = [
    '/^\/$/', // Coincide con la ruta de inicio
    '/^\/admin\/login$/', // Coincide con /admin/login
    '/^\/admin\/register$/', // Coincide con /admin/register
    '/^\/api\/auth\/verify-email$/', // Coincide con /api/auth/verify-email
    '/^\/admin\/verify-email$/', // Coincide con /admin/verify-email
    '/^\/api\/emails$/', // Coincide con /api/emails
    '/^\/guest\/.*$/', // Coincide con cualquier ruta que comienza con /invitado/
];

export default middleware((req) => {
    const { nextUrl, auth } = req
    const isLoggedIn = !!auth?.user

    const guestResponse = getGuestAction(nextUrl.pathname)


    if (!publicRoutes.includes(nextUrl.pathname)) {
        if (!guestResponse || 'error' in guestResponse) {
            return NextResponse.redirect(new URL('/', nextUrl))
        }
        return NextResponse.next()
    }

    if (!publicRoutes.includes(nextUrl.pathname) && !isLoggedIn) {
        return NextResponse.redirect(new URL('/admin/login', nextUrl))
    }

    return NextResponse.next()
})


//Este config me lo traje de la documentación de clerk (el cual tambien me sirve para next auth)
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}