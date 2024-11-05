import LogoAnillos from "@/components/ui/LogoAnillos";

export default function authLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full flex flex-col">
            {children}
            <footer className="h-[20%] m-auto">
                <LogoAnillos height={25} />
            </footer>
        </div>
    )
}