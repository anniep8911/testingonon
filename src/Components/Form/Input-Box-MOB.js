export const SinglePage = (type) => {
  const styles = `
    <style>
      .text-input-box {
        display: inline-block;
        width: 100%;
        margin-bottom: 24px;
      }
      
      .text-input-box__label {
        display: block;
        font-size: 12px;
        color: #999;
        margin-bottom: 12px;
        font-weight: 400;
        letter-spacing: -0.02em;
        line-height: 1.4;
      }
      
      .text-input-box__label.is--required::after {
        content: '';
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: #ff1493;
        border-radius: 50%;
        margin-left: 4px;
        vertical-align: middle;
      }
      
      .text-input-box__wrapper {
        position: relative;
        width: 100%;
      }
      
      .text-input-box__field {
        width: 100%;
        height: 48px;
        font-size: 14px;
        padding: 0 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        box-sizing: border-box;
        background-color: #fff;
        color: #333;
        letter-spacing: -0.02em;
        line-height: 1.6;
      }
      
      .text-input-box__field::placeholder {
        color: #999;
        font-weight: 400;
        font-size: 14px;
      }
      
      .text-input-box__field:focus,
      .text-input-box__field.is--focused {
        border-color: #000;
        border-width: 2px;
        padding: 0 15px;
      }
      
      .text-input-box__field.is--filled {
        border-color: #000;
      }
      
      .text-input-box__field.is--error {
        border-color: #ff0000;
      }
      
      .text-input-box__field:disabled,
      .text-input-box__field.is--disabled {
        background-color: #f5f5f5;
        color: #ccc;
        cursor: not-allowed;
        border-color: #ddd;
      }
      
      .text-input-box__field--textarea {
        width: 100%;
        min-height: 120px;
        font-size: 14px;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        box-sizing: border-box;
        background-color: #fff;
        color: #333;
        letter-spacing: -0.02em;
        resize: vertical;
        line-height: 1.6;
      }
      
      .text-input-box__field--textarea::placeholder {
        color: #999;
        font-weight: 400;
        font-size: 14px;
      }
      
      .text-input-box__field--textarea:focus {
        border-color: #000;
        border-width: 2px;
        padding: 11px 15px;
      }
      
      .text-input-box__error-message {
        display: block;
        font-size: 12px;
        color: #ff0000;
        margin-top: 8px;
        letter-spacing: -0.02em;
        line-height: 1.4;
      }
      
      .text-input-box__helper-text {
        display: block;
        font-size: 12px;
        color: #999;
        margin-top: 8px;
        letter-spacing: -0.02em;
        line-height: 1.4;
      }
    </style>
  `;

  let result = '';

  switch (type) {
    case 'default':
      result = `
        <div class="text-input-box">
          <label for="input-box-default" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-default" class="text-input-box__field" placeholder="텍스트를 입력하세요" />
          </div>
        </div>
      `;
      break;

    case 'focus':
      result = `
        <div class="text-input-box">
          <label for="input-box-focus" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-focus" class="text-input-box__field is--focused" value="입력중" />
          </div>
        </div>
      `;
      break;

    case 'filled':
      result = `
        <div class="text-input-box">
          <label for="input-box-filled" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-filled" class="text-input-box__field is--filled" value="입력완료" />
          </div>
        </div>
      `;
      break;

    case 'disabled':
      result = `
        <div class="text-input-box">
          <label for="input-box-disabled" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-disabled" class="text-input-box__field is--disabled" value="입력완료" disabled />
          </div>
        </div>
      `;
      break;

    case 'error':
      result = `
        <div class="text-input-box">
          <label for="input-box-error" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-error" class="text-input-box__field is--error" value="잘못된 입력" />
          </div>
          <span class="text-input-box__error-message">*오류 메세지 입력하세요</span>
        </div>
      `;
      break;

    case 'textarea':
      result = `
        <div class="text-input-box">
          <label for="textarea-box" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <textarea id="textarea-box" class="text-input-box__field text-input-box__field--textarea" placeholder="텍스트를 입력하세요"></textarea>
          </div>
          <span class="text-input-box__helper-text">0/1,000 자</span>
        </div>
      `;
      break;

    case 'textarea-filled':
      result = `
        <div class="text-input-box">
          <label for="textarea-box-filled" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <textarea id="textarea-box-filled" class="text-input-box__field text-input-box__field--textarea is--filled" style="border-color: #000;">입력된 텍스트입니다.</textarea>
          </div>
          <span class="text-input-box__helper-text">11/1,000 자</span>
        </div>
      `;
      break;

    default:
      result = `
        <div class="text-input-box">
          <label for="input-box-default" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-default" class="text-input-box__field" placeholder="텍스트를 입력하세요" />
          </div>
        </div>
      `;
  }

  return styles + result;
};
