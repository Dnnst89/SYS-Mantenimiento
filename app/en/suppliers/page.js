import HomeHero from "@/components/home/HomeHero";
import SuppliersPageView from "@/components/suppliers/SuppliersPageView";

export const metadata = {
  title: "Suppliers | SYS Mantenimiento",
  description:
    "Partner network, organizations SYS Mantenimiento works with, and how to reach us for supply in Costa Rica.",
};

export default function EnglishSuppliersPage() {
  return (
    <div className="flex flex-1 flex-col">
      <HomeHero locale="en" headingId="suppliers-hero-heading" priority={false} />
      <SuppliersPageView locale="en" />
    </div>
  );
}
