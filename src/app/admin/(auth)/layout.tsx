import AnillosIcon from "@/components/ui/AnillosIcon";

export default function authLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full flex flex-col">
            {children}
            <footer className="h-[20%] m-auto">
                <AnillosIcon className="transform cursor-pointer fill-[#ffb700]" />
            </footer>
        </div>
    )
}