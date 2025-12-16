export const SinglePage = (type) => {
  const styles = `
    <style>
      .text-input {
        display: inline-block;
        width: 100%;
        margin-bottom: 24px;
      }
      
      .text-input__label {
        display: block;
        font-size: 12px;
        color: #999;
        margin-bottom: 12px;
        font-weight: 400;
        letter-spacing: -0.02em;
      }
      
      .text-input__wrapper {
        position: relative;
        width: 100%;
      }
      
      .text-input__field {
        width: 100%;
        height: 48px;
        font-size: 16px;
        padding: 0 16px;
        border: none;
        border-bottom: 1px solid #ddd;
        outline: none;
        transition: all 0.2s;
        font-family: inherit;
        box-sizing: border-box;
        background-color: transparent;
        color: #000;
        letter-spacing: -0.02em;
      }
      
      .text-input__field::placeholder {
        color: #ccc;
        font-weight: 300;
      }
      
      .text-input__field:focus {
        border-bottom-color: #000;
        border-bottom-width: 2px;
      }
      
      .text-input__field.is--active {
        padding-right: 48px;
      }
      
      .text-input__field.is--error {
        border-bottom-color: #ff0000;
      }
      
      .text-input__field:disabled,
      .text-input__field.is--disabled {
        background-color: transparent;
        color: #ccc;
        cursor: not-allowed;
        border-bottom-color: #ddd;
      }
      
      .text-input__clear-btn {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        border: none;
        background: #ddd;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 0;
        transition: background 0.2s;
      }
      
      .text-input__clear-btn.is--show {
        display: flex;
      }
      
      .text-input__clear-btn:hover {
        background: #ccc;
      }
      
      .text-input__clear-btn::before {
        content: '×';
        font-size: 18px;
        color: #fff;
        line-height: 1;
      }
      
      .text-input__error-message {
        display: block;
        font-size: 12px;
        color: #ff0000;
        margin-top: 8px;
        letter-spacing: -0.02em;
      }
      
      /* Date Picker Styles */
      .text-input__field--date {
        position: relative;
        color: #999;
      }
      
      .text-input__field--date:focus,
      .text-input__field--date:valid {
        color: #000;
      }
      
      .text-input__field--date::-webkit-calendar-picker-indicator {
        position: absolute;
        right: 0;
        width: 24px;
        height: 24px;
        cursor: pointer;
        opacity: 1;
        background: url('data:image/svg+xml;charset=UTF-8,%3Csvg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="3" y="4" width="14" height="14" rx="2" stroke="%23999" stroke-width="1.5" fill="none"/%3E%3Cpath d="M3 8h14" stroke="%23999" stroke-width="1.5"/%3E%3Cpath d="M7 2v4M13 2v4" stroke="%23999" stroke-width="1.5" stroke-linecap="round"/%3E%3C/svg%3E') center/contain no-repeat;
      }
      
      .text-input__field--date::-webkit-inner-spin-button,
      .text-input__field--date::-webkit-clear-button {
        display: none;
      }
      
      /* Field + Button Styles */
      .text-input__wrapper--with-btn {
        display: flex;
        gap: 8px;
        align-items: flex-end;
      }
      
      .text-input__wrapper--with-btn .text-input__field {
        flex: 1;
      }
      
      .text-input__btn {
        height: 48px;
        padding: 0 24px;
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 0.2s;
        flex-shrink: 0;
      }
      
      .text-input__btn:hover {
        background-color: #333;
      }
      
      .text-input__btn:active {
        background-color: #000;
      }
    </style>
  `;

  const scripts = `
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
      $(document).ready(function() {
        const input = $('.text-input__field');
        const clearBtn = $('.text-input__clear-btn');
        
        input.on('input', function() {
          const btn = $(this).siblings('.text-input__clear-btn');
          if ($(this).val().length > 0) {
            $(this).addClass('is--active');
            btn.addClass('is--show');
          } else {
            $(this).removeClass('is--active');
            btn.removeClass('is--show');
          }
        });
        
        clearBtn.on('click', function() {
          const inputField = $(this).siblings('.text-input__field');
          inputField.val('').removeClass('is--active').focus();
          $(this).removeClass('is--show');
        });
      });
    </script>
  `;

  let result = '';

  switch (type) {
    case 'default':
      result = `
        <div class="text-input">
          <label for="input-line-default" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-default" class="text-input__field" placeholder="텍스트를 입력하세요" />
            <button type="button" class="text-input__clear-btn"></button>
          </div>
        </div>
      `;
      break;

    case 'focus':
      result = `
        <div class="text-input">
          <label for="input-line-focus" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-focus" class="text-input__field is--active" value="입력" />
            <button type="button" class="text-input__clear-btn is--show"></button>
          </div>
        </div>
      `;
      break;

    case 'filled':
      result = `
        <div class="text-input">
          <label for="input-line-filled" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-filled" class="text-input__field is--filled" value="입력완료" />
            <button type="button" class="text-input__clear-btn"></button>
          </div>
        </div>
      `;
      break;

    case 'disabled':
      result = `
        <div class="text-input">
          <label for="input-line-disabled" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-disabled" class="text-input__field is--disabled" value="입력완료" disabled />
          </div>
        </div>
      `;
      break;

    case 'error':
      result = `
        <div class="text-input">
          <label for="input-line-error" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-error" class="text-input__field is--error" value="잘못된 입력" />
            <button type="button" class="text-input__clear-btn"></button>
          </div>
          <span class="text-input__error-message">*오류 메세지 입력하세요</span>
        </div>
      `;
      break;

    case 'date':
      result = `
        <div class="text-input">
          <label for="input-line-date" class="text-input__label">여권만료일</label>
          <div class="text-input__wrapper">
            <input type="date" id="input-line-date" class="text-input__field text-input__field--date" placeholder="YYYY-MM-DD" />
          </div>
        </div>
      `;
      break;

    case 'field-btn':
      result = `
        <div class="text-input">
          <label for="input-line-field-btn" class="text-input__label">편명</label>
          <div class="text-input__wrapper--with-btn">
            <input type="text" id="input-line-field-btn" class="text-input__field" placeholder="예) KE1234" />
            <button type="button" class="text-input__btn">검색</button>
          </div>
        </div>
      `;
      break;

    default:
      result = `
        <div class="text-input">
          <label for="input-line-default" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-default" class="text-input__field" placeholder="텍스트를 입력하세요" />
            <button type="button" class="text-input__clear-btn"></button>
          </div>
        </div>
      `;
  }

  return styles + result + scripts;
};
