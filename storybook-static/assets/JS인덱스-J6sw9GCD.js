import{j as n,M as B}from"./index-BWdQKtNj.js";import{useMDXComponents as E}from"./index-BcjqIVm3.js";import"./iframe-B-jtwUgk.js";import"./index-AoVeDfJ4.js";import"./index-DrFu-skq.js";function i(r){const s={a:"a",br:"br",h1:"h1",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...E(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(B,{title:"코드규약/JS/00.Index"}),`
`,n.jsx(s.h1,{id:"퍼블리싱-js-규약-문서",children:"퍼블리싱 JS 규약 문서"}),`
`,n.jsxs(s.p,{children:["웹 퍼블리싱 환경에서 일관된 JavaScript 코딩 스타일과 유지보수성을 보장하기 위한 규칙 모음입니다.",n.jsx(s.br,{}),`
`,"본 문서는 팀 내 개발 경험을 통일하고, 예측 가능한 구조를 통해 품질을 향상하는 것을 목표로 합니다."]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{id:"1-기본-철학-및-원칙",children:"1. 기본 철학 및 원칙"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"./?path=/docs/%EC%BD%94%EB%93%9C%EA%B7%9C%EC%95%BD-js-%EA%B3%B5%ED%86%B5-01-%EA%B8%B0%EC%B4%88%EC%9B%90%EC%B9%99-01-%EC%BD%94%EB%93%9C%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%9B%90%EC%B9%99--docs",children:"1.1 코드 스타일 원칙"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"./?path=/docs/%EC%BD%94%EB%93%9C%EA%B7%9C%EC%95%BD-js-%EA%B3%B5%ED%86%B5-01-%EA%B8%B0%EC%B4%88%EC%9B%90%EC%B9%99-02-%EB%84%A4%EC%9D%B4%EB%B0%8D%EA%B7%9C%EC%B9%99--docs",children:"1.2 네이밍 규칙"})}),`
`]}),`
`,n.jsx(s.h3,{id:"2-자바스크립트-작성-규칙",children:"2. 자바스크립트 작성 규칙"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"./?path=/docs/%EC%BD%94%EB%93%9C%EA%B7%9C%EC%95%BD-js-%EA%B3%B5%ED%86%B5-02-%EC%BD%94%EB%93%9C%EC%9E%91%EC%84%B1%EB%B0%A9%EB%B2%95-01-%EB%B3%80%EC%88%98-%EC%83%81%EC%88%98%EA%B4%80%EB%A6%AC--docs",children:"2.1 변수/상수 관리"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"./?path=/docs/%EC%BD%94%EB%93%9C%EA%B7%9C%EC%95%BD-js-%EA%B3%B5%ED%86%B5-02-%EC%BD%94%EB%93%9C%EC%9E%91%EC%84%B1%EB%B0%A9%EB%B2%95-02-%ED%95%A8%EC%88%98%EC%9E%91%EC%84%B1%EA%B7%9C%EC%B9%99--docs",children:"2.2 함수 작성 규칙"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"./?path=/docs/%EC%BD%94%EB%93%9C%EA%B7%9C%EC%95%BD-js-%EA%B3%B5%ED%86%B5-02-%EC%BD%94%EB%93%9C%EC%9E%91%EC%84%B1%EB%B0%A9%EB%B2%95-03-dom%ED%83%90%EC%83%89-%EC%A1%B0%EC%9E%91--docs",children:"2.3 DOM 탐색 및 조작 규칙"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"./?path=/docs/%EC%BD%94%EB%93%9C%EA%B7%9C%EC%95%BD-js-%EA%B3%B5%ED%86%B5-02-%EC%BD%94%EB%93%9C%EC%9E%91%EC%84%B1%EB%B0%A9%EB%B2%95-04-%EC%9D%B4%EB%B2%A4%ED%8A%B8%ED%95%B8%EB%93%A4%EB%A7%81--docs",children:"2.4 이벤트 핸들링 규칙"})}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{id:"현-상황-분석-및-문제점",children:"현 상황 분석 및 문제점"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"전체 비율대비 퍼블+개발 js가 섞여있는 파일은 1%이지만, 가장 큰 리소스를 할애중임"}),`
`,n.jsx(s.li,{children:"또한, 퍼블 외 개발 api의 비중도 명확한 api탐색 시간이 걸려 리소스를 할애함"}),`
`]}),`
`,n.jsx("img",{src:"./totaljs_graph.png"}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(s.h4,{id:"1-한-파일안에-퍼블용코드--개발용-api코드가-섞여있음",children:"1. 한 파일안에 퍼블용코드 + 개발용 api코드가 섞여있음"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["화면 표현/애니메이션(퍼블 코드)과 서버 데이터 처리(API 코드)가 한 파일에 섞여있음 ",n.jsx("br",{})]}),`
`,n.jsxs(s.li,{children:["파일을 열면 역할 파악이 어려움",n.jsx("br",{})]}),`
`,n.jsx(s.li,{children:"수정/작업 시간 증가"}),`
`]}),`
`,n.jsx(s.h4,{id:"2-코드-방식이-파일마다-달라서-용도-파악에-시간이-걸림",children:"2. 코드 방식이 파일마다 달라서 용도 파악에 시간이 걸림"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"jQuery, 순수 JS, 혼합형 등 방식이 제각각"}),`
`,n.jsx(s.li,{children:"규칙이 없어서 매번 구조를 다시 이해해야 함  → 작업 효율 저하"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"예시 미리보기"}),n.jsx("img",{src:"mixjs_example.png"})]}),`
`,n.jsx("br",{}),`
`,n.jsx("img",{src:"./monthjs_graph.png"}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(s.h4,{id:"4-현재-구조로-유지하면-앞으로도-혼합-파일이-늘어날-가능성이-높음",children:"4. 현재 구조로 유지하면 앞으로도 혼합 파일이 늘어날 가능성이 높음"}),`
`,n.jsx(s.p,{children:"1, 2번 문제를 그대로 둔다면:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["월별 파일 증가에 따라 분석/작업 시간은 점점 늘어남",n.jsx("br",{})]}),`
`,n.jsx(s.li,{children:"장기적으로 유지보수 비용 증가 예상"}),`
`,n.jsx(s.li,{children:"파일 누적 시 최대 126개까지 파일 누적 가능 : 앞으로 레퍼런스 혼동 예상"}),`
`]}),`
`,n.jsx("img",{src:"./monthlyfuture_graph.png"}),`
`,n.jsx(s.h3,{id:"가이드-적용을-통해-해결-to-be",children:"가이드 적용을 통해 해결 (to-be)"}),`
`,n.jsx(s.h5,{id:"1api-호출-자동화--퍼블-코드-유지",children:"1.API 호출 자동화 + 퍼블 코드 유지"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["API 로직은 ",n.jsx("a",{target:"_blank",href:"./?path=/docs/자동화개발-이벤트api자동호출--docs",children:"전용 프로그램"}),"에서 처리",n.jsx("br",{})]}),`
`,n.jsxs(s.li,{children:["퍼블 코드는 화면 표현만 담당",n.jsx("br",{}),`
→ 파일 구조 명확, 분석 속도 개선`]}),`
`]}),`
`,n.jsxs("div",{style:{display:"flex"},children:[n.jsx("img",{src:"./autosys_before1.png",style:{width:"48%"}}),n.jsx("img",{src:"./autosys_after1.png",style:{width:"48%"}})]}),`
`,n.jsx(s.h4,{id:"2-가이드-제작-기점으로-코드-스타일을-획일화하여-용도를-명확히-함",children:"2. 가이드 제작 기점으로 코드 스타일을 획일화하여 용도를 명확히 함"}),`
`,n.jsxs(s.p,{children:["동일 패턴, 동일 파일 구조 적용",n.jsx("br",{}),`
→ 누구나 파일을 열면 바로 용도 이해 가능`,n.jsx("br",{}),`
→ 유지보수 속도 향상`]}),`
`,n.jsx(s.h4,{id:"3-월별-파일-작업률-대비-1년-후-예상",children:"3. 월별 파일 작업률 대비 1년 후 예상"}),`
`,n.jsxs(s.p,{children:["구조 통일 + 역할을 분리하여",n.jsx("br",{}),`
→ 혼합 파일 증가율 0%`,n.jsx("br",{}),`
→ 유지보수 속도 향상 : 현 기준 시점(2025.12월)부터 혼용파일 `,n.jsx(s.strong,{children:"0개 증가"}),", ",n.jsx(s.strong,{children:"이미 발생한 39개 이상 유지하지 않음(2024.11~2025.12)"})]}),`
`,n.jsx("img",{src:"./monthlyfuture02_graph.png"})]})}function x(r={}){const{wrapper:s}={...E(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(i,{...r})}):i(r)}export{x as default};
