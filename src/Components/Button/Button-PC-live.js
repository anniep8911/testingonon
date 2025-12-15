export const SinglePage = (cat, ext) => {
  let result = '';

  if (cat === 'buttonLargePrimary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__large--primary {
    min-width: 187px;
    line-height: 60px;
    font-size: 16px;
    background-color: #1B1E23;
    color: white;
    border: none;
  }
  .button__large--primary.is--disabled {
    min-width: 187px;
    line-height: 60px;
    font-size: 16px;
    background-color: #EEF0F2;
    color: #ABB2BE;
    border: none;
  }
</style>
<button class="button button__large--primary">Button</button>
<button class="button button__large--primary is--disabled">Button</button>`;
  } else if (cat === 'buttonLargeSecondary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__large--secondary {
    min-width: 187px;
    line-height: 60px;
    font-size: 16px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #1B1E23;
  }
  .button__large--secondary.is--disabled {
    min-width: 187px;
    line-height: 60px;
    font-size: 16px;
    background-color: white;
    color: #ABB2BE;
    border: 1px solid #DDE0E5;
  }
</style>
<button class="button button__large--secondary">Button</button>
<button class="button button__large--secondary is--disabled">Button</button>`;
  } else if (cat === 'buttonLargeTertiary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__large--tertiary {
    min-width: 187px;
    line-height: 60px;
    font-size: 16px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #CCD1D8;
  }
</style>
<button class="button button__large--tertiary">Button</button>`;
  } else if (cat === 'buttonMediumPrimary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__medium--primary {
    min-width: 120px;
    line-height: 48px;
    font-size: 14px;
    background-color: #1B1E23;
    color: white;
    border: none;
  }
  .button__medium--primary.is--disabled {
    min-width: 120px;
    line-height: 48px;
    font-size: 14px;
    background-color: #EEF0F2;
    color: #ABB2BE;
    border: none;
  }
</style>
<button class="button button__medium--primary">Button</button>
<button class="button button__medium--primary is--disabled">Button</button>`;
  } else if (cat === 'buttonMediumSecondary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__medium--secondary {
    min-width: 120px;
    line-height: 48px;
    font-size: 14px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #1B1E23;
  }
  .button__medium--secondary.is--disabled {
    min-width: 120px;
    line-height: 48px;
    font-size: 14px;
    background-color: white;
    color: #ABB2BE;
    border: 1px solid #DDE0E5;
  }
</style>
<button class="button button__medium--secondary">Button</button>
<button class="button button__medium--secondary is--disabled">Button</button>`;
  } else if (cat === 'buttonMediumTertiary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__medium--tertiary {
    min-width: 120px;
    line-height: 48px;
    font-size: 14px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #CCD1D8;
  }
</style>
<button class="button button__medium--tertiary">Button</button>`;
  } else if (cat === 'buttonSmallPrimary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__small--primary {
    min-width: 120px;
    line-height: 40px;
    font-size: 14px;
    background-color: #1B1E23;
    color: white;
    border: none;
  }
  .button__small--primary.is--disabled {
    min-width: 120px;
    line-height: 40px;
    font-size: 14px;
    background-color: #EEF0F2;
    color: #ABB2BE;
    border: none;
  }
</style>
<button class="button button__small--primary">Button</button>
<button class="button button__small--primary is--disabled">Button</button>`;
  } else if (cat === 'buttonSmallSecondary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__small--secondary {
    min-width: 120px;
    line-height: 40px;
    font-size: 14px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #1B1E23;
  }
  .button__small--secondary.is--disabled {
    min-width: 120px;
    line-height: 40px;
    font-size: 14px;
    background-color: white;
    color: #ABB2BE;
    border: 1px solid #DDE0E5;
  }
</style>
<button class="button button__small--secondary">Button</button>
<button class="button button__small--secondary is--disabled">Button</button>`;
  } else if (cat === 'buttonSmallTertiary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__small--tertiary {
    min-width: 120px;
    line-height: 40px;
    font-size: 14px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #CCD1D8;
  }
</style>
<button class="button button__small--tertiary">Button</button>`;
  } else if (cat === 'buttonXsmallPrimary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__xsmall--primary {
    min-width: 63px;
    line-height: 32px;
    font-size: 12px;
    background-color: #1B1E23;
    color: white;
    border: none;
  }
  .button__xsmall--primary.is--disabled {
    min-width: 63px;
    line-height: 32px;
    font-size: 12px;
    background-color: #EEF0F2;
    color: #ABB2BE;
    border: none;
  }
</style>
<button class="button button__xsmall--primary">Button</button>
<button class="button button__xsmall--primary is--disabled">Button</button>`;
  } else if (cat === 'buttonXsmallSecondary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__xsmall--secondary {
    min-width: 63px;
    line-height: 32px;
    font-size: 12px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #1B1E23;
  }
  .button__xsmall--secondary.is--disabled {
    min-width: 63px;
    line-height: 32px;
    font-size: 12px;
    background-color: white;
    color: #ABB2BE;
    border: 1px solid #DDE0E5;
  }
