import { SinglePage } from './Icon-PC.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js';

let path = '컴포넌트/Icon/MOB';

let 공통다큐먼트 = `
• 출처: Figma 기반, 컴포넌트명은 시안과 동일.<br/>
• 기준: 모바일은 가독성 우선, 사용 사이즈는 28/24/18/16/12로 통일.<br/>
• 포맷: SVG로 제공·경량화, 상태별 파일 분리.<br/>
• 접근성/터치: ARIA 포함, 충분한 터치 영역 확보.<br/>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    // MOB 아이콘 사이즈별 권장 사용처 문서
    case 28:
      result = `상품 리스트 헤드·카테고리 피처 아이콘 사용`;
      break;
    case 24:
      result = `툴바·모달 액션 아이콘 사용`;
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
const stories = makeStories(SinglePage, md, [28,24,18,16,12], 'none');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const PX28 = stories["28"];
export const PX24 = stories["24"];
export const PX18 = stories["18"];
export const PX16 = stories["16"];
export const PX12 = stories["12"];