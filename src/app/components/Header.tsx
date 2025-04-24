"use client";

import Link from "next/link";
import { Book, List } from "@phosphor-icons/react";
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
import { createClient } from "../lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MobileMenu = ({ user }: { user: any | null }) => (
    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 py-4">
            <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
            >
                <Book className="h-5 w-5" />
                <span>Courses</span>
            </Link>
            <Link href="/courses" className="text-sm">
                Courses
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 text-sm">
                        <span>Categories</span>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem>Programación</DropdownMenuItem>
                    <DropdownMenuItem>Diseño</DropdownMenuItem>
                    <DropdownMenuItem>Marketing</DropdownMenuItem>
                    <DropdownMenuItem>Negocios</DropdownMenuItem>
                    <DropdownMenuItem>Fotografía</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#" className="text-sm">
                Popular
            </Link>
            {user ? (
                <div className="mt-4 flex flex-col gap-2">
                    <Link href="/profile" className="w-full">
                        <Button
                            variant="outline"
                            className="w-full justify-start"
                        >
                            {user.first_name + " " + user.last_name}
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="mt-4 flex flex-col gap-2">
                    <Link href="/login" className="w-full">
                        <Button
                            variant="outline"
                            className="w-full justify-start"
                        >
                            Log In
                        </Button>
                    </Link>
                    <Link href="/signup" className="w-full">
                        <Button className="w-full justify-start">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    </SheetContent>
);

export default function Header() {
    const { user, loading } = useAuth();

    return (
        <header className="fixed top-0 z-50 w-full bg-card">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    {/* First row - Mobile only */}
                    <div className="flex justify-between items-center gap-2 lg:hidden mt-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Logo className="bg-transparent text-primary h-10 w-auto" />
                        </Link>
                        <div className="flex gap-2">
                            {user ? (
                                <div className="hidden md:flex gap-2">
                                    <Link href="/profile" className="w-full">
                                        <Button>{user.first_name}</Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="hidden md:flex gap-2">
                                    <Link href="/login">
                                        <Button variant="outline">
                                            Log In
                                        </Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button>Sign Up</Button>
                                    </Link>
                                </div>
                            )}
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <List className="h-5 w-5" />
                                        <span className="sr-only">
                                            Abrir menú
                                        </span>
                                    </Button>
                                </SheetTrigger>
                                <MobileMenu user={user} />
                            </Sheet>
                        </div>
                    </div>

                    {/* Second row - Mobile only */}
                    <div className="flex items-center gap-2 lg:hidden my-2">
                        <Input
                            type="search"
                            placeholder="Search courses..."
                            className="w-full lg:w-auto"
                        />
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden lg:flex items-center justify-between lg:h-16 w-full">
                        <div className="flex items-center gap-2 md:gap-4">
                            <Link href="/" className="flex items-center gap-2">
                                <Logo className="bg-transparent text-primary size-45" />
                            </Link>
                            <div className="hidden lg:flex items-center gap-6">
                                <Link
                                    href="/courses"
                                    className="text-sm font-medium"
                                >
                                    Courses
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
                                        <DropdownMenuItem>
                                            Diseño
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Marketing
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Negocios
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Fotografía
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Link href="#" className="text-sm font-medium">
                                    Popular
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-2">
                                <Input
                                    type="search"
                                    placeholder="Search courses..."
                                    className="w-[200px] lg:w-[300px]"
                                />
                            </div>

                            {user ? (
                                <Link href="/profile">
                                    <Button className="hidden lg:inline-flex text-sm">
                                        <Avatar className="h-6 w-6">
                                            <AvatarImage
                                                src={user.avatar}
                                                alt={
                                                    user.first_name +
                                                    " " +
                                                    user.last_name
                                                }
                                            />
                                            <AvatarFallback>
                                                {`${user.first_name.charAt(0)}
                                            ${user.last_name.charAt(0)}`}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            {user.first_name +
                                                " " +
                                                user.last_name}
                                        </div>
                                    </Button>
                                </Link>
                            ) : (
                                <>
                                    <Link href="/login">
                                        <Button
                                            variant="outline"
                                            className="hidden lg:inline-flex text-sm"
                                        >
                                            Log In
                                        </Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button className="text-sm hidden lg:inline-flex">
                                            Sign Up
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
