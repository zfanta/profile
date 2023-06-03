import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  id: string
  title?: string
}
export default function Section({ children, id, title }: SectionProps) {
  return (
    <section
      id={id}
      className="flex flex-col border-b-2 border-b-[rgb(var(--foreground-rgb))] py-8 print:flex-row md:flex-row"
    >
      {title !== undefined && (
        <div className="mb-2 print:basis-2/12 md:basis-2/12">
          <h1 className="lg:sticky lg:top-8">{title}</h1>
        </div>
      )}
      <div className="flex flex-col gap-16 print:basis-10/12 md:basis-10/12">{children}</div>
    </section>
  )
}
