import { SinglePage } from './Color.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Color';

let 공통다큐먼트 = `
<ul>
  <li>디자인 시스템의 색상 팔레트를 정의하고 관리합니다</li>
  <li>figma 디자인 시안을 기준으로 하며, 컴포넌트명도 디자인 시안에 명시된 이름을 따릅니다</li>
  <li>main, font, background, line, status 5가지 카테고리로 분류됩니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;
  switch (type) {
    case 'main':
      result = `주 색상(Primary Color)으로 사용되는 기본 색상입니다. 브랜드 아이덴티티를 나타내며 주요 UI 요소에 적용됩니다.`;
      break;
    case 'font':
      result = `텍스트 요소에 사용되는 색상입니다. 명도와 가독성을 고려하여 다양한 단계의 회색 톤으로 구성되어 있습니다.`;
      break;
    case 'background':
      result = `배경 요소에 사용되는 색상입니다. 전체 레이아웃의 배경부터 섹션 배경까지 계층별로 정의되어 있습니다.`;
      break;
    case 'line':
      result = `테두리, 구분선 등 라인 요소에 사용되는 색상입니다. 요소 간의 시각적 구분을 위해 설정됩니다.`;
      break;
    case 'status':
      result = `상태 표시(성공, 경고, 오류 등)에 사용되는 색상입니다. 사용자에게 명확한 피드백을 제공하기 위해 구분되어 있습니다.`;
      break;
    default:
      result = 공통다큐먼트;
  }
  return result;
};

// 🔹 스토리북 기본 메타 정보
export default {
  title: path,
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
const stories = makeStories(SinglePage, md, ['main','font','background','line','status'], 'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const main = stories.main;
export const font = stories.font;
export const background = stories.background;
export const line = stories.line;
export const status = stories.status;
