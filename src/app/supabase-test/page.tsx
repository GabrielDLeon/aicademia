// app/supabase-server-test/page.tsx
import { createClient } from "@/app/lib/supabase/server";

export default async function Page() {
    const supabase = await createClient();

    const { data, error } = await supabase.from("course").select("*");

    if (error) return <div>❌ Error: {error.message}</div>;

    return (
        <div>
            <h1>Productos desde el servidor</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
