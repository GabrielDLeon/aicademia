"use client";

import { Clock, Star } from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  slug: string;
  title: string;
  cover?: string;
  instructor: {
    name: string;
    avatar: string;
  };
  price: number;
  originalPrice?: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "None";
  duration: string;
}

export default function CourseCard({
  slug,
  title = "Course Title",
  cover,
  instructor = {
    name: "Instructor Name",
    avatar: "",
  },
  price = 99.99,
  originalPrice = 99.99,
  rating = 1.0,
  level = "None",
  duration = "8 hours",
}: CourseCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const getLevelColor = () => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-blue-100 text-blue-800";
      case "Advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Link href={`/courses/${slug}`}>
      <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col p-0 pb-4">
        <div className="relative">
          <Image
            src={cover || "/img/courses/course-cover.webp"}
            width={600}
            height={400}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300"
          />
          {discount > 0 && (
            <Badge className="absolute top-2 right-2 bg-card text-card-foreground">
              {discount}% descuento
            </Badge>
          )}
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <Badge
              variant="outline"
              className={`${getLevelColor()} font-normal`}
            >
              {level}
            </Badge>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          <CardTitle className="text-lg mt-2">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={instructor.avatar || "/placeholder.svg"}
                alt={instructor.name}
              />
              <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">
              {instructor.name}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock
              className="size-4 fill-muted-foreground mr-1"
              color="currentColor"
            />
            <span>{duration}</span>
          </div>
        </CardContent>
        <CardFooter className="pt-2 flex flex-wrap justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                {price.toLocaleString("es-ES", {
                  style: "currency",
                  currency: "EUR",
                })}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {originalPrice.toLocaleString("es-ES", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </span>
              )}
            </div>
          </div>
          <Button>Inscribirse</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
