"use client";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroImage from "../assets/images/hero-image.jpg";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    MagnifyingGlass,
    BookOpen,
    Clock,
    Users,
    CaretRight,
} from "@phosphor-icons/react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen max-h-[1440px] bg-background">
            {/* Hero Section */}
            <section className="flex-1 relative h-full py-12 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-t from-background to-card ">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="space-y-6">
                            <div>
                                <Badge className="mb-2" variant="secondary">
                                    New Courses Available
                                </Badge>
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                    Elevate Your{" "}
                                    <span className="text-primary">Skills</span>{" "}
                                    Today
                                </h1>
                            </div>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                                Discover expert-led courses designed to help you
                                master new skills, advance your career, and
                                unlock your potential.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center">
                                <div className="relative flex-1 max-w-lg">
                                    <MagnifyingGlass className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="What do you want to learn?"
                                        className="pl-10 pr-4 py-6 text-base rounded-full"
                                    />
                                </div>
                                <Button size="lg" className="px-8 rounded-full">
                                    Explore Courses
                                </Button>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                <div className="flex items-center">
                                    <BookOpen className="mr-1 h-4 w-4" />
                                    <span>1,200+ Courses</span>
                                </div>
                                <div className="flex items-center">
                                    <Users className="mr-1 h-4 w-4" />
                                    <span>50,000+ Students</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="mr-1 h-4 w-4" />
                                    <span>Lifetime Access</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[350px] lg:h-[500px] rounded-2xl overflow-hidden">
                            <Image
                                src={HeroImage}
                                alt="Students learning together"
                                fill
                                className="object-cover rotate-y-180"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 -z-10 opacity-20">
                    <svg
                        width="800"
                        height="800"
                        viewBox="0 0 800 800"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="400"
                            cy="400"
                            r="400"
                            fill="url(#paint0_radial)"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_radial"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(400 400) rotate(90) scale(400)"
                            >
                                <stop stopColor="currentColor" />
                                <stop
                                    offset="1"
                                    stopColor="currentColor"
                                    stopOpacity="0"
                                />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </section>
            {/* Courses Section */}
        </div>
    );
}
