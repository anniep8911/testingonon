export const SinglePage = (type, ext = []) => {
  const device = ext[0] || 'pc';
  const component = ext[1] || 'input';

  const styles = `
    <style>
      .form-field {
        display: inline-block;
        width: 400px;
        margin-bottom: 24px;
      }
      
      .form-field__label {
        display: block;
        font-size: 12px;
        color: #999;
        margin-bottom: 12px;
        font-weight: 400;
        letter-spacing: -0.02em;
      }
      
      .form-field__wrapper {
        position: relative;
        width: 100%;
      }
      
      .form-field__input {
        width: 100%;
        height: 48px;
        font-size: 16px;
        padding: 0 80px 0 0;
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
      
      .form-field__input::placeholder {
        color: #ccc;
        font-weight: 300;
      }
      
      .form-field__input:focus {
        border-bottom-color: #000;
        border-bottom-width: 2px;
      }
      
      .form-field__input.is--active {
        border-bottom-color: #000;
        border-bottom-width: 2px;
      }
      
      .form-field__input.is--error {
        border-bottom-color: #ff0000;
        border-bottom-width: 2px;
      }
      
      .form-field__input:disabled {
        color: #ddd;
        cursor: not-allowed;
        border-bottom-color: #ddd;
        border-bottom-width: 1px;
      }
      
      .form-field__clear-btn {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        border: none;
        background-color: #aaa;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 14px;
        line-height: 1;
        padding: 0;
        font-weight: 300;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease, visibility 0.2s ease;
      }
      
      .form-field__clear-btn.is--show {
        opacity: 1;
        visibility: visible;
      }
      
      .form-field__clear-btn:hover {
        background-color: #888;
      }
      
      .form-field__error-message {
        display: block;
        font-size: 12px;
        color: #ff0000;
        margin-top: 8px;
        letter-spacing: -0.02em;
      }
    </style>
  `;

  const scripts = `
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
      $(document).ready(function() {
        $('.form-field__input').on('input focus', function() {
          const input = $(this);
          const clearBtn = input.siblings('.form-field__clear-btn');
          
          if (input.val().length > 0) {
            clearBtn.addClass('is--show');
            input.addClass('is--active');
          } else {
            clearBtn.removeClass('is--show');
            input.removeClass('is--active');
          }
        });
        
        $('.form-field__clear-btn').on('click', function() {
          const clearBtn = $(this);
          const input = clearBtn.siblings('.form-field__input');
          
          input.val('');
          clearBtn.removeClass('is--show');
          input.removeClass('is--active');
          input.focus();
        });
      });
    </script>
  `;

  let result = '';

  switch (type) {
    case 'default':
      result = `
        <div class="form-field">
          <label class="form-field__label">한글설명</label>
          <div class="form-field__wrapper">
            <input 
              type="text" 
              class="form-field__input" 
              placeholder="한글설명을 입력해주세요"
            />
            <button class="form-field__clear-btn" type="button">×</button>
          </div>
        </div>
      `;
      break;

    case 'focus':
      result = `
        <div class="form-field">
          <label class="form-field__label">한글설명</label>
          <div class="form-field__wrapper">
            <input 
              type="text" 
              class="form-field__input is--active" 
              value="현대"
            />
            <button class="form-field__clear-btn is--show" type="button">×</button>
          </div>
        </div>
      `;
      break;

    case 'filled':
      result = `
        <div class="form-field">
          <label class="form-field__label">한글설명</label>
          <div class="form-field__wrapper">
            <input 
              type="text" 
              class="form-field__input is--active" 
              value="현대백"
            />
          </div>
        </div>
      `;
      break;

    case 'disabled':
      result = `
        <div class="form-field">
          <label class="form-field__label">한글설명</label>
          <div class="form-field__wrapper">
            <input 
              type="text" 
              class="form-field__input is--active" 
              value="현대백"
              disabled
            />
          </div>
        </div>
      `;
      break;

    case 'error':
      result = `
        <div class="form-field">
          <label class="form-field__label">한글설명</label>
          <div class="form-field__wrapper">
            <input 
              type="text" 
              class="form-field__input is--error" 
              placeholder="한글설명을 입력해주세요"
            />
          </div>
          <span class="form-field__error-message">이름을 입력해주세요.</span>
        </div>
      `;
      break;

    default:
      result = `
        <div class="form-field">
          <label class="form-field__label">한글설명</label>
          <div class="form-field__wrapper">
            <input 
              type="text" 
              class="form-field__input" 
              placeholder="한글설명을 입력해주세요"
            />
            <button class="form-field__clear-btn" type="button">×</button>
          </div>
        </div>
      `;
  }

  return styles + scripts + result;
};
