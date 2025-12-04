import{j as e,M as i}from"./index-BWdQKtNj.js";import{useMDXComponents as t}from"./index-BcjqIVm3.js";import"./iframe-B-jtwUgk.js";import"./index-AoVeDfJ4.js";import"./index-DrFu-skq.js";function s(r){const n={br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"코드규약/JS/01.코드정렬규칙"}),`
`,e.jsx(n.h1,{id:"vs-code-기반-prettier-적용-가이드",children:"VS Code 기반 Prettier 적용 가이드"}),`
`,e.jsxs(n.p,{children:["웹 퍼블리싱 프로젝트에서 ",e.jsx(n.strong,{children:"일관된 코드 스타일 유지"}),"를 위해 Prettier를 VS Code에서 설정하고 사용하는 방법을 안내합니다."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"1-prettier-확장-설치",children:"1. Prettier 확장 설치"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["VSCode에서 ",e.jsx(n.code,{children:"Prettier"}),"를 검색한다."]}),`
`]}),`
`,e.jsx("img",{src:"./jsprettier01.png"}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prettier - Code formatter"})," 확장 설치한다."]}),`
`]}),`
`,e.jsx("img",{src:"./jsprettier02.png"}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:["상태 표시줄 오른쪽 아래에 ",e.jsx(n.code,{children:"Prettier"})," 아이콘이 표시되는지 확인한다."]}),`
`]}),`
`,e.jsx("img",{src:"./jsprettier03.png"}),`
`,e.jsx(n.h3,{id:"2-프로젝트에-prettier-설정-파일-추가",children:"2. 프로젝트에 Prettier 설정 파일 추가"}),`
`,e.jsxs(n.p,{children:["프로젝트 루트에 ",e.jsx(n.code,{children:"prettier.config.js"})," 또는 ",e.jsx(n.code,{children:".prettierrc"})," 파일을 생성한 뒤 아래 기본 설정을 추가한다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always"
}
`})}),`
`,e.jsx(n.h3,{id:"3-vs-code에서-prettier를-기본-포맷터로-설정",children:"3. VS Code에서 Prettier를 기본 포맷터로 설정"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Ctrl + Shift + P"})," → ",e.jsx(n.strong,{children:"Preferences: Open User Settings (JSON)"})," 검색 후 아래 항목을 추가한다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
`})}),`
`,e.jsx(n.h3,{id:"4-저장-시-자동-포맷format-on-save-설정",children:"4. 저장 시 자동 포맷(Format On Save) 설정"}),`
`,e.jsxs(n.p,{children:["VS Code 설정(Settings)에서 ",e.jsx(n.code,{children:"format on save"})," 검색 후 옵션 활성화",e.jsx(n.br,{}),`
`,"또는 ",e.jsx(n.code,{children:"settings.json"}),"에 아래 내용 추가:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "editor.formatOnSave": true
}
`})}),`
`,e.jsx(n.h3,{id:"5-파일별-적용-범위-설정",children:"5. 파일별 적용 범위 설정"}),`
`,e.jsx(n.p,{children:"Prettier를 js에만 적용할 수 있도록 설정한다."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}
`})}),`
`,e.jsx(n.h3,{id:"6-prettier-동작-확인-체크리스트",children:"6. Prettier 동작 확인 체크리스트"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"저장 시 자동 정렬되는지 확인"}),`
`,e.jsxs(n.li,{children:["상태바에 ",e.jsx(n.code,{children:"Prettier"})," 아이콘이 표시되는지 확인"]}),`
`]})]})}function h(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{h as default};
