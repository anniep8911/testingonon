import { SinglePage } from './Content.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';


const path = '코드규약/HTML/Event/02.Content';


const md=(type)=>{
  let result = ``;
  (type ==='block')?
  // 블록일때 표시할 내용
    result=
`- 전체 block은 div를 사용한다
- div.content__wrap > div.content 형식으로 작성한다.
- 같은 형태가 반복될 경우, 아래와 같이 넘버링하여 구성한다.
    - div.content__wrap.content＿wrap--01
    - div.content.content--01
`

  :(type ==='section')? 
  // 섹션일때 표시할 내용
  result=
` - content는 header(타이틀 영역)과 section(내용 영역)으로 구분되며, 
- 각각 시멘트 태그를 사용한다 (header태그 , section 태그)
`
  
  :(type ==='element')? 

  // 엘리먼트일때 표시할 내용
  result=
`- header영역은 컨텐츠 상단의 제목을 의미하며 다음과 같이 나뉜다.
  - 제목: h2
  - 부제목: h4
  - 문단 : p (문단의 기준은 2줄 이상의 텍스트로 한다.)
`

:(type ==='item')? 

  // 엘리먼트일때 표시할 내용
  result=
`- Element를 구성하는 영역을 의미하며, 독립적 컨텐츠인 artice태그가 대표적이다.
- article은 시멘틱태그를 사용하며 image와 texts로 나뉜다.
- article내의 texts는 article의 문자 영역을 의미하며, 다음과 같이 나뉜다.
  - 제목: h3
  - 부제목: h4
  - 문단 : p (문단의 기준은 2줄 이상의 텍스트로 한다.)
`

  : 
  // 전체 공통으로 표시할 내용
  result=
`- article의 묶음이 들어있는 타이틀과 내용의 독립적 컨텐츠를 의미한다.
- header(타이틀) 과 seciton(내용)의 묶음 형태로 존재한다.
<img src="./event_content.png" alt="이벤트 컨텐츠">
`
  return result
}

// 🔹 스토리북 기본 메타 정보
export default {
  title: path,
   render: () => SinglePage('aa'),
   parameters: {
      docs: {
        description: { 
          component: marked(md()),
          page:'ddddd'
         },
      },
    },
};

const stories = makeStories(SinglePage,md, ['block', 'section', 'element','item']);

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 블록 = stories.block;
export const 섹션 = stories.section;
export const 엘리먼트 = stories.element;
export const 아이템= stories.item;
