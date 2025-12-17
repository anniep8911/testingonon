import{j as n,M as l}from"./index-B_QXQSsn.js";import{useMDXComponents as d}from"./index-D7FkSEsh.js";import"./iframe-DHD2lCtm.js";import"./index-AoVeDfJ4.js";import"./index-DrFu-skq.js";function r(s){const e={code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"코드규약/주석규칙/Event"}),`
`,n.jsx(e.h2,{id:"공통",children:"공통"}),`
`,n.jsxs(e.p,{children:["최상단에 다음과 같은 형식으로 주석을 추가한다. ",n.jsx("br",{}),`
작업자, TYPE으로 구성이 되며 아래에는 BO에 등록된 이벤트관련 키값을 넣으면 된다.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- 
    작업자: 이름 
    TYPE : 작업타입 (예/ 이벤트(온라인), 주특기 등)
    이벤트(온라인): 0006924 
    H.oney : 0006924
    룰렛이벤트 : 0006925
    블랙등급업 : 0006926
    임직원등급업 : 0006927 
-->
`})}),`
`,n.jsxs(e.p,{children:["작업내용은 반드시 레이아웃명, 컴포넌트명으로 구성한다. ",n.jsx("br",{})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-txt",children:` component: 마놀로블라닉 베스트셀러
`})}),`
`,n.jsx(e.h2,{id:"html",children:"HTML"}),`
`,n.jsxs(e.p,{children:["diff관련 주석은 추가하지 않고, 아래의 keyword관련한 작업을 구분하여 추가한다. ",n.jsx("br",{}),`
`,n.jsxs("sub",{children:["diff관련 업무가이드는 ",n.jsx("a",{href:"./?path=/docs/코드규약-html-공통-00-업무프로세스--docs",target:"_blank",children:"여기"}),"에서 확인한다."]})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- renewal: 마놀로블라닉 베스트아이템 레이아웃 변경 -->
<!-- component: 쿠키동의 레이어팝업 -->
`})}),`
`,n.jsxs("div",{style:{marginLeft:"10px",marginTop:"-20px"},children:[n.jsx(e.h4,{id:"keyword",children:"keyword"}),n.jsxs("table",{border:"1",cellspacing:"0",cellpadding:"8",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"키워드"}),n.jsx("th",{children:"사용 목적 / 상황"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"renewal"}),n.jsx("td",{children:"기존 페이지나 기능을 개편할 때 사용. 전체 구조 변경케이스에 사용"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"layout"}),n.jsx("td",{children:"페이지의 전체 배치나 그리드, 레이아웃 구조를 다루는 코드 영역 구분에 사용. 예) 컨텐츠 내 베스트셀러 , 추천상품, 기타 큰 블록 구분자"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"component"}),n.jsx("td",{children:"독립적으로 재사용 가능한 UI 요소를 정의하거나 수정할 때 사용. 예) 모달, 폼태그 "})]})]})]})]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"css",children:"CSS"}),`
`,n.jsx(e.p,{children:"keyword를 참고하여 아래와 같은 형식의 포맷으로 작업한다"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* common: 주특기 공통 아이콘 */
/* layout: 마놀로블라닉 베스트아이템 */
/* component: 쿠키동의 레이어팝업 */
`})}),`
`,n.jsxs("div",{style:{marginLeft:"10px",marginTop:"-20px"},children:[n.jsx(e.h4,{id:"keyword-1",children:"keyword"}),n.jsxs("table",{border:"1",cellspacing:"0",cellpadding:"8",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"키워드"}),n.jsx("th",{children:"사용 목적 / 상황"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"renewal"}),n.jsx("td",{children:"기존 페이지나 기능에서 전면 스타일 개편이 발생할때 사용"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"layout"}),n.jsx("td",{children:"페이지의 전체 배치나 그리드, 레이아웃 구조를 다루는 코드 영역 구분에 사용. 예) 컨텐츠 내 베스트셀러 , 추천상품, 기타 큰 블록 구분자"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"component"}),n.jsx("td",{children:"독립적으로 재사용 가능한 UI 요소를 정의하거나 수정할 때 사용. 예) 모달, 폼태그 "})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"common"}),n.jsx("td",{children:"공통적으로 정의되는 스타일요소에 사용"})]})]})]})]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"javascript",children:"JavaScript"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"자바스크립트는 자바스크립트 규약이 업데이트 될 시점에 같이 업데이트 할 예정임 (예상일정: 2025.12.02)"}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"금지사항",children:"🚫금지사항"}),`
`,n.jsx(e.p,{children:"다음과 같은 간소화 내용은 금지한다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-txt",children:`/* nav */
/* keyvisual */
/* content01 */
<!-- 박정아 작업 -->
<!-- 2521980 2025.11.18 작업 -->
<!-- 메인리뉴얼건 -->
`})})]})}function j(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
