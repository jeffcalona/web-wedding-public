'use client'

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import ButtonC from "./ui/ButtonC"
import { loginSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { loginAction } from "@/actions/authAction"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

const FormLogin = () => {

    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        setError(null)
        startTransition(async () => {
            const response = await loginAction(values)
            if (response.error) {
                setError(response.error)
            } else {
                router.push('/admin')
            }
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-2">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <input placeholder="email" className="w-full border border-black p-3 text-center text-[16px] focus:outline-none focus:border-slate-500 placeholder:uppercase lowercase" {...field} />
                            </FormControl>
                            <FormMessage className="font-bold" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <input type="password" placeholder="contraseña" className="w-full border border-black p-3 text-center text-[16px] focus:outline-none focus:border-slate-500 placeholder:uppercase" {...field} />
                            </FormControl>
                            <FormMessage className="font-bold" />
                        </FormItem>
                    )}
                />
                <ButtonC label="iniciar" disabled={isPending} />
                {error && (
                    <FormMessage className="flex justify-center font-bold text-center">{error}</FormMessage>
                )}
            </form>
        </Form>
    )
}

export default FormLogin