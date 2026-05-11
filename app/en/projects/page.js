import HomeLanding from "@/components/home/HomeLanding";

export const metadata = {
  title: "Projects | SYS Mantenimiento",
};

export default function EnglishProjectsPage() {
  return (
    <HomeLanding
      crumbs={[
        { href: "/en", label: "Home" },
        { label: "Projects" },
      ]}
      bannerTitle="Projects"
      locale="en"
    />
  );
}
