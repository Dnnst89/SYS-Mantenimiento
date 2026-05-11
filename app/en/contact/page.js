import SimpleRoutePage from "@/components/SimpleRoutePage";

export const metadata = {
  title: "Contact | SYS Mantenimiento",
};

export default function EnglishContactPage() {
  return (
    <SimpleRoutePage
      crumbs={[
        { href: "/en", label: "Home" },
        { label: "Contact" },
      ]}
      description="Get in touch. Contact details are also in the footer."
      title="Contact"
    />
  );
}
