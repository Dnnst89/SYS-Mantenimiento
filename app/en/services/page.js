import SimpleRoutePage from "@/components/SimpleRoutePage";

export const metadata = {
  title: "Services | SYS Mantenimiento",
};

export default function EnglishServicesPage() {
  return (
    <SimpleRoutePage
      crumbs={[
        { href: "/en", label: "Home" },
        { label: "Services" },
      ]}
      description="Plumbing, roofing, landscaping, electromechanical work, carpentry, welding and more. Service details coming soon."
      title="Services"
    />
  );
}
