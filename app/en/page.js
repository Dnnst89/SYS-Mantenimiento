import HomeLanding from "@/components/home/HomeLanding";

export const metadata = {
  title: "Home | SYS Mantenimiento",
};

export default function EnglishHomePage() {
  return (
    <HomeLanding
      crumbs={[{ label: "Home" }]}
      bannerTitle="Home"
      locale="en"
    />
  );
}
