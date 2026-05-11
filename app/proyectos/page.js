import HomeLanding from "@/components/home/HomeLanding";

export const metadata = {
  title: "Proyectos | SYS Mantenimiento",
};

export default function ProyectosPage() {
  return (
    <HomeLanding
      crumbs={[{ href: "/", label: "Inicio" }, { label: "Proyectos" }]}
      bannerTitle="Proyectos"
      locale="es"
    />
  );
}
