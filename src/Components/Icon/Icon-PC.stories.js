import { SinglePage } from './Icon-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Icon/PC';

let 공통다큐먼트 = `
 아이콘은 디자인 시안(figma)기준으로 하며, 컴포넌트명 또한 디자인 시안에 잡힌 컴포넌트 이름으로 한다.
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'path':
      result = `DOM은 jquery기반으로 탐색한다.`;
      break;
    case 'DOM조작':
      result = `예측가능한 패턴의 규칙을 사용하여 모든 파일을 통일한다.`;
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
const stories = makeStories(SinglePage, md, [32,28,24,20,18,16,12], 'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const PX32 = stories["32"];
export const PX28 = stories["28"];
export const PX24 = stories["24"];
export const PX20 = stories["20"];
export const PX18 = stories["18"];
export const PX16 = stories["16"];
export const PX12 = stories["12"];