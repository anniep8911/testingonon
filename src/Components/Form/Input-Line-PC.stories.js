import { SinglePage } from './Input-Line-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Form/PC/Input-Line';

let 공통다큐먼트 = `
<ul>
  <li>기본적인 텍스트 입력 컴포넌트입니다</li>
  <li>폭 기본 넓이는 400이며 입력값에 따라 변경 될 수 있습니다</li>
  <li>좌 패딩값 0, 우 패딩값 80이며, 높이는 48으로 고정됩니다</li>
  <li>포커스 시 하단 보더가 검은색으로 변경됩니다</li>
  <li>입력값이 있을 때 clear 버튼이 표시됩니다</li>
  <li>에러 상태에서는 하단 보더와 에러 메시지가 빨간색으로 표시됩니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'default':
      result = `Default - 기본 상태의 입력 필드`;
      break;
    case 'focus':
      result = `Focus - 포커스 상태 (입력값 있을 시 clear 버튼 표시)`;
      break;
    case 'filled':
      result = `Filled - 입력값이 있는 상태`;
      break;
    case 'filled-disabled':
      result = `Filled-Disabled - 입력값이 있는 비활성화 상태`;
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
      codePanel: false
    }
  }
};

const stories = makeStories(SinglePage, md, ['default', 'focus', 'filled', 'filled-disabled', 'error'], 'both', ['pc', 'input']);

export const Default = stories["default"];
export const Focus = stories["focus"];
export const Filled = stories["filled"];
export const FilledDisabled = stories["filled-disabled"];
export const Error = stories["error"];
