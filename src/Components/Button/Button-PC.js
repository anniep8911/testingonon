import btn from '../assets/button-data';
import reset from '../../JS/asset/style';

const commonStyle = `
  ${reset}
  <style>
    .css-s230ta {
      border: 0px solid transparent;
      box-shadow: 0 0 0 red;
    }
    .code {
      margin-top: 20px;
      white-space: pre-wrap;
      word-break: break-all;
    }
    .css-1fdphfk {
      display: none;
    }
    .single-button-container {
      margin: 20px 0;
      padding: 15px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
  </style>
`;

export const SinglePage = (cat) => {
  let result = ``;
  let style = ``;

  // Validate category
  if (!btn[cat]) {
    console.error(`Category "${cat}" not found in button-data.js`);
    return `<div>Error: Category "${cat}" not found.</div>`;
  }

  for (let state in btn[cat]) {
    const buttonList = btn[cat][state] || {};

    for (let size in buttonList) {
      const button = buttonList[size];
      const {
        tag = 'button',
        style: buttonStyle = '',
        label = 'Button',
        icon = ''
      } = button;

      const baseClass = 'button';
      const typeClass = `${baseClass}__${cat}`;
      const stateClass = `${typeClass}--${state}`;
      const classNames = `${baseClass} ${typeClass} ${stateClass}`;
      const disabledAttr = state === 'disabled' ? 'disabled' : '';

      // Generate CSS with styles from button-data.js
      style += `
      <style>
        .${baseClass}.${typeClass}.${stateClass} {
          ${buttonStyle.replace(/^(\s{2,})/gm, '  ')}
        }
      </style>
      `;

      result += `
      <div class="single-button-container">
        <style>
          .${baseClass}.${typeClass}.${stateClass} {
            ${buttonStyle.replace(/^(\s{2,})/gm, '  ')}
          }
        </style>
        <h3>${cat} (${state})</h3>
        <${tag} class="${classNames}" ${disabledAttr}>
          ${icon} ${label}
        </${tag}>
        <pre class="code">
<code>
<style>
.${baseClass}.${typeClass}.${stateClass} {
  ${buttonStyle.replace(/^(\s{2,})/gm, '  ')}
}
</style>
<${tag} class="${classNames}" ${disabledAttr}>
  ${icon} ${label}
</${tag}>
</code>
        </pre>
      </div>
      `;
    }
  }

  return `${commonStyle}${style}${result}`;
};