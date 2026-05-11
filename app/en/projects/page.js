import SimpleRoutePage from "@/components/SimpleRoutePage";

export const metadata = {
  title: "Projects | SYS Mantenimiento",
};

export default function EnglishProjectsPage() {
  return (
    <SimpleRoutePage
      crumbs={[
        { href: "/en", label: "Home" },
        { label: "Projects" },
      ]}
      description="Maintenance and construction projects. This section will be completed soon."
      title="Projects"
    />
  );
}
