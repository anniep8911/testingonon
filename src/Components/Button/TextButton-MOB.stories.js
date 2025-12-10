import { SinglePage } from './Button-MOB.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js'; // 사용자 정의 스토리 생성/등록 함수

let path = '컴포넌트/Button/MOB/TextButton';

let 공통다큐먼트 = `
<ul>
  <li>모바일용 텍스트 버튼 컴포넌트입니다</li>
  <li>모든 버튼은 figma 디자인 시안을 기준으로 하며, 컴포넌트명도 디자인 시안에 명시된 이름을 따릅니다</li>
  <li>투명한 배경에 텍스트만 표시되는 버튼입니다</li>
  <li>Medium, Small 2가지 사이즈를 지원합니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'medium':
      result = `Medium`;
      break;
    case 'small':
      result = `Small`;
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
const stories = makeStories(SinglePage, md, ['medium', 'small'], 'none',['mob','textButton']);

// 🔹 개별 export
export const Medium = stories["medium"];
export const Small = stories["small"];
