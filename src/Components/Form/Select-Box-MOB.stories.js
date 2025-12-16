import { SinglePage } from './Select-Box-MOB.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Form/MOB/Select-Box';

let 공통다큐먼트 = `
<ul>
  <li>Select Box는 전체 테두리가 있는 박스 형태의 선택 필드입니다</li>
  <li>포커스 시 border가 2px로 굵어지며 검은색으로 변경됩니다</li>
  <li>박스 형태로 안정적인 디자인을 제공합니다</li>
  <li>드롭다운은 박스 하단에 약간의 간격을 두고 표시됩니다</li>
  <li>native select 요소를 사용합니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'default':
      result = `Default - 닫힌 상태의 Select Box`;
      break;
    case 'option-opened':
      result = `Option Opened - 열린 드롭다운 상태`;
      break;
    case 'option-disabled':
      result = `Option Disabled - 일부 옵션이 비활성화된 상태`;
      break;
    case 'disabled':
      result = `Disabled - 전체 비활성화 상태`;
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

const stories = makeStories(SinglePage, md, ['default', 'option-opened', 'option-disabled', 'disabled'], 'both', ['mob', 'select-box']);

export const Default = stories["default"];
export const OptionOpened = stories["option-opened"];
export const OptionDisabled = stories["option-disabled"];
export const Disabled = stories["disabled"];
