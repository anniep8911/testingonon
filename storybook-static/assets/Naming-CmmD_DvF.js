import{j as n,M as d}from"./index-BGmDx2nn.js";import{useMDXComponents as l}from"./index-DOkkSm9Q.js";import"./iframe-DhE8GkfB.js";import"./index-AoVeDfJ4.js";import"./index-DrFu-skq.js";function s(e){const r={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"코드규약/네이밍규칙"}),`
`,n.jsx(r.h1,{id:"-현대백화점-면세점-코드북-네이밍-가이드-bem-규칙",children:"🧱 현대백화점 면세점 코드북 네이밍 가이드 (BEM 규칙)"}),`
`,n.jsxs(r.p,{children:["네이밍 규칙은 ",n.jsx(r.strong,{children:"BEM(Block__Element--Modifier)"})," 형식으로 진행한다.",n.jsx(r.br,{}),`
`,"네이밍 규칙은 크게 ",n.jsx(r.strong,{children:"태그 규칙"}),", ",n.jsx(r.strong,{children:"속성 규칙"}),"으로 나뉜다."]}),`
`,n.jsxs(r.p,{children:["'block' 혹은 'element' 안에는 kebab-case('-')를 사용할 수 있다.",n.jsx(r.br,{}),`
`,"예) 'content-pizza__header-pickle--active'"]}),`
`,n.jsxs(r.p,{children:["⚠️ ",n.jsx(r.strong,{children:"id는 절대 사용 금지"}),n.jsx(r.br,{}),`
`,"(예외 케이스: 'form' 안에서 'label-input' 바인딩만 허용)",n.jsx(r.br,{}),`
`,"모든 태그에는 'class'명으로 네이밍하도록 한다."]}),`
`,n.jsxs(r.p,{children:["블록과 엘리먼트 사이는 '__' (언더바 2개),",n.jsx(r.br,{}),`
`,"엘리먼트와 모디파이어 사이는 '--' (하이픈 2개),",n.jsx(r.br,{}),`
`,"케밥 형식의 이름은 '-' (하이픈 1개)로 구분한다."]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"️-태그-규칙",children:"🏷️ 태그 규칙"}),`
`,n.jsx(r.h3,{id:"1️⃣-block의-기준",children:"1️⃣ Block의 기준"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["'body' 아래의 1차 영역",n.jsx(r.br,{}),`
`,"예: header, footer, content, main, banner, section 등"]}),`
`,n.jsx(r.li,{children:"'form', 'modal' 등 독립적 성격을 갖는 블록 영역"}),`
`]}),`
`,n.jsx(r.h3,{id:"2️⃣-element의-기준",children:"2️⃣ Element의 기준"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"블록 기준으로 발생하는 요소영역"}),`
`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{children:` 예시)  
   header__nav  
   header__gnb  
   footer__logo  
   main__texts  
   article__image
`})}),`
`,n.jsx(r.h3,{id:"3️⃣-modifier의-기준",children:"3️⃣ Modifier의 기준"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"element 기준으로 종속성이 있는 스타일"}),`
`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{children:`예시)
header__button--active  
toast__msg--danger  
article__button--lg  
form__check--on  
`})}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"-예시-코드",children:"💬 예시 코드"}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsxs(r.p,{children:[n.jsx("span",{style:{color:"red"},children:"Block"})," / ",n.jsx("span",{style:{color:"blue"},children:"Element"})]}),`
`]}),`
`,n.jsx("pre",{children:n.jsx("code",{class:"language-html",children:n.jsxs(r.p,{children:['<main class=" ',n.jsx("span",{style:{color:"red"},children:"container"}),`">
  <article class="`,n.jsx("span",{style:{color:"red"},children:"container__"}),n.jsx("span",{style:{color:"blue"},children:"location"}),`">
    <section class="`,n.jsx("span",{style:{color:"red"},children:"container__"}),n.jsx("span",{style:{color:"blue"},children:"location-box"}),`">
      <a href="https://www.hddfs.com/shop/dm/main.do" class="`,n.jsx("span",{style:{color:"red"},children:"container__"}),n.jsx("span",{style:{color:"blue"},children:"location-home"}),`">홈</a>
      <div class="`,n.jsx("span",{style:{color:"red"},children:"container__"}),n.jsx("span",{style:{color:"blue"},children:"location-nolink"}),`">
        <a href="javascript:">이벤트</a>
      </div>
    </section>
  </article>
</main>`]})})}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"-속성-규칙",children:"🎨 속성 규칙"}),`
`,n.jsx(r.h3,{id:"1️⃣-디자인-가이드",children:"1️⃣ 디자인 가이드"}),`
`,n.jsxs(r.p,{children:["디자인 가이드에서 추가된 내용은 ",n.jsx(r.strong,{children:"속성명--속성값"})," 형태로 작성한다."]}),`
`,n.jsx(r.h4,{id:"-icon",children:"🎯 icon"}),`
`,n.jsxs(r.p,{children:["ico-zoomin--line",n.jsx(r.br,{}),`
`,"ico-msg--fill"]}),`
`,n.jsx(r.h4,{id:"-color",children:"🎯 color"}),`
`,n.jsxs(r.p,{children:["clr--dark",n.jsx(r.br,{}),`
`,"bg--point01",n.jsx(r.br,{}),`
`,"clr--point03"]}),`
`,n.jsx(r.h4,{id:"-fontsizeweight",children:"🎯 font(size/weight)"}),`
`,n.jsxs(r.p,{children:["hn-h1--bold",n.jsx(r.br,{}),`
`,"hn-h8--thin",n.jsx(r.br,{}),`
`,"ph-p1",n.jsx(r.br,{}),`
`,"lb-cp1--bold"]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h3,{id:"-디자인-가이드-20251027-기준",children:"🎨 디자인 가이드 (2025.10.27 기준)"}),`
`,n.jsx(r.h4,{id:"폰트-컬러",children:"폰트 컬러"}),`
`,n.jsxs("table",{children:[n.jsxs("tr",{children:[n.jsx("th",{children:"클래스"}),n.jsx("th",{children:"HEX"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"clr--dark"}),n.jsx("td",{children:"#1B1E23"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"clr--medium-dark"}),n.jsx("td",{children:"#3D444F"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"clr--slate-grey"}),n.jsx("td",{children:"#5C6677"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"clr--steel"}),n.jsx("td",{children:"#788497"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"clr--cool-grey-two"}),n.jsx("td",{children:"#ABB2BE"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"clr--silver-two"}),n.jsx("td",{children:"#CCD1D8"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"clr--pale-grey"}),n.jsx("td",{children:"#EEF0F2"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"clr--white"}),n.jsx("td",{children:"#FFFFFF"})]})]}),`
`,n.jsx(r.h4,{id:"배경-컬러",children:"배경 컬러"}),`
`,n.jsxs("table",{children:[n.jsxs("tr",{children:[n.jsx("th",{children:"클래스"}),n.jsx("th",{children:"HEX"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"bg--dark"}),n.jsx("td",{children:"#1B1E23"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"bg--dark-grey"}),n.jsx("td",{children:"#282C34"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"bg--cool-grey"}),n.jsx("td",{children:"#9AA3B1"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"bg--silver"}),n.jsx("td",{children:"#DDE0E5"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"bg--pale-grey"}),n.jsx("td",{children:"#EBEBEB"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"bg--pale-grey-three"}),n.jsx("td",{children:"#F4F5F6"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"bg--pale-grey-four"}),n.jsx("td",{children:"#F7F7F7"})]})]}),`
`,n.jsx(r.h4,{id:"라인-컬러",children:"라인 컬러"}),`
`,n.jsxs("table",{children:[n.jsxs("tr",{children:[n.jsx("th",{children:"클래스"}),n.jsx("th",{children:"HEX"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ln-dark"}),n.jsx("td",{children:"#1B1E23"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ln-slate-grey"}),n.jsx("td",{children:"#5C6677"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ln-cool-grey-two"}),n.jsx("td",{children:"#ABB2BE"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ln-silver-two"}),n.jsx("td",{children:"#CCD1D8"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ln-silver"}),n.jsx("td",{children:"#DDE0E5"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ln-pale-grey"}),n.jsx("td",{children:"#EEF0F2"})]})]}),`
`,n.jsx(r.h4,{id:"포인트-컬러",children:"포인트 컬러"}),`
`,n.jsxs("table",{children:[n.jsxs("tr",{children:[n.jsx("th",{children:"클래스"}),n.jsx("th",{children:"HEX"}),n.jsx("th",{children:"설명"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ptc-pinkishred"}),n.jsx("td",{children:"#EA2829"}),n.jsx("td",{children:"기본 포인트"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ptc-pink"}),n.jsx("td",{children:"#EA2869"}),n.jsx("td",{children:"서브 포인트"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ptc-gradient"}),n.jsx("td",{children:"#EA2829 → #EA2869 → #CE28A5 → #A928EA"}),n.jsx("td",{children:"그라데이션"})]})]}),`
`,n.jsx(r.h4,{id:"토스트-컬러",children:"토스트 컬러"}),`
`,n.jsxs("table",{children:[n.jsxs("tr",{children:[n.jsx("th",{children:"클래스"}),n.jsx("th",{children:"HEX"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ts-reddish-orange"}),n.jsx("td",{children:"#F4511E"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ts-cerulean"}),n.jsx("td",{children:"#0288D1"})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h3,{id:"2️⃣-상태-관련",children:"2️⃣ 상태 관련"}),`
`,n.jsx(r.p,{children:"fade in/out 과 같은 상태 관련 내용은 'is--상태' 형태로 입력한다."}),`
`,n.jsxs(r.p,{children:["예시:",n.jsx(r.br,{}),`
`,"is--show",n.jsx(r.br,{}),`
`,"is--hide"]})]})}function j(e={}){const{wrapper:r}={...l(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{j as default};
