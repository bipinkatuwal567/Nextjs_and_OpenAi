import { SignIn } from "@clerk/nextjs";

export default function SignInPage(){
    return(
        <div className="min-h-screen bg-white/80 flex justify-center items-center">
            <SignIn />
        </div>
    )
}