import CourseCard from "@/app/components/CourseCard";
import { createClient } from "@/app/lib/supabase/client";

const BUCKET_PATH =
  "https://urnfpvprkcyyxfphqeln.supabase.co/storage/v1/object/public/aicademia-public/";

export default async function CoursesCatalogPage() {
  const supabase = await createClient();
  const { data: courses } = await supabase
    .from("courses")
    .select(
      `slug, title, description, level, price, original_price, rating, duration, created_at, updated_at, start_date, end_date, language, cover_image, instructor(first_name, last_name, avatar)`
    );

  if (!courses) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {courses.map((course) => (
        <CourseCard
          key={course.slug}
          cover={`${BUCKET_PATH}${course.cover_image}`}
          {...course}
          instructor={{
            name: `${course.instructor.first_name} ${course.instructor.last_name}`,
            avatar: course.instructor.avatar,
          }}
          originalPrice={course.original_price}
        />
      ))}
    </div>
  );
}
