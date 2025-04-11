"use client";

import { IconContext } from "@phosphor-icons/react";

export function PhosphorProvider({ children }: { children: React.ReactNode }) {
    return (
        <IconContext.Provider
            value={{
                color: "#1FDFA7",
                size: 32,
                weight: "duotone",
                mirrored: false,
            }}
        >
            {children}
        </IconContext.Provider>
    );
}
