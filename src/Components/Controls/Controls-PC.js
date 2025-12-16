export const SinglePage = (type) => {
  const styles = `
    <style>
      .controls-row {
        display: flex;
        gap: 48px;
        align-items: center;
        margin-bottom: 40px;
      }
      .controls__checkbox-label,
      .controls__radio-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        line-height: 1.5;
        color: #8B95A1;
        font-weight: 400;
        cursor: pointer;
        user-select: none;
        position: relative;
        padding-left: 28px;
      }
      .controls__checkbox-label.is--checked,
      .controls__radio-label.is--checked {
        color: #23272F;
        font-weight: 700;
      }
      .controls__checkbox-label.is--disabled,
      .controls__radio-label.is--disabled {
        color: #AEB8C2;
        cursor: not-allowed;
      }
      .controls__checkbox-input:disabled + .controls__checkbox-text,
      .controls__checkbox-input:checked:disabled + .controls__checkbox-text {
        cursor: not-allowed;
        color: #AEB8C2;
      }
      .controls__radio-input:disabled + .controls__radio-text,
      .controls__radio-input:checked:disabled + .controls__radio-text {
        cursor: not-allowed;
        color: #AEB8C2;
      }
      .controls__checkbox-label.is--checked.is--disabled,
      .controls__radio-label.is--checked.is--disabled {
        color: #AEB8C2;
        font-weight: 700;
        cursor: not-allowed;
      }
      /* Custom Checkbox */
      .controls__checkbox-input {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
      }
      .controls__checkbox-text {
        font-size: 16px;
        line-height: 1.5;
        position: relative;
      }
      .controls__checkbox-input + .controls__checkbox-text::before {
        content: '';
        position: absolute;
        left: -28px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transition: background-image 0.2s;
      }
      .controls__checkbox-input:not(:checked):not(:disabled) + .controls__checkbox-text::before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjE5IiBoZWlnaHQ9IjE5IiByeD0iMS41IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjRERFMUU1Ii8+PHBhdGggZD0iTTguNjY3MTIgMTIuMTEzOEwxNC43OTU0IDUuOTg1NkwxNS43MzgyIDYuOTI4NEw4LjY2NzEyIDEzLjk5OTRMNC40MjQ0NyA5Ljc1Njg1TDUuMzY3MjggOC44MTQwNUw4LjY2NzEyIDEyLjExMzh6IiBmaWxsPSIjRERFMUU1Ii8+PC9zdmc+');
      }
      .controls__checkbox-input:checked:not(:disabled) + .controls__checkbox-text::before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjMUIxRTIzIi8+PHBhdGggZD0iTTguNjY3MTIgMTIuMTEzOEwxNC43OTU0IDUuOTg1NkwxNS43MzgyIDYuOTI4NEw4LjY2NzEyIDEzLjk5OTRMNC40MjQ0NyA5Ljc1Njg1TDUuMzY3MjggOC44MTQwNUw4LjY2NzEyIDEyLjExMzh6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==');
      }
      .controls__checkbox-input:disabled:not(:checked) + .controls__checkbox-text::before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjE5IiBoZWlnaHQ9IjE5IiByeD0iMS41IiBmaWxsPSIjRjVGN0ZBIiBzdHJva2U9IiNFM0U3RUQiLz48cGF0aCBkPSJNOC42NjcxMiAxMi4xMTM4TDE0Ljc5NTQgNS45ODU2TDE1LjczODIgNi45Mjg0TDguNjY3MTIgMTMuOTk5NEw0LjQyNDQ3IDkuNzU2ODVMNS4zNjcyOCA4LjgxNDA1TDguNjY3MTIgMTIuMTEzOHoiIGZpbGw9IiNFM0U3RUQiLz48L3N2Zz4=');
      }
      .controls__checkbox-input:checked:disabled + .controls__checkbox-text::before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjQUVCOEMyIi8+PHBhdGggZD0iTTguNjY3MTIgMTIuMTEzOEwxNC43OTU0IDUuOTg1NkwxNS43MzgyIDYuOTI4NEw4LjY2NzEyIDEzLjk5OTRMNC40MjQ0NyA5Ljc1Njg1TDUuMzY3MjggOC44MTQwNUw4LjY2NzEyIDEyLjExMzh6IiBmaWxsPSIjZmZmIi8+PC9zdmc+');
      }
      /* Custom Radio */
      .controls__radio-input {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
      }
      .controls__radio-text {
        font-size: 16px;
        line-height: 1.5;
        position: relative;
      }
      .controls__radio-input + .controls__radio-text::before {
        content: '';
        position: absolute;
        left: -28px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transition: background-image 0.2s;
      }
      .controls__radio-input:not(:checked):not(:disabled) + .controls__radio-text::before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMC41QzE1LjI0NjcgMC41IDE5LjUgNC43NTMyOSAxOS41IDEwQzE5LjUgMTUuMjQ2NyAxNS4yNDY3IDE5LjUgMTAgMTkuNUM0Ljc1MzI5IDE5LjUgMC41IDE1LjI0NjcgMC41IDEwQzAuNSA0Ljc1MzI5IDQuNzUzMjkgMC41IDEwIDAuNVoiIGZpbGw9IndoaXRlIiBzdHJva2U9IiNEREUwRTUiLz48L3N2Zz4=');
      }
      .controls__radio-input:checked:not(:disabled) + .controls__radio-text::before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMjBDMTUuNTIyOCAyMCAyMCAxNS41MjI4IDIwIDEwQzIwIDQuNDc3MTUgMTUuNTIyOCAwIDEwIDBDNC40NzcxNSAwIDAgNC40NzcxNSAwIDEwQzAgMTUuNTIyOCA0LjQ3NzE1IDIwIDEwIDIwWiIgZmlsbD0iIzFCMUUyMyIvPjxwYXRoIGQ9Ik0xMCAxNEMxMi4yMDkxIDE0IDE0IDEyLjIwOTEgMTQgMTBDMTQgNy43OTA4NiAxMi4yMDkxIDYgMTAgNkM3Ljc5MDg2IDYgNiA3Ljc5MDg2IDYgMTBDNiAxMi4yMDkxIDcuNzkwODYgMTQgMTAgMTRaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==');
      }
      .controls__radio-input:disabled:not(:checked) + .controls__radio-text::before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI5IiBmaWxsPSIjRjVGN0ZBIiBzdHJva2U9IiNFM0U3RUQiLz48L3N2Zz4=');
      }
      .controls__radio-input:checked:disabled + .controls__radio-text::before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI5IiBmaWxsPSIjQUVCOEMyIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iNSIgZmlsbD0iI0NDRDFEOCIvPjwvc3ZnPg==');
      }
      .controls__radio-input:checked:disabled + .controls__radio-text {
        cursor: not-allowed;
        color: #AEB8C2;
      }
      /* Switch */
      .controls__switch {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
      .controls__switch-input {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
      }
      .controls__switch-label {
        font-size: 16px;
        line-height: 1.5;
        position: relative;
        padding-left: 56px;
        color: #8B95A1;
        min-height: 32px;
        display: flex;
        align-items: center;
      }
      .controls__switch-label::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 48px;
        height: 24px;
        border-radius: 12px;
        background: #E3E7ED;
        transition: background 0.2s;
        box-sizing: border-box;
      }
      .controls__switch-label::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 4px;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        transition: left 0.2s;
        box-shadow: 0 1px 2px rgba(0,0,0,0.04);
      }
      .controls__switch-input:checked + .controls__switch-label::before {
        background: #434A54;
      }
      .controls__switch-input:checked + .controls__switch-label::after {
        left: 28px;
      }
      .controls__switch-input:disabled + .controls__switch-label::before {
        background: #F5F7FA;
      }
      .controls__switch-input:checked:disabled + .controls__switch-label::before {
        background: #AEB8C2;
      }
      .controls__switch-input:disabled + .controls__switch-label::after {
        background: #E3E7ED;
      }
      .controls__switch-input:disabled + .controls__switch-label {
        cursor: not-allowed;
      }
      /* Counter (기존 유지) */
      .controls-row--counter {
        gap: 40px;
        margin-bottom: 40px;
      }
      .controls__counter-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      }
      .controls__counter-label {
        color: #8B95A1;
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 12px;
        font-weight: 500;
        text-align: center;
      }
      .controls__counter {
        display: flex;
        align-items: center;
        gap: 0;
        font-size: 16px;
        line-height: 1.5;
      }
      .controls__counter--box {
        border: 1.5px solid #DDE0E5;
        border-radius: 4px;
        background: #fff;
        width: 120px;
        height: 40px;
        min-width: 120px;
        min-height: 40px;
        max-width: 120px;
        max-height: 40px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .controls__counter.is--disabled,
      .controls__counter--box.is--disabled {
        background: #F5F7FA;
        border-color: #F5F7FA;
      }
      .controls__counter-btn {
        background: none;
        border: none;
        color: #1B1E23;
        width: 32px;
        height: 40px;
        min-width: 32px;
        min-height: 40px;
        max-width: 32px;
        max-height: 40px;
        cursor: pointer;
        border-radius: 0;
        transition: background 0.2s, color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: inherit;
        font-weight: 400;
        padding: 0;
      }
      .controls__counter-btn:disabled {
        color: #CCD1D8;
        background: #F5F7FA;
        cursor: not-allowed;
      }
      .controls__counter-value {
        width: 40px;
        min-width: 40px;
        max-width: 40px;
        height: 40px;
        min-height: 40px;
        max-height: 40px;
        text-align: center;
        color: var(--font-dark-1-b-1-e-23, #1B1E23);
        font-family: "Noto Sans KR", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -0.35px;
        border: none;
        background: transparent;
        outline: none;
        margin: 0;
        appearance: textfield;
      }
      .controls__counter-btn svg {
        width: 16px;
        height: 16px;
        display: block;
      }
      .controls__counter-value:disabled {
        color: #CCD1D8;
        background: transparent;
        cursor: not-allowed;
      }
      /* input[type=number] 스핀버튼 제거 (크롬, 사파리, 엣지) */
      input[type=number].controls__counter-value::-webkit-inner-spin-button,
      input[type=number].controls__counter-value::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      /* 파이어폭스 스핀버튼 제거 */
      input[type=number].controls__counter-value {
        -moz-appearance: textfield;
      }
      /* IE, Edge 구버전 등 기타 브라우저 대응 */
      input[type=number].controls__counter-value {
        appearance: textfield;
      }
    </style>
  `;

  let scripts = '';
  let result = '';

  switch (type) {
    case 'checkbox':
      result = `
        <div class="controls-row">
          <label class="controls__checkbox-label">
            <input type="checkbox" class="controls__checkbox-input" />
            <span class="controls__checkbox-text">Action text</span>
          </label>
          <label class="controls__checkbox-label">
            <input type="checkbox" class="controls__checkbox-input" checked />
            <span class="controls__checkbox-text">Action text</span>
          </label>
          <label class="controls__checkbox-label">
            <input type="checkbox" class="controls__checkbox-input" disabled />
            <span class="controls__checkbox-text">Action text</span>
          </label>
          <label class="controls__checkbox-label">
            <input type="checkbox" class="controls__checkbox-input" checked disabled />
            <span class="controls__checkbox-text">Action text</span>
          </label>
        </div>
      `;
      break;
    case 'radio':
      result = `
        <div class="controls-row">
          <label class="controls__radio-label">
            <input type="radio" class="controls__radio-input" name="radio-demo" />
            <span class="controls__radio-text">Action text</span>
          </label>
          <label class="controls__radio-label">
            <input type="radio" class="controls__radio-input" name="radio-demo" checked />
            <span class="controls__radio-text">Action text</span>
          </label>
          <label class="controls__radio-label">
            <input type="radio" class="controls__radio-input" name="radio-demo2" disabled />
            <span class="controls__radio-text">Action text</span>
          </label>
          <label class="controls__radio-label">
            <input type="radio" class="controls__radio-input" name="radio-demo2" checked disabled />
            <span class="controls__radio-text">Action text</span>
          </label>
        </div>
      `;
      break;
    case 'switch':
      result = `
        <div class="controls-row">
          <label class="controls__switch">
            <input type="checkbox" class="controls__switch-input" />
            <span class="controls__switch-label">Default</span>
          </label>
          <label class="controls__switch">
            <input type="checkbox" class="controls__switch-input" checked />
            <span class="controls__switch-label">Active</span>
          </label>
          <label class="controls__switch">
            <input type="checkbox" class="controls__switch-input" disabled />
            <span class="controls__switch-label">Disabled</span>
          </label>
          <label class="controls__switch">
            <input type="checkbox" class="controls__switch-input" checked disabled />
            <span class="controls__switch-label">Disabled+Active</span>
          </label>
        </div>
      `;
      break;
    case 'counter':
      result = `
        <div class="controls-row controls-row--counter">
          <div class="controls__counter-group">
            <span class="controls__counter-label">Default</span>
            <div class="controls__counter controls__counter--box">
              <button class="controls__counter-btn controls__counter-btn--minus" aria-label="minus">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13" stroke="#CCD1D8" stroke-width="1.5"/>
                </svg>
              </button>
              <input type="number" class="controls__counter-value" value="0" min="0" />
              <button class="controls__counter-btn controls__counter-btn--plus" aria-label="plus">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8H14" stroke="#1B1E23" stroke-width="1.5"/>
                  <path d="M8 2L8 14" stroke="#1B1E23" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="controls__counter-group">
            <span class="controls__counter-label">Disabled</span>
            <div class="controls__counter controls__counter--box is--disabled">
              <button class="controls__counter-btn controls__counter-btn--minus" aria-label="minus" disabled>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13" stroke="#CCD1D8" stroke-width="1.5"/>
                </svg>
              </button>
              <input type="number" class="controls__counter-value" value="0" min="0" disabled />
              <button class="controls__counter-btn controls__counter-btn--plus" aria-label="plus" disabled>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8H14" stroke="#CCD1D8" stroke-width="1.5"/>
                  <path d="M8 2L8 14" stroke="#CCD1D8" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="controls__counter-group">
            <span class="controls__counter-label">No box</span>
            <div class="controls__counter">
              <button class="controls__counter-btn controls__counter-btn--minus" aria-label="minus">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13" stroke="#CCD1D8" stroke-width="1.5"/>
                </svg>
              </button>
              <input type="number" class="controls__counter-value" value="0" min="0" />
              <button class="controls__counter-btn controls__counter-btn--plus" aria-label="plus">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8H14" stroke="#1B1E23" stroke-width="1.5"/>
                  <path d="M8 2L8 14" stroke="#1B1E23" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="controls__counter-group">
            <span class="controls__counter-label">No box Disabled</span>
            <div class="controls__counter is--disabled">
              <button class="controls__counter-btn controls__counter-btn--minus" aria-label="minus" disabled>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13" stroke="#CCD1D8" stroke-width="1.5"/>
                </svg>
              </button>
              <input type="number" class="controls__counter-value" value="0" min="0" disabled />
              <button class="controls__counter-btn controls__counter-btn--plus" aria-label="plus" disabled>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8H14" stroke="#CCD1D8" stroke-width="1.5"/>
                  <path d="M8 2L8 14" stroke="#CCD1D8" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

      `;
      scripts = `
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <script>
          $(function() {
            $('.controls__counter').each(function() {
              var $counter = $(this);
              var $input = $counter.find('.controls__counter-value');
              $counter.find('.controls__counter-btn--plus').on('click', function() {
                if ($input.prop('disabled')) return;
                var val = parseInt($input.val(), 10) || 0;
                $input.val(val + 1).trigger('change');
              });
              $counter.find('.controls__counter-btn--minus').on('click', function() {
                if ($input.prop('disabled')) return;
                var val = parseInt($input.val(), 10) || 0;
                if (val > ($input.attr('min') ? parseInt($input.attr('min'), 10) : 0)) {
                  $input.val(val - 1).trigger('change');
                }
              });
            });
          });
        </script>
      `;
      break;


    default:
      result = `
        <div class="controls">
          <div class="controls__section">
            <h3 class="controls__section-title">Controls</h3>
            <p>카테고리를 선택하세요: checkbox, radio, switch, counter, input</p>
          </div>
        </div>
      `;
  }
  return styles + result + scripts;
};
