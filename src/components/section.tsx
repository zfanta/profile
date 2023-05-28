import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id: string
  title?: string
}
export default function Section({children, id, title}: SectionProps) {
  return (
    <section id={id} className="flex flex-col print:flex-row md:flex-row border-b-2 border-b-black py-8">
      {title !== undefined && (
        <div className="md:basis-2/12 print:basis-2/12 mb-2">
          <h1 className="lg:sticky lg:top-8">{title}</h1>
        </div>
      )}
      <div className="flex flex-col gap-16 md:basis-10/12 print:basis-10/12">
        {children}
      </div>
    </section>
  )
}
