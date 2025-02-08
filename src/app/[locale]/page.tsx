import Solutions from "@/components/solutions";
import Header from "../../components/header";
import ContactInfo from "@/components/contactInfo";
import Brief from "@/components/brief";
import CommonQuestions from "@/components/commonQuestions";

export default async function Home() {
  return (
    <div className="mt-[100px]">
      <Header/>
      <Brief />
      <Solutions />
      <CommonQuestions />
      <ContactInfo />
    </div>
  );
}
