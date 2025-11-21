
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
    .css-1q9l1yn{
      overflow:hidden;
    }
  </style>
`;
let 공통다큐먼트 = 
`
${commonStyle}
금지 속성이라는 의미는, 추후 유지보수를 위해 스타일의 override 혼동을 방지하기 위함으로 지정한 내용이다. <br/>
금지 속성이 적용되는 범위는 2025.11월 이후에 발생한 스타일만 의미한다. <br/>
아래 속성외의 속성은 자유롭게 사용할 수 있다.
`

const md=(type)=>{
let result = ``;

switch(type){
  case 'margin': result = `#### ✅ body배경기준으로 위치가 띄워질 때 ▶️ margin`;
  break;
  case 'padding': result =`#### ✅ 블록요소 배경에서 위치가 띄워질 때 ▶️ padding`;
  break;
  case 'grid': result =`#### ✅ 그리드 기준 양옆의 공백 ▶️ margin: 0 auto`;
  break;
  case 'dont': result=`#### 🚫 margin-bottom 사용금지 <br/>🚫 !important 사용금지 <br/>🚫 헤더, 네비게이션,topIcon 외 position:fixed사용 금지`;
  break;
  case 'text': result=`#### ✅ 한줄짜리 헤드라인의 높이 ▶️ line-height`;
  break;
  case 'zindex': result=`#### ✅ 고정 레아아웃 : z-index 20이상 사용금지 <br/>✅ 모달/팝업 : z-index 200이상 사용금지`;
  break;
  case 'hidden':result=`#### ✅ 통이미지 배경이미지로 나오는 이미지에 대한 설명 숨기기`;
  break;
  default : result=공통다큐먼트;

}


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
const stories = makeStories(SinglePage,md, ['margin','padding','grid','dont','text','zindex','hidden'],'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const margin= stories.margin;
export const padding= stories.padding;
export const grid= stories.grid;
export const text= stories.text;
export const zIndex= stories.zindex;
export const hidden= stories.hidden;
export const 금지사항= stories.dont;