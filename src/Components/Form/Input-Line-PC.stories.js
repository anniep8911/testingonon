import { SinglePage } from './Input-Line-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Form/PC/Input-Line';

let 공통다큐먼트 = `
<ul>
  <li>Line Input은 하단 선만 표시되는 입력 필드입니다</li>
  <li>포커스 시 border-bottom이 2px로 굵어지며 검은색으로 변경됩니다</li>
  <li>투명한 배경으로 깔끔한 디자인을 제공합니다</li>
  <li>에러 상태에서는 하단 선과 에러 메시지가 빨간색으로 표시됩니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'default':
      result = `Default - 기본 상태의 Line Input`;
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

const stories = makeStories(SinglePage, md, ['default', 'focus', 'filled', 'disabled', 'error'], 'both', ['pc', 'input-line']);

export const Default = stories["default"];
export const Focus = stories["focus"];
export const Filled = stories["filled"];
export const Disabled = stories["disabled"];
export const Error = stories["error"];
