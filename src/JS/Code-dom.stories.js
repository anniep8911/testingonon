import { SinglePage } from './Code-dom.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';
import docs from './docs/코드작성방법.js';

let path = '코드규약/JS/공통/02.코드작성방법/03.DOM탐색&조작';

let 공통다큐먼트 = `
  DOM탐색은 jquery기반으로 하며, 형식은 $(‛탐색할 태그’) 이다.
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'DOM탐색':
      result = `DOM은 jquery기반으로 탐색한다.`;
      break;
    case 'DOM조작':
      result = `예측가능한 패턴의 규칙을 사용하여 모든 파일을 통일한다.`;
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

let categories = [];
for (let i in docs.DOM탐색조작) {
  categories.push(i);
}

// 🔹 스토리 생성 (자동 등록)
const stories = makeStories(SinglePage, md, categories, 'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const DOM탐색 = stories.DOM탐색;
export const DOM조작 = stories.DOM조작;
