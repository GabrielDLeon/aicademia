"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/app/lib/supabase/client";
import { type User } from "@supabase/supabase-js";
import Container from "../components/Container";

export default function AccountForm({ user }: { user: User | null }) {
    const supabase = createClient();
    const [loading, setLoading] = useState(true);
    const [fullname, setFullname] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [website, setWebsite] = useState<string | null>(null);
    const [avatar_url, setAvatarUrl] = useState<string | null>(null);

    const getProfile = useCallback(async () => {
        try {
            setLoading(true);

            const { data, error, status } = await supabase
                .from("profiles")
                .select(`first_name, last_name`)
                .eq("id", user?.id)
                .single();

            if (error && status !== 406) {
                console.log(error);
                throw error;
            }

            if (data) {
                setFullname(data.first_name + " " + data.last_name);
                // setUsername(data.username);
                // setWebsite(data.website);
                // setAvatarUrl(data.avatar_url);
            }
        } catch (error) {
            alert("Error loading user data!");
        } finally {
            setLoading(false);
        }
    }, [user, supabase]);

    useEffect(() => {
        getProfile();
    }, [user, getProfile]);

    async function updateProfile({
        username,
        website,
        avatar_url,
    }: {
        username: string | null;
        fullname: string | null;
        website: string | null;
        avatar_url: string | null;
    }) {
        try {
            setLoading(true);

            const { error } = await supabase.from("profiles").upsert({
                id: user?.id as string,
                full_name: fullname,
                username,
                website,
                avatar_url,
                updated_at: new Date().toISOString(),
            });
            if (error) throw error;
            alert("Profile updated!");
        } catch (error) {
            alert("Error updating the data!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <div className="form-widget">
                <h1 className="text-2xl font-bold">Account</h1>
                <p className="text-balance text-muted-foreground">{fullname}</p>

                <div>
                    <form action="/logout" method="post">
                        <button className="button block" type="submit">
                            Log out
                        </button>
                    </form>
                </div>
            </div>
        </Container>
    );
}
