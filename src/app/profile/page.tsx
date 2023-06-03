import Careers from "@/app/profile/components/sections/careers"
import Educations from "@/app/profile/components/sections/educations"
import Github from "@/app/profile/components/sections/github"
import Profile from "@/app/profile/components/sections/profile"
import Projects from "@/app/profile/components/sections/projects"

export default async function Home() {
  return (
    <main className="mx-auto my-0 flex max-w-3xl flex-col px-4">
      <Profile />
      <Careers />
      <Educations />
      <Projects />
      <Github />
    </main>
  )
}
