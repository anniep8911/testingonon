import { SinglePage } from './Input-Box-MOB.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Form/MOB/Input-Box';

let 공통다큐먼트 = `
<ul>
  <li>Box Input은 주변/줄게 테이프가 사용됩니다</li>
  <li>포커스 시 border가 2px로 굵어지며 검은색으로 변경됩니다</li>
  <li>Select, Textarea 등 다양한 형태를 지원합니다</li>
  <li>에러 상태에서는 border와 에러 메시지가 빨간색으로 표시됩니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'default':
      result = `Default - 기본 상태의 Box Input`;
      break;
    case 'focus':
      result = `Focus - 포커스 상태 (입력값 포함)`;
      break;
    case 'filled':
      result = `Filled - 입력값이 있는 상태`;
      break;
    case 'disabled':
      result = `Disabled - 비활성화 상태`;
      break;
    case 'error':
      result = `Error - 에러 메시지가 표시되는 상태`;
      break;
    case 'textarea':
      result = `Textarea - 여러 줄 입력 필드`;
      break;
    case 'textarea-filled':
      result = `Textarea Filled - 입력값이 있는 Textarea`;
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
      codePanel: true
    }
  }
};

const stories = makeStories(SinglePage, md, ['default', 'focus', 'filled', 'disabled', 'error', 'textarea', 'textarea-filled'], 'both', ['mob', 'input-box']);

export const Default = stories["default"];
export const Focus = stories["focus"];
export const Filled = stories["filled"];
export const Disabled = stories["disabled"];
export const Error = stories["error"];
export const Textarea = stories["textarea"];
export const TextareaFilled = stories["textarea-filled"];
