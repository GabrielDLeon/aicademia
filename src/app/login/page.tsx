import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
    return (
        <div className="flex bg-gradient-to-t from-background to-card min-h-svh flex-col items-center justify-center bg-muted">
            <div className="w-full max-w-md">
                <LoginForm />
            </div>
        </div>
    );
}
