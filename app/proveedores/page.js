import HomeHero from "@/components/home/HomeHero";
import SuppliersPageView from "@/components/suppliers/SuppliersPageView";

export const metadata = {
  title: "Proveedores | SYS Mantenimiento",
  description:
    "Red de partners, organizaciones con las que opera SYS Mantenimiento y contacto para suministros en Costa Rica.",
};

export default function ProveedoresPage() {
  return (
    <div className="flex flex-1 flex-col">
      <HomeHero locale="es" headingId="proveedores-hero-heading" priority={false} />
      <SuppliersPageView locale="es" />
    </div>
  );
}
