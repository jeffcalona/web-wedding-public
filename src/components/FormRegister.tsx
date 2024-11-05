'use client'

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import ButtonC from "./ui/ButtonC"
import { registerSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { registerAction } from "@/actions/authAction"
import { useToast } from "@/hooks/use-toast"

const FormRegister = () => {

    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()
    const { toast } = useToast()

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof registerSchema>) => {
        setError(null)
        startTransition(async () => {
            const response = await registerAction(values)
            if (response.error) {
                setError(response.error)
            } else {
                toast({
                    title: 'Ya casi está, ve a tu correo',
                    description: 'Ingresa a tu correo y realiza la confirmación'
                })
                router.push('/admin/login')
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
                                <input placeholder="email" className="w-full border border-black p-3 text-center text-sm focus:outline-none focus:border-slate-500 placeholder:uppercase" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <input type="password" placeholder="contraseña" className="w-full border border-black p-3 text-center text-sm focus:outline-none focus:border-slate-500 placeholder:uppercase" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <ButtonC label="registrar" disabled={isPending} />
                {error && (
                    <FormMessage className="flex justify-center font-bold text-center">{error}</FormMessage>
                )}
            </form>
        </Form>
    )
}

export default FormRegister