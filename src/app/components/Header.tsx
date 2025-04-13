"use client";

import { useState } from "react";
import Link from "next/link";
import { Book, List, MagnifyingGlass, XCircle } from "@phosphor-icons/react";
import Logo from "@/assets/icons/Logo";
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
        <header className="sticky top-0 z-50 w-full bg-card">
            <div className="container mx-auto flex h-16 items-center justify-between">
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
                                    <span>Courses</span>
                                </Link>
                                <Link href="#" className="text-sm">
                                    All Courses
                                </Link>
                                <Link href="#" className="text-sm">
                                    Categories
                                </Link>
                                <Link href="#" className="text-sm">
                                    Popular
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="flex items-center gap-2">
                        <Logo className="bg-transparent text-primary size-45" />
                    </Link>
                    <div className="flex items-center mx-10 gap-6">
                        <Link href="#" className="text-sm font-medium">
                            All Courses
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="link"
                                    className="text-sm font-medium p-0"
                                >
                                    Categories
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    Programación
                                </DropdownMenuItem>
                                <DropdownMenuItem>Diseño</DropdownMenuItem>
                                <DropdownMenuItem>Marketing</DropdownMenuItem>
                                <DropdownMenuItem>Negocios</DropdownMenuItem>
                                <DropdownMenuItem>Fotografía</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="#" className="text-sm font-medium">
                            Popular
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {isSearchOpen ? (
                        <div className="flex gap-2">
                            <Input
                                type="search"
                                placeholder="Search courses..."
                                className="w-[200px] md:w-[300px]"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsSearchOpen(false)}
                            >
                                <XCircle className="size-5" />
                                <span className="sr-only">Close Search</span>
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <MagnifyingGlass className="size-5" />
                            <span className="sr-only">Search</span>
                        </Button>
                    )}
                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden md:inline-flex"
                    >
                        LogIn
                    </Button>
                    <Button size="sm">SignIn</Button>
                </div>
            </div>
        </header>
    );
}
