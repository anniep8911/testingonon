
import { SinglePage } from './Banner.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

const path='코드규약/HTML/Event/03.Banner';

const md=(type)=>{
  let result = ``;
  (type ==='block')?
  // 블록일때 표시할 내용
    result=
`- 전체 block은 div를 사용한다
- div.banner__wrap > div.banner 형식으로 작성한다.
- 같은 형태가 반복될 경우, 아래와 같이 넘버링하여 구성한다. div.content__wrap, div.content＿wrap
` 

  :(type ==='section')? 
  // 섹션일때 표시할 내용
  result=
` - Banner는 header와 section으로 구성되며, header가 없는 경우 생략하고 image/texts로 구분할 수 있다.
- 통 이미지일 경우에도 texts안에 내용을 추가하여 직관적인 태그환경을 유지한다.
`
  
  :(type ==='element')? 
  // 엘리먼트일때 표시할 내용
  result=
`- banner내 texts영역은 배너의 제목 혹은 텍스트를 의미하며 다음과 같이 나뉜다.
  - 제목: h2
  - 부제목: h4
  - 문단 : p (문단의 기준은 2줄 이상의 텍스트로 한다.)
  - 링크이동 : a (링크 영역을 absolute로 잡는다)
`
 : 
  // 전체 공통으로 표시할 내용
  result=
`- 전체의 내용이 광고띠거나 클릭했을때 다른 랜딩페이지로 이동하는 형태의 광고띠를 의미한다.
- 전체를 이동시키는 랜딩요소는 a태그로, 전체를 감싸는 형태가 아닌, texts안 맨 마지막 요소로 들어와서 CSS로 조절한다.
<img src="./event_banner.png" alt="이벤트 배너">
`
  return result
}


// 🔹 스토리북 기본 메타 정보
export default {
  title: path,
   parameters: {
      docs: {description: { component: marked(md())},
      },
    },
};


// 🔹 스토리 생성 (자동 등록)
const stories = makeStories(SinglePage,md, ['block', 'section', 'element']);

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 블록 = stories.block;
export const 섹션 = stories.section;
export const 엘리먼트 = stories.element;
