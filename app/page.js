import HomeLanding from "@/components/home/HomeLanding";

export const metadata = {
  title: "Inicio | SYS Mantenimiento",
};

export default function Home() {
  return (
    <HomeLanding
      crumbs={[{ label: "Inicio" }]}
      bannerTitle="Inicio"
      locale="es"
    />
  );
}
