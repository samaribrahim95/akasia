"use client"
import { useTranslations } from "next-intl"
import Tabs from "./tabs";

const CommonQuestions = () => {
  const t = useTranslations();
  const data = [...Array(5)].map((_i, index) => ({
    title: t(`Home.commonQuestions.questions.question_${index + 1}`),
    description: t(`Home.commonQuestions.questions.answer_${index + 1}`),
  }))
  return (
    <div>
      <Tabs data={data} />
    </div>
  )
}

export default CommonQuestions