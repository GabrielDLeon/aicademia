"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "../app/lib/supabase/client";
// import { User } from "@supabase/supabase-js";

const AuthContext = createContext<{
    user: any | null;
    loading: boolean;
}>({ user: null, loading: true });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();

            const {
                data: user,
                error,
                status,
                statusText,
            } = await supabase
                .from("users")
                .select()
                .eq("id", data.user?.id)
                .single();

            setUser(user);
            setLoading(false);
        };

        getUser();

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                const { data } = await supabase.auth.getUser();

                const {
                    data: user,
                    error,
                    status,
                    statusText,
                } = await supabase
                    .from("users")
                    .select()
                    .eq("id", data.user?.id)
                    .single();

                setUser(user);
                setLoading(false);
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
