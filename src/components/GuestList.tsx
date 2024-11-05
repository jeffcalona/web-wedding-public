import ButonsGuest from "./ui/ButonsGuest"
import { getGuests } from "@/actions/guestsAction"

const GuestList = async () => {

    const guestData = await getGuests()


    return (
        <ul className="w-[380px] my-7 fontStyles space-y-2 overflow-y-scroll hiddenScrollBar">
            {guestData.map((data) => (
                <ButonsGuest id={data.id} key={data.id} name={data.name} url={data.url} />
            ))}
        </ul>
    )
}

export default GuestList