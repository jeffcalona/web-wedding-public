import AuthNavbar from "@/components/authNavbar";
import LogoBoda from "@/components/ui/LogoBoda";

export default function adminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="full flex flex-col h-[100dvh]">
            <header className="flex justify-center items-end h-[24%] pb-2">
                <AuthNavbar />
                <LogoBoda height={300} />
            </header>
            <section className="h-[76%]">
                {children}
            </section>
        </div>
    )
}