"use client";

import { useEffect } from "react";

import ErrorPage from "./components/ErrorPage";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return <ErrorPage />;
}
