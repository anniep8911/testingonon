import { SinglePage } from './Full-image.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

// 폴더 경로
const path = '코드규약/HTML/Event/04.Full-image'

// 전체 기본정보 markdown 문서
const md=(type)=>{
  let result = ``;
  (type ==='block')?
  // 블록일때 표시할 내용
    result=
`- 전체 block은 div를 사용한다
- div.full-image__wrap.full-image＿브랜드명 형태로 가져간다 `

  :(type ==='section')? 
  // 섹션일때 표시할 내용
  result=
`- section은 full-image를 담는 이미지영역과
- 링크, 솔드아웃 등 옵션 레이어를 담는 full-image__options로 나뉘어진다
`
  
  :(type ==='element')? 

  // 엘리먼트일때 표시할 내용
  result=
  `-  full-image__options의 구성요소는 아래와 같다 
    - 링크이동 : a 
    - 솔드아웃 등 기타 표시 : div.opts.opts--02
  - 링크 및 솔드아웃 안에는 텍스트로 설명을 넣어주며 CSS로 color:transparent처리한다. 
`

  : 
  // 전체 공통으로 표시할 내용
  result=
`- Full-image는 다음과 같은 기본값을 가져간다.
- 링크와 soldout부분 미리 세팅할것 
- 링크 이동부분은 a태그로 
- soldout 혹은 기타 다른 이미지 부분은 div.event__option으로 한다.
<img src="./event_img.png"  alt="풀이미지"/>
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
