import{k as h,m as p}from"./fnc-RF4Phh58.js";const g=e=>{let t=`
  /* 공통 */ <br/>
    .content__wrap{} <br/>
    .content{}<br/>
    .content header{}<br/>
    .content header h2{}<br/>
    .content header h4{}<br/>
    .content section{}<br/>
    .content article{}<br/>
    .content article .image{}<br/>
    .content article .texts{}<br/>
    .content article h2{}<br/>
    .content article h4{}<br/>
    .content article p{}<br/>
    
    <br/>
    
  /* 개별 */ <br/>
    .content__wrap--01{}<br/>
    .content--01{}<br/>
    .content--01 header{}<br/>
    .content--01 header h2{}<br/>
    .content--01 header h4{}<br/>
    .content--01 section{}<br/>
    .content--01 article{}<br/>
    .content--01 article:nth-of-type(1){}<br/>
    .content--01 .art--01{}<br/>
    .content--01 .art--01 .image{}<br/>
    .content--01 .art--01 .texts{}<br/>
    .content--01 .art--01 h3{}<br/>
    .content--01 .art--01 h4{}<br/>
    .content--01 .art--01 p{}<br/>
  `;return e==="element"&&(t=`
    div.content__wrap--01{}<br/>
    #contentWrap{}<br/>
    .content__wrap--01#contentWrap{}<br/>
    article.art--01{}<br/>
    #article01.content__art<br/>
    div.conten--01 header h2{}<br/>
    div.conten--01 section article .image{}<br/>
    .content--01 .art--01 .texts h3{}<br/>
    .content--01 .art--01 .texts>h3{}<br/>
    .content--01 .art--01 .texts h3+h4{}<br/>
    .content--01 .content__art ~ div{}<br/>
   `),`${t}
<style>
${t.replaceAll("<br/>","")}
</style>`};let m="코드규약/CSS/공통/01.선택자",_=`
- 모든 선택자는 class위주로 작성한다 (‼️아이디 사용금지‼️)
- 꼭 필요한 override경우를 제외하고 자식, 형제 결합자 사용금지 (+,~,>)
- 꼭 필요한 케이스를 제외하고 태그와 함께 클래스 선택자 사용금지 (예: article.content__art.article--01)
- 3depth 이상의 선택자는 지양한다 (전면금지는 아니지만, 최대한 사용을 줄인다)
- 상태, 타이포그래피, 컬러, 배경컬러 등은 단일 선택자로 설정한다.
- n번째 자식요소 선택시 nth-of-type만 사용한다 (짝수, 홀수 동일)

다음과 같은 구조의 html을 선택한다고 가정할때, 모범케이스와 금지 케이스는 아래와 같다. <br/>
<sub>아래의 케이스는 마크업 규약과 무관한 태그로, 실제 마크업 규약에서는 ‼️id 전면 사용 금지‼️이다.</sub>
<div style="width:100%; outline:1px solid #ccc; padding: max(2%, 5px)">
  <pre>
  &lt;div class="content\\_\\_wrap content\\_\\_wrap--01" id="contentWrap"&gt;
    &lt;div class="content content--01"&gt;
       &lt;header&gt;
          &lt;h2&gt;콘텐츠 타이틀&lt;/h2&gt;
          &lt;h4&gt;콘텐츠 서브 타이틀&lt;/h4&gt;
       &lt;/header&gt;
       &lt;section&gt;
          &lt;article class="content__art art--01" id="article01"&gt;
              &lt;div class="image"&gt;&lt;/div&gt;
              &lt;div class="texts"&gt;
                &lt;h3&gt;아티클 타이틀&lt;/h3&gt;
                &lt;h4&gt;아티클 섭타이틀&lt;/h4&gt;
                &lt;p&gt; 두줄이상의 내용 &lt;/p&gt;
              &lt;/div&gt;
          &lt;/article&gt;
       &lt;/section&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  </pre>
  </div>
`,u=`- class위주의 선택자 작성
- 태그와 클래스 선택자 미사용
- 최대 3depth의 선택자 사용`,v=`
- 아이디 선택자 사용
- 3depth 이상 선택자 사용
- 태그와 선택자명 동시 사용
- 자식 형제결합자 사용
`;const b=e=>{let t="";return e==="block"?t=u:e==="element"?t=v:t=_,t},S={title:m,parameters:{docs:{description:{component:h(b())}}}},d=p(g,b,["block","element"],"style"),r=d.block,n=d.element;var c,o,a;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"stories.block",...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var l,s,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"stories.element",...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const k=["모범케이스","금지케이스"];export{k as __namedExportsOrder,S as default,n as 금지케이스,r as 모범케이스};
