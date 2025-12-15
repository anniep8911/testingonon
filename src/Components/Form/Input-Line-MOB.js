export const SinglePage = (type, ext = []) => {
  const device = ext[0] || 'mob';
  const component = ext[1] || 'input';

  const sizes = {
    large: { height: '56px', fontSize: '16px', padding: '0 20px' },
    medium: { height: '48px', fontSize: '15px', padding: '0 16px' },
    small: { height: '40px', fontSize: '14px', padding: '0 12px' },
    xsmall: { height: '32px', fontSize: '13px', padding: '0 10px' }
  };

  const size = sizes[type] || sizes.medium;

  const styles = `
    <style>
      .input-container {
        width: 100%;
      }
      
      .input-${device}-${type} {
        width: 100%;
        height: ${size.height};
        font-size: ${size.fontSize};
        padding: ${size.padding};
        border: 1px solid #d0d0d0;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s;
        font-family: inherit;
        box-sizing: border-box;
      }
      
      .input-${device}-${type}:hover:not(:disabled) {
        border-color: #a0a0a0;
      }
      
      .input-${device}-${type}:focus:not(:disabled) {
        border-color: #0066ff;
        box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
      }
      
      .input-${device}-${type}:disabled {
        background-color: #f5f5f5;
        color: #999;
        cursor: not-allowed;
      }
      
      .input-${device}-${type}::placeholder {
        color: #999;
      }
    </style>
  `;

  const html = `
    <div class="input-container">
      <input 
        type="text" 
        class="input-${device}-${type}" 
        placeholder="입력하세요"
      />
    </div>
    <div class="input-container" style="margin-top: 16px;">
      <input 
        type="text" 
        class="input-${device}-${type}" 
        placeholder="비활성화 상태"
        disabled
      />
    </div>
  `;

  return styles + html;
};
