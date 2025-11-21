import { SinglePage } from './Modal.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

// 폴더 경로
const path = '코드규약/HTML/Event/04.Modal';

// 전체 기본정보 markdown 문서
const md=(type)=>{
  let result = ``;
  (type ==='block')?
  // 블록일때 표시할 내용
    result=
`- modal은 div.modal로 작성한다.`

  :(type ==='section')? 

  // 섹션일때 표시할 내용
  result=
`- modal은 아래와 같은 영역으로 구성된다.
  - header : 상단 타이틀 + X버튼 영역으로 div.modal__header 사용
  - section: 모달의 내용영역으로 div.modal__section 사용
  - footer: 모달의 하단영역으로 div.modal__footer 사용`
  
  :(type ==='element')? 

  // 엘리먼트일때 표시할 내용
  result=
  `- 섹션영역(이미지+텍스트)안의 내용을 의미하며,
- header는 제목, 부제목, 문단 등에 따라 다음과 같은 규칙을 따른다.
  - 제목: h3
  - 부제목: h4
- section은 상세 내용을 자유롭게 넣을 수 있다 
- footer는 링크이동, 확인버튼, 오늘하루보지않기 등이 들어온다
  - 링크이동 :a
  - 확인: button
  - 오늘하루보지않기 : input[checkbox]+label
`

  : 
  // 전체 공통으로 표시할 내용
  result=
`- modal은 다음과 같은 팝업창을 의미한다.
<img src="./event_modal.png" />
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
