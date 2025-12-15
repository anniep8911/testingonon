import btn from '../assets/button-data';
import reset from '../../JS/asset/style';

// ═══════════════════════════════════════════════════════════════
// 📌 함수 선언부 (모든 헬퍼 함수들)
// ═══════════════════════════════════════════════════════════════

/** camelCase를 kebab-case로 변환 */
const toKebabCase = (str) => str.replace(/([A-Z])/g, '-$1').toLowerCase();

/** CSS 클래스명 결정 (textButton/iconButton은 kebab-case, 나머지는 원본) */
const getCssClass = (cls) => 
  (cls === 'textButton' || cls === 'iconButton') ? toKebabCase(cls) : cls;

/** CSS 스타일 들여쓰기 정렬 */
const normalizeStyle = (style) => style.trim().replace(/\n\s+/g, '\n  ');

/** 버튼 데이터에서 크기 추출 */
const extractSizes = (buttonData) => 
  Object.keys(buttonData).filter(key => ['large', 'medium', 'small', 'xsmall'].includes(key));

/** 버튼 데이터에서 스타일 변형 추출 */
const extractVariants = (buttonData) => 
  Object.keys(buttonData).filter(key => ['primary', 'secondary', 'tertiary'].includes(key));

/** 사용할 HTML 태그 결정 */
const getTagName = (cls) => cls === 'textButton' ? 'a' : 'button';

/** 공통 스타일 생성 */
const buildCommonStyle = (cssClass, commonStyles) => 
  `.code{margin-top:20px;}.${cssClass}{${normalizeStyle(commonStyles)}}`;

/** 일반 버튼 able 상태 스타일 생성 */
const buildButtonStyle = (cls, size, variant, sizeStyles, variantStyles) => 
  `.${cls}__${size}--${variant}{${normalizeStyle(sizeStyles)}${normalizeStyle(variantStyles)}}`;

/** 일반 버튼 disabled 상태 스타일 생성 */
const buildDisabledStyle = (cls, size, variant, sizeStyles, disabledStyles) => {
  if (!disabledStyles) return '';
  return `.${cls}__${size}--${variant}.is-disabled{${normalizeStyle(sizeStyles)}${normalizeStyle(disabledStyles)}}`;
};

/** Text/Icon 버튼 스타일 생성 */
const buildTextIconStyle = (cssClass, sizeStyles) => 
  `.${cssClass}{${normalizeStyle(sizeStyles)}}`;

/** 전체 스타일 태그 생성 */
const buildAllStyles = (cls, buttonData, cat) => {
  const cssClass = getCssClass(cls);
  const variants = extractVariants(buttonData);
  let styles = buildCommonStyle(cssClass, buttonData.common);

  if (variants.length === 0) {
    // Text/Icon 버튼
    if (buttonData[cat]) {
      styles += buildTextIconStyle(toKebabCase(cls) + '__' + cat, buttonData[cat]);
    }
  } else {
    // 일반 버튼
    for (let variant of variants) {
      styles += buildButtonStyle(cls, cat, variant, buttonData[cat], buttonData[variant].able);
      styles += buildDisabledStyle(cls, cat, variant, buttonData[cat], buttonData[variant].disabled);
    }
  }

  return `<style>${styles}</style>`;
};

/** 일반 버튼 HTML 생성 */
const buildButtonHtml = (cls, size, variant, variantData) => {
  let html = `<button class="${cls} ${cls}__${size}--${variant}">Button</button>`;
  if (variantData.disabled) {
    html += `<button class="${cls} ${cls}__${size}--${variant} is-disabled">Button</button>`;
  }
  return html;
};

/** Text/Icon 버튼 HTML 생성 */
const buildTextIconHtml = (cls, cat, catData) => {
  const tagName = getTagName(cls);
  const cssClass = getCssClass(cls);
  const fullClass = catData ? `${cssClass} ${cssClass}__${cat}` : cssClass;

  if (cls === 'textButton') {
    return `<${tagName} class="${fullClass}">Button</${tagName}>`;
  } else if (cls === 'iconButton') {
    return `<${tagName} class="${fullClass}"><i class="ic_heart_fillded_18px"></i></${tagName}>`;
  }

  return `<${tagName} class="${fullClass}"></${tagName}>`;
};

