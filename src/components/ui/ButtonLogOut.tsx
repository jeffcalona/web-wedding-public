import { handleSignOut } from "@/actions/logoutAction"

const ButtonLogOut = () => {

    return (
        <form action={handleSignOut}>
            <button type="submit">Serrar sesión</button>
        </form>
    )
}

export default ButtonLogOut