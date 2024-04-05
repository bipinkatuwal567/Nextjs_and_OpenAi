import { SignUp } from "@clerk/nextjs";

export default function SignUpPage(){
    return(
        <div className="min-h-screen bg-white/80 flex justify-center items-center">
            <SignUp />
        </div>
    )
}