import ytfmWebImage from '@/public/projects/ytfm/web.png'
import ytfmEmailImage from '@/public/projects/ytfm/email.png'

import webterminalImage from '@/public/projects/webterminal.png'

import jdjRNImageLight0 from '@/public/projects/jdj-rn/light-0.png'
import jdjRNImageLight1 from '@/public/projects/jdj-rn/light-1.png'
import jdjRNImageDark0 from '@/public/projects/jdj-rn/dark-0.png'
import jdjRNImageDark1 from '@/public/projects/jdj-rn/dark-1.png'

import jdjFEImage0 from '@/public/projects/jdj-fe/0.png'
import jdjFEImage1 from '@/public/projects/jdj-fe/1.png'

import { StaticImageData } from 'next/image'

const skill = {
  react: {
    name: 'React',
    link: 'https://react.dev/',
  },
  nextjs: {
    name: 'Next.js',
    link: 'https://nextjs.org/',
  },
  reactNative: {
    name: 'React Native',
    link: 'https://reactnative.dev/',
  },
  nest: {
    name: 'Nest',
    link: 'https://nestjs.com/',
  },
  typescript: {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  nodejs: {
    name: 'Node.js',
    link: 'https://nodejs.org/',
  },
  graphql: {
    name: 'GraphQL',
    link: 'https://graphql.org/',
  },
  mysql: {
    name: 'MySQL',
    link: 'https://www.mysql.com/',
  },
  redis: {
    name: 'Redis',
    link: 'https://redis.io/',
  },
  elasticsearch: {
    name: 'Elasticsearch',
    link: 'https://www.elastic.co/',
  },
  aws: {
    name: 'AWS',
    link: 'https://aws.amazon.com/',
  },
  terraform: {
    name: 'Terraform',
    link: 'https://www.terraform.io/',
  },
  codePush: {
    name: 'CodePush',
    link: 'https://appcenter.ms/',
  },
  java: {
    name: 'Java',
    link: 'https://www.java.com/',
  },
  pubsubhubbub: {
    name: 'PubSubHubbub',
    link: 'https://github.com/pubsubhubbub/PubSubHubbub',
  },
  antlr: {
    name: 'ANTLR',
    link: 'https://www.antlr.org/',
  },
  websocket: {
    name: 'WebSocket',
    link: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
  },
  tibero: {
    name: 'Tibero',
    link: 'https://www.tmaxtibero.com/product/productView.do?prod_cd=tibero',
  },
  jeus: {
    name: 'JEUS',
    link: 'https://kr.tmaxsoft.com/product/productView.do?prod_cd=jeus&detail_gubun=prod_main',
  }
}

function getSkills (...keys: (keyof typeof skill)[]) {
  return Array.from(new Set(keys))
    .sort((a, b) => skill[a].name.localeCompare(skill[b].name))
    .map(key => skill[key])
}

const profile = {
  name: '지환태',
  description: '개발자',
  email: 'jht008@gmail.com',
  skills: [{
    position: 'Frontend',
    skills: getSkills('react', 'nextjs', 'reactNative')
  }]
}

interface Company {
  id: string
  name: string
  link: string
}

const hyubiz: Company = {
  id: 'hyubiz',
  name: '휴비즈',
  link: 'https://www.hyubiz.com/',
}
const tmaxSoft: Company = {
  id: 'tmaxSoft',
  name: '티맥스소프트',
  link: 'https://kr.tmaxsoft.com/',
}

function dedent (strings: TemplateStringsArray) {
  const trimmed = strings.map(string => {
    const lines = string.split('\n')
    const trimmed = lines.map(line => line.trim())

    return trimmed.join('\n').trim()
  })
  return trimmed.join('\n').trim()
}

const careers = [{
  company: hyubiz,
  from: new Date('2021-07-19'),
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
  `
}, {
  company: tmaxSoft,
  from: new Date('2018-01-01'),
  to: new Date('2021-07-31'),
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
  `
}]

const educations = [{
  name: '한양대학교 대학원',
  from: new Date('2016-03-01'),
  to: new Date('2018-02-28'),
  degree: '석사',
  major: '컴퓨터·소프트웨어학과',
}, {
  name: '한양대학교',
  from: new Date('2012-03-01'),
  to: new Date('2016-02-28'),
  degree: '학사',
  major: '컴퓨터전공',
}]

const projects: Array<{
  name: string
  company?: Company
  from: Date
  to?: Date
  body: string
  skills: Array<typeof skill[keyof typeof skill]>
  images: Array<Array<{
    srcset: Array<{
      src: StaticImageData
      colorScheme?: 'light' | 'dark'
    }>
    alt: string
    width: number
    height: number
    ratio: number
  }>>
}> = [{
  company: hyubiz,
  name: '커뮤니티 서비스 백앤드',
  from: new Date('2021-07-19'),
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
  skills: getSkills('nest', 'graphql', 'mysql', 'redis', 'elasticsearch', 'terraform', 'aws')
}, {
  company: hyubiz,
  name: 'S3 이미지 리사이징',
  from: new Date('2021-07-19'),
  body: dedent`
    S3에 저장된 이미지 파일 리사이징. width, height, fit, format 옵션 제공. Lambda@Edge의 origin-response 에서 작동.
    
    # 주요 업무
    
    * Node.js의 이미지 처리 라이브러리인 sharp를 사용하여 원본 이미지를 1MB 미만으로 축소
    * HEIC 이미지 처리 환경 구축
    * Github Actions를 사용하여 빌드, 업로드 라인 구축
  `,
  images: [],
  skills: getSkills('nodejs', 'aws')
}, {
  company: hyubiz,
  name: '커뮤니티 서비스 모바일 어플리케이션',
  from: new Date('2021-07-19'),
  body: dedent`
    전대전(전국대신전해드립니다) 서비스의 React Native 구현.
    
    # 주요 업무
    
    * 어플리케이션 전체 개발
    * Code Push 배포 환경 구축
  `,
  images: [[{
    srcset: [{
      src: jdjRNImageLight0,
      colorScheme: 'light'
    }, {
      src: jdjRNImageDark0,
      colorScheme: 'dark'
    }],
    width: 590,
    height: 1280,
    alt: '전대전 모바일 어플리케이션 스크린샷',
    ratio: 1,
  }, {
    srcset: [{
      src: jdjRNImageLight1,
      colorScheme: 'light'
    }, {
      src: jdjRNImageDark1,
      colorScheme: 'dark'
    }],
    width: 590,
    height: 1280,
    alt: '전대전 모바일 어플리케이션 스크린샷',
    ratio: 1,
  }]],
  skills: getSkills('reactNative', 'graphql', 'codePush')
}, {
  company: hyubiz,
  name: '커뮤니티 서비스 웹페이지',
  from: new Date('2021-07-19'),
  body: dedent`
    전대전(전국대신전해드립니다) 서비스의 웹 사이트 구현.
    
    # 주요 업무
    
    * 관리자 페이지 구현
    * 메인 페이지 구현
    * 게시물 상세 페이지 구현
  `,
  images: [[{
    srcset: [{
      src: jdjFEImage0,
    }],
    width: 750,
    height: 1334,
    alt: '전대전 웹페이지 스크린샷',
    ratio: 1
  }, {
    srcset: [{
      src: jdjFEImage1
    }],
    width: 750,
    height: 1334,
    alt: '전대전 웹페이지 스크린샷',
    ratio: 1
  }]],
  skills: getSkills('nextjs', 'graphql')
}, {
  company: hyubiz,
  name: '뉴스레터 제작 도구',
  from: new Date('2023-01-01'),
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
  skills: getSkills('aws', 'nest', 'nextjs', 'graphql', 'mysql', 'redis', 'terraform'),
}, {
  company: tmaxSoft,
  name: '3270 터미널, 오픈프레임 간 통신 중계 서버',
  from: new Date('2018-01-01'),
  to: new Date('2021-07-16'),
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
  skills: getSkills('java', 'jeus', 'tibero')
}, {
  company: tmaxSoft,
  name: '3270 터미널 웹 브라우저 구현',
  from: new Date('2018-01-01'),
  to: new Date('2021-07-16'),
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
  images: [[{
    srcset: [{
      src: webterminalImage
    }],
    alt: '3270 터미널 웹 브라우저',
    width: 1920,
    height: 1080,
    ratio: 1
  }]],
  skills: getSkills('websocket')
}, {
  company: tmaxSoft,
  name: 'OF21',
  from: new Date('2018-01-01'),
  to: new Date('2021-07-16'),
  body: dedent`
    오픈프레임의 새로운 버전 개발 참여.
    
    # 주요 업무
    
    * CICS COBOL 커맨드  JAVA 변환을 위한 CICS COBOL 커맨드 파서 제작
    * CICS JAVA 커맨드 구현
  `,
  images: [],
  skills: getSkills('java', 'antlr')
}, {
  company: undefined,
  name: '유튜브 메일 알림 서비스',
  from: new Date('2021-01-07'),
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
  images: [[{
    srcset: [{
      src: ytfmWebImage
    }],
    width: 750,
    height: 1334,
    ratio: 1249 / 1334,
    alt: 'YTFM Web'
  }, {
    srcset: [{
      src: ytfmEmailImage
    }],
    width: 1423,
    height: 1249,
    ratio: 1,
    alt: 'YTFM Email'
  }]],
  skills: getSkills('react', 'aws', 'pubsubhubbub')
}]

const github = {
  link: 'https://github.com/zfanta',
  pullRequests: [{
    owner: 'ammarahm-ed',
    repo: 'react-native-mmkv-storage',
    pullNumber: 51
  }, {
    owner: 'DIYgod',
    repo: 'RSSHub',
    pullNumber: 4934
  }, {
    owner: 'DIYgod',
    repo: 'RSSHub',
    pullNumber: 3376
  }, {
    owner: 'typora',
    repo: 'Typora-i18n',
    pullNumber: 79
  }, {
    owner: 'xpressengine',
    repo: 'xe-core',
    pullNumber: 2241
  }, {
    owner: 'birkett',
    repo: 'CloudFlare-DDNS-Updater',
    pullNumber: 2
  }, {
    owner: 'xpressengine',
    repo: 'xe-core',
    pullNumber: 1160
  }, {
    owner: 'xpressengine',
    repo: 'xe-core',
    pullNumber: 1159
  }]
}

export {
  profile,
  careers,
  educations,
  projects,
  github
}
