import Profile from '@/components/sections/profile'
import Careers from '@/components/sections/careers'
import Educations from '@/components/sections/educations'
import Projects from '@/components/sections/projects'
import Github from '@/components/sections/github'

export default async function Home () {
  return (
    <main className="flex flex-col px-4 my-0 max-w-3xl mx-auto">
      <Profile />
      <Careers />
      <Educations />
      <Projects />
      <Github />
    </main>
  )
}
