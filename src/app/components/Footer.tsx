"use client";
import {
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
    Palette,
    XLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t w-full bg-background py-6 md:py-12 px-4 md:px-6 mt-16">
            <div className="container mx-auto">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Palette className="h-6 w-6" />
                            <span className="font-bold">AiCademia</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            AiCademia is a platform offering free and premium AI
                            courses to help you level up your skills in machine
                            learning, data science, and beyond.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <FacebookLogo className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <XLogo className="h-5 w-5" />
                                <span className="sr-only">X</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <InstagramLogo className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <LinkedinLogo className="h-5 w-5" />
                                <span className="sr-only">Linkedin</span>
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Courses</h3>
                        <nav className="flex flex-col space-y-2 text-sm">
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Machine Learning
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Deep Learning
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Data Science
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                AI for Beginners
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                NLP & Computer Vision
                            </Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">About</h3>
                        <nav className="flex flex-col space-y-2 text-sm">
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Our Mission
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Team
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Blog
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Newsroom
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Legal</h3>
                        <nav className="flex flex-col space-y-2 text-sm">
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Terms of Use
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Cookie Settings
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} AiCademia. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
