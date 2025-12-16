import{r as u}from"./style-CUJ3xHXS.js";import{d as o}from"./코드작성방법-CrocsOfO.js";import{k as S,m as b}from"./fnc-RF4Phh58.js";const f=r=>{let e="";switch(r){case"let":e=o.변수상수관리.LET;break;case"cons":e=o.변수상수관리.CONST;break}return`${u}${e}`};let h="코드규약/JS/공통/02.코드작성방법/01.변수&상수관리",g=`
Javascript 사용시 사용할 변수/상수에대한 구분
1. var는 hoisting 위험과 중복 선언의 위험이 발생하므로 더이상 사용하지않는다.
2. 값이 치환되는것은 변수로 명명하며, let을 사용한다.
3. 값이 치환되지 않는 고정은 상수로 명명하며, const를 사용한다.
<style>
  .css-qa4clq :where(li:not(.sb-anchor, .sb-unstyled, .sb-unstyled li)){
    font-weight:400;
  }
</style>
`;const d=r=>{let e="";switch(r){case"let":e="값이 치환될 수 있을때 사용한다.";break;case"cons":e="값이 치환될 수 없을때 사용한다.";break;default:e=g}return e},y={title:h,parameters:{docs:{description:{component:S(d())},codePanel:!1}}},p=b(f,d,["let","cons"],"none"),s=p.let,t=p.cons;var a,c,n;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"stories.let",...(n=(c=s.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,i,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"stories.cons",...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const C=["LET","CONST"];export{t as CONST,s as LET,C as __namedExportsOrder,y as default};
