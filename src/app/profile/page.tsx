import Profile from '@/app/profile/components/sections/profile'
import Careers from '@/app/profile/components/sections/careers'
import Educations from '@/app/profile/components/sections/educations'
import Projects from '@/app/profile/components/sections/projects'
import Github from '@/app/profile/components/sections/github'

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
