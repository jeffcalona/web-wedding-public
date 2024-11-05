import FormLogin from "@/components/FormLogin"

const loginPage = ({
    searchParams
}: {
    searchParams: { token: string, expired: string, verificated: string }
}) => {

    const isToken = searchParams.token === 'true'
    const tokenExpired = searchParams.expired === 'true'
    const tokenVerificated = searchParams.verificated === 'true'
    const noParams = searchParams.token === '' || searchParams.expired === '' || searchParams.verificated === ''

    return (
        <>
            <h2 className="uppercase h-[25%] flex justify-center items-end pb-14 font-bold">inicia sesión</h2>
            <div className="h-[55%] w-[250px] m-auto">
                <FormLogin />
                {!isToken && noParams && (
                    <p className="text-center mt-4">El token no existe</p>
                )}
                {tokenExpired && (
                    <p className="text-center mt-4 font-bold">La confirmación de su correo ha caducado. <br /> Intenta iniciar sesión nuevamente</p>
                )}
                {tokenVerificated && (
                    <p className="text-center mt-4">El correo ya ha sido verificado anteriormente. <br /> Inicia sesión</p>
                )}
                {isToken && (
                    <p className="text-center mt-4">Correo verificado con éxito. <br />Inicia sesión</p>
                )}
            </div>
        </>
    )
}

export default loginPage