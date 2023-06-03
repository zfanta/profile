import Section from '@/app/profile/components/section'
import { careers } from '@/data'
import SectionItem from '@/app/profile/components/section-item'
import Markdown from '../markdown'


interface CareerProps {
  career: (typeof careers)[number]
}
function Career ({ career }: CareerProps) {
  return (
    <SectionItem
      title={career.company.name}
      duration={career}
      id={career.company.id}
    >
      <div className="flex flex-col gap-2">
        <Markdown>{career.body}</Markdown>
      </div>
    </SectionItem>
  )
}

export default function Careers () {
  return (
    <Section id="career" title="경력">
      {careers.map((career, index) => (
        <Career career={career} key={index} />
      ))}
    </Section>
  )
}
