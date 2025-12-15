import { SinglePage } from './Button-MOB.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js'; // 사용자 정의 스토리 생성/등록 함수

let path = '컴포넌트/Button/MOB/IconButton';

let 공통다큐먼트 = `
<ul>
  <li>모바일용 아이콘 버튼 컴포넌트입니다</li>
  <li>모든 버튼은 figma 디자인 시안을 기준으로 하며, 컴포넌트명도 디자인 시안에 명시된 이름을 따릅니다</li>
  <li>아이콘과 텍스트를 함께 표시할 수 있는 버튼입니다</li>
  <li>고정 사이즈 (48x48px)로 제공됩니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'default':
      result = ``;
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
      codePanel: true
    }
  }
};

// 🔹 스토리 생성 (자동 등록)
const stories = makeStories(SinglePage, md, ['default'], 'none',['mob','iconButton']);

// 🔹 개별 export
export const large = stories["default"];