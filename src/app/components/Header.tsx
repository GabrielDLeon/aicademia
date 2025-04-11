"use client";

import { useState } from "react";
import Link from "next/link";
import { Book, List, MagnifyingGlass, XCircle } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2 md:gap-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <List className="h-5 w-5" />
                                <span className="sr-only">Abrir menú</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="w-[300px] sm:w-[400px]"
                        >
                            <nav className="flex flex-col gap-4 py-4">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Book className="h-5 w-5" />
                                    <span>Cursos</span>
                                </Link>
                                <Link href="#" className="text-sm">
                                    Todos los cursos
                                </Link>
                                <Link href="#" className="text-sm">
                                    Categorías
                                </Link>
                                <Link href="#" className="text-sm">
                                    Novedades
                                </Link>
                                <Link href="#" className="text-sm">
                                    Populares
                                </Link>
                                <Link href="#" className="text-sm">
                                    Instructores
                                </Link>
                                <Link href="#" className="text-sm">
                                    Blog
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="flex items-center gap-2">
                        <Book className="size-8" />
                        <span className="text-xl font-bold">CursosOnline</span>
                    </Link>
                </div>
                <nav className="hidden md:flex md:items-center md:gap-6">
                    <Link href="#" className="text-sm font-medium">
                        Todos los cursos
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="link"
                                className="text-sm font-medium"
                            >
                                Categorías
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Programación</DropdownMenuItem>
                            <DropdownMenuItem>Diseño</DropdownMenuItem>
                            <DropdownMenuItem>Marketing</DropdownMenuItem>
                            <DropdownMenuItem>Negocios</DropdownMenuItem>
                            <DropdownMenuItem>Fotografía</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="#" className="text-sm font-medium">
                        Novedades
                    </Link>
                    <Link href="#" className="text-sm font-medium">
                        Populares
                    </Link>
                    <Link href="#" className="text-sm font-medium">
                        Instructores
                    </Link>
                    <Link href="#" className="text-sm font-medium">
                        Blog
                    </Link>
                </nav>
                <div className="flex items-center gap-2">
                    {isSearchOpen ? (
                        <div className="flex gap-2">
                            <Input
                                type="search"
                                placeholder="Buscar cursos..."
                                className="w-[200px] md:w-[300px]"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsSearchOpen(false)}
                            >
                                <XCircle className="size-5" />
                                <span className="sr-only">Cerrar búsqueda</span>
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <MagnifyingGlass className="size-5" />
                            <span className="sr-only">Buscar</span>
                        </Button>
                    )}
                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden md:inline-flex"
                    >
                        Iniciar sesión
                    </Button>
                    <Button size="sm">Registrarse</Button>
                </div>
            </div>
        </header>
    );
}
