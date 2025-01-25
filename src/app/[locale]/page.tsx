import Solutions from "@/components/solutions";
import Header from "../../components/header";
import ContactInfo from "@/components/contactInfo";
import Brief from "@/components/brief";
import TrimParagraph from "@/components/trimParagraph";

export default function Home() {
  return (
    <>
      <Header />
      <Brief />
      <Solutions />
      <TrimParagraph />
      <ContactInfo />
    </>
  );
}
