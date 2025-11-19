
import { SinglePage } from './Attribute.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

let path= '코드규약/CSS/공통/02.속성/02.속성기준';
let 공통다큐먼트 = 
`
금지 속성이라는 의미는, 추후 유지보수를 위해 스타일의 override 혼동을 방지하기 위함으로 지정한 내용이다. <br/>
금지 속성이 적용되는 범위는 2025.11월 이후에 발생한 스타일만 의미한다. <br/>
금지 속성은 크게 아래와 같은 범주로 나뉜다.
`

let 레이아웃다큐먼트 = `
레이아웃은 <a href="./?path=/docs/코드규약-html-event-00-index--docs#블록-요소" target="_blank">큰 블럭들의 영역</a>을 의미하며, 레이아웃의 위치는 아래와 같은 요소로만 사용한다. <br/>
모든 레이아웃의 위치 기준은 __wrap안의 컨텐츠 영역(grid영역)__을 의미한다.

<details>
  <summary>__✅ body배경에서 위치만 띄워질 때 ▶️ margin__</summary>
  ![./attr_guide01.png](./attr_guide01.png)
</details>


<details>
  <summary>__✅ 블록요소 배경에서 위치가 띄워질 때 ▶️ padding__</summary>
  ![./attr_guide02.png](./attr_guide02.png)
</details>

<details>
  <summary>__✅ 그리드 기준 양옆의 공백 ▶️ margin: 0 auto__</summary>
  ![./attr_guide01.png](./attr_guide03.png)
</details>

<details>
<summary>__⛔ 금지속성 :  margin-bottom__</summary>
  - 모든 블록 요소는 위의 기준으로 띄워야한다. <br/>
  __만약, 아래쪽에 공백이 있는데 그게 body의 배경이라면, 그 아래 요소의 margin-top으로 해당 공백값을 넣는다.__
  ![./attr_guide01.png](./attr_guide03.png)
</details>

`;

let 텍스트다큐먼트=`
### 한줄 텍스트 높이 : line-height
- 한줄 텍스트의 경우엔 높이설정 시 height / padding / margin 사용을 금지한다. 
- line-height로만 높이를 설정한다.

`;


const md=(type)=>{
let result = ``;
(type ==='block')?
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
      },
    },
};



// 🔹 스토리 생성 (자동 등록)
const stories = makeStories(SinglePage,md, ['block', 'section', 'element','item','atom'],'style');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 레이아웃 = stories.block;
export const 텍스트 = stories.section;