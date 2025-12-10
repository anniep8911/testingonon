import { SinglePage } from './Button-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js'; // 사용자 정의 스토리 생성/등록 함수

let path = '컴포넌트/Button/PC/TextButton';

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
    case 'large':
      result = `Large`;
      break;
    case 'medium':
      result = `Medium`;
      break;
    case 'small':
      result = `Small`;
      break;
    case 'xsmall':
      result = `Xsmall`;
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
const stories = makeStories(SinglePage, md, ['large', 'medium', 'small', 'xsmall'], 'none');


// 🔹 개별 export
export const Large = stories["large"];
export const Medium = stories["medium"];
export const Small = stories["small"];
export const Xsmall = stories["xsmall"];
