import Section from '@/components/section'
import { projects } from '@/data'
import Markdown from '@/components/markdown'
import SectionItem from '@/components/section-item'
import Images from '@/components/images'

interface SkillsProps {
  skills: (typeof projects)[number]['skills']
}

function Skills ({ skills }: SkillsProps) {
  return (
    <div>
      <h3 className="leading-8 mt-2">사용 기술</h3>
      <ul className="flex flex-row gap-2 flex-wrap">
        {skills.map((skill, index) => (
          <li key={skill.name}>
            <a href={skill.link} target="_blank">
              {skill.name}
              {index === skills.length - 1 ? '' : ', '}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ProjectProps {
  project: (typeof projects)[number]
}

function Project ({ project }: ProjectProps) {
  return (
    <SectionItem
      title={project.name}
      duration={project}
      subTitle={project.company?.name}
    >
      <Markdown className="mt-4">
        {project.body}
      </Markdown>
      <Images images={project.images} />
      <Skills skills={project.skills} />
    </SectionItem>
  )
}

export default function Projects () {
  return (
    <Section id="education" title="프로젝트">
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </Section>
  )
}
