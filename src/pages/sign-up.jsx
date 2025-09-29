import { Navbar } from "../components/header"
import { SignUp } from "../components/sign-up"
import Hyperspeed from "@/components/Hyperspeed"

export function SignUpPage() {
    return (
        <>
            <Navbar />
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-black" />
                <Hyperspeed className="w-full h-full" />
            </div>
            <SignUp />
        </>
    )
}