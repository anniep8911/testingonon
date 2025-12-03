import { SinglePage } from './Code-event.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';
import docs from './docs/코드작성방법.js';

let path = '코드규약/JS/공통/02.코드작성방법/04.이벤트핸들링';
let categories = [];
for (let i in docs.이벤트핸들링) {
  categories.push(i);
}

let 공통다큐먼트 = `
  협업의 비용최소화 ( 코드 분석에 따른 시간소요 )를 위해서 다음과 같은 세가지 키워드의 내용의 원칙을 준수하여 코드품질을 유지한다.
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'readable':
      result = `- 이벤트는 dom.on('이벤트',function(){}) 형식으로 통일한다.`;
      break;
    case 'consis':
      result = `예측가능한 패턴의 규칙을 사용하여 모든 파일을 통일한다.`;
      break;
    case 'maintain':
      result = ` 원본을 직접 바꾸지 않고 새로운 상태를 생성한다`;
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
const stories = makeStories(SinglePage, md, categories, 'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 기본패턴 = stories.기본패턴;
export const 사이드이펙트제거 = stories.사이드이펙트제거;
