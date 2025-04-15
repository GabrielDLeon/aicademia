import AccountForm from "./AccountForm";
import { createClient } from "@/app/lib/supabase/server";
export default async function Account() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    return <AccountForm user={user} />;
}
