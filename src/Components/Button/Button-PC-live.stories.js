import { SinglePage } from './Button-PC-live.js';
import { marked } from 'marked';
import makeStories from '../../fnc.js'; // 사용자 정의 스토리 생성/등록 함수

let path = '컴포넌트/Button/PC/Button-live';

let 공통다큐먼트 = `
<ul>
  <li>기본적인 버튼 컴포넌트로 다양한 스타일과 상태를 지원합니다</li>
  <li>모든 버튼은 figma 디자인 시안을 기준으로 하며, 컴포넌트명도 디자인 시안에 명시된 이름을 따릅니다</li>
  <li>Button, IconButton, TextButton 3가지 타입으로 분류됩니다</li>
  <li>각 버튼은 able(활성화)과 disabled(비활성화) 상태를 지원합니다</li>
</ul>
`;

const md = (type) => {
  let result = ``;

  switch (type) {
    case 'buttonLargePrimary':
      result = `Large Primary`;
      break;
    case 'buttonLargeSecondary':
      result = `Large Secondary`;
      break;
    case 'buttonLargeTertiary':
      result = `Large Tertiary`;
      break;
    case 'buttonMediumPrimary':
      result = `Medium Primary`;
      break;
    case 'buttonMediumSecondary':
      result = `Medium Secondary`;
      break;
    case 'buttonMediumTertiary':
      result = `Medium Tertiary`;
      break;
    case 'buttonSmallPrimary':
      result = `Small Primary`;
      break;
    case 'buttonSmallSecondary':
      result = `Small Secondary`;
      break;
    case 'buttonSmallTertiary':
      result = `Small Tertiary`;
      break;
    case 'buttonXsmallPrimary':
      result = `Xsmall Primary`;
      break;
    case 'buttonXsmallSecondary':
      result = `Xsmall Secondary`;
      break;
    case 'buttonXsmallTertiary':
      result = `Xsmall Tertiary`;
      break;
    case 'textButtonTextIconLarge':
      result = `Text Button - Text + Icon (14px Regular)`;
      break;
    case 'textButtonTextOnlyLarge':
      result = `Text Button - Text Only (14px Regular)`;
      break;
    case 'textButtonTextIconMedium':
      result = `Text Button - Text + Icon (13px Bold with info icon)`;
      break;
    case 'textButtonUnderlineMedium':
      result = `Text Button - Underline (13px Bold)`;
      break;
    case 'textButtonUnderlineColorMedium':
      result = `Text Button - Underline Color (13px Bold)`;
      break;
    case 'textButtonTextIconSmall':
      result = `Text Button - Text + Icon (12px Bold)`;
      break;
    case 'iconButtonLarge':
      result = `Icon Button Large`;
      break;
    case 'iconButtonMedium':
      result = `Icon Button Medium`;
      break;
    case 'iconButtonSmall':
      result = `Icon Button Small`;
      break;
    case 'iconButtonXsmall':
      result = `Icon Button Xsmall`;
      break;
    default:
      result = 공통다큐먼트;
  }
  return result;
};

// 🔹 스토리북 기본 메타 정보
export default {
  title: path,
  // argTypes 및 args는 제거됨
  parameters: {
    docs: {
      description: {
        component: marked(md())
      },
      codePanel: true
    }
  }
};

// 🔹 스토리 생성 (자동 등록)
const stories = makeStories(SinglePage, md, [
  'buttonLargePrimary',
  'buttonLargeSecondary',
  'buttonLargeTertiary',
  'buttonMediumPrimary',
  'buttonMediumSecondary',
  'buttonMediumTertiary',
  'buttonSmallPrimary',
  'buttonSmallSecondary',
  'buttonSmallTertiary',
  'buttonXsmallPrimary',
  'buttonXsmallSecondary',
  'buttonXsmallTertiary',
  'textButtonTextIconLarge',
  'textButtonTextOnlyLarge',
  'textButtonTextIconMedium',
  'textButtonUnderlineMedium',
  'textButtonUnderlineColorMedium',
  'textButtonTextIconSmall',
  'iconButtonLarge',
  'iconButtonMedium',
  'iconButtonSmall',
  'iconButtonXsmall'
], 'both');

// 🔹 개별 export - Button variants
export const ButtonLargePrimary = stories["buttonLargePrimary"];
export const ButtonLargeSecondary = stories["buttonLargeSecondary"];
export const ButtonLargeTertiary = stories["buttonLargeTertiary"];
export const ButtonMediumPrimary = stories["buttonMediumPrimary"];
export const ButtonMediumSecondary = stories["buttonMediumSecondary"];
export const ButtonMediumTertiary = stories["buttonMediumTertiary"];
export const ButtonSmallPrimary = stories["buttonSmallPrimary"];
export const ButtonSmallSecondary = stories["buttonSmallSecondary"];
export const ButtonSmallTertiary = stories["buttonSmallTertiary"];
export const ButtonXsmallPrimary = stories["buttonXsmallPrimary"];
export const ButtonXsmallSecondary = stories["buttonXsmallSecondary"];
export const ButtonXsmallTertiary = stories["buttonXsmallTertiary"];

// 🔹 개별 export - TextButton variants
export const TextButtonTextIconLarge = stories["textButtonTextIconLarge"];
export const TextButtonTextOnlyLarge = stories["textButtonTextOnlyLarge"];
export const TextButtonTextIconMedium = stories["textButtonTextIconMedium"];
export const TextButtonUnderlineMedium = stories["textButtonUnderlineMedium"];
export const TextButtonUnderlineColorMedium = stories["textButtonUnderlineColorMedium"];
export const TextButtonTextIconSmall = stories["textButtonTextIconSmall"];

// 🔹 개별 export - IconButton variants
export const IconButtonLarge = stories["iconButtonLarge"];
export const IconButtonMedium = stories["iconButtonMedium"];
export const IconButtonSmall = stories["iconButtonSmall"];
export const IconButtonXsmall = stories["iconButtonXsmall"];
