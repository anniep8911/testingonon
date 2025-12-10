import { SinglePage } from './Button-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js'; // 사용자 정의 스토리 생성/등록 함수

let path = '컴포넌트/Button/PC/IconButton';

let 공통다큐먼트 = `
<ul>
  <li>기본적인 버튼 컴포넌트로 다양한 스타일과 상태를 지원합니다</li>
  <li>모든 버튼은 figma 디자인 시안을 기준으로 하며, 컴포넌트명도 디자인 시안에 명시된 이름을 따릅니다</li>
  <li>Button, IconButton, TextButton 3가지 타입으로 분류됩니다</li>
  <li>각 버튼은 able(활성화)과 disabled(비활성화) 상태를 지원합니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'button':
      result = `기본 버튼으로 다양한 크기(Large, Medium, Small)와 색상(Primary, Secondary, Tertiary)을 지원합니다.`;
      break;
    case 'iconButton':
      result = `아이콘과 함께 표시되는 버튼입니다.`;
      break;
    case 'textButton':
      result = `텍스트만으로 구성된 버튼입니다.`;
      break;
    default:
      result = 공통다큐먼트;
  }
  return result;
};

// 🔹 스토리북 기본 메타 정보
export default {
  title: path,
  // argTypes 및 args는 제거됨
  parameters: {
    docs: {
      description: {
        component: marked(md())
      },
      codePanel: false
    }
  }
};

// 🔹 스토리 생성 (자동 등록)
// makeStories가 'button', 'iconButton', 'textButton' 세 가지 키로 스토리를 생성한다고 가정합니다.
const stories = makeStories(SinglePage, md, ['button', 'iconButton', 'textButton'], 'none');


// 🔹 개별 export - 3가지 카테고리만 노출
// makeStories가 반환한 객체에서 해당 키를 찾아 개별 export로 노출합니다.
export const Button = stories["button"];
export const IconButton = stories["iconButton"];
export const TextButton = stories["textButton"];
