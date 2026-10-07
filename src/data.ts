import { StaticImageData } from "next/image"
import jdjFEImage0 from "@/public/projects/jdj-fe/0.png"
import jdjFEImage1 from "@/public/projects/jdj-fe/1.png"
import jdjRNImageDark0 from "@/public/projects/jdj-rn/dark-0.png"
import jdjRNImageDark1 from "@/public/projects/jdj-rn/dark-1.png"
import jdjRNImageLight0 from "@/public/projects/jdj-rn/light-0.png"
import jdjRNImageLight1 from "@/public/projects/jdj-rn/light-1.png"
import webterminalImage from "@/public/projects/webterminal.png"
import ytfmEmailImage from "@/public/projects/ytfm/email.png"
import ytfmWebImage from "@/public/projects/ytfm/web.png"

const skill = {
  react: {
    name: "React",
    link: "https://react.dev/",
  },
  nextjs: {
    name: "Next.js",
    link: "https://nextjs.org/",
  },
  reactNative: {
    name: "React Native",
    link: "https://reactnative.dev/",
  },
  nest: {
    name: "Nest",
    link: "https://nestjs.com/",
  },
  typescript: {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  nodejs: {
    name: "Node.js",
    link: "https://nodejs.org/",
  },
  graphql: {
    name: "GraphQL",
    link: "https://graphql.org/",
  },
  mysql: {
    name: "MySQL",
    link: "https://www.mysql.com/",
  },
  redis: {
    name: "Redis",
    link: "https://redis.io/",
  },
  elasticsearch: {
    name: "Elasticsearch",
    link: "https://www.elastic.co/",
  },
  aws: {
    name: "AWS",
    link: "https://aws.amazon.com/",
  },
  terraform: {
    name: "Terraform",
    link: "https://www.terraform.io/",
  },
  codePush: {
    name: "CodePush",
    link: "https://appcenter.ms/",
  },
  java: {
    name: "Java",
    link: "https://www.java.com/",
  },
  pubsubhubbub: {
    name: "PubSubHubbub",
    link: "https://github.com/pubsubhubbub/PubSubHubbub",
  },
  antlr: {
    name: "ANTLR",
    link: "https://www.antlr.org/",
  },
  websocket: {
    name: "WebSocket",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
  },
  tibero: {
    name: "Tibero",
    link: "https://www.tmaxtibero.com/product/productView.do?prod_cd=tibero",
  },
  effect: {
    name: "Effect",
    link: "https://effect.website/",
  },
  prisma: {
    name: "Prisma",
    link: "https://www.prisma.io/",
  },
  postgresql: {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  bullmq: {
    name: "BullMQ",
    link: "https://bullmq.io/",
  },
  turborepo: {
    name: "Turborepo",
    link: "https://turborepo.com/",
  },
  storybook: {
    name: "Storybook",
    link: "https://storybook.js.org/",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  },
  openapi: {
    name: "OpenAPI",
    link: "https://www.openapis.org/",
  },
  springBoot: {
    name: "Spring Boot",
    link: "https://spring.io/projects/spring-boot",
  },
  hono: {
    name: "Hono",
    link: "https://hono.dev/",
  },
  jeus: {
    name: "JEUS",
    link: "https://kr.tmaxsoft.com/product/productView.do?prod_cd=jeus&detail_gubun=prod_main",
  },
}

function getSkills(...keys: (keyof typeof skill)[]) {
  return Array.from(new Set(keys))
    .sort((a, b) => skill[a].name.localeCompare(skill[b].name))
    .map((key) => skill[key])
}

const profile = {
  name: "지환태",
  description: "개발자",
  email: "jht008@gmail.com",
  skills: [
    {
      position: "Frontend",
      skills: getSkills("react", "nextjs", "reactNative"),
    },
  ],
}

interface Company {
  id: string
  name: string
  link: string
}

const hyubiz: Company = {
  id: "hyubiz",
  name: "휴비즈",
  link: "https://www.hyubiz.com/",
}
const ahnlabBlockchain: Company = {
  id: "ahnlabBlockchain",
  name: "안랩블록체인컴퍼니",
  link: "https://ahnlabblockchain.company/",
}
const tmaxSoft: Company = {
  id: "tmaxSoft",
  name: "티맥스소프트",
  link: "https://kr.tmaxsoft.com/",
}

function dedent(strings: TemplateStringsArray) {
  const trimmed = strings.map((string) => {
    const lines = string.split("\n")
    const trimmed = lines.map((line) => line.trim())

    return trimmed.join("\n").trim()
  })
  return trimmed.join("\n").trim()
}

const careers = [
  {
    company: ahnlabBlockchain,
    from: new Date("2025-08-18"),
    body: dedent`
    # ABC WaaS(Wallet as a Service) 관리자 콘솔 개발

    * 고객용 관리자(customer-admin), 운영자용 관리자(super-admin) 웹 개발
    * 요금제, 결제 수단, 청구서, Paymaster 등 과금 관련 화면 개발
    * Turborepo 모노레포 구성, 공용 UI 컴포넌트 라이브러리 및 Storybook 구축

    # ABC WaaS 과금(Billing) 서버 개발

    * 요금제, 조직 구독, 청구서 생성 및 정기 결제 기능 개발
    * PortOne 결제 연동, BullMQ 기반 작업 큐 구성

    # IBK기업은행 스테이블코인 결제 PoC 웹 개발

    * KRWJ 예치, 스왑, 결제, 가맹점 정산 화면 개발

    # Klip, KAS, 회사 홈페이지 등 서비스 개발 및 유지보수

    * Klip 관리자 페이지 토큰·NFT v2 관리 기능, Klip 모바일 웹 이벤트 페이지 개발
    * ABC Cloud Wallet 홈페이지 리뉴얼, 회사 홈페이지 반응형 리팩토링
  `,
  },
  {
    company: hyubiz,
    from: new Date("2021-07-19"),
    to: new Date("2025-08-15"),
    body: dedent`
    # 전대전(전국대신전해드립니다) 커뮤니티 서비스 개발
    
    * Nest.js를 사용하여, 백엔드 서버 개발
    * Next.js를 사용하여, 프론트엔드 개발
    * React Native를 사용하여 iOS, Android 어플리케이션 개발
    
    # 뉴스레터 제작 도구 개발
    
    * Google Workspace 연동
    * 뉴스레터 상태 저장, 이미지 업로드
    * 웹 브라우저의 Canvas 사용하여 이미지  HTML 코드 생성
    * 사각형 배치하여 map 태그 생성
    * 이미지 분할하여 table 태그 생성
  `,
  },
  {
    company: tmaxSoft,
    from: new Date("2018-01-01"),
    to: new Date("2021-07-31"),
    body: dedent`
    # 3270 터미널 웹 브라우저 구현
    
    * OFGW와 웹소켓을 이용해 통신
    * SVG를 사용하여 화면 구성
    * 한국어, 일본어, 중국어 입력기 구현
    
    # 3270 터미널, 오픈프레임 간 통신 중계 서버 개발
    
    * 3270 터미널 에뮬레이터와 오픈프레임 간 통신 중계
    * 웹브라우저와 오픈프레임 간 통신 중계
    * JAVA NIO 소켓, 웹소켓으로 클라이언트 연결 제공
    * Tmax 연결을 통해 오픈프레임과 데이터 통신
    * 터미널, 커넥션 자원 관리
    * 터미널, 프로그램의 트랜잭션 스케줄링
    * 3270 데이터 스트림  JSON 변환
    
    # CICS COBOL → JAVA 변환 프로젝트
    
    * CICS COBOL 커맨드  JAVA 변환을 위한 CICS COBOL 커맨드 파서 제작
    * CICS JAVA 커맨드 구현
  `,
  },
]

const educations = [
  {
    name: "한양대학교 대학원",
    from: new Date("2016-03-01"),
    to: new Date("2018-02-28"),
    degree: "석사",
    major: "컴퓨터·소프트웨어학과",
  },
  {
    name: "한양대학교",
    from: new Date("2012-03-01"),
    to: new Date("2016-02-28"),
    degree: "학사",
    major: "컴퓨터전공",
  },
]

const projects: Array<{
  name: string
  company?: Company
  from: Date
  to?: Date
  body: string
  skills: Array<(typeof skill)[keyof typeof skill]>
  images: Array<
    Array<{
      srcset: Array<{
        src: StaticImageData
        colorScheme?: "light" | "dark"
      }>
      alt: string
      width: number
      height: number
      ratio: number
    }>
  >
}> = [
  {
    company: ahnlabBlockchain,
    name: "ABC WaaS 관리자 콘솔",
    from: new Date("2025-09-09"),
    body: dedent`
    블록체인 지갑 인프라 서비스 ABC WaaS의 고객용, 운영자용 관리자 웹. 프론트엔드 개발 주도.

    # 주요 업무

    * 고객용 관리자: 조직·프로젝트 대시보드, 멤버 관리, API 호출 통계, 웹훅, 에어드롭, 스마트 컨트랙트 스캐너 페이지 개발
    * 고객용 관리자: 요금제 선택, 카드 등록, 청구서 조회 및 PDF 다운로드, 구독 해지 등 결제 흐름 개발
    * 운영자용 관리자: 조직·요금제 관리, 결제 내역, Paymaster 대시보드, 프로젝트 이벤트 로그 개발
    * 리뉴얼 디자인 적용, Turborepo 모노레포로 공용 UI 컴포넌트, 공용 로직 패키지 분리
    * Storybook을 사용하여 디자인 시스템(컬러, 타이포그래피, 컴포넌트) 문서화
    * OpenAPI 스펙 기반 API 클라이언트 생성, 백엔드(Spring Boot) API의 OpenAPI 문서화
  `,
    images: [],
    skills: getSkills("nextjs", "react", "typescript", "turborepo", "storybook", "tailwindcss", "effect", "openapi"),
  },
  {
    company: ahnlabBlockchain,
    name: "ABC WaaS 과금 서버",
    from: new Date("2025-09-14"),
    body: dedent`
    ABC WaaS 요금제, 구독, 청구서, 결제를 담당하는 과금 서버.

    # 주요 업무

    * 요금제(WaaS, Web3 Data API, Paymaster 등) 옵션 및 조직별 요금제 변경, 예약 기능 개발
    * 사용량 기반 청구서 생성, CSV·PDF 다운로드, 예상 비용 API 개발
    * PortOne 결제 연동, 정기 결제 및 결제 결과 Slack 리포트 개발
    * BullMQ, Redis를 사용하여 청구서 생성, 결제, 체인 시세 수집 작업 큐 구성
    * Effect Platform 기반 서버 작성
  `,
    images: [],
    skills: getSkills("nodejs", "effect", "prisma", "postgresql", "redis", "bullmq", "turborepo"),
  },
  {
    company: ahnlabBlockchain,
    name: "IBK기업은행 스테이블코인 결제 PoC",
    from: new Date("2025-12-18"),
    to: new Date("2026-02-09"),
    body: dedent`
    원화 스테이블코인(KRWJ) 기반 결제 PoC의 사용자, 가맹점 웹.

    # 주요 업무

    * 사용자 유형별 로그인, 예치, 스왑, 결제 비밀번호 인증 기능 개발
    * 가맹점 메인, 판매 내역, 정산 기능 개발
    * 웹 푸시 알림 구독, 해지 처리
  `,
    images: [],
    skills: getSkills("nextjs", "react", "typescript", "turborepo"),
  },
  {
    company: ahnlabBlockchain,
    name: "Klip 관리자, 모바일 웹",
    from: new Date("2025-12-08"),
    body: dedent`
    디지털 자산 지갑 Klip의 관리자 페이지와 모바일 웹.

    # 주요 업무

    * 관리자 페이지: 토큰·NFT v2 등록, 수정, 삭제, 블랙리스트(스팸, 스캠) 관리 기능 개발
    * 모바일 웹: Super Earn 이벤트 랜딩 페이지 개발, GA4 이벤트 추가
    * 모바일 웹: 배포 후 이전 index.html 캐시로 앱이 뜨지 않는 문제 등 버그 수정
    * 개인정보처리방침, 제3자 제공 동의 등 약관 페이지 개발
  `,
    images: [],
    skills: getSkills("react", "typescript"),
  },
  {
    company: ahnlabBlockchain,
    name: "회사, 제품 홈페이지",
    from: new Date("2026-01-27"),
    body: dedent`
    [https://ahnlabblockchain.company/](https://ahnlabblockchain.company/)

    [https://cloudwallet.ahnlabblockchain.company/](https://cloudwallet.ahnlabblockchain.company/)

    회사 홈페이지와 ABC Cloud Wallet 제품 홈페이지 개발 및 유지보수.

    # 주요 업무

    * ABC Cloud Wallet 홈페이지 리뉴얼(반응형 랜딩, 콘솔 대시보드 데모, 문의 폼, 스크롤 애니메이션)
    * SEO(사이트맵, robots, Open Graph, 캐노니컬 URL), Google Analytics 적용
    * 회사 홈페이지 JS 기반 반응형 처리를 Tailwind CSS 반응형 클래스로 리팩토링
    * Tailwind CSS v4 업그레이드, ESLint → Biome 전환, Next.js 보안 패치
  `,
    images: [],
    skills: getSkills("nextjs", "react", "typescript", "tailwindcss"),
  },
  {
    company: hyubiz,
    name: "커뮤니티 서비스 백앤드",
    from: new Date("2021-07-19"),
    to: new Date("2025-08-24"),
    body: dedent`
    지역 기반 커뮤니티 전대전(전국대신전해드립니다)의 서버. REST, GraphQL API 엔드포인트 제작.
    
    # 주요 업무
    
    * 커뮤니티 서비스에 필요한 기능(피드, 알림, 게시물 작성, 구독, 신고, 블라인드 등) 개발
    * 게시물을 Facebook page로 발행하는 기능 개발
    * Facebook, Apple OAuth 로그인 개발
    * Elasticsearch를 사용하여 게시물 검색 기능 개발
    * Elasticsearch를 사용하여 모니터링 환경 구축
    * Elasticsearch를 사용하여 통계 분석 환경 구축
    * HashiCorp Packer, Terraform를 사용하여 빌드, 배포 라인 구축
    
    # 성과
    
    2022년 3월 ~ 현재 사용자 5,000여 명, 게시물 10,000여 개 확보.
  `,
    images: [],
    skills: getSkills("nest", "graphql", "mysql", "redis", "elasticsearch", "terraform", "aws"),
  },
  {
    company: hyubiz,
    name: "S3 이미지 리사이징",
    from: new Date("2021-07-19"),
    to: new Date("2025-08-24"),
    body: dedent`
    S3에 저장된 이미지 파일 리사이징. width, height, fit, format 옵션 제공. Lambda@Edge의 origin-response 에서 작동.
    
    # 주요 업무
    
    * Node.js의 이미지 처리 라이브러리인 sharp를 사용하여 원본 이미지를 1MB 미만으로 축소
    * HEIC 이미지 처리 환경 구축
    * Github Actions를 사용하여 빌드, 업로드 라인 구축
  `,
    images: [],
    skills: getSkills("nodejs", "aws"),
  },
  {
    company: hyubiz,
    name: "커뮤니티 서비스 모바일 어플리케이션",
    from: new Date("2021-07-19"),
    to: new Date("2025-08-24"),
    body: dedent`
    전대전(전국대신전해드립니다) 서비스의 React Native 구현.
    
    # 주요 업무
    
    * 어플리케이션 전체 개발
    * Code Push 배포 환경 구축
  `,
    images: [
      [
        {
          srcset: [
            {
              src: jdjRNImageLight0,
              colorScheme: "light",
            },
            {
              src: jdjRNImageDark0,
              colorScheme: "dark",
            },
          ],
          width: 590,
          height: 1280,
          alt: "전대전 모바일 어플리케이션 스크린샷",
          ratio: 1,
        },
        {
          srcset: [
            {
              src: jdjRNImageLight1,
              colorScheme: "light",
            },
            {
              src: jdjRNImageDark1,
              colorScheme: "dark",
            },
          ],
          width: 590,
          height: 1280,
          alt: "전대전 모바일 어플리케이션 스크린샷",
          ratio: 1,
        },
      ],
    ],
    skills: getSkills("reactNative", "graphql", "codePush"),
  },
  {
    company: hyubiz,
    name: "커뮤니티 서비스 웹페이지",
    from: new Date("2021-07-19"),
    to: new Date("2025-08-24"),
    body: dedent`
    전대전(전국대신전해드립니다) 서비스의 웹 사이트 구현.
    
    # 주요 업무
    
    * 관리자 페이지 구현
    * 메인 페이지 구현
    * 게시물 상세 페이지 구현
  `,
    images: [
      [
        {
          srcset: [
            {
              src: jdjFEImage0,
            },
          ],
          width: 750,
          height: 1334,
          alt: "전대전 웹페이지 스크린샷",
          ratio: 1,
        },
        {
          srcset: [
            {
              src: jdjFEImage1,
            },
          ],
          width: 750,
          height: 1334,
          alt: "전대전 웹페이지 스크린샷",
          ratio: 1,
        },
      ],
    ],
    skills: getSkills("nextjs", "graphql"),
  },
  {
    company: hyubiz,
    name: "뉴스레터 제작 도구",
    from: new Date("2023-01-01"),
    to: new Date("2025-08-24"),
    body: dedent`
    [https://youtu.be/QEGcYB1dKbE](https://youtu.be/QEGcYB1dKbE)
    
    이미지 → map, table 태그를 포함하는 HTML로 변환해는 도구의 서버 개발
    
    # 주요 업무
    
    * 사내 구성원만 사용할 수 있도록 Google Workspace와 연동
    * 제작중인 뉴스레터 상태 저장
    * 로컬 이미지 파일 사용한 뉴스레터의 이미지를 S3에 저장
    * Github Actions, Terraform을 사용하여 빌드, 배포 라인 구축
    * map을 포함한 HTML 생성 기능 개발
    * 이미지 분할 및 table을 포함한 HTML 생성 기능 개발
    
    # 성과
    
    뉴스레터 HTML 제작을 개발팀에게 전달하지 않고 각 담당자가 수행하여 업무 효율 상승.
  `,
    images: [],
    skills: getSkills("aws", "nest", "nextjs", "graphql", "mysql", "redis", "terraform"),
  },
  {
    company: tmaxSoft,
    name: "3270 터미널, 오픈프레임 간 통신 중계 서버",
    from: new Date("2018-01-01"),
    to: new Date("2021-07-16"),
    body: dedent`
    IBM 3270 터미널과 오픈프레임(CICS, AIM, IMS 등) 간 통신 중계 서버 개발 참여.
    
    # 주요 업무
    
    * SSL 커넥션 지원 확대
    * 트랜잭션, 터미널 관련 커맨드를 위한 자원 관리
    * 메인프레임 트랜잭션 미들웨어 AIM 지원
    * 3270 Data Stream ↔ JSON 변환 기능 개선
    * 각종 버그 수정, 기능 추가 및 개선
  `,
    images: [],
    skills: getSkills("java", "jeus", "tibero"),
  },
  {
    company: tmaxSoft,
    name: "3270 터미널 웹 브라우저 구현",
    from: new Date("2018-01-01"),
    to: new Date("2021-07-16"),
    body: dedent`
    IBM의 3270 data stream을 사용하는 메인프레임 터미널 웹 브라우저 구현.
    
    # 주요 업무
    
    * 단축키 기능 버그 수정 및 개선
    * 엑셀 데이터 처리
    * SVG → React 리팩토링
    * 한국어, 일본어, 중국어 입력기 구현
    * Context menu(copy, cut, delete) 구현
    * 각종 버그 수정, 기능 개선
  `,
    images: [
      [
        {
          srcset: [
            {
              src: webterminalImage,
            },
          ],
          alt: "3270 터미널 웹 브라우저",
          width: 1920,
          height: 1080,
          ratio: 1,
        },
      ],
    ],
    skills: getSkills("websocket"),
  },
  {
    company: tmaxSoft,
    name: "OF21",
    from: new Date("2018-01-01"),
    to: new Date("2021-07-16"),
    body: dedent`
    오픈프레임의 새로운 버전 개발 참여.
    
    # 주요 업무
    
    * CICS COBOL 커맨드  JAVA 변환을 위한 CICS COBOL 커맨드 파서 제작
    * CICS JAVA 커맨드 구현
  `,
    images: [],
    skills: getSkills("java", "antlr"),
  },
  {
    company: undefined,
    name: "유튜브 메일 알림 서비스",
    from: new Date("2021-01-07"),
    body: dedent`
    [https://www.ytfm.app/](https://www.ytfm.app/)
  
    유튜브의 메일 알림 기능이 종료되어, 유튜브 메일 알림 기능 구현한 개인 프로젝트.
  
    # 주요 업무
    
    * YouTube 구독 목록 동기화
    * PubSubHubbub 프로토콜을 이용한 동영상 업로드 정보 수신
    * 업로드된 동영상 이메일로 전송
    * 구독 해지를 위한 List-Unsubscribe 헤더 처리
    * ical event 처리
  `,
    images: [
      [
        {
          srcset: [
            {
              src: ytfmWebImage,
            },
          ],
          width: 750,
          height: 1334,
          ratio: 1249 / 1334,
          alt: "YTFM Web",
        },
        {
          srcset: [
            {
              src: ytfmEmailImage,
            },
          ],
          width: 1423,
          height: 1249,
          ratio: 1,
          alt: "YTFM Email",
        },
      ],
    ],
    skills: getSkills("react", "aws", "pubsubhubbub"),
  },
]

const github = {
  link: "https://github.com/zfanta",
  pullRequests: [
    {
      owner: "ammarahm-ed",
      repo: "react-native-mmkv-storage",
      pullNumber: 51,
    },
    {
      owner: "DIYgod",
      repo: "RSSHub",
      pullNumber: 4934,
    },
    {
      owner: "DIYgod",
      repo: "RSSHub",
      pullNumber: 3376,
    },
    {
      owner: "typora",
      repo: "Typora-i18n",
      pullNumber: 79,
    },
    {
      owner: "xpressengine",
      repo: "xe-core",
      pullNumber: 2241,
    },
    {
      owner: "xpressengine",
      repo: "xe-core",
      pullNumber: 1623,
    },
    {
      owner: "birkett",
      repo: "CloudFlare-DDNS-Updater",
      pullNumber: 2,
    },
    {
      owner: "xpressengine",
      repo: "xe-core",
      pullNumber: 1160,
    },
    {
      owner: "xpressengine",
      repo: "xe-core",
      pullNumber: 1159,
    },
  ],
}

export { profile, careers, educations, projects, github }
