import { SinglePage } from './Tab-MOB.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Tab/MOB';

let 공통다큐먼트 = `
<ul>
  <li>기본적인 탭 컴포넌트로 다양한 스타일과 상태를 지원합니다</li>
  <li>모든 탭은 figma 디자인 시안을 기준으로 하며, 컴포넌트명도 디자인 시안에 명시된 이름을 따릅니다</li>
  <li>Tab, IconTab 등 타입으로 분류될 수 있습니다</li>
  <li>각 탭은 able(활성화)와 disabled(비활성화) 상태를 지원합니다</li>
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

const stories = makeStories(SinglePage, md, ['large', 'medium', 'small', 'xsmall'], 'both', ['mob','tab']);
export const Large = stories["large"];
export const Medium = stories["medium"];
export const Small = stories["small"];
export const Xsmall = stories["xsmall"];
