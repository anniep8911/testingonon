import { SinglePage } from './Code-style.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

let path = '코드규약/JS/공통/01.기초원칙/01.코드스타일 원칙';

let 공통다큐먼트 = `
  협업의 비용최소화 ( 코드 분석에 따른 시간소요 )를 위해서 다음과 같은 세가지 키워드의 내용의 원칙을 준수하여 코드품질을 유지한다.
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'readable':
      result = `줄바꿈, 공백, 주석등을 명확히 하여 가독성을 올린다.`;
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
const stories = makeStories(SinglePage, md, ['readable', 'consis', 'maintain'], 'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 가독성 = stories.readable;
export const 일관성 = stories.consis;
export const 유지보수성 = stories.maintain;
