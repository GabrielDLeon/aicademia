"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import createClient from "@/app/lib/supabase/server";

export async function login(formData: FormData) {
    const supabase = await createClient();

    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    // Intentar iniciar sesión
    const { data: user, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
    });

    // Manejar error de autenticación
    if (error) {
        console.error(error.message); // Aquí puedes manejar el error más específicamente
        return redirect("/error"); // O redirigir a una página de error
    }

    // Validar si el login fue exitoso
    if (user) {
        // Revalidar caché para asegurarnos de que la sesión esté actualizada
        revalidatePath("/");

        // Redirigir a la página principal o dashboard
        return redirect("/courses");
    }
}
