import { marked, Renderer } from "marked"
import style from "./markdown.module.css"

class CustomRenderer extends Renderer {
  heading(text: string, level: 1 | 2 | 3 | 4 | 5 | 6, raw: string, slugger: marked.Slugger): string {
    const newLevel = Math.min(level + 2, 6) as typeof level
    return super.heading(text, newLevel, raw, slugger)
  }
}
const renderer = new CustomRenderer()

interface MarkdownProps {
  children: string
  className?: string
}
export default function Markdown({ children, className }: MarkdownProps) {
  const __html = marked.parse(children, {
    renderer,
    // TODO: deprecated
    headerIds: false,
    mangle: false,
  })
  return <div className={`${className} ${style.markdown}`} dangerouslySetInnerHTML={{ __html }} />
}
