import { Octokit } from "octokit"
import { cache } from "react"
import Duration from "@/app/profile/components/duration"
import Section from "@/app/profile/components/section"
import SectionItem from "@/app/profile/components/section-item"
import { github } from "@/data"

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

const getPullRequestData = cache(async (owner: string, repo: string, pull_number: number) => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
    owner,
    repo,
    pull_number,
    headers: { accept: "application/vnd.github+json" },
  })

  if (response.status !== 200) {
    console.error(response)
    throw new Error(`Failed to fetch pull request: /repos/${owner}/${repo}/pulls/${pull_number}`)
  }

  return response.data
})

type PullRequestProps = (typeof github)["pullRequests"][number]

async function PullRequest({ pullNumber, owner, repo }: PullRequestProps) {
  const data = await getPullRequestData(owner, repo, pullNumber)
  return (
    <a href={data.html_url} target="_blank" rel="noreferrer">
      <div>
        <h3>{data.title}</h3>
        <Duration from={new Date(data.created_at)} to={data.merged_at ? new Date(data.merged_at) : undefined} />
        <span>
          {owner}/{repo}#{pullNumber}
        </span>
      </div>
    </a>
  )
}

async function PullRequests() {
  return (
    <SectionItem title="Pull Requests">
      <div className="mt-4 flex flex-col gap-4">
        {github.pullRequests.map(({ pullNumber, owner, repo }) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <PullRequest pullNumber={pullNumber} owner={owner} repo={repo} key={`${owner}/${repo}/${pullNumber}`} />
        ))}
      </div>
    </SectionItem>
  )
}

export default function Github() {
  return (
    <Section id="github" title="Github">
      <a href={github.link} target="_blank" rel="noreferrer">
        {github.link}
      </a>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/* @ts-ignore */}
      <PullRequests />
    </Section>
  )
}
