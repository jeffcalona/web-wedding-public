'use client'

import { useToast } from "@/hooks/use-toast"
import CopyIcon from "./CopyIcon"
import { useState } from "react"
import { deletGuest } from "@/actions/guestsAction"

interface ButtonCopyUrlProps {
    id: string
    name: string
    url: string
}

const ButonsGuest: React.FC<ButtonCopyUrlProps> = ({ id, name, url }) => {

    const { toast } = useToast()

    const [isSwiped, setIsSwiped] = useState(false)

    const handleCopy = async (url: string) => {
        try {
            await navigator.clipboard.writeText(url)
            toast({
                title: 'Página del invitado Copiada en el Portapapeles ✅'
            })
        } catch (error) {
            console.error('Error al copiar la url ', error)
        }
    }

    const handleSwipe = async () => {
        setIsSwiped(true);

        // Mostrar el mensaje de "Eliminar" antes de la confirmación
        const confirmed = await new Promise<boolean>((resolve) => {
            setTimeout(() => {
                const result = window.confirm(`¿Estás seguro de que quieres eliminar a ${name}?`);
                resolve(result);
            }, 300); // Ajusta el tiempo si es necesario
        });

        if (confirmed) {
            await deletGuest(id);
            toast({
                title: 'Invitado eliminado',
            });
            // Aquí puedes agregar lógica para actualizar la lista de invitados en la interfaz, si es necesario.
        } else {
            // Si no se confirma, revertimos el estado
            setIsSwiped(false);
        }
    }

    return (
        <li className='flex justify-between items-center overflow-hidden'>
            <div className={`guest-itemSwipe ${isSwiped ? 'swiped' : ''}`} onTouchStart={handleSwipe}>
                <div className={`transition duration-150 ease-in-out ${isSwiped ? 'swipedName' : 'opacity-100 pl-0'}`}>
                    <p className="text-sm">{name}</p>
                </div>
                <p className={`transition duration-300 ease-in-out absolute left-0 text-sm text-red-500 ${isSwiped ? 'showAction' : 'hiddenAction'}`}>Eliminar</p>
            </div>
            <button onClick={() => handleCopy(url)} className="py-1 px-2 transition duration-150 ease-in-out active:bg-slate-100 motion-reduce:transition-none">
                <CopyIcon width={30} height={30} />
            </button>
        </li>
    )
}

export default ButonsGuest