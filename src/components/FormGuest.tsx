'use client'

import { useForm } from "react-hook-form"
import ButtonC from "./ui/ButtonC"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { z } from "zod"
import { guestSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react"
import { guestAction } from "@/actions/guestAction"

const FormGuest = () => {

    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | null>(null)

    const form = useForm<z.infer<typeof guestSchema>>({
        resolver: zodResolver(guestSchema),
        defaultValues: {
            guestName: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof guestSchema>) => {
        startTransition(async () => {
            const response = await guestAction(values)
            if (response?.error) {
                setError(response.error)
            } else {
                setError(null)
                form.reset()
            }
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} method="POST" className="flex flex-col space-y-3">
                <FormField
                    name="guestName"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <input type="text" placeholder="Cola el nombre del invitado" {...field} className="w-full border border-black p-3 text-center fontStyles !tracking-[1px] focus:outline-none focus:border-slate-500 placeholder:text-[12px] !text-[16px]" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <ButtonC label="invitar" disabled={isPending} />
                {error && (
                    <FormMessage>{error}</FormMessage>
                )}
            </form>
        </Form>
    )
}

export default FormGuest