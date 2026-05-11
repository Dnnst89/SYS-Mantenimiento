import SimpleRoutePage from "@/components/SimpleRoutePage";

export const metadata = {
  title: "Inicio | SYS Mantenimiento",
};

export default function Home() {
  return (
    <SimpleRoutePage
      crumbs={[{ label: "Inicio" }]}
      description="Bienvenido a SYS Mantenimiento. Pronto encontrarás más información en este sitio."
      title="Inicio"
    />
  );
}
