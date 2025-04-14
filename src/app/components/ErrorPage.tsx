"use client";

import Link from "next/link";
import { WarningCircle, ArrowLeft, House } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";

interface ErrorPageProps {
    statusCode?: number;
    title?: string;
    message?: string;
}

export default function ErrorPage({
    statusCode = 404,
    title = "Page not found",
    message = "Sorry, we couldn't find the page you're looking for.",
}: ErrorPageProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-background to-card">
            <div className="mx-auto flex w-full max-w-md flex-col items-center px-4 py-8 text-center">
                <div className="mb-6 rounded-full bg-primary/10 p-4">
                    <WarningCircle className="h-12 w-12 text-primary" />
                </div>
                <h1 className="mb-2 text-4xl font-bold text-primary">
                    {statusCode}
                </h1>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                    {title}
                </h2>
                <p className="mb-8 font-extralight text-gray-300">{message}</p>
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                    <Button asChild className="bg-primary hover:bg-primary/80">
                        <Link href="/">
                            <House
                                className="size-5 text-primary-foreground"
                                color="currentColor"
                            />
                            Go to Home
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        className="border-primary text-gray-300 hover:bg-background/10 "
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft
                            className="mr-2 h-4 w-4 text-gray-300"
                            color="currentColor"
                        />
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
    );
}
