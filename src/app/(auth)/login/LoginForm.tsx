"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppleLogo } from "@phosphor-icons/react";
import { GoogleLogo } from "@phosphor-icons/react";
import { MetaLogo } from "@phosphor-icons/react";

import { login } from "../login/actions";

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            className={cn("flex flex-col gap-6 items-center", className)}
            {...props}
        >
            <Card className="overflow-hidden w-full shadow-2xl shadow-primary/15">
                <CardContent className="p-0">
                    <form className="px-4 md:px-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">
                                    Welcome back
                                </h1>
                                <p className="text-balance text-muted-foreground">
                                    Please sign in to continue your learning
                                    journey
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto text-sm underline-offset-2 hover:underline hover:text-primary"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                />
                            </div>
                            <Button
                                formAction={login}
                                className="w-full text-md"
                            >
                                Login
                            </Button>
                            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                <span className="relative z-10 bg-card px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Button variant="outline" className="w-full">
                                    <AppleLogo
                                        color="white"
                                        className="size-6"
                                    />
                                    <span className="sr-only">
                                        Login with Apple
                                    </span>
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <GoogleLogo
                                        color="white"
                                        className="size-6"
                                    />
                                    <span className="sr-only">
                                        Login with Google
                                    </span>
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <MetaLogo
                                        color="white"
                                        className="size-6"
                                    />
                                    <span className="sr-only">
                                        Login with Meta
                                    </span>
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a
                                    href="/signup"
                                    className="underline underline-offset-4 hover:text-primary"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4">
                By clicking continue, you agree to our{" "}
                <a href="#" className="hover:text-primary">
                    Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="hover:text-primary">
                    Privacy Policy
                </a>
                .
            </div>
        </div>
    );
}
