import courses from "@/app/data/courses-placeholder.json";
import CourseCard from "@/app/components/CourseCard";

export default function CoursesCatalogPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
