import { SinglePage } from './Naming-style.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

let path = '코드규약/JS/공통/01.기초원칙/02.네이밍규칙';

let 공통다큐먼트 = `
협업의 가독성과 유지보수성을 위해, 퍼블리싱 JS에서는 변수, 상수, 함수 모두 의미와 역할이 명확하게 드러나는 이름을 사용한다.
`;

const md = (type) => {
  let result = ``;
  switch (type) {
    case 'var':
      result = `의미 있는 이름을 사용하여 변수의 역할과 값을 바로 알 수 있도록 한다.`;
      break;
    case 'func':
      result = `동작 중심 이름을 사용하여 함수의 목적과 수행 동작을 명확히 나타낸다.`;
      break;
    default:
      result = 공통다큐먼트;
  }
  return result;
};

// 🔹 스토리북 기본 메타 정보
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

// 🔹 스토리 생성 (자동 등록)
const stories = makeStories(SinglePage, md, ['var', 'func', 'maintain'], 'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 변수네이밍 = stories.var;
export const 함수네이밍 = stories.func;
