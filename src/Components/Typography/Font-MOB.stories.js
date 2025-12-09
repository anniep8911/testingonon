import { SinglePage } from './Font-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';
import typo from '../assets/typo-data.js';

let path = '컴포넌트/Typography/MOB';

let 공통다큐먼트 = `
타이포그래피 가이드 (MOB)<br/>
• 출처: Figma 기반 디자인 시스템.<br/>
• 기준: 모바일 중심의 가독성(라인높이·크기) 우선.<br/>
• 포맷: 벡터(SVG) 사용 권장, 사용 사이즈는 mob 스펙 준수.<br/>
`;

const md = (type) => {
  // typo.mob의 exp를 각 스토리의 문서로 사용
  if (type && typo && typo.mob && typo.mob[type] && typo.mob[type].exp) {
    return typo.mob[type].exp;
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