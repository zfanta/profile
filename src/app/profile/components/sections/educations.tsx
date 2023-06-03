import Section from "@/app/profile/components/section"
import SectionItem from "@/app/profile/components/section-item"
import { educations } from "@/data"

interface EducationProps {
  education: (typeof educations)[number]
}
function Education({ education: { name, from, to, degree, major } }: EducationProps) {
  return <SectionItem title={name} subTitle={`${degree} ${major}`} duration={{ from, to }} />
}

export default function Educations() {
  return (
    <Section id="education" title="학력">
      {educations.map((education, index) => (
        <Education education={education} key={index} />
      ))}
    </Section>
  )
}
