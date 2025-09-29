import { Navbar } from "../components/header"
import { Login } from "../components/login"
import Hyperspeed from "@/components/Hyperspeed"

export function LoginPage() {
    return (
        <>
            <Navbar />
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-black" />
                <Hyperspeed className="w-full h-full" />
            </div>
            <Login />
        </>
    )
}
