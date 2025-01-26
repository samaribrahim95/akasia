import Solutions from "@/components/solutions";
import Header from "../../components/header";
import ContactInfo from "@/components/contactInfo";
import Brief from "@/components/brief";
import TrimParagraph from "@/components/trimParagraph";
import CommonQuestions from "@/components/commonQuestions";

export default function Home() {
  return (
    <div className="mt-20">
      <Header />
      <Brief />
      <Solutions />
      <CommonQuestions />
      <TrimParagraph />
      <ContactInfo />
    </div>
  );
}
