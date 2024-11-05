import FormRegister from "@/components/FormRegister"

const registerPage = ({
    searchParams
}: {
    searchParams: { token: string }
}) => {

    const noToken = searchParams.token === 'false'

    return (
        <>
            <h2 className="uppercase h-[25%] flex justify-center items-end pb-14 font-bold">regístrate</h2>
            <div className="h-[55%] w-[250px] m-auto">
                <FormRegister />
            </div>
            {noToken && (
                <p>No se pudo confirmar el correo. <br /> Regístrate</p>
            )}

        </>
    )
}

export default registerPage