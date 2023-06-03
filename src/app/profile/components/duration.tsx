interface DurationProps {
  from: Date
  to?: Date
}

export default function Duration ({ from, to }: DurationProps) {
  const [fromText, toText] = [from, to].map(date => {
    if (date === undefined) return '현재'
    return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`
  })

  return (
    <div className="flex flex-row gap-1">
      <span>{fromText}</span>
      <span>~</span>
      <span>{toText}</span>
    </div>
  )
}
