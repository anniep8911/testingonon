import { SinglePage } from './Controls-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Controls';

let 공통다큐먼트 = `
<ul>
  <li>Controls는 다양한 폼 컨트롤 요소들을 포함하는 복합 컴포넌트입니다</li>
  <li>Select, Input, Date, Time, Radio, Checkbox, Switch, Counter 등을 포함합니다</li>
  <li>jQuery를 사용하여 인터랙션을 구현합니다</li>
  <li>BEM 네이밍 규칙을 따르며 상태는 is-- 접두사를 사용합니다</li>
  <li>PC 환경에 최적화된 크기와 레이아웃을 제공합니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'checkbox':
      result = `Checkbox - 체크박스 컨트롤 요소`;
      break;
    case 'radio':
      result = `Radio - 라디오 버튼 컨트롤 요소`;
      break;
    case 'switch':
      result = `Switch - 스위치 토글 컨트롤 요소`;
      break;
    case 'counter':
      result = `Counter - 증감 카운터 컨트롤 요소`;
      break;
    case 'input':
      result = `Input - 입력 필드 컨트롤 요소`;
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

const stories = makeStories(SinglePage, md, ['checkbox', 'radio', 'switch', 'counter'], 'both', ['pc', 'controls']);

export const Checkbox = stories["checkbox"];
export const Radio = stories["radio"];
export const Switch = stories["switch"];
export const Counter = stories["counter"];