import btn from '../assets/button-data';
import reset from '../../JS/asset/style';
import ico from '../assets/icon-data';

export const SinglePage = (cat,ext) => {
  const now = btn[ext[0]][ext[1]];
  const cls = ext[1];
  
  // 🔹 CSS 스타일 생성
  // kebab-case로 변환 (textButton -> text-button, iconButton -> icon-button)
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
  
  const getIcon = (fontSize) => {
    const iconSizes = [12, 16, 18, 24, 28];
    const closest = iconSizes.reduce((prev, curr) => 
      Math.abs(curr - fontSize) < Math.abs(prev - fontSize) ? curr : prev
    );
    
    // chevron 아이콘 찾기 (우선순위: MOB > PC 폴백)
    let iconKey = Object.keys(ico.MOB).find(key => 
      key.includes(`${closest}px`) && key.toLowerCase().includes('chevron')
    );
    
    // MOB에 없으면 PC 아이콘 사용
    if (!iconKey) {
      iconKey = Object.keys(ico.PC).find(key => 
        key.includes(`${closest}px`) && key.toLowerCase().includes('chevron')
      );
      if (iconKey) {
        return ico.PC[iconKey].img;
      }
    }
    
    // 해당 사이즈에 chevron이 없으면 16px chevron 사용
    if (!iconKey) {
      iconKey = Object.keys(ico.PC).find(key => 
        key.includes('16px') && key.toLowerCase().includes('chevron')
      );
      if (iconKey) {
        return ico.PC[iconKey].img;
      }
    }
    
    return iconKey ? ico.MOB[iconKey].img : '';
  };
  
  // variants가 없는 경우 (textButton, iconButton)
  if (variants.length === 0) {
    const fontSize = now[cat] ? getFontSize(now[cat]) : 16;
    const iconImg = getIcon(fontSize);
    
    console.log('MOB - fontSize:', fontSize);
    console.log('MOB - iconImg:', iconImg);
    console.log('MOB - iconImg length:', iconImg ? iconImg.length : 0);
    console.log('MOB - available MOB icons:', Object.keys(ico.MOB));
    
    result += `<h4>${cat}</h4>`;
    
    const iconTag = iconImg ? `<img src="${iconImg}" alt="icon" style="width:${fontSize}px;height:${fontSize}px;display:inline-block;vertical-align:middle;" />` : '';
    
    const baseClass = (cls === 'textButton' || cls === 'iconButton') ? clsKebab : cls;
    const fullClass = now[cat] ? `${baseClass} ${baseClass}__${cat}` : baseClass;
    
    if (cls === 'textButton') {
      result += `<${tagName} class="${fullClass}">Button${iconTag}</${tagName}>`;
    } else if (cls === 'iconButton') {
      result += `<${tagName} class="${fullClass}">Button${iconTag}</${tagName}>`;
    } else {
      result += `<${tagName} class="${fullClass}">${iconTag}</${tagName}>`;
    }
    
    // 코드 미리보기
    const sizeStyles = now[cat] ? now[cat].trim().replace(/\n\s+/g, '\n  ') : '';
    const displayCls = (cls === 'textButton' || cls === 'iconButton') ? clsKebab : cls;
    let variantStyle = `<style>
.${displayCls} {
  ${now.common.trim().replace(/\n\s+/g, '\n  ')}
}`;
    
    if (sizeStyles) {
      variantStyle += `
.${displayCls}__${cat} {
  ${sizeStyles}
}`;
    }
    
    variantStyle += `
</style>`;
    
    const displayClass = sizeStyles ? `${displayCls} ${displayCls}__${cat}` : displayCls;
    const content = (cls === 'textButton' || cls === 'iconButton') ? 'Button' + iconTag : iconTag;
    result += `<pre class="code">${variantStyle}
<${tagName} class="${displayClass}">${content}</${tagName}></pre>`;
    
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
