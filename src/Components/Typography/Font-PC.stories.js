import { SinglePage } from './Font-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';
import typo from '../assets/typo-data.js';

let path = '컴포넌트/Typography/PC';

let 공통다큐먼트 = `
타이포그래피 가이드

• 출처: Figma 기반 디자인 시스템을 따릅니다.<br/>
• 기준: 기본 폰트 16px을 중심으로 계층별 사이즈와 줄간격(scale)을 적용합니다.<br/>
• 스타일: 헤딩은 계층적 강조, 본문은 가독성 우선(주요 가중치 400/700).<br/>
• 접근성: 대비·크기·행간을 고려해 읽기성을 확보합니다.<br/>
`;

const md = (type) => {
  // typo.pc에 정의된 exp 값을 각 스토리의 문서로 사용합니다.
  if (type && typo && typo.pc && typo.pc[type] && typo.pc[type].exp) {
    return typo.pc[type].exp;
  }
  return 공통다큐먼트;
};

// 🔹 스토리북 기본 메타 정보
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

const storyNames = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'P1', 'P2', 'P3', 'CP1'];

const stories = makeStories(SinglePage, md, storyNames, 'both');

export const H1 = stories.H1;
export const H2 = stories.H2;
export const H3 = stories.H3;
export const H4 = stories.H4;
export const H5 = stories.H5;
export const H6 = stories.H6;
export const H7 = stories.H7;
export const H8 = stories.H8;
export const P1 = stories.P1;
export const P2 = stories.P2;
export const P3 = stories.P3;
export const CP1 = stories.CP1;