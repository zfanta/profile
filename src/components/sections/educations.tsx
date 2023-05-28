import Section from '@/components/section'
import { educations } from '@/data'
import SectionItem from '@/components/section-item'

interface EducationProps {
  education: (typeof educations)[number]
}
function Education ({ education: {name, from, to, degree, major} }: EducationProps) {
  return (
    <SectionItem
      title={name}
      subTitle={`${degree} ${major}`}
      duration={{from, to}}
    />
  )
}

export default function Educations () {
  return (
    <Section id="education" title="학력">
      {educations.map((education, index) => (
        <Education education={education} key={index} />
      ))}
    </Section>
  )
}
