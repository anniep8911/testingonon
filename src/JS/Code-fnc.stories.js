import { SinglePage } from './Code-fnc.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

let path = '코드규약/JS/공통/02.코드작성방법/02.함수작성규칙';

let 공통다큐먼트 = `
Javascript 사용시 사용할 함수 작성 규칙 
1. 함수는 function 함수명(){} 형태로 작성한다 
2. 위치는 상수 바로 아래에 위치시킨다 
3. 호이스팅 방지를 위해 호출 함수는 위에서 미리 선언한다 
<style>
  .css-qa4clq :where(li:not(.sb-anchor, .sb-unstyled, .sb-unstyled li)){
    font-weight:400;
  }
</style>
`;

const md = (type) => {
  let result = ``;
  switch (type) {
    case '작성형태':
      result = `직관성을 위해 function 함수명(){}으로 선언하며, 화살표 함수는 금지한다.`;
      break;
    case '호출순서':
      result = `hoisting을 방지하기 위해 호출함수는 호출 위치 위에서 선언해야한다.`;
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
const stories = makeStories(SinglePage, md, ['함수선언', '호출순서'], 'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 함수선언 = stories.함수선언;
export const 호출순서 = stories.호출순서;
