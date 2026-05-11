import SimpleRoutePage from "@/components/SimpleRoutePage";

export const metadata = {
  title: "Home | SYS Mantenimiento",
};

export default function EnglishHomePage() {
  return (
    <SimpleRoutePage
      crumbs={[{ label: "Home" }]}
      description="Welcome to SYS Mantenimiento. More content will be available here soon."
      title="Home"
    />
  );
}
