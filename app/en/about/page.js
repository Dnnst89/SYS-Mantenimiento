import SimpleRoutePage from "@/components/SimpleRoutePage";

export const metadata = {
  title: "About | SYS Mantenimiento",
};

export default function EnglishAboutPage() {
  return (
    <SimpleRoutePage
      crumbs={[
        { href: "/en", label: "Home" },
        { label: "About" },
      ]}
      description="Learn about SYS Mantenimiento. Story and team information coming soon."
      title="About"
    />
  );
}
