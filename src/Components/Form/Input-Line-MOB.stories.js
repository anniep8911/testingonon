import { SinglePage } from './Input-Line-MOB.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Form/MOB/Input-Line';

let 공통다큐먼트 = `
<ul>
  <li>모바일용 텍스트 입력 컴포넌트입니다</li>
  <li>다양한 크기를 지원하며 활성화/비활성화 상태를 포함합니다</li>
  <li>포커스 시 시각적 피드백이 제공됩니다</li>
  <li>hover, focus 상태에서 border 색상이 변경됩니다</li>
  <li>모바일에서는 width: 100%로 전체 너비를 차지합니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'large':
      result = `Large - 56px 높이의 입력 필드`;
      break;
    case 'medium':
      result = `Medium - 48px 높이의 입력 필드`;
      break;
    case 'small':
      result = `Small - 40px 높이의 입력 필드`;
      break;
    case 'xsmall':
      result = `Xsmall - 32px 높이의 입력 필드`;
      break;
    default:
      result = 공통다큐먼트;
  }
  return result;
};

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

const stories = makeStories(SinglePage, md, ['large', 'medium', 'small', 'xsmall'], 'both', ['mob', 'input']);

export const Large = stories["large"];
export const Medium = stories["medium"];
export const Small = stories["small"];
export const Xsmall = stories["xsmall"];