/** 일반 버튼 코드 미리보기 생성 */
const buildButtonCodePreview = (cls, size, variant, buttonData, variantData) => {
  const sizeStyles = buttonData[size];
  const ableStyles = variantData.able;

  let styleCode = `<style>\n.${cls}{\n  ${normalizeStyle(buttonData.common)}\n}\n.${cls}__${size}--${variant}{\n  ${normalizeStyle(sizeStyles)}\n  ${normalizeStyle(ableStyles)}\n}`;

  if (variantData.disabled) {
    styleCode += `\n.${cls}__${size}--${variant}.is-disabled{\n  ${normalizeStyle(sizeStyles)}\n  ${normalizeStyle(variantData.disabled)}\n}`;
  }

  styleCode += `\n</style>`;

  let htmlCode = `<button class="${cls} ${cls}__${size}--${variant}">Button</button>`;
  if (variantData.disabled) {
    htmlCode += `\n<button class="${cls} ${cls}__${size}--${variant} is-disabled">Button</button>`;
  }

  return `<pre class="code">${styleCode}\n${htmlCode}</pre>`;
};

/** Text/Icon 버튼 코드 미리보기 생성 */
const buildTextIconCodePreview = (cls, cat, buttonData) => {
  const cssClass = getCssClass(cls);
  const sizeStyles = buttonData[cat] ? normalizeStyle(buttonData[cat]) : '';
  const tagName = getTagName(cls);

  let styleCode = `<style>\n.${cssClass}{\n  ${normalizeStyle(buttonData.common)}\n}`;
  if (sizeStyles) {
    styleCode += `\n.${cssClass}__${cat}{\n  ${sizeStyles}\n}`;
  }
  styleCode += `\n</style>`;

  const displayClass = sizeStyles ? `${cssClass} ${cssClass}__${cat}` : cssClass;
  const htmlCode = `<${tagName} class="${displayClass}">Button</${tagName}>`;

  return `<pre class="code">${styleCode}\n${htmlCode}</pre>`;
};

// ═══════════════════════════════════════════════════════════════
// 🎯 실행부 (메인 로직)
// ═══════════════════════════════════════════════════════════════

/**
 * 버튼 컴포넌트 렌더링 메인 함수
 * @param {string} cat - 버튼 크기 (large, medium, small, xsmall)
 * @param {array} ext - [컴포넌트타입, 하위타입] 
 * @returns {string} 렌더링된 버튼 HTML, 스타일, 코드
 */
export const SinglePage = (cat, ext) => {
  // 1️⃣ 데이터 가져오기
  const buttonData = btn[ext[0]][ext[1]];
  const cls = ext[1];

  // 2️⃣ 스타일 생성
  const styleBlock = buildAllStyles(cls, buttonData, cat);

  // 3️⃣ 버튼 콘텐츠 생성
  let contentBlock = '';
  const variants = extractVariants(buttonData);

  if (variants.length === 0) {
    // Text/Icon 버튼 렌더링
    contentBlock += `<h4>${cat}</h4>`;
    contentBlock += buildTextIconHtml(cls, cat, buttonData[cat]);
    contentBlock += buildTextIconCodePreview(cls, cat, buttonData);
  } else {
    // 일반 버튼 렌더링 (primary, secondary, tertiary)
    for (let variant of variants) {
      contentBlock += `<h4>${variant}</h4>`;
      contentBlock += buildButtonHtml(cls, cat, variant, buttonData[variant]);
      contentBlock += buildButtonCodePreview(cls, cat, variant, buttonData, buttonData[variant]);
    }
  }

  // 4️⃣ 최종 조합
  return `${reset}${styleBlock}${contentBlock}`;
};
