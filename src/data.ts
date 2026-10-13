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
    * 요금제, 결제 수단, 청구서, Paymaster(가스비 대납), 웹훅 등 화면 개발
    * 고객용, 운영자용 관리자 리뉴얼(신규 앱 구성 및 기존 화면 이관)
    * Turborepo 모노레포 구성, 공용 UI 컴포넌트·로직 패키지 및 Storybook 구축
    * OpenAPI 스펙 기반 API 클라이언트 코드 생성, 백엔드 API OpenAPI 문서화
    * 2025년 9월 이후 커밋의 약 99% 작성(871/880)

    # ABC WaaS 과금(Billing) 서버 개발

    * 요금제, 조직 구독, 청구서 생성 및 정기 결제 기능 개발
    * PortOne 결제 연동, BullMQ 기반 작업 큐 구성
    * 청구서 PDF 생성, 결제·메일 발송 결과 Slack 리포트
    * Effect 기반 서버 구조 전환, 테스트 1,000여 개 작성
    * 2025년 9월 이후 커밋의 약 99% 작성(462/464)

    # IBK기업은행 스테이블코인 결제 PoC 웹 개발

    * KRWJ 예치, 스왑, QR 결제, 가맹점 판매 내역·정산 화면 개발
    * PWA 웹 푸시 알림, 보안 채널 로그인

    # Klip 서비스 개발 및 유지보수

    * Klip 관리자 페이지 토큰·NFT v2 관리 기능 개발
    * Klip 모바일 웹 Super Earn 이벤트 페이지 개발 및 버그 수정
    * 개인정보처리방침 등 약관 페이지, 이벤트 메일 템플릿 작업

    # 회사, 제품 홈페이지 개발 및 유지보수

    * ABC Cloud Wallet 홈페이지 리뉴얼, SEO 적용
    * 회사 홈페이지 반응형 리팩토링, 보도자료 게시
    * ABC WaaS 홈페이지 GNB, 제품 페이지 수정

    # 기타 서비스 유지보수

    * KAS(Kaia API Service) 콘솔, 홈페이지, 관리자 페이지 유지보수
    * ABC Custody 휴대폰 번호 변경 시 PASS 본인인증 연동
    * MetaTicket 프론트엔드 Docker 이미지 빌드, ECR 배포 환경 구축

    # 성과

    * Jira 이슈 260여 건 처리(WaaS 230여 건, Klip 18건 등)
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
    * 백엔드, 앱, 웹, 관리자, 인프라(Terraform) 개발, REST → GraphQL 전면 전환
    * Lambda@Edge 이미지 리사이징, Elasticsearch 검색·모니터링 환경 구축

    # 뉴스레터 제작 도구 개발

    * Google Workspace 연동
    * 뉴스레터 상태 저장, 이미지 업로드
    * 웹 브라우저의 Canvas 사용하여 이미지 → HTML 코드 생성
    * 사각형 배치하여 map 태그 생성
    * 이미지 분할하여 table 태그 생성
    * Turborepo 모노레포 기반 v2 재개발, 고객사별 내보내기 형식 지원

    # 공모전 접수·심사 시스템 개발

    * 한국건강증진개발원 청소년 흡연예방 공모전 접수, 심사, 결과 발표 시스템 개발 및 2회 운영
    * 통일부 통일문화 콘텐츠 공모전 접수, 공개 검증, 대국민 투표, 결과 발표, 수상작 갤러리 개발
    * 한국보건산업진흥원 글로벌 오픈이노베이션 위크 사이트 이전 업체 코드·데이터 인수, 행사 기능 개발

    # 웹진, 홈페이지 개발

    * 한국자산관리공사 웹진 KAMZINE Next.js 신규 구축
    * 휴비즈 회사 홈페이지, 신한 FP 채용 사이트 개발
    * 한국주택금융공사, 서울주택도시공사, TIPA 웹진 퍼블리싱 및 운영
    * 동작구 상권활성화 사이트, 성동구 아파트 공동체 플랫폼, 의료기관평가인증원 세이프티히어로 유지보수

    # 이메일 뉴스레터 제작

    * 서울역사박물관, 한국교직원공제회, 국민건강보험 일산병원, 서울주택도시공사 등 고객사 정기 뉴스레터 HTML 제작
    * Outlook, Gmail 등 이메일 클라이언트 호환 HTML 작성 가이드 정리

    # 기타

    * 대학 커뮤니티 위한(XE) 유지보수, 앱용 REST API 모듈 개발
    * 레거시 서버 이전, 장애 복구, 백업
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
    * 일본어(DBCS) IME 입력 재구현, 단축키, 엑셀 붙여넣기, 우클릭 메뉴, 인쇄 등 고객사 요청 기능 개발
    * React 기반 렌더링 시제품으로 IE 화면 갱신 8.7초 → 0.29초 단축

    # 3270 터미널, 오픈프레임 간 통신 중계 서버(OFGW) 개발

    * 3270 터미널 에뮬레이터와 오픈프레임 간 통신 중계
    * 웹브라우저와 오픈프레임 간 통신 중계
    * JAVA NIO 소켓, 웹소켓으로 클라이언트 연결 제공
    * Tmax 연결을 통해 오픈프레임과 데이터 통신
    * 터미널, 커넥션 자원 관리
    * 터미널, 프로그램의 트랜잭션 스케줄링
    * 3270 데이터 스트림 ↔ JSON 변환
    * Auto-Install 터미널, idle timeout, PF1 도움말 화면 등 기능 개발
    * 운영 사이트 장애(무한 루프, CPU 100%, 메모리 릭, SSL, 데드락, 터미널 ID 중복) 분석 및 수정

    # CICS COBOL → JAVA 변환 프로젝트(OF21)

    * CICS COBOL 커맨드 → JAVA 변환을 위한 CICS COBOL 커맨드 파서 제작
    * CICS JAVA 커맨드 구현(FILE, TSQ, TDQ, CONTAINER, DOCUMENT, SPOOL)
    * ANTLR4 기반 CICS SD(System Definition) 파서, SD 마이그레이션 도구 개발

    # 빌드, 배포 환경 개선

    * OFGW, 웹터미널 저장소 SVN → Git 이전, Ant → Gradle 빌드 전환
    * 오픈프레임(OSC) Docker 이미지 제작, 사내 클라우드(ProZone) 배포
    * 오픈프레임 소스 빌드·설치 가이드 작성, 빌드 결함 15건 정리

    # 성과

    * 미국(Colony Brands, BMO, HPS, SEARS, RRB, Walmart), 일본(DAIKEN, 후지생명), 프랑스(Safran) 등 고객사·내부 이슈 70여 건 처리
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

    # 고객용 관리자(customer-admin)

    * 조직·프로젝트 대시보드: 신규·누적 사용자, 지갑 수, Top 10 API 호출, Web3 API 호출 차트, 요금제 사용량 미터
    * 조직·프로젝트 목록, 최근 프로젝트 기록, 조직 전환 시 최근 프로젝트 자동 진입, 이름 인라인 수정
    * 멤버 관리: 사용자 초대, 역할 관리, 최대 초대 인원 제한, 관리자 권한에 따른 메뉴 노출
    * 로그인, 로그인 유지, 로그인 후 요청 페이지로 복귀, 초대 사용자 비밀번호 설정, 이메일 인증 비밀번호 재설정
    * 보안 채널(ECDH/AES) 기반 인증, 토큰 자동 갱신, 서브도메인 간 인증 쿠키 공유
    * 프로젝트 설정: API 키, 세션 시간, IP 화이트리스트(CIDR 중복 제거), 네트워크 추가(헤더 키 중복 검증)
    * API 호출 로그 검색·필터, 포트폴리오(자산 목록, 원화·달러 전환), 에어드롭(다중 전송, 내역 CSV 다운로드)
    * 웹훅 페이지: 웹훅 목록·설정, 모니터링 주소 관리, 전송 횟수 차트, SSE 기반 작업 진행 상황 표시
    * Paymaster(가스비 대납) 대시보드: 일별 대납 차트, 네트워크별 현황, 대납 내역, 기능 소개 페이지
    * 프로젝트 지갑 → 에어드롭 메뉴 개편, 지갑 조회 결과(204, 404)에 따른 생성·조회 화면 분기
    * 결제: 요금제 선택·변경·예약 표시, 구독 해지, PortOne SDK 카드 등록·변경·삭제, 수동 결제 및 PG 거절 사유 표시
    * 요금제 변경 시 즉시·예약·변경 없음 판별, 지갑 한도 초과 등 실패 사유 안내
    * 청구서 목록·상세, PDF 다운로드, 결제 상태 툴팁, 예상 비용 API 기반 월간 사용량 표시
    * next-intl 다국어(한국어, 영어) 적용, 하드코딩된 한국어 문구 다국어 처리

    # 운영자용 관리자(super-admin)

    * 요금제(Embedded Wallet, Web3 Data API, Paymaster, 기타) 생성·수정, 비활성화 경고, 표시 순서
    * 조직 생성·상세, 요금제 변경·예약·예약 취소, 변경 전후 가격 비교, 지갑 한도 초과 사유 안내
    * 조직별 Paymaster·보안·웹훅 기능 토글, Paymaster 일일 호출 한도, 비활성화 실패 시 롤백
    * Paymaster 네트워크별 Provider(Biconomy, Pimlico, ABC) 선택, Kaia Mainnet·Kairos·Base 네트워크 추가
    * 청구 관리: 월별 청구 목록, CSV 내보내기, 청구서 상세, 계좌 이체 입금 처리, 결제 취소, 카드 관리
    * 대시보드: MAU, Top 10 API 호출, 기간 프리셋, API 차단 기능
    * Paymaster 대시보드: 월 선택, 조직·네트워크·테스트넷 필터, 대납 수수료, 대납 내역
    * 프로젝트 상세 탭(정보, 가스비 대납, API 호출 로그), Service ID 중복 확인, 네트워크 수정
    * 이벤트 로그: 기간 선택, 필터, JSON 상세 보기·복사, 페이지당 최대 10,000행
    * 네트워크 리소스 관리: 검색·페이지네이션, 이름 입력 확인 후 삭제, 사용 중인 리소스 삭제 불가 안내
    * Intercepting Route를 사용한 조직·프로젝트 생성 모달, URL로 접근 가능한 청구서 모달
    * 검색어, 기간 등 필터 상태를 URL에 유지, 300ms 디바운스 검색
    * 폼 제출 결과 비교로 연속 제출 시 이전 결과가 처리되는 경쟁 상태 수정
    * 리뉴얼 앱 구성 후 대시보드, 조직, 청구, 요금제, 프로젝트, 네트워크, 사용자, 포트폴리오 화면 이관

    # 공통 UI, 모노레포

    * Turborepo 모노레포로 공용 UI(@repo/ui), 공용 로직(@repo/lib), 로거, 테마 패키지 분리
    * 두 관리자 앱에 중복된 인증 라우트, API 프록시, 로그인 폼, 청구서, 포트폴리오, 대납 차트 등 공용화
    * 보안 채널 암호화 로직을 공용 패키지로 분리하여 브라우저 번들에서 제외
    * 영문 → 한글 → 숫자 → 기호 순 이름 정렬, KST 기준 기간 계산 등 공용 유틸
    * Radix UI → React Aria 기반 모달, 셀렉트, 체크박스, 탭 등 컴포넌트 전환
    * Area, Donut, Stacked Bar 차트, Toast, Pagination, Date Picker, Combobox 등 컴포넌트 개발
    * SVG 아이콘 컴포넌트 자동 생성
    * Storybook, Chromatic을 사용하여 디자인 시스템(컬러, 타이포그래피, 간격, 라운드, 컴포넌트) 문서화
    * Figma 리뉴얼 디자인 적용(헤더, 사이드바, 카드, 테이블, 배지, 버튼)

    # 기타

    * OpenAPI 스펙 기반 API 클라이언트 생성(Billing, WaaS, Paymaster, 웹훅)
    * 백엔드(Spring Boot) API의 OpenAPI 문서화(springdoc 마이그레이션, 응답 스키마 DTO 추가)
    * 운영자용 API 응답 스키마 정의 범위 11개 → 39개 경로로 확대
    * HTTP 메서드와 경로 기반으로 생성 함수 이름 규칙 정리(예: select2() → getWaasCOrganizationSelect())
    * Lefthook, commitlint, Biome 설정, Docker 빌드, ECS 배포 설정

    # 성과

    * 2025년 9월 이후 커밋의 약 99% 작성(871/880), 고객용 18개, 운영자용 39개 페이지
    * 공용 UI 컴포넌트 63개, Storybook 스토리 69개, SVG 아이콘 72개
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

    * 요금제(Embedded Wallet, Web3 Data API, Paymaster, 기타) 옵션 CRUD, 비공개(Custom) 요금제, 표시 순서
    * 조직 생성, 조직별 요금제 변경·예약·예약 취소, 요금제 변경 이력, Slack 알림
    * 조직별 사용량 한도(quota)를 Redis에 관리, 한도 초과 시 API 차단
    * 사용량 기반 월별 청구서 생성, 요금제 변경 일할 계산, 부가세 계산
    * Paymaster 기본료, 가스비 대납 수수료, 기타 요금 청구 및 Paymaster 활성 기간 계산
    * 예상 비용 API, 조직 간 대납 수수료 API
    * 청구서 PDF 생성(Puppeteer) 및 S3 업로드, CSV 다운로드
    * PortOne 빌링키 결제 연동, 정기 결제, 계좌 이체 입금 처리, 결제 수단 등록·삭제
    * 결제 결과, 메일 발송 결과(Mailgun 웹훅) Slack 리포트
    * BullMQ, Redis를 사용하여 청구서 생성, 결제, PDF 생성, Slack 알림 작업 큐 구성 및 Bull Board 대시보드
    * 체인별 네이티브 토큰 일별 시세 수집 작업
    * 보안 채널 로그인을 통한 WaaS 인증 토큰 발급, 재시도, 캐싱
    * 역할 기반 접근 제어(관리자, 개발자, 운영자)
    * Effect Platform 기반 서버 작성, Effect Schema 기반 환경 변수 검증
    * Vitest, Redis Memory Server를 사용한 e2e 테스트 구축 및 테스트 코드 리팩토링
    * Vitest 워커별 Redis 논리 DB 분리로 병렬 테스트 격리
    * BullMQ 워커, 큐, Redis 연결의 graceful shutdown 처리
    * 청구서 렌더러 요청 데이터 gzip 압축으로 HTTP 431 오류 해결
    * Prisma v7 업그레이드, ESLint·Prettier → Biome 전환, tsdown 번들링, SonarQube 이슈 수정

    # 성과

    * 2025년 9월 이후 커밋의 약 99% 작성(462/464)
    * 테스트 파일 142개, 테스트 케이스 1,000여 개 작성
    * 테스트 서버 재사용으로 전체 테스트 실행 시간 약 94초 → 22초(약 75% 단축)
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

    * Turborepo, Next.js 프로젝트 구성, shadcn/ui, Storybook, next-international 적용
    * OpenAPI 스펙 기반 API 클라이언트 생성, API 프록시, 보안 채널 로그인
    * 사용자 유형(사용자, 가맹점)별 로그인, 계좌 인증, 비밀번호 설정
    * 메인 화면 잔액, 거래 내역, 입출금 주소
    * 예치(충전), 스왑, QR 코드 결제, 결제 비밀번호 인증, 거래 한도
    * 가맹점 메인, 판매 내역, 미정산 금액, 정산 기능
    * 거래 해시 블록 익스플로러 링크
    * PWA 웹 푸시 알림 구독, 해지 처리
    * Docker, Docker Compose, pm2 배포 환경 구성
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

    # 관리자 페이지

    * 토큰·NFT v2 목록, 상세, 등록, 수정, 삭제 기능 개발, 체인 목록 API 연동
    * 토큰·NFT 블랙리스트(스팸, 스캠) 관리, 비 EVM 체인 주소 검증
    * v1 토큰·NFT 메뉴 제거 및 v2로 리다이렉트
    * Drops 배너 내부 링크 지원
    * 관리자 백엔드 블랙리스트 사유 추가, 이미지 첨부 오류 수정

    # 모바일 웹

    * Super Earn 이벤트 랜딩 페이지 개발, 조기 종료 처리, GA4 이벤트 추가
    * 배포 후 이전 index.html 캐시로 앱이 뜨지 않는 문제 수정
    * A2A 컨트랙트 실행 화면에서 토큰 팝업 조회가 앱을 멈추는 문제 수정
    * 공지 상세 이전 내용 노출, 인라인 SVG 배경 이미지 렌더링 문제 수정

    # 기타

    * 개인정보처리방침, 회원가입 개인정보 동의, 스왑 제3자 제공 동의 페이지 개발
    * USDT 보너스 리워드 이벤트 메일 템플릿
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

    회사 홈페이지, ABC Cloud Wallet, ABC WaaS 제품 홈페이지 개발 및 유지보수.

    # ABC Cloud Wallet 홈페이지

    * 리뉴얼 랜딩 페이지(1920, 1440, 700, 360px 반응형) 구현
    * 콘솔 대시보드 데모, 단계별 워크플로우 데모, 스크롤 애니메이션
    * 문의 폼, 개인정보 수집 동의, 서비스 신청 CTA
    * SEO(사이트맵, robots, Open Graph, 캐노니컬 URL, 네이버 사이트 인증), Google Analytics 적용
    * Tailwind CSS v4 업그레이드(CSS-first 설정 전환), ESLint·Prettier·Husky 설정
    * Next.js 보안 패치로 취약점 12건(High 6, Moderate 4, Low 2) 해소
    * CSP 정책으로 차단된 Pretendard 폰트를 next/font/local로 내장
    * iOS Safari 콘솔 대시보드 렌더링 문제 수정

    # 회사 홈페이지

    * JS 기반 반응형 처리를 Tailwind CSS 반응형 클래스로 리팩토링
    * 보안·규제 준수 섹션, ISMS·ISO 27001·FIU 인증 배지, VASP 배지 추가
    * 제품 페이지 Cloud Wallet 중심 개편, 파트너 카드 디자인 변경
    * 보도자료 10여 건 게시, 브랜드 자산 다운로드 링크 추가
    * ESLint → Biome 전환

    # ABC WaaS 홈페이지

    * GNB, 메인 페이지 버튼, 제품 페이지 수정, 제품 쇼케이스 3열 그리드 적용
  `,
    images: [],
    skills: getSkills("nextjs", "react", "typescript", "tailwindcss"),
  },
  {
    company: ahnlabBlockchain,
    name: "KAS(Kaia API Service) 유지보수",
    from: new Date("2026-02-04"),
    body: dedent`
    Kaia 블록체인 API 서비스 KAS의 콘솔, 홈페이지, 관리자 페이지 유지보수.

    # 주요 업무

    * 콘솔: 노드 API에 eth blob, fee history 메서드 지원 추가, polyfill.io 제거
    * 홈페이지: 튜토리얼 영상 섹션 개편, Wallet 요금제 무료 티어 추가
    * 관리자 페이지: 외부 CDN 의존 제거 및 정적 리소스 내부 서빙, 정산 데이터 다운로드 수정
  `,
    images: [],
    skills: getSkills("react"),
  },
  {
    company: ahnlabBlockchain,
    name: "ABC Custody, MetaTicket",
    from: new Date("2025-08-25"),
    body: dedent`
    # ABC Custody

    * 업비트 기준을 참고하여 개인정보 변경 처리(이메일·휴대폰은 간단 인증, 그 외 필수 정보는 고객확인 재이행)
    * 마이페이지 휴대폰 번호 변경 시 PASS 본인인증 연동(프론트엔드, 백엔드)
    * 사용자 정보 수정 API 응답에 암호화된 데이터가 반환되는 문제 수정

    # MetaTicket

    * 티켓 스캔 관리자, 클라이언트, 포털 웹을 하나의 Docker 이미지로 빌드
    * GitHub Actions를 사용하여 ECR 배포 라인 구축
  `,
    images: [],
    skills: getSkills("nextjs", "aws"),
  },
  {
    company: hyubiz,
    name: "공모전 접수·심사 시스템",
    from: new Date("2025-06-18"),
    to: new Date("2025-08-15"),
    body: dedent`
    한국건강증진개발원 청소년 흡연예방 공모전, 통일부 통일문화 콘텐츠 공모전의 접수, 심사, 결과 발표 시스템.

    # 공개 사이트

    * 메인 배너, 포스터 팝업, 공모 안내(부문, 시상, 심사 기준, 유의사항), 공지사항, Q&A
    * 수상작 갤러리(영상, 만화, 시, 디카시, 웹툰, 디자인 등), 시상식 영상

    # 접수

    * 다단계 접수 폼: 약관, 지역, 주소 검색, 학교급·학교명, 개인/팀, 작품 제목·기획 의도
    * S3 presigned URL 다중 파일 업로드, 만 14세 이상·미만 동의서 업로드
    * 접수번호 자동 발급, 부문별 분류, 부문별 참가 제한, 중복 제출 방지
    * 접수번호·비밀번호 로그인으로 접수 내용 확인·수정

    # 심사

    * 심사위원 계정별 담당 부문 작품만 노출, 이미지·PDF·HWP·Word 작품 뷰어
    * 항목별 점수 입력, 배점 초과 표시, 총점 자동 계산, 제출 후 수정 방지, 진행률 표시
    * 목록 필터·정렬 유지, 필터된 목록 기준 다음 작품 이동
    * 1차 심사위원별·평균 순위, 2차 심사 결과표(출력용), 부적격 검수, 결과 다운로드

    # 관리자

    * Google 로그인, 접수자 테이블(정렬, 필터, 첨부파일·동의서 일괄 다운로드), 통계
    * 심사위원 계정 발급

    # 통일문화 콘텐츠 공모전

    * 기존 시스템을 재사용하여 숏폼영상, 캐릭터, 표어·슬로건, 디자인, 스마트툰, 웹툰 부문 구성
    * 동일인 접수 개수 제한, 접수 확인 화면 팀원 표시, 작품 수정·삭제
    * 공개 검증 공지, 대국민 투표 안내 페이지, 결과 발표, 일반·AI 분야 수상작 갤러리

    # 성과

    * 청소년 흡연예방 공모전 2회 운영, 누적 접수 1,370여 건, 심사 점수 2,500여 건 처리
  `,
    images: [],
    skills: getSkills("nextjs", "react", "typescript", "prisma", "tailwindcss", "aws"),
  },
  {
    company: hyubiz,
    name: "한국자산관리공사 웹진 KAMZINE",
    from: new Date("2024-12-24"),
    to: new Date("2025-07-29"),
    body: dedent`
    한국자산관리공사(캠코) 사보 웹진을 Next.js로 새로 구축.

    # 주요 업무

    * 메인(커버, 캐러셀, 해시태그, 섹션별 썸네일), 서브 페이지 11종
    * GNB, 모바일 메뉴, 웹툰 뷰어(자동 재생, 이전·다음), 영상 프레임, 칼럼니스트 컴포넌트
    * 뉴스레터 구독 폼: Server Action, zod 검증, 중복 이메일 처리
    * 지난호 아카이브, 기존 웹진 경로를 유지하기 위한 리버스 프록시와 fallback rewrite
    * 대용량 영상 CDN rewrite, Next.js 보안 업데이트
  `,
    images: [],
    skills: getSkills("nextjs", "react", "typescript", "prisma", "tailwindcss"),
  },
  {
    company: hyubiz,
    name: "신한 FP 채용 사이트",
    from: new Date("2023-03-19"),
    to: new Date("2023-05-11"),
    body: dedent`
    보험설계사(FP) 채용 공고 게시, 온라인 지원서 접수, 지원자 조회 사이트.

    # 주요 업무

    * 휴대폰 인증(NCP SENS), 회원가입, 로그인, Redis 세션
    * 채용 공고 등록·조회, 지원서 제출(인적사항, 주소, 경력, 추천인)
    * 관리자 이메일 매직 링크 로그인(SES), 지원자 목록
    * 지원서 폼 유효성 검사, 휴대폰 인증 UI, 경력 입력 폼
    * Terraform으로 Lambda(컨테이너), CloudFront, ACM, SSM, Cloudflare DNS, Vercel 도메인 구성
    * GitHub Actions로 ECR 배포
  `,
    images: [],
    skills: getSkills("nest", "graphql", "prisma", "mysql", "redis", "nextjs", "terraform", "aws"),
  },
  {
    company: hyubiz,
    name: "휴비즈 홈페이지",
    from: new Date("2022-12-05"),
    to: new Date("2023-03-27"),
    body: dedent`
    휴비즈 회사 홈페이지 신규 개발.

    # 주요 업무

    * Home, About, Service, Commerce, Portfolio, Contact 섹션, 반응형 헤더
    * 포트폴리오 카테고리 필터와 상세 페이지, 고객사 36곳 등록
    * 문의 폼: reCAPTCHA Enterprise 검증 후 SES로 메일 발송
    * Facebook, Instagram, YouTube 임베드, 네이버 지도, Safari 호환 문제 수정
    * 개인정보처리방침 페이지, 운영 수정
  `,
    images: [],
    skills: getSkills("nextjs", "react", "tailwindcss", "aws"),
  },
  {
    company: hyubiz,
    name: "이메일 뉴스레터 제작",
    from: new Date("2022-02-07"),
    to: new Date("2025-08-15"),
    body: dedent`
    고객사 정기 이메일 뉴스레터 HTML 제작.

    # 주요 업무

    * 서울역사박물관(영·일·중 번역본 포함), 한국교직원공제회, 한화시스템, 서울시복지재단, GIST, KINS, 국가물산업클러스터, TIPA, 서울투자진흥재단 뉴스레터 제작
    * 국민건강보험 일산병원, 서울주택도시공사, 아동권리보장원, 중앙취업지원센터 뉴스레터 제작
    * 링크 영역 기준으로 이미지를 분할해 중첩 table HTML을 만드는 생성기 작성
    * 인라인 CSS, table 레이아웃, Outlook 이미지 깨짐, 모바일 image map 등 이메일 클라이언트 호환 가이드 작성
    * 웹 접근성을 위한 이미지 대체 텍스트 작성

    # 성과

    * 고객사 10여 곳, 뉴스레터 HTML 450여 개 제작
  `,
    images: [],
    skills: getSkills("typescript"),
  },
  {
    company: hyubiz,
    name: "커뮤니티 서비스 백앤드",
    from: new Date("2021-07-19"),
    to: new Date("2025-08-15"),
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

    # 회원, 인증

    * 회원가입, 로그인(Redis 세션), 이메일·비밀번호 찾기, 회원 탈퇴, 개인정보 수정, 프로필 이미지
    * Facebook, Apple OAuth 로그인, NCP SENS 휴대폰 인증, 대학 이메일 인증(SES)
    * 휴대폰 인증 사용자만 글 작성 허용, 약관·마케팅·위치정보 동의 관리, 사용자 차단

    # 커뮤니티

    * 제보함 생성·수정·구독, 행정구역 데이터 적재 및 지역 검색, 거리 계산
    * 게시물·댓글 작성, 수정 내역 보관, 좋아요, 스크랩, 신고, 커서 페이지네이션
    * S3 presigned URL 다중 이미지 업로드, 금칙어(클린 필터) 적용
    * 좋아요·댓글 기준 인기글 선정을 Bull 큐로 비동기 처리
    * 알림(댓글, 좋아요, 인기글, 페이스북 발행), 알림 설정, OneSignal 푸시 발송
    * 공지사항, FAQ, 1:1 문의
    * 관리자 API: 신고 처리, 사용자 검색, 제보함 관리자 권한, 제보함 설정, 게시물 발행

    # Facebook 페이지 자동 발행

    * Graph API로 제보 글을 페이지에 게시, 예약 발행, 이미지 순서 유지
    * 홍보 문구 댓글, UTM 파라미터, 발행용 Facebook 앱 분리

    # 검색, 모니터링

    * reversed edge n-gram 분석기로 부분 일치 검색, 제보함·구독 제보함·전체 검색
    * DB 변경 사항을 Bull 큐로 Elasticsearch에 동기화, 남은 문서 정리
    * Elasticsearch 8 업그레이드, Elastic APM 도입, GraphQL 필드·Prisma 쿼리 트레이싱
    * Kibana 통계 대시보드 구성

    # GraphQL 전환

    * REST 기능 전체를 GraphQL(code-first)로 재구현, Relay 스타일 node, connection 페이지네이션
    * 필드 단위 권한(FieldRole), 페이지네이션·세션 데코레이터, graphql-eslint 규칙
    * 앱과 웹이 공유하는 GraphQL 클라이언트 패키지(@hyubiz/jdj-graphql) 배포

    # 운영, 인프라

    * Redis 기반 Throttler, CloudFront 환경의 클라이언트 IP(True-Client-IP) 처리, CORS·쿠키 설정
    * SSM Parameter Store 기반 설정 관리, URL 버전 경로(/v1.0/)
    * Terraform으로 VPC, RDS, ElastiCache, Elastic Cloud, ALB, ASG, CloudFront, Cloudflare DNS 구성(재사용 모듈 9개)
    * Packer AMI 빌드, Auto Scaling 정책, API 버전 경로를 처리하는 Lambda@Edge
    * REST·GraphQL e2e 테스트 34개 파일 작성

    # 성과

    2022년 3월 ~ 현재 사용자 5,000여 명, 게시물 10,000여 개 확보.

    * Prisma 모델 43개, GraphQL 리졸버 29개
  `,
    images: [],
    skills: getSkills("nest", "graphql", "mysql", "redis", "elasticsearch", "terraform", "aws"),
  },
  {
    company: hyubiz,
    name: "S3 이미지 리사이징",
    from: new Date("2021-07-19"),
    to: new Date("2025-08-15"),
    body: dedent`
    S3에 저장된 이미지 파일 리사이징. width, height, fit, format 옵션 제공. Lambda@Edge의 origin-response 에서 작동.
    
    # 주요 업무
    
    * Node.js의 이미지 처리 라이브러리인 sharp를 사용하여 원본 이미지를 1MB 미만으로 축소
    * HEIC 이미지 처리 환경 구축
    * Github Actions를 사용하여 빌드, 업로드 라인 구축
    * Accept 헤더에 따른 WebP 자동 변환, BMP 등 20종 포맷 지원
    * Lambda@Edge 크기 제한을 피하기 위해 실제 변환은 별도 Lambda를 호출하는 구조로 분리
    * HEIC 지원을 위해 libvips, libheif를 소스 빌드한 Lambda 컨테이너 이미지 작성, jemalloc 적용
    * 쿼리 파라미터 정규화로 CloudFront 캐시 키 통일
    * 원본보다 커지는 문제, 삼성 기기 사진 변환 실패 등 수정

    # 성과

    * 리사이징 응답 시간 4,000ms → 300ms
  `,
    images: [],
    skills: getSkills("nodejs", "aws"),
  },
  {
    company: hyubiz,
    name: "커뮤니티 서비스 모바일 어플리케이션",
    from: new Date("2021-07-19"),
    to: new Date("2025-08-15"),
    body: dedent`
    전대전(전국대신전해드립니다) 서비스의 React Native 구현.
    
    # 주요 업무
    
    * 어플리케이션 전체 개발
    * Code Push 배포 환경 구축
    * 외주 개발된 1.x 앱 유지보수 후 화면 38개 2.x 전면 재개발
    * 메인·인기 피드, 제보함, 검색, 게시물 상세(이미지 캐러셀·뷰어·공유), 글·댓글 작성
    * 이메일, Facebook, Apple 로그인, 휴대폰 인증, 비밀번호 재설정, 회원 탈퇴
    * OneSignal 푸시와 알림 화면 이동, 마이페이지, 공지·FAQ·약관, 알림 설정
    * Apollo Client 캐시 활용, FlashList로 리스트 성능 개선
    * 다크 모드, 딥링크, App Center 분석, 버전 체크, Sentry 적용
    * UI 리뉴얼(온보딩, 바텀시트, 커스텀 아이콘 폰트)
    * Dependabot 도입, 의존성 업데이트, iOS 푸시 인증서 갱신
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
    to: new Date("2025-08-15"),
    body: dedent`
    전대전(전국대신전해드립니다) 서비스의 웹 사이트 구현.
    
    # 주요 업무
    
    * 관리자 페이지 구현
    * 메인 페이지 구현
    * 게시물 상세 페이지 구현
    * 약관 페이지, 이미지 줌 슬라이더, 앱 다운로드 모달, 앱 링크(apple-app-site-association, assetlinks.json)
    * Elastic EUI 기반 관리자: 회원, 게시물 일괄 삭제, 신고 처리, 제보함·관리자 지정, FAQ, 공지사항, 약관
    * 관리자 화면에서 Facebook 게시물 발행
    * graphql-codegen, graphql-eslint 적용, Next.js 13 업그레이드, Sentry
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
    to: new Date("2025-08-15"),
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
    * Konva 캔버스 편집기: 줌, 드래그, 사각형 링크 영역 그리기·이동·리사이즈, 충돌 방지, 분할선
    * Lambda 컨테이너, API Gateway, CloudFront로 서버리스 API 구성

    # v2

    * Turborepo 모노레포(웹, 캔버스 패키지), Redux Toolkit, shadcn/ui로 재개발
    * 셀 그룹 링크, 링크 템플릿, 링크 검증 다이얼로그
    * 고객사별 내보내기: 이미지 분할 + 테이블 HTML + 이미지 zip, Outlook용 VML 배경
    * 그리기·충돌 감지 성능 개선, 가로·세로 로직 데이터 기반 통합 등 리팩토링

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
    * 메인프레임 트랜잭션 미들웨어 AIM 지원, 기존 vtam gateway 대체
    * 3270 Data Stream ↔ JSON 변환 기능 개선
    * 각종 버그 수정, 기능 추가 및 개선

    # 기능 개발

    * Auto-Install Terminal: SD에 없는 LU 접속 시 AUTINSTMODEL 템플릿으로 터미널 자동 생성, 기동 시 템플릿만 미리 로드
    * 3270 에뮬레이터 idle timeout: ScheduledThreadPoolExecutor 기반 타이머, NOP keep-alive 패킷 처리
    * PF1 도움말: 마지막 맵 이름을 웹터미널로 전달하여 맵별 도움말 페이지 표시
    * RECEIVE BUFFER: 입력 메시지 보관 후 OSC 요청 시 반환, OSC(C)의 SEND CONTROL/SEND MAP 구분 및 MAPFAIL segfault 수정
    * 리전 이름 기준 서비스 조회로 CICS 트랜잭션 라우팅(원격 리전 next tran) 지원
    * imscmd OPNDST, CLSDST, RCLSDST, STOP NODE 명령으로 터미널 로그온·로그오프 처리
    * TACF ID 기반 온라인 사용자 접속 확인·해제, OFManager 터미널 화면 USERID 표시 지원
    * SO/SI(DBCS shift-out/in), mixed field 처리, CSPG 입력값 BLOB 처리
    * terminal.webonly 등 설정 기본값 정리, 예외 로그 출력 개선

    # 장애 분석 및 수정

    * 부하 테스트 성능 문제: py3270, wc3270 부하 테스트 스크립트 작성, VisualVM 프로파일링으로 병목 분석
    * 리전 로그온마다 터미널 7,000여 건을 전체 조회하던 로직을 필요 시 조회·캐시로 변경
    * 트랜잭션 상태 경합으로 인한 무한 재큐잉 수정
    * 메모리 릭: MAT 힙덤프 분석으로 종료된 웹소켓 세션 누적 원인 수정(잔존 객체 122개 → 14개)
    * 터미널 ID 중복: identityHashCode 충돌을 AtomicInteger 기반 ID 생성기로 교체, Node.js cluster로 동시 접속 부하 테스트
    * 다른 사용자 화면 노출: 반납한 Tmax 채널 재사용으로 인한 clid 충돌 → 채널 폐기 후 재할당, disconnect를 Pipe로 MainThread에 위임
    * SSL: BUFFER_UNDERFLOW handshake 무한 루프, MSS 초과로 분할된 TLS 레코드 버퍼링, bad record MAC 분석
    * LU 자동할당 DEVICE-IN-USE 이후 협상 상태 오류로 전체 터미널이 멈추는 문제 수정
    * PCOM, Attachmate Extra 등 에뮬레이터 Telnet 협상 차이를 패킷 캡처(TK4- MVS 포함)로 분석 및 대응
    * vtammgr, OFGW 간 커밋 타이밍으로 인한 LU 중복, DB 오류 후 무한 루프 수정
    * INQUIRE TERMINAL 시 OUTSERVICE 터미널 오류 응답 누락으로 OSC가 무한 대기하는 문제 수정
    * NIO pipe write 블로킹 데드락, 동시 접속 시 리전 로그온 실패(리스트 순회 중 삭제) 분석 및 수정
    * 운영 환경 CPU 100% 장애: java core, pcap 분석으로 TN3270E negotiation 무한 루프 원인 파악, 루프 없는 구조로 재설계안 작성
    * 스크립트 실행 트랜잭션의 AID 키 미처리, PLT 프로그램 트랜잭션 미인식, 리전 종료 시 연결 미해제 수정
    * 비정상 포트, null 소켓 채널, Tmax 채널 풀 고갈 시 스레드가 종료되는 예외 처리
    * UTF-16 BOM으로 인한 NegativeArraySizeException 수정

    # 기타

    * JEUS 7 → 8 마이그레이션 시 웹소켓 세션 속성 누락 원인 분석
    * SVN → Git 저장소 이전, Ant → Gradle 빌드 전환, 이전 버전 소스 복구
    * 패치 제작, QA 패치 검증, 운영 사이트 패치 배포
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

    # 일본어(DBCS) 입력

    * compositionstart/update/end 이벤트 기반 일본어 IME 입력 재구현
    * 커서 이동, 후보 변환, ESC 취소, INSERT 모드, AUTOTAB, Backspace, numpad 입력 등 20여 건 수정
    * 전각·반각 필드 검증 및 경고, 1바이트 필드 반각 카타카나 입력 허용
    * 반각 필드에서 전각 필드로 이동 시 IME 창이 열리지 않는 문제 수정
    * 2바이트 문자 혼용 시 SO/SI 오프셋 계산 오류로 인한 필드 속성 손상 문제 수정
    * 일본어 코드 변환(CPM) 사용 시 상태 표시 문구 현지화
    * IE 전용 입력 버그(커서 이동, IME 언어 전환, 경고 문구 깨짐, numpad 한자 변환) 수정

    # 단축키, 입력

    * 단축키 설정 파일 Export/Import, 3개 이상 단축키 지원
    * 다중 키 조합 단축키가 첫 키만으로 실행되는 문제 수정, 충돌 단축키 저장 방지
    * HOME, FIRST_FIELD, SELECT_ALL(Ctrl+A), HELP(Alt+F1), DISCONNECT 단축키 추가
    * 엑셀 데이터(탭, 줄바꿈)를 비보호 필드에 차례로 채우는 붙여넣기, rtrim, auto_tab_paste 옵션 추가
    * 붙여넣기 후 커서 위치를 IBM PCOM과 동일하게 조정
    * Clipboard API 제약 조사 후 contextmenu 이벤트 기반 우클릭 메뉴 구현
    * 숫자 전용 필드 처리, 한국어·일본어·영어 경고, protect numeric 토글 추가
    * 화면 키보드 닫기 버튼, 특수키 기호 표시, SHIFT 해제 시 특수문자 복구 수정

    # 화면, 성능

    * 화면 셀당 DOM 요소가 많아 갱신에 7초가 걸리는 문제 프로파일링
    * SVG → div 전환으로 렌더링 최대 30배 개선, React·Redux 시제품으로 IE 8.7초 → 0.29초
    * 인쇄용 CSS 적용, IE 인쇄 시 빈 페이지 문제 수정
    * 백그라운드 탭에서 BLINK 애니메이션이 쌓이는 문제 수정
    * PF1 도움말 페이지 팝업

    # 기타

    * JEUS CacheFilter 적용으로 패치 후 브라우저 캐시 삭제가 필요하던 문제 해결
    * 라이선스 확인 팝업 오류 수정
    * 웹터미널을 OFGW 저장소에서 Git 서브모듈로 분리
    * 웹터미널 가이드 매뉴얼 개정(단축키, 붙여넣기 옵션, SO/SI 설정)
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
    
    * CICS COBOL 커맨드 → JAVA 변환을 위한 CICS COBOL 커맨드 파서 제작
    * CICS JAVA 커맨드 구현

    # CICS 커맨드 런타임(ProObject, Tibero)

    * FILE: READ, WRITE, REWRITE, DELETE, STARTBR, ENDBR, RESETBR, READNEXT, READPREV를 VSAM 대신 RDB 기반으로 구현
    * FILE DATASET, KEYLENGTH, GENERIC, EQUAL/GTEQ, TOKEN, NUMREC 옵션 지원
    * FILE pre-fetch 캐시, 숫자·문자 혼합 키 정렬, 캐시 오염 버그 수정
    * 숫자 키 데이터 손실(01 → 1) 방지를 위해 RIDFLD를 문자열로 처리
    * TSQ, TDQ: 데이터·메타 테이블 설계, QNAME 옵션, 만료 처리, Tibero 타임존 변환으로 인한 9시간 차이 수정
    * CONTAINER(GET, PUT, MOVE, DELETE), DOCUMENT(CREATE, INSERT, SET, RETRIEVE, DELETE) 구현
    * SPOOL(SPOOLOPEN, SPOOLWRITE, SPOOLCLOSE) 구현 및 코드 생성 작성
    * SYNCPOINT, ROLLBACK을 ProObject 트랜잭션 split/join으로 처리하는 PoC
    * AspectJ 기반 커맨드 구조로 이전, CicsConditionException으로 예외 체계 통일
    * 샘플 CICS 트랜잭션 변환 및 E2E 검증, JEUS·ProObject 버전 호환성 테스트

    # 파서, 마이그레이션 도구

    * openframe-cicscmd-parser: ANTLR4 기반 EXEC CICS 커맨드 파서, 버그 수정 및 Maven 배포
    * CICS SD 파서: ANTLR4로 CSD 정의 파싱, 중복 리소스 감지, 라인 번호 출력, OFMiner 연동
    * CICS SD Migrator: SD 테이블 생성·이관 서비스, MERGE 쿼리 전환, Miner DB 직접 조회, Gradle·Docker 배포
    * OFMiner CSD 테이블 스키마 수정, OpenFrame 7 BMS 지원 항목 테이블 구성

    # 기타

    * 데모용 CICS 커맨드·옵션 조사, 고객사 필요 커맨드 정리, 지원·미지원 항목 정리
    * CICS DOCUMENT 심볼 치환에 Aho–Corasick 알고리즘 적용 연구
    * OF Manager CSD, TSQ/TDQ 관리 화면 요구사항 정의
    * TSQ, TDQ, CONTAINER, DOCUMENT, FILE, SPOOL 매뉴얼 작성
    * 타팀 개발 환경 구성, 통합 테스트 지원, 인수인계 문서 작성
  `,
    images: [],
    skills: getSkills("java", "antlr", "tibero"),
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
