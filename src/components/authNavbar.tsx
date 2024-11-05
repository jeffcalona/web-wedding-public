'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import ButtonLogOut from "./ui/ButtonLogOut"

const AuthNavbar = () => {

    const pathName = usePathname()
    const lastSegment = pathName.split('/').pop()

    return (
        <nav className="fixed top-5 right-10">
            {lastSegment === 'register' ?
                <Link href='/admin/login' className="text-slate-600 hover:text-black cursor-pointer">Iniciar sesión</Link>
                :
                lastSegment === 'login' ?
                    <Link href='/admin/register' className="text-slate-600 hover:text-black cursor-pointer">Regístrate</Link>
                    :
                    <ButtonLogOut />
            }
        </nav>
    )
}

export default AuthNavbar