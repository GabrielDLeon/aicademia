import { SignupForm } from "./SignupForm";

export default function SignUpPage() {
    return (
        <div className="flex bg-gradient-to-t from-background to-card min-h-svh flex-col items-center justify-center bg-muted">
            <div className="w-full max-w-md">
                <SignupForm />
            </div>
        </div>
    );
}
