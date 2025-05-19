"use client";

import Link from "next/link";
import { Book, List, UserCircle, Icon } from "@phosphor-icons/react";
import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/components/auth-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Definición centralizada de los items de navegación (se mantiene)
interface NavItem {
    href?: string;
    label: string;
    icon?: Icon;
    type: "link" | "categories_dropdown" | "button";
    action?: () => void;
}

const navigationLinks: NavItem[] = [
    { href: "/courses", label: "Courses", icon: Book, type: "link" },
    { label: "Categories", type: "categories_dropdown" },
    { href: "#popular", label: "Popular", type: "link" },
];

// Helper component for Categories Dropdown (se mantiene)
const CategoriesDropdown = ({
    align = "end",
    triggerClassName = "text-sm font-medium p-0",
    inMobileMenu = false,
}: {
    align?: "start" | "end" | "center";
    triggerClassName?: string;
    inMobileMenu?: boolean;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            {inMobileMenu ? (
                <div className="flex w-full items-center gap-3 py-2 text-md font-medium hover:bg-accent p-2 rounded-md hover:cursor-pointer">
                    <span>Categories</span>
                </div>
            ) : (
                <Button variant="link" className={triggerClassName}>
                    Categories
                </Button>
            )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align={align}>
            <DropdownMenuItem>Programación</DropdownMenuItem>
            <DropdownMenuItem>Diseño</DropdownMenuItem>
            <DropdownMenuItem>Marketing</DropdownMenuItem>
            <DropdownMenuItem>Negocios</DropdownMenuItem>
            <DropdownMenuItem>Fotografía</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);

// Ya no hay un componente MobileMenu separado. Su lógica se integra abajo.

export default function Header() {
    const { user, loading } = useAuth(); // user puede ser null o tener { id, email, first_name, last_name, avatar }

    return (
        <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="container mx-auto px-4">
                {/* ÚNICA FILA PRINCIPAL para todos los elementos del header */}
                <div className="flex h-16 items-center justify-between gap-4">
                    {/* Izquierda: Logo y Navegación de Escritorio */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            aria-label="Home page"
                            className="flex items-center"
                        >
                            <Logo className="text-primary h-8 w-auto sm:h-9" />
                        </Link>
                        {/* Navegación para Escritorio (lg y superior) */}
                        <nav className="hidden lg:flex items-center gap-5">
                            {navigationLinks.map((item) => {
                                if (item.type === "link" && item.href) {
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                }
                                if (item.type === "categories_dropdown") {
                                    return (
                                        <CategoriesDropdown key={item.label} />
                                    );
                                }
                                return null;
                            })}
                        </nav>
                    </div>

                    {/* Derecha: Búsqueda (tablets/escritorio), Auth (escritorio), y Trigger del Menú Móvil */}
                    <div className="flex items-center gap-2 md:gap-3">
                        {/* Barra de Búsqueda para md y superior */}
                        <div className="hidden md:block">
                            <Input
                                type="search"
                                placeholder="Search courses..."
                                className="w-[180px] lg:w-[250px] h-9"
                            />
                        </div>

                        {/* Auth para Escritorio (lg y superior) */}
                        <div className="hidden lg:flex items-center gap-3">
                            {loading ? (
                                <div className="h-9 w-24 animate-pulse rounded-md bg-muted"></div>
                            ) : user ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="relative h-9 w-9 rounded-full"
                                        >
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage
                                                    src={
                                                        user.avatar || undefined
                                                    }
                                                    alt={
                                                        (user.first_name ||
                                                            "User") +
                                                        " " +
                                                        (user.last_name || "")
                                                    }
                                                />
                                                <AvatarFallback>
                                                    {(user.first_name?.charAt(
                                                        0
                                                    ) || "U") +
                                                        (user.last_name?.charAt(
                                                            0
                                                        ) || "")}
                                                </AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-56"
                                    >
                                        <DropdownMenuLabel>
                                            <div className="flex flex-col space-y-1">
                                                <p className="text-sm font-medium leading-none truncate">
                                                    {user.first_name}{" "}
                                                    {user.last_name}
                                                </p>
                                                <p className="text-xs leading-none text-muted-foreground truncate">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <Link href="/profile">
                                            <DropdownMenuItem>
                                                Profile
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link href="/dashboard">
                                            <DropdownMenuItem>
                                                Dashboard
                                            </DropdownMenuItem>
                                        </Link>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            onClick={() =>
                                                alert("Handle Logout")
                                            }
                                        >
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <>
                                    <Link href="/login">
                                        <Button variant="outline" size="sm">
                                            Log In
                                        </Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button size="sm">Sign Up</Button>
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Trigger del Menú Móvil (oculto en lg y superior) */}
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        aria-label="Abrir menú"
                                    >
                                        <List className="h-5 w-5" />
                                    </Button>
                                </SheetTrigger>
                                {/* Contenido del Menú Móvil AHORA INCRUSTADO AQUÍ */}
                                <SheetContent
                                    side="left"
                                    className="w-[300px] sm:w-[350px] pt-10"
                                >
                                    <div className="px-4 mb-6">
                                        <Input
                                            type="search"
                                            placeholder="Search courses..."
                                            className="w-full"
                                        />
                                    </div>
                                    <nav className="flex flex-col gap-1 px-4">
                                        {navigationLinks.map((item) => {
                                            // Usamos navigationLinks directamente
                                            if (
                                                item.type === "link" &&
                                                item.href
                                            ) {
                                                return (
                                                    <Link
                                                        key={`mobile-${item.label}`}
                                                        href={item.href}
                                                        className="flex items-center gap-3 py-2 text-md font-medium hover:bg-accent p-2 rounded-md"
                                                    >
                                                        {item.icon && (
                                                            <item.icon className="h-5 w-5" />
                                                        )}
                                                        <span>
                                                            {item.label}
                                                        </span>
                                                    </Link>
                                                );
                                            }
                                            if (
                                                item.type ===
                                                "categories_dropdown"
                                            ) {
                                                return (
                                                    <CategoriesDropdown
                                                        key={`mobile-${item.label}`}
                                                        align="start"
                                                        inMobileMenu={true}
                                                    />
                                                );
                                            }
                                            return null;
                                        })}

                                        <DropdownMenuSeparator className="my-2" />

                                        {user ? ( // Usamos user directamente
                                            <>
                                                <DropdownMenuLabel className="px-2 text-xs text-muted-foreground">
                                                    MY ACCOUNT
                                                </DropdownMenuLabel>
                                                <Link
                                                    href="/profile"
                                                    className="w-full"
                                                >
                                                    <Button
                                                        variant="ghost"
                                                        className="w-full justify-start items-center gap-3 p-2 text-md h-auto"
                                                    >
                                                        <Avatar className="h-7 w-7">
                                                            <AvatarImage
                                                                src={
                                                                    user.avatar ||
                                                                    undefined
                                                                }
                                                                alt={
                                                                    user.first_name ||
                                                                    "User"
                                                                }
                                                            />
                                                            <AvatarFallback>
                                                                {(user.first_name?.charAt(
                                                                    0
                                                                ) || "") +
                                                                    (user.last_name?.charAt(
                                                                        0
                                                                    ) || "")}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <span className="truncate">
                                                            {user.first_name}{" "}
                                                            {user.last_name}
                                                        </span>
                                                    </Button>
                                                </Link>
                                                <Link
                                                    href="/dashboard"
                                                    className="text-sm p-2 hover:bg-accent rounded-md block"
                                                >
                                                    Dashboard
                                                </Link>
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-start p-2 text-md"
                                                    onClick={() =>
                                                        alert("Handle Logout")
                                                    }
                                                >
                                                    Log Out
                                                </Button>
                                            </>
                                        ) : (
                                            <div className="mt-4 flex flex-col gap-2">
                                                <Link
                                                    href="/login"
                                                    className="w-full"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="w-full justify-start text-md p-2"
                                                    >
                                                        Log In
                                                    </Button>
                                                </Link>
                                                <Link
                                                    href="/signup"
                                                    className="w-full"
                                                >
                                                    <Button className="w-full justify-start text-md p-2">
                                                        Sign Up
                                                    </Button>
                                                </Link>
                                            </div>
                                        )}
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
