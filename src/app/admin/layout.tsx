import AuthNavbar from "@/components/authNavbar";
import LogoBoda from "@/components/ui/LogoBoda";

export default function adminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen">
            <header className="flex justify-center h-[20%] items-end">
                <AuthNavbar />
                <LogoBoda height={300} />
            </header>
            <section className="h-[80%]">
                {children}
            </section>
        </div>
    )
}