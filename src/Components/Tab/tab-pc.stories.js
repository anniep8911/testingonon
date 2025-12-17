import { SinglePage } from './Tab-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Tab/PC';

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
    case 'type1':
      result = `기본탭 Type1`;
      break;
    case 'type2':
      result = `기본탭 Type2`;
      break;
    case 'hashtag':
      result = `해시태그탭`;
      break;
    case 'group':
      result = `그룹탭`;
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

// PC 탭 카테고리별 스토리
const stories = makeStories(SinglePage, md, ['type1','type2','hashtag','group'], 'both');

export const 기본탭Type1 = stories["type1"];
export const 기본탭Type2 = stories["type2"];
export const 해시태그탭 = stories["hashtag"];
export const 그룹탭 = stories["group"];
