export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto container px-4 sm:px-6 lg:px-8 mt-28 lg:mt-16">
      <div className="py-12">{children}</div>
    </div>
  );
}
