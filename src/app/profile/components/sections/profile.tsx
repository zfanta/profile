import Section from "@/app/profile/components/section"
import { profile } from "@/data"

export default function Profile() {
  return (
    <Section id="profile">
      <div>
        <div className="text-3xl">{profile.name}</div>
        <div>{profile.email}</div>
      </div>
    </Section>
  )
}
