'use client'
import { ReactNode, useMemo, useState } from 'react'
import Duration from '@/app/profile/components/duration'

interface TitleProps extends Pick<SectionItemProps, 'title' | 'subTitle' | 'id'> {}

function Title ({ id, title, subTitle }: TitleProps) {
  return (
    <div className="peer">
      <h2 className="break-keep" id={id}>{title}</h2>
      {subTitle !== undefined && <div className="font-medium">{subTitle}</div>}
    </div>
  )
}

interface PrintCheckProps {
  print: boolean
  onClick: (print: boolean) => void
}

function PrintCheck ({ print, onClick }: PrintCheckProps) {
  return (
    <input
      title="출력"
      type="checkbox"
      checked={print}
      className="print:hidden invisible peer-hover:visible hover:visible absolute -left-3 top-1.5"
      onChange={() => onClick(!print)}
    />
  )
}

interface SectionItemProps {
  children?: ReactNode
  id?: string
  title: string
  duration?: {
    from: Date
    to?: Date
  }
  subTitle?: string
}

export default function SectionItem ({ children, title, duration, subTitle, id }: SectionItemProps) {
  const [print, setPrint] = useState(true)
  const classNames = useMemo(() => {
    const set = new Set<string>([
      'relative',
      'before:absolute',
      'before:border-b',
      'before:border-b-[rgb(var(--foreground-rgb))]',
      'before:h-px',
      'before:w-full',
      'before:-top-8',
      'first:before:border-0',
      'subsection'
    ])
    if (print) {
      set.delete('print:hidden')
    } else {
      set.add('print:hidden')
    }
    return Array.from(set).join(' ')
  }, [print])

  return (
    <div className={classNames}>
      <div className="flex flex-col flex-wrap print:flex-row sm:flex-row sm:items-start justify-between">
        <div className="flex flex-row">
          <Title title={title} subTitle={subTitle} id={id} />
          <PrintCheck print={print} onClick={setPrint} />
        </div>
        {duration !== undefined && <Duration from={duration.from} to={duration.to} />}
      </div>
      {children}
    </div>
  )
}
