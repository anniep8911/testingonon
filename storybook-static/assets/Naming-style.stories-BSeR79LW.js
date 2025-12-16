import{r as b}from"./style-CUJ3xHXS.js";import{k as g,m as y}from"./fnc-RF4Phh58.js";const u=`
<h4>카멜케이스 사용</h4>
<h5>✅ Do</h5>
<pre class="code">
const mainButton =  $('key-visual__text button'); 
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const main-button = $('key-visual__text button'); 
const main__button =$('key-visual__text button'); 
cont mnbtn = $('key-visual__text button'); 
</pre>
`,f=`
<table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
  <thead>
    <tr style="background-color: #eaeaeaff; color: #555; text-align: left;">
      <th style="padding: 10px; border: 1px solid #ccc;">역할/상황</th>
      <th style="padding: 10px; border: 1px solid #ccc;">추천 함수 접두사/동사</th>
      <th style="padding: 10px; border: 1px solid #ccc;">예시 함수명</th>
      <th style="padding: 10px; border: 1px solid #ccc;">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: rgb(246, 249, 252); color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">초기화 / 컴포넌트 준비</td>
      <td style="padding: 10px; border: 1px solid #ccc;">init</td>
      <td style="padding: 10px; border: 1px solid #ccc;">initSwiper(), initAccordion()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">컴포넌트 초기화, DOM 준비</td>
    </tr>
    <tr style="background-color: #fff; color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">토글 / 상태 변경</td>
      <td style="padding: 10px; border: 1px solid #ccc;">toggle</td>
      <td style="padding: 10px; border: 1px solid #ccc;">toggleAccordion(), toggleMenu()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">UI 상태 ON/OFF 토글</td>
    </tr>
    <tr style="background-color: rgb(246, 249, 252); color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">열기</td>
      <td style="padding: 10px; border: 1px solid #ccc;">open</td>
      <td style="padding: 10px; border: 1px solid #ccc;">openModal(), openDropdown()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">UI 요소 열기</td>
    </tr>
    <tr style="background-color: #fff; color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">닫기</td>
      <td style="padding: 10px; border: 1px solid #ccc;">close</td>
      <td style="padding: 10px; border: 1px solid #ccc;">closeModal(), closeDropdown()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">UI 요소 닫기</td>
    </tr>
    <tr style="background-color: rgb(246, 249, 252); color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">렌더링 / 갱신</td>
      <td style="padding: 10px; border: 1px solid #ccc;">render, update</td>
      <td style="padding: 10px; border: 1px solid #ccc;">renderTabs(), updateSlider()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">UI 다시 그리기 / 갱신</td>
    </tr>
    <tr style="background-color: #fff; color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">이벤트 핸들러</td>
      <td style="padding: 10px; border: 1px solid #ccc;">handle, on</td>
      <td style="padding: 10px; border: 1px solid #ccc;">handleClick(), onAccordionToggle()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">이벤트 처리 함수</td>
    </tr>
    <tr style="background-color: rgb(246, 249, 252); color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">체크 / 상태 확인</td>
      <td style="padding: 10px; border: 1px solid #ccc;">is, has</td>
      <td style="padding: 10px; border: 1px solid #ccc;">isActive(), hasClassActive()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">상태나 조건 체크</td>
    </tr>
    <tr style="background-color: #fff; color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">선택 / 반환</td>
      <td style="padding: 10px; border: 1px solid #ccc;">get</td>
      <td style="padding: 10px; border: 1px solid #ccc;">getSelectedTab(), getActiveSlide()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">특정 요소나 값 반환</td>
    </tr>
  </tbody>
</table>
`,c={LET:u,CONST:f},m=o=>{let d="";switch(o){case"var":d=c.LET;break;case"func":d=c.CONST;break}return`${b}${d}`};let h="코드규약/JS/공통/01.기초원칙/02.네이밍규칙",k=`
협업의 가독성과 유지보수성을 위해, 퍼블리싱 JS에서는 변수, 상수, 함수 모두 의미와 역할이 명확하게 드러나는 이름을 사용한다.
`;const n=o=>{let d="";switch(o){case"var":d="의미 있는 이름을 사용하여 변수의 역할과 값을 바로 알 수 있도록 한다.";break;case"func":d="동작 중심 이름을 사용하여 함수의 목적과 수행 동작을 명확히 나타낸다.";break;default:d=k}return d},v={title:h,parameters:{docs:{description:{component:g(n())},codePanel:!1}}},x=y(m,n,["var","func","maintain"],"none"),t=x.var,e=x.func;var r,s,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"stories.var",...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,a,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"stories.func",...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const A=["변수네이밍","함수네이밍"];export{A as __namedExportsOrder,v as default,t as 변수네이밍,e as 함수네이밍};
