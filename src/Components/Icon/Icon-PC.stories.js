import { SinglePage } from './Icon-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Icon/PC';

let 공통다큐먼트 = `
• 출처: Figma 기반, 컴포넌트명은 시안과 동일.<br/>
• 기준: 기본 그리드 24px, 사용 사이즈는 32/28/24/20/18/16/12로 통일.<br/>
• 포맷: SVG로 제공·최적화, 상태별 파일 분리.<br/>
• 접근성: alt/aria-label 포함, 인터랙티브는 포커스 고려.<br/>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    // PC 아이콘 사이즈별 권장 사용처 문서
    case 32:
      result = `상품 상세 헤더, 메인 CTA 아이콘 사용`;
      break;
    case 28:
      result = `카테고리 피처 아이콘·사이드바 주요 항목 사용`;
      break;
    case 24:
      result = `툴바·네비게이션 액션 아이콘 사용`;
      break;
    case 20:
      result = `카드 액션·토글·필터 아이콘 사용`;
      break;
    case 18:
      result = `리스트 보조 액션·세컨더리 버튼 아이콘 사용`;
      break;
    case 16:
      result = `본문 인라인 아이콘·라벨 아이콘 사용`;
      break;
    case 12:
      result = `뱃지·카운터·상태 인디케이터 사용`;
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
const stories = makeStories(SinglePage, md, [32,28,24,20,18,16,12], 'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const PX32 = stories["32"];
export const PX28 = stories["28"];
export const PX24 = stories["24"];
export const PX20 = stories["20"];
export const PX18 = stories["18"];
export const PX16 = stories["16"];
export const PX12 = stories["12"];