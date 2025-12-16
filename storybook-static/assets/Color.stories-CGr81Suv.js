import{k as A,m as h}from"./fnc-RF4Phh58.js";const r={main:{PrimaryColor:{name:"Dark",color:"#1B1E23",cmt:"최종 CTA버튼이나 활성화 등 가장 중요한 경우에 사용합니다."},PointColor01:{name:"PinkishRed",color:"#EA2829",cmt:""},PointColor02:{name:"Pink",color:"#EA2869",cmt:""},PointColor03:{name:"Gradient",color:["#EA2829","#EA2869","#CE28A5","#A928EA"],cmt:"#EA2829(RED) - #EA2869 - #CE28A5 - #A928EA(PURPLE)"}},font:{Dark:{name:"Dark",color:"#1B1E23",cmt:"Contents Default"},MediumDark:{name:"MediumDark",color:"#30444F",cmt:""},SlateGrey:{name:"SlateGrey",color:"#5C6677",cmt:""},Steel:{name:"Steel",color:"#788497",cmt:"Input - Disabled Filter - Data"},CoolGreyTwo:{name:"CoolGreyTwo",color:"#4B8BBE",cmt:""},SilverTwo:{name:"SilverTwo",color:"#CCDD1B",cmt:"Input - Place Holder"},PaleGrey:{name:"PaleGrey",color:"#EEF0F2",cmt:""},White:{name:"White",color:"#FFFFFF",cmt:""}},background:{Dark:{name:"Dark",color:"#1B1E23",cmt:"Button - Primary"},DarkGrey:{name:"DarkGrey",color:"#2B2C34",cmt:""},CoolGrey:{name:"CoolGrey",color:"#9AA3B1",cmt:""},Silver:{name:"Silver",color:"#D0D3D5",cmt:""},PaleGrey:{name:"PaleGrey",color:"#EBEBEB",cmt:""},PaleGrey_02:{name:"PaleGrey",color:"#EEF0F2",cmt:"General Background / Button - Disabled"},PaleGrey_03:{name:"PaleGrey - three",color:"#F4F5F6",cmt:""},PaleGrey_04:{name:"PaleGrey - four",color:"#F5F7FA",cmt:"상품별 / Background Color"},PaleGrey_05:{name:"PaleGrey - four",color:"#F7F7F7",cmt:""},PaleGrey_06:{name:"PaleGreyFour",color:"#F3FAFB",cmt:"Input - Disabled"},White:{name:"White",color:"#FFFFFF",cmt:""}},line:{Dark:{name:"Dark",color:"#1B1E23",cmt:"Input - Hover, focus, Type Table - Top Line"},SlateGrey:{name:"SlateGrey",color:"#5C6677",cmt:"Footer BG"},CoolGreyTwo:{name:"CoolGreyTwo",color:"#A8B2BE",cmt:"Filter Box"},SilverTwo:{name:"SilverTwo",color:"#CCD1D8",cmt:""},Silver:{name:"Silver",color:"#D0E0E5",cmt:"Input - Default"},PaleGrey:{name:"PaleGrey",color:"#EEF0F2",cmt:"Section Divider Full Bleed Divider"}},status:{ReddishOrange:{name:"ReddishOrange",color:"#F4511E",cmt:"Toast Popup - Negative"},Cerulean:{name:"Cerulean",color:"#0288D1",cmt:"Toast Popup - Positive"}}},v=`
    <style>
        .css-s230ta{
            border:0px solid transparent;
            box-shadow: 0 0 0 red;
        }
        .code{
            margin-top:20px;
        }
        .css-1fdphfk{
            display:none;
        }
    </style>
`,T=e=>{let o="",d="",l="";for(let a in r[`${e}`])l=`background-color : ${r[e][a].color};`,Array.isArray(r[e][a].color)&&(l=`background : linear-gradient(127deg,${r[e][a].color});`),d+=`
    <style>
         .${r[e][a].name}{
           width: 400px;
            height: 100px;
            color: #fff;
            ${l}
            margin-top:20px;
            padding:10px;
            font-weight:700;
            text-shadow: 
                -1px -1px 0 #000, /* 좌상단 그림자 */
                1px -1px 0 #000,  /* 우상단 그림자 */
                -1px 1px 0 #000,  /* 좌하단 그림자 */
                1px 1px 0 #000;   /* 우하단 그림자 */;
            outline: 1px solid #ccc;
           mix-blend-mode: difference;
        }
    </style>
    `,o+=`<div class="${r[e][a].name}">${r[e][a].name} <br/>${r[e][a].color} <br/> <sub>${r[e][a].cmt}</sub></div>  <pre class="code">
${l}</pre>`;return`${v}${d}${o}`};let w="컴포넌트/Color",$=`
<ul>
  <li>디자인 시스템의 색상 팔레트를 정의하고 관리합니다</li>
  <li>figma 디자인 시안을 기준으로 하며, 컴포넌트명도 디자인 시안에 명시된 이름을 따릅니다</li>
  <li>main, font, background, line, status 5가지 카테고리로 분류됩니다</li>
</ul>
`;const x=e=>{let o="";switch(e){case"main":o="주 색상(Primary Color)으로 사용되는 기본 색상입니다. 브랜드 아이덴티티를 나타내며 주요 UI 요소에 적용됩니다.";break;case"font":o="텍스트 요소에 사용되는 색상입니다. 명도와 가독성을 고려하여 다양한 단계의 회색 톤으로 구성되어 있습니다.";break;case"background":o="배경 요소에 사용되는 색상입니다. 전체 레이아웃의 배경부터 섹션 배경까지 계층별로 정의되어 있습니다.";break;case"line":o="테두리, 구분선 등 라인 요소에 사용되는 색상입니다. 요소 간의 시각적 구분을 위해 설정됩니다.";break;case"status":o="상태 표시(성공, 경고, 오류 등)에 사용되는 색상입니다. 사용자에게 명확한 피드백을 제공하기 위해 구분되어 있습니다.";break;default:o=$}return o},I={title:w,parameters:{docs:{description:{component:A(x())},codePanel:!1}}},t=h(T,x,["main","font","background","line","status"],"none"),c=t.main,s=t.font,n=t.background,m=t.line,i=t.status;var u,p,y;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:"stories.main",...(y=(p=c.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var F,k,P;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:"stories.font",...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var E,G,g;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:"stories.background",...(g=(G=n.parameters)==null?void 0:G.docs)==null?void 0:g.source}}};var D,f,C;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:"stories.line",...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var b,B,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"stories.status",...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const R=["main","font","background","line","status"];export{R as __namedExportsOrder,n as background,I as default,s as font,m as line,c as main,i as status};
