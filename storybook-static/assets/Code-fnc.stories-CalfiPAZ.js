import{r as p}from"./style-CUJ3xHXS.js";import{d as a}from"./코드작성방법-CrocsOfO.js";import{k as C,m as f}from"./fnc-RF4Phh58.js";const b=t=>{let e="";switch(t){case"함수선언":e=a.함수작성규칙.함수선언;break;case"호출순서":e=a.함수작성규칙.호출순서;break;case"maintain":e=maintain;break}return`${p}${e}`};let h="코드규약/JS/공통/02.코드작성방법/02.함수작성규칙",k=`
Javascript 사용시 사용할 함수 작성 규칙 
1. 함수는 function 함수명(){} 형태로 작성한다 
2. 위치는 상수 바로 아래에 위치시킨다 
3. 호이스팅 방지를 위해 호출 함수는 위에서 미리 선언한다 
<style>
  .css-qa4clq :where(li:not(.sb-anchor, .sb-unstyled, .sb-unstyled li)){
    font-weight:400;
  }
</style>
`;const l=t=>{let e="";switch(t){case"작성형태":e="직관성을 위해 function 함수명(){}으로 선언하며, 화살표 함수는 금지한다.";break;case"호출순서":e="hoisting을 방지하기 위해 호출함수는 호출 위치 위에서 선언해야한다.";break;default:e=k}return e},y={title:h,parameters:{docs:{description:{component:C(l())},codePanel:!1}}},d=f(b,l,["함수선언","호출순서"],"none"),s=d.함수선언,r=d.호출순서;var o,c,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"stories.함수선언",...(n=(c=s.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var i,u,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"stories.호출순서",...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const D=["함수선언","호출순서"];export{D as __namedExportsOrder,y as default,s as 함수선언,r as 호출순서};
