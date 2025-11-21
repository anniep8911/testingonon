import { SinglePage } from './Key-visual.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

// 폴더 경로
const path = '코드규약/HTML/Event/01.Key-visual';

// 전체 기본정보 markdown 문서
const md=(type)=>{
  let result = ``;
  (type ==='block')?
  // 블록일때 표시할 내용
    result=
`- 전체 block은 div를 사용한다
- div.key-visual__wrap > div.key-visual 형식을 기본으로 가져가지만, 다음과 같은 예외케이스가 있다.
- 전체 Grid가 필요없는경우엔 div.key-visual__wrap을 제외시킨다. (예) 글씨없는 통비디오 혹은 이미지)`

  :(type ==='section')? 

  // 섹션일때 표시할 내용
  result=
`- key-visual은 image(or video)와 texts로 구성된다.
- 명명법은 key-visual__image 와 key-visual＿texts로 한다.`
  
  :(type ==='element')? 

  // 엘리먼트일때 표시할 내용
  result=
  `- 섹션영역(이미지+텍스트)안의 내용을 의미하며,
- texts는 제목, 부제목, 문단 등에 따라 다음과 같은 규칙을 따른다.
  - 제목: h2
  - 부제목: h4
  - 문단 : p (문단의 기준은 2줄 이상의 텍스트로 한다.)
`

  : 
  // 전체 공통으로 표시할 내용
  result=
`- key-visual은 이벤트 페이지의 메인영역을 의미한다.
- key-visual에 사용하는 태그는 div로 한다.
<img src="./event_main.png" alt="메인" />
`
  return result
}


// 🔹 스토리북 기본 메타 정보
export default {
  title: path,
   parameters: {
      docs: {description: { component: marked(md()) },
      },
    },
};


// 🔹 스토리 생성 (자동 등록)
const stories = makeStories(SinglePage,md, ['block', 'section', 'element']);


// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 블록 = stories.block;
export const 섹션 = stories.section;
export const 엘리먼트 = stories.element;
