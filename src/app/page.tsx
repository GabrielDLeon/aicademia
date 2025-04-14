"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroImage from "../assets/images/hero-image.jpg";
import { MagnifyingGlass, BookOpen, Clock, Users } from "@phosphor-icons/react";
import CourseCard from "./components/CourseCard";

import courses from "@/app/data/courses-placeholder.json";

export default function Home() {
  return (
    <>
      <section className="flex flex-col min-h-screen max-h-[1440px] bg-background">
        {/* Hero Section */}
        <div className="flex flex-1 relative overflow-hidden bg-gradient-to-t from-background to-card items-center justify-center">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <Badge className="mb-2" variant="secondary">
                    New Courses Available
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Elevate Your <span className="text-primary">Skills</span>{" "}
                    Today
                  </h1>
                </div>
                <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                  Discover expert-led courses designed to help you master new
                  skills, advance your career, and unlock your potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center">
                  <div className="relative flex-1 max-w-lg">
                    <MagnifyingGlass className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="What do you want to learn?"
                      className="pl-10 pr-4 py-6 text-base"
                    />
                  </div>
                  <Button size="lg" className="px-8">
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
              <div className="relative h-[350px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/15">
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
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-4xl font-bold">Courses</h2>
          <span className="text-muted-foreground">
            Explore our courses and start learning today.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
    </>
  );
}
