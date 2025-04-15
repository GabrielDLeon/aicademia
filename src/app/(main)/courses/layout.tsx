"use client";

import Container from "@/app/components/Container";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="grid lg:grid-cols-[250px_minmax(0,1fr)] gap-8">
        <aside className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Filtrar por categoría</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Desarrollo Web</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Ciencia de Datos</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Diseño</span>
            </label>
          </div>
        </aside>
        <main>{children}</main>
      </div>
    </Container>
  );
}
