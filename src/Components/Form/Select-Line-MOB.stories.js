import { SinglePage } from './Select-Line-MOB.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Form/MOB/Select-Line';

let 공통다큐먼트 = `
<ul>
  <li>Select Line은 하단 선만 표시되는 선택 필드입니다</li>
  <li>포커스 시 border-bottom이 2px로 굵어지며 검은색으로 변경됩니다</li>
  <li>투명한 배경으로 깔끔한 디자인을 제공합니다</li>
  <li>에러 상태에서는 하단 선이 빨간색으로 표시됩니다</li>
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
    case 'disabled':
      result = `Disabled - 비활성화 상태`;
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

const stories = makeStories(SinglePage, md, ['default', 'option-opened', 'disabled'], 'both', ['mob', 'select-line']);

export const Default = stories["default"];
export const OptionOpened = stories["option-opened"];
export const Disabled = stories["disabled"];
