import SimpleRoutePage from "@/components/SimpleRoutePage";

export const metadata = {
  title: "Suppliers | SYS Mantenimiento",
};

export default function EnglishSuppliersPage() {
  return (
    <SimpleRoutePage
      crumbs={[
        { href: "/en", label: "Home" },
        { label: "Suppliers" },
      ]}
      description="Information for suppliers. Content coming soon."
      title="Suppliers"
    />
  );
}
