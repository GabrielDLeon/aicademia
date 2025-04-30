"use client";

import Image from "next/image";
import Link from "next/link";
import {
    At,
    Calendar,
    Globe,
    MapPin,
    Chat,
    ShareNetwork,
    User,
    Users,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "../../lib/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfilePage() {
    const { id } = useParams();
    const [profile, setProfile] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        if (!id) return;

        const fetchProfile = async () => {
            try {
                const { data, error } = await supabase
                    .from("users")
                    .select("*")
                    .eq("username", id)
                    .single();

                if (error || !data) {
                    console.error("Error fetching profile", error);
                    setProfile(null);
                } else {
                    setProfile(data);
                }
            } catch (err) {
                console.error("Unexpected error fetching profile", err);
                setProfile(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [id]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center px-4 bg-gradient-to-t from-background to-card">
                <div className="w-full max-w-3xl space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <Skeleton className="h-32 w-32 rounded-full" />

                        <div className="flex-1 space-y-4">
                            <Skeleton className="h-8 w-1/2" />
                            <Skeleton className="h-6 w-1/3" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    </div>

                    <Separator />

                    <Card className="p-6">
                        <Skeleton className="h-8 w-1/2 mb-4" />
                        <div className="space-y-3">
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    if (!profile) {
        notFound();
    }

    return (
        <div className="flex min-h-screen items-center justify-center px-4 bg-gradient-to-t from-background to-card">
            <div className="w-full max-w-3xl space-y-8">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-background shadow-md">
                        <Image
                            src={profile.avatar}
                            alt="Profile picture"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="flex-1 space-y-4">
                        <div>
                            <h1 className="text-2xl font-medium">
                                {profile.username}
                            </h1>
                            <p className="text-muted-foreground">
                                {profile.role}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            {profile.location && (
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} />
                                    <span>{profile.location}</span>
                                </div>
                            )}
                            {profile.website && (
                                <div className="flex items-center gap-1">
                                    <Globe size={16} />
                                    <Link
                                        href={`https://${profile.website}`}
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {profile.website}
                                    </Link>
                                </div>
                            )}
                        </div>

                        {profile.bio && (
                            <p className="text-sm max-w-md">{profile.bio}</p>
                        )}

                        <div className="flex gap-3">
                            <Button>
                                <Chat color="primary-foreground" />
                                Message
                            </Button>
                            <Button variant="outline">
                                <User />
                                Follow
                            </Button>
                            <Button size="icon" variant="ghost">
                                <ShareNetwork className="h-4 w-4" />
                                <span className="sr-only">Share profile</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Contact Information */}
                <Card className="p-6">
                    <h2 className="text-lg font-medium mb-4">
                        Contact Information
                    </h2>
                    <div className="space-y-3">
                        {profile.contant_email && (
                            <div className="flex items-center gap-3">
                                <At className="h-5 w-5 text-muted-foreground" />
                                <span>{profile.contant_email}</span>
                            </div>
                        )}
                    </div>
                </Card>

                {/* Courses */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.slug}
                            {...course}
                            instructor={{
                                name: `${course.instructor.first_name} ${course.instructor.last_name}`,
                                avatar: course.instructor.avatar,
                            }}
                            originalPrice={course.original_price}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    );
}
