
import { SinglePage } from './Attribute.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

let path= '코드규약/CSS/공통/02.속성/02.속성기준';


let commonStyle=`
  <style>
    .css-xzp052{
      padding:0;
    }
    .css-xzp052 .innerZoomElementWrapper > *{
      border: 0px solid transparent !important; 
    }

    header, h2, h3, p {
      margin: 0;
      padding: 0;
    }
  </style>
`;
let 공통다큐먼트 = 
`
${commonStyle}
금지 속성이라는 의미는, 추후 유지보수를 위해 스타일의 override 혼동을 방지하기 위함으로 지정한 내용이다. <br/>
금지 속성이 적용되는 범위는 2025.11월 이후에 발생한 스타일만 의미한다. <br/>
`

let 레이아웃다큐먼트 = `
### ✅ body배경기준으로 위치가 띄워질 때

`;

let 텍스트다큐먼트=`
### 한줄 텍스트 높이 : line-height
- 한줄 텍스트의 경우엔 높이설정 시 height / padding / margin 사용을 금지한다. 
- line-height로만 높이를 설정한다.
`;


const md=(type)=>{
let result = ``;
(type ==='margin')?
  result=레이아웃다큐먼트
:
(type ==='section')?  
    result=텍스트다큐먼트
:
  (type ==='element')?
    result=
    `
    엘리먼트
    `    
 :
  result=공통다큐먼트;
  return result;
}



// 🔹 스토리북 기본 메타 정보
export default {
  title: path,
  parameters: {
    docs: {
      description: { 
        component: marked(md()),
      },
      codePanel: false
    },
  },
};


// 🔹 스토리 생성 (자동 등록)
const stories = makeStories(SinglePage,md, ['margin','padding','grid','dont','text','zindex','important'],'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const margin= stories.margin;
export const padding= stories.padding;
export const grid= stories.grid;
export const text= stories.dont;
export const zIndex= stories.text;
export const 금지사항= stories.zindex;