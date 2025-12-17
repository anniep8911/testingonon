import btn from '../assets/button-data';
import reset from '../../JS/asset/style';

export const SinglePage = (cat,ext) => {
  const now = btn[ext[0]][ext[1]];
  const cls = ext[1];
  
  // 🔹 CSS 스타일 생성
  const clsKebab = cls.replace(/([A-Z])/g, '-$1').toLowerCase();
  const cssClass = (cls === 'textButton' || cls === 'iconButton') ? clsKebab : cls;
  
  let style = `<style>
.${cssClass} {
  ${now.common.trim().replace(/\n\s+/g, '\n  ')}
}
`;

  // sizes와 variants 추출
  const sizes = [];
  const variants = [];
  
  for (let key in now) {
    if (['large', 'medium', 'small', 'xsmall'].includes(key)) {
      sizes.push(key);
    }
    if (['primary', 'secondary', 'tertiary'].includes(key)) {
      variants.push(key);
    }
  }
  
  // cat 사이즈에 해당하는 스타일만 생성
  if (variants.length === 0 && now[cat]) {
    // textButton, iconButton의 경우
    const sizeStyles = now[cat].trim().replace(/\n\s+/g, '\n  ');
    style += `.${clsKebab}__${cat} {
  ${sizeStyles}
}
`;
  }
  
  // cat 사이즈에 해당하는 스타일만 생성 (button의 경우)
  for (let variant of variants) {
    const sizeStyles = now[cat].trim().replace(/\n\s+/g, '\n  ');
    const variantStyles = now[variant].able.trim().replace(/\n\s+/g, '\n  ');
    
    // able 상태
    style += `.${cls}__${cat}--${variant} {
  ${sizeStyles}
  ${variantStyles}
}
`;
    
    // disabled 상태 (존재하는 경우만)
    if (now[variant].disabled) {
      const disabledStyles = now[variant].disabled.trim().replace(/\n\s+/g, '\n  ');
      style += `.${cls}__${cat}--${variant}.is-disabled {
  ${sizeStyles}
  ${disabledStyles}
}
`;
    }
  }
  
  style += `</style>`;

  // 🔹 버튼 태그 생성 (cat 사이즈 기준)
  let result = '';
  const tagName = cls === 'textButton' ? 'a' : 'button';
  
  // 아이콘 선택 함수
  const getFontSize = (sizeStr) => {
    const match = sizeStr.match(/font-size:\s*(\d+)px/);
    return match ? parseInt(match[1]) : 16;
  };
  
  // variants가 없는 경우 (textButton, iconButton)
  if (variants.length === 0) {
    if (cls === 'textButton') {
      result += `<${tagName} class="${clsKebab} ${clsKebab}__${cat}">Button</${tagName}>`;
    } else if (cls === 'iconButton') {
      result += `<${tagName} class="${clsKebab} ${clsKebab}__${cat}">Button</${tagName}>`;
    } else {
      result += `<${tagName} class="${cls} ${cls}__${cat}"></${tagName}>`;
    }
    
    // 코드 미리보기
    const sizeStyles = now[cat].trim().replace(/\n\s+/g, '\n  ');
    const displayCls = (cls === 'textButton' || cls === 'iconButton') ? clsKebab : cls;
    let variantStyle = `<style>
.${displayCls} {
  ${now.common.trim().replace(/\n\s+/g, '\n  ')}
}
.${displayCls}__${cat} {
  ${sizeStyles}
}
</style>`;
    
    result += `<pre class="code">${variantStyle}
<${tagName} class="${displayCls} ${displayCls}__${cat}">${cls === 'textButton' ? 'Button' : 'Button'}</${tagName}></pre>`;
    
    return `${reset}${style}${result}`;
  }
  
  for (let variant of variants) {
    result += `<h4>${variant}</h4>`;
    
    // able 상태
    result += `<button class="${cls} ${cls}__${cat}--${variant}">Button</button>`;
    
    // disabled 상태 (존재하는 경우만)
    if (now[variant].disabled) {
      result += `<button class="${cls} ${cls}__${cat}--${variant} is-disabled">Button</button>`;
    }
    
    // 해당 variant에 사용된 스타일만 추출
    const sizeStyles = now[cat].trim().replace(/\n\s+/g, '\n  ');
    const variantStyles = now[variant].able.trim().replace(/\n\s+/g, '\n  ');
    
    let variantStyle = `<style>
.${cls} {
  ${now.common.trim().replace(/\n\s+/g, '\n  ')}
}
.${cls}__${cat}--${variant} {
  ${sizeStyles}
  ${variantStyles}
}`;
    
    if (now[variant].disabled) {
      const disabledStyles = now[variant].disabled.trim().replace(/\n\s+/g, '\n  ');
      variantStyle += `
.${cls}__${cat}--${variant}.is-disabled {
  ${sizeStyles}
  ${disabledStyles}
}`;
    }
    
    variantStyle += `
</style>`;
    
    // 코드 미리보기
    result += `<pre class="code">${variantStyle}
<button class="${cls} ${cls}__${cat}--${variant}">Button</button>`;
    
    if (now[variant].disabled) {
      result += `
<button class="${cls} ${cls}__${cat}--${variant} is-disabled">Button</button>`;
    }
    
    result += `</pre>`;
  }
  
  return `${reset}${style}${result}`;
};