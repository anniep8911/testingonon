import{j as e,M as r}from"./index-HDuo37sZ.js";import{useMDXComponents as s}from"./index-Ccbj_1fE.js";import"./iframe-LWiEsQ1_.js";import"./index-AoVeDfJ4.js";import"./index-DrFu-skq.js";function c(d){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"작업환경/GIT/02.명령어 가이드"}),`
`,e.jsx(n.p,{children:`✅사용가능 명령어
충돌 방지를 위해 아래와 같은 명령어만 사용한다.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cmd",children:`$ git pull
$ git add 경로
$ git commit -m "git convention기준으로 작성"
$ git push
`})}),`
`,e.jsx(n.p,{children:"🚫사용금지 명령어"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cmd",children:`$ git push -f
$ git push --force
`})}),`
`,e.jsx(n.h2,{id:"커밋메세지",children:"커밋메세지"}),`
`,e.jsx(n.h3,{id:"메세지-형식",children:"메세지 형식"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`1. 단순 작업
작업키워드 : [프로젝트카테고리] 작업내용
 
2.여러 작업
작업키워드 : [프로젝트카테고리]
        - 작업내용 1
        - 작업내용 2
        - 작업내용 3
`})}),`
`,e.jsx(n.p,{children:"🚫 사용금지"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`1. 이름, 날짜, 사번 금지
 
feat: [국영PC-크리테오] 장바구니 광고기능 추가 - 2025.10.15: 박정아
    feat: [국영PC-크리테오] 장바구니 광고기능 추가  2025.10.15
    feat: [국영PC-크리테오] 장바구니 광고기능 추가  박정아
    feat: [국영PC-크리테오] 장바구니 광고기능 추가  2521980
 
2. '-', ':' , '>' 외의 특수문자 사용금지
feat => [국영PC-크리테오] 장바구니 광고기능 추가!
 
3.여러 프로젝트를 동시에 섞어서 커밋 금지.
 feat : [크리테오 장바구니]
        - 작업내용 1
        - 작업내용 2
        [크리테오 상세페이지]
        - 작업내용 3
        [나스미디어]
        - 작업내용 4
`})}),`
`,e.jsx(n.h3,{id:"커밋메세지-작업-키워드",children:"커밋메세지 작업 키워드"}),`
`,e.jsxs("table",{border:"1",cellspacing:"0",cellpadding:"8",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"키워드"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"feat"})}),e.jsx("td",{children:"새로운 기능 추가"}),e.jsx("td",{children:e.jsx("code",{children:"feat: [국중영MO-메인,결제] GA추가"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fix"})}),e.jsx("td",{children:"버그 수정"}),e.jsx("td",{children:e.jsx("code",{children:"fix: [국영PC-메인] 웹표준 이슈 수정"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"docs"})}),e.jsx("td",{children:"문서만 수정"}),e.jsx("td",{children:e.jsx("code",{children:"docs: [Git Guide] 깃컨벤션 v1.2"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"style"})}),e.jsx("td",{children:"코드 로직 변경 없이 포맷/스타일 수정 (들여쓰기, 세미콜론 등)"}),e.jsx("td",{children:e.jsx("code",{children:"style: [Prettier] 포맷 적용 v1.2"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"design"})}),e.jsx("td",{children:"UI 디자인 변경 (CSS 등 시각 요소)"}),e.jsx("td",{children:e.jsx("code",{children:"design: [중MO-헤더] 장바구니 아이콘 교체"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"test"})}),e.jsx("td",{children:"테스트 코드 추가/수정"}),e.jsx("td",{children:e.jsx("code",{children:"test: [국PC/MO-나스미디어] API호출 테스트"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"refactor"})}),e.jsx("td",{children:"리팩터링 (코드 최적화)"}),e.jsx("td",{children:e.jsx("code",{children:"refactor: [영PC-조말론] 콘솔제거, 모듈정리"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"build"})}),e.jsx("td",{children:"빌드 시스템 / 스크립트 수정"}),e.jsx("td",{children:e.jsx("code",{children:"build: [Eslint] Eslint v6.2"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"perf"})}),e.jsx("td",{children:"성능 개선"}),e.jsx("td",{children:e.jsx("code",{children:"perf: [국중MO/PC - 현데이SK2] 이미지 최적화"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"rename"})}),e.jsx("td",{children:"파일/폴더 이름 변경 또는 이동"}),e.jsx("td",{children:e.jsx("code",{children:"rename: css/common.css → css/common_renew.css"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"remove"})}),e.jsx("td",{children:"파일/폴더 삭제"}),e.jsx("td",{children:e.jsx("code",{children:"remove: css/event_tailwind.css"})})]})]})]})]})}function j(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(c,{...d})}):c(d)}export{j as default};