</style>
<button class="button button__xsmall--secondary">Button</button>
<button class="button button__xsmall--secondary is--disabled">Button</button>`;
  } else if (cat === 'buttonXsmallTertiary') {
    result += `<style>
  .button {
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  .button__xsmall--tertiary {
    min-width: 63px;
    line-height: 32px;
    font-size: 12px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #CCD1D8;
  }
</style>
<button class="button button__xsmall--tertiary">Button</button>`;
  } else if (cat === 'textButtonTextIconLarge') {
    result += `<style>
  .text-button--icon {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.7px;
    color: #1B1E23;
    cursor: pointer;
  }
</style>
<a class="text-button text-button--icon">Label &gt;</a>`;
  } else if (cat === 'textButtonTextOnlyLarge') {
    result += `<style>
  .text-button--text-only {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.7px;
    color: #1B1E23;
    cursor: pointer;
  }
</style>
<a class="text-button text-button--text-only">Label</a>`;
  } else if (cat === 'textButtonTextIconMedium') {
    result += `<style>
  .text-button--icon-13 {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: -0.65px;
    color: #1B1E23;
    cursor: pointer;
  }
  .icon-info {
    font-size: 13px;
    color: #ABB2BE;
  }
</style>
<a class="text-button text-button--icon-13"><span class="icon-info">ⓘ</span> Label</a>`;
  } else if (cat === 'textButtonUnderlineMedium') {
    result += `<style>
  .text-button--underline-13 {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: -0.65px;
    color: #1B1E23;
    border-bottom: none;
    cursor: pointer;
  }
</style>
<a class="text-button text-button--underline-13">Label</a>`;
  } else if (cat === 'textButtonUnderlineColorMedium') {
    result += `<style>
  .text-button--underline-color-13 {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: -0.65px;
    color: #EA2869;
    border-bottom: 1px solid #EA2869;
    padding-bottom: 2px;
    cursor: pointer;
  }
</style>
<a class="text-button text-button--underline-color-13">Label</a>`;
  } else if (cat === 'textButtonTextIconSmall') {
    result += `<style>
  .text-button--icon-12 {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.6px;
    color: #1B1E23;
    cursor: pointer;
  }
</style>
<a class="text-button text-button--icon-12">Label &gt;</a>`;
  } else if (cat === 'iconButtonLarge') {
    result += `<style>
  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
  }
  .icon-button__large {
    min-width: 187px;
    line-height: 60px;
    font-size: 16px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #ABB2BE;
  }
  .icon-button__large.is--disabled {
    min-width: 187px;
    line-height: 60px;
    font-size: 16px;
    background-color: #EEF0F2;
    color: #ABB2BE;
    border: 1px solid #DDE0E5;
  }
</style>
<button class="icon-button icon-button__large">📦 Label</button>
<button class="icon-button icon-button__large is--disabled">📦 Label</button>`;
  } else if (cat === 'iconButtonMedium') {
    result += `<style>
  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
  }
  .icon-button__medium {
    min-width: 120px;
    line-height: 48px;
    font-size: 14px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #ABB2BE;
  }
  .icon-button__medium.is--disabled {
    min-width: 120px;
    line-height: 48px;
    font-size: 14px;
    background-color: #EEF0F2;
    color: #ABB2BE;
    border: 1px solid #DDE0E5;
  }
</style>
<button class="icon-button icon-button__medium">📦 Label</button>
<button class="icon-button icon-button__medium is--disabled">📦 Label</button>`;
  } else if (cat === 'iconButtonSmall') {
    result += `<style>
  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
  }
  .icon-button__small {
    min-width: 120px;
    line-height: 40px;
    font-size: 14px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #ABB2BE;
  }
  .icon-button__small.is--disabled {
    min-width: 120px;
    line-height: 40px;
    font-size: 14px;
    background-color: #EEF0F2;
    color: #ABB2BE;
    border: 1px solid #DDE0E5;
  }
</style>
<button class="icon-button icon-button__small">📦 Label</button>
<button class="icon-button icon-button__small is--disabled">📦 Label</button>`;
  } else if (cat === 'iconButtonXsmall') {
    result += `<style>
  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
  }
  .icon-button__xsmall {
    min-width: 63px;
    line-height: 32px;
    font-size: 12px;
    background-color: white;
    color: #1B1E23;
    border: 1px solid #ABB2BE;
  }
  .icon-button__xsmall.is--disabled {
    min-width: 63px;
    line-height: 32px;
    font-size: 12px;
    background-color: #EEF0F2;
    color: #ABB2BE;
    border: 1px solid #DDE0E5;
  }
</style>
<button class="icon-button icon-button__xsmall">📦 Label</button>
<button class="icon-button icon-button__xsmall is--disabled">📦 Label</button>`;
  }

  return `${result}`;
};
