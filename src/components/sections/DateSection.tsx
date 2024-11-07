'use client'

import Image from "next/image"
import DateSectionImage from '/public/images/DateSectionImage.jpg'
import { useEffect, useState } from "react"
import ArrowDownComponent from "../ui/ArrowDownComponent"

const DatePage = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // fecha y hora de la boda: 28 de diciembre de 2024 a las 5:30pm
        const weddingDate = new Date(new Date().getFullYear(), 11, 28, 17, 30, 0) // mes 11 es diembre (los meses inician en 0)

        // función para actualizar el tiempo restante
        const updateCountdown = () => {
            const now = new Date()
            const timeDifference = weddingDate.getTime() - now.getTime()

            if (timeDifference > 0) {
                setTimeLeft({
                    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
                    seconds: Math.floor((timeDifference / 1000) % 60)
                })
                setIsLoading(false)
            } else {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                })
            }
        }
        // actualizar cada segundo
        const intervalId = setInterval(updateCountdown, 1000)

        // limpia el intervalo al desmontar el componente
        return () => clearInterval(intervalId)
    }, [])

    return (
        <section id="fecha" className="h-full relative flex justify-center items-center snap-start">
            <Image src={DateSectionImage} alt="Boda Camila y Camilo" layout="fill" objectFit="cover" />
            <div className="bg-black w-full h-full absolute top-0 opacity-35 z-10" />
            <div className="absolute fontStyles text-white w-[360px] z-20 text-center h-[300px] grid">
                <p className="w-[80%] m-auto row-span-1 leading-[17px]">que comience la cuenta regresiva</p>
                <div className="flex justify-center space-x-6 row-span-1">
                    {isLoading === true ? (
                        <p>Cargando cuenta regresiva...</p>
                    ) : (
                        <>
                            <div>
                                <p className="text-[60px]">{timeLeft.days}</p>
                                <p className="text-[10px] tracking-[0.1px] -mt-4">días</p>
                            </div>
                            <div>
                                <p className="text-[60px]">{timeLeft.hours}</p>
                                <p className="text-[10px] tracking-[0.1px] -mt-4">horas</p>
                            </div>
                            <div>
                                <p className="text-[60px]">{timeLeft.minutes}</p>
                                <p className="text-[10px] tracking-[0.1px] -mt-4">minutos</p>
                            </div>
                            <div>
                                <p className="text-[60px]">{timeLeft.seconds}</p>
                                <p className="text-[10px] tracking-[0.1px] -mt-4">segundos</p>
                            </div>
                        </>
                    )}
                </div>
                <p className="mt-4">28. 12. 2024</p>
            </div>
            <ArrowDownComponent />
        </section>
    )
}

export default DatePage