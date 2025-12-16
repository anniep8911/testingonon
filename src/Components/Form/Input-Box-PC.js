export const SinglePage = (type, ext = []) => {
  const device = ext[0] || 'pc';
  const component = ext[1] || 'input-box';

  const styles = `
    <style>
      .form-field-box {
        display: inline-block;
        width: 400px;
        margin-bottom: 24px;
      }
      
      .form-label-box {
        display: block;
        font-size: 12px;
        color: #999;
        margin-bottom: 12px;
        font-weight: 400;
        letter-spacing: -0.02em;
      }
      
      .input-wrapper-box {
        position: relative;
        width: 100%;
      }
      
      .input-box-${device}-${type} {
        width: 100%;
        height: 48px;
        font-size: 16px;
        padding: 0 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s;
        font-family: inherit;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        letter-spacing: -0.02em;
      }
      
      .input-box-${device}-${type}::placeholder {
        color: #ccc;
        font-weight: 300;
      }
      
      .input-box-${device}-${type}:focus {
        border-color: #000;
        border-width: 2px;
        padding: 0 15px;
      }
      
      .input-box-${device}-${type}.has-value {
        border-color: #000;
      }
      
      .input-box-${device}-${type}.error {
        border-color: #ff0000;
      }
      
      .input-box-${device}-${type}:disabled {
        background-color: #f5f5f5;
        color: #ccc;
        cursor: not-allowed;
        border-color: #ddd;
      }
      
      .textarea-box-${device}-${type} {
        width: 100%;
        min-height: 120px;
        font-size: 16px;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s;
        font-family: inherit;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        letter-spacing: -0.02em;
        resize: vertical;
      }
      
      .textarea-box-${device}-${type}::placeholder {
        color: #ccc;
        font-weight: 300;
      }
      
      .textarea-box-${device}-${type}:focus {
        border-color: #000;
        border-width: 2px;
        padding: 11px 15px;
      }
      
      .error-message-box {
        display: block;
        font-size: 12px;
        color: #ff0000;
        margin-top: 8px;
        letter-spacing: -0.02em;
      }
      
      .helper-text {
        display: block;
        font-size: 12px;
        color: #999;
        margin-top: 8px;
        letter-spacing: -0.02em;
      }
    </style>
  `;

  let result = '';

  switch (type) {
    case 'default':
      result = `
        <div class="form-field-box">
          <label class="form-label-box">한글설명</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${device}-${type}" 
              placeholder="한글설명을 입력해주세요"
            />
          </div>
        </div>
      `;
      break;

    case 'focus':
      result = `
        <div class="form-field-box">
          <label class="form-label-box">한글설명</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${device}-${type} has-value" 
              value="현대"
            />
          </div>
        </div>
      `;
      break;

    case 'filled':
      result = `
        <div class="form-field-box">
          <label class="form-label-box">한글설명</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${device}-${type} has-value" 
              value="현대백"
            />
          </div>
        </div>
      `;
      break;

    case 'disabled':
      result = `
        <div class="form-field-box">
          <label class="form-label-box">한글설명</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${device}-${type}" 
              placeholder="한글설명을 입력해주세요"
              disabled
            />
          </div>
        </div>
      `;
      break;

    case 'error':
      result = `
        <div class="form-field-box">
          <label class="form-label-box">Error</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${device}-${type} error" 
              value="나도몰"
            />
          </div>
          <span class="error-message-box">너무 짧아 내용을 입력하삼쇼.</span>
        </div>
      `;
      break;

    case 'textarea':
      result = `
        <div class="form-field-box">
          <label class="form-label-box">Textarea</label>
          <div class="input-wrapper-box">
            <textarea 
              class="textarea-box-${device}-${type}" 
              placeholder="설명으로든 문장으로든 술 골라"
            ></textarea>
          </div>
        </div>
      `;
      break;

    case 'textarea-filled':
      result = `
        <div class="form-field-box">
          <label class="form-label-box">Textarea</label>
          <div class="input-wrapper-box">
            <textarea 
              class="textarea-box-${device}-${type}"
            >남아</textarea>
          </div>
        </div>
      `;
      break;

    default:
      result = `
        <div class="form-field-box">
          <label class="form-label-box">한글설명</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${device}-${type}" 
              placeholder="한글설명을 입력해주세요"
            />
          </div>
        </div>
      `;
  }

  return styles + result;
};
