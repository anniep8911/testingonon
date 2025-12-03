import { SinglePage } from './Code-val.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

let path = '코드규약/JS/공통/02.코드작성방법/01.변수&상수관리';

let 공통다큐먼트 = `
Javascript 사용시 사용할 변수/상수에대한 구분
1. var는 hoisting 위험과 중복 선언의 위험이 발생하므로 더이상 사용하지않는다.
2. 값이 치환되는것은 변수로 명명하며, let을 사용한다.
3. 값이 치환되지 않는 고정은 상수로 명명하며, const를 사용한다.
<style>
  .css-qa4clq :where(li:not(.sb-anchor, .sb-unstyled, .sb-unstyled li)){
    font-weight:400;
  }
</style>
`;

const md = (type) => {
  let result = ``;
  switch (type) {
    case 'let':
      result = `값이 치환될 수 있을때 사용한다.`;
      break;
    case 'cons':
      result = `값이 치환될 수 없을때 사용한다.`;
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
const stories = makeStories(SinglePage, md, ['let', 'cons'], 'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const LET = stories.let;
export const CONST = stories.cons;
