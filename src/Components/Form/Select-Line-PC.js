export const SinglePage = (type) => {
  const styles = `
    <style>
      .select-input {
        display: inline-block;
        width: 100%;
        margin-bottom: 24px;
      }
      
      .select-input__label {
        display: block;
        font-size: 14px;
        color: #333;
        margin-bottom: 8px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1.5;
      }
      
      .select-input__wrapper {
        position: relative;
        width: 100%;
      }
      
      .select-input__custom {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      
      .select-input__trigger {
        width: 100%;
        height: 48px;
        font-size: 16px;
        padding: 12px 32px 12px 0;
        border: none;
        border-bottom: 1px solid #ddd;
        border-radius: 0;
        outline: none;
        transition: all 0.2s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        box-sizing: border-box;
        background-color: transparent;
        color: #999;
        letter-spacing: -0.02em;
        cursor: pointer;
        line-height: 1.6;
        position: relative;
      }
      
      .select-input__trigger::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 14px;
        height: 9px;
        background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1 1L7 7L13 1" stroke="%23999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transition: transform 0.3s ease;
      }
      
      .select-input__trigger.is--opened {
        border-bottom-color: #000;
        border-bottom-width: 2px;
        padding: 11px 31px 11px 0;
        color: #333;
      }
      
      .select-input__trigger.is--opened::after {
        transform: translateY(-50%) rotate(180deg);
        background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1 1L7 7L13 1" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
      }
      
      .select-input__trigger.is--filled {
        color: #333;
      }
      
      .select-input__trigger.is--disabled {
        background-color: transparent;
        color: #ccc;
        cursor: not-allowed;
        border-bottom-color: #ddd;
      }
      
      .select-input__trigger.is--disabled::after {
        opacity: 0.5;
      }
      
      .select-input__options {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        max-height: 240px;
        overflow-y: auto;
        display: none;
        z-index: 1000;
        margin-top: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      }
      
      .select-input__options.is--opened {
        display: block;
      }
      
      .select-input__option {
        padding: 16px 16px;
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        line-height: 1.5;
        border-bottom: 1px solid #e5e5e5;
        transition: background-color 0.2s;
      }
      
      .select-input__option:hover {
        background-color: #f5f5f5;
      }
      
      .select-input__option.is--selected {
        background-color: #f9f9f9;
      }
      
      .select-input__option:last-child {
        border-bottom: none;
      }
      
      .select-input__native {
        display: none;
      }
    </style>
  `;

  const scripts = `
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script>
      $(document).ready(function() {
        $('.select-input__custom').each(function() {
          const customSelect = $(this);
          
          // 이미 초기화된 컴포넌트는 스킵
          if (customSelect.data('initialized')) return;
          customSelect.data('initialized', true);
          
          const trigger = customSelect.find('.select-input__trigger');
          const options = customSelect.find('.select-input__options');
          const selectOptions = customSelect.find('.select-input__option');
          const nativeSelect = customSelect.find('.select-input__native');
          
          // 트리거 클릭으로 열기/닫기 toggle
          trigger.on('click', function(e) {
            e.stopPropagation();
            
            // disabled 상태면 작동 안 함
            if (trigger.hasClass('is--disabled')) return;
            
            options.toggleClass('is--opened');
            trigger.toggleClass('is--opened');
          });
          
          // 옵션 선택
          selectOptions.on('click', function() {
            const value = $(this).data('value');
            const text = $(this).text();
            
            trigger.text(text).addClass('is--filled');
            nativeSelect.val(value);
            selectOptions.removeClass('is--selected');
            $(this).addClass('is--selected');
            
            // 닫기
            options.removeClass('is--opened');
            trigger.removeClass('is--opened');
          });
          
          // 외부 클릭 시 닫기
          $(document).on('click', function(e) {
            if (!customSelect.is(e.target) && customSelect.has(e.target).length === 0) {
              options.removeClass('is--opened');
              trigger.removeClass('is--opened');
            }
          });
        });
      });
    </script>
  `;

  let result = '';

  switch (type) {
    case 'default':
      result = `
        <div class="select-input">
          <label for="select-line-default" class="select-input__label">출국장소</label>
          <div class="select-input__wrapper">
            <div class="select-input__custom">
              <div class="select-input__trigger">출국장소를 입력해주세요</div>
              <div class="select-input__options">
                <div class="select-input__option" data-value="">출국장소를 입력해주세요</div>
                <div class="select-input__option" data-value="1">인천국제공항</div>
                <div class="select-input__option" data-value="2">김포공항</div>
                <div class="select-input__option" data-value="3">김포공항</div>
                <div class="select-input__option" data-value="4">제주공항</div>
              </div>
              <select id="select-line-default" class="select-input__native">
                <option value="">출국장소를 입력해주세요</option>
                <option value="1">인천국제공항</option>
                <option value="2">김포공항</option>
                <option value="3">김포공항</option>
                <option value="4">제주공항</option>
              </select>
            </div>
          </div>
        </div>
      `;
      break;

    case 'option-opened':
      result = `
        <div class="select-input">
          <label for="select-line-opened" class="select-input__label">출국장소</label>
          <div class="select-input__wrapper">
            <div class="select-input__custom">
              <div class="select-input__trigger is--opened">출국장소를 입력해주세요</div>
              <div class="select-input__options is--opened">
                <div class="select-input__option" data-value="">출국장소를 입력해주세요</div>
                <div class="select-input__option" data-value="1">인천국제공항</div>
                <div class="select-input__option" data-value="2">김포공항</div>
                <div class="select-input__option" data-value="3">김포공항</div>
                <div class="select-input__option" data-value="4">제주공항</div>
              </div>
              <select id="select-line-opened" class="select-input__native">
                <option value="">출국장소를 입력해주세요</option>
                <option value="1">인천국제공항</option>
                <option value="2">김포공항</option>
                <option value="3">김포공항</option>
                <option value="4">제주공항</option>
              </select>
            </div>
          </div>
        </div>
      `;
      break;

    case 'disabled':
      result = `
        <div class="select-input">
          <label for="select-line-disabled" class="select-input__label">출국장소</label>
          <div class="select-input__wrapper">
            <div class="select-input__custom">
              <div class="select-input__trigger is--disabled is--filled">인천국제공항</div>
              <div class="select-input__options">
                <div class="select-input__option" data-value="">출국장소를 입력해주세요</div>
                <div class="select-input__option" data-value="1">인천국제공항</div>
                <div class="select-input__option" data-value="2">김포공항</div>
                <div class="select-input__option" data-value="3">김포공항</div>
                <div class="select-input__option" data-value="4">제주공항</div>
              </div>
              <select id="select-line-disabled" class="select-input__native" disabled>
                <option value="">출국장소를 입력해주세요</option>
                <option value="1" selected>인천국제공항</option>
                <option value="2">김포공항</option>
                <option value="3">김포공항</option>
                <option value="4">제주공항</option>
              </select>
            </div>
          </div>
        </div>
      `;
      break;

    default:
      result = `
        <div class="select-input">
          <label for="select-line-default" class="select-input__label">출국장소</label>
          <div class="select-input__wrapper">
            <div class="select-input__custom">
              <div class="select-input__trigger">출국장소를 입력해주세요</div>
              <div class="select-input__options">
                <div class="select-input__option" data-value="">출국장소를 입력해주세요</div>
                <div class="select-input__option" data-value="1">인천국제공항</div>
                <div class="select-input__option" data-value="2">김포공항</div>
                <div class="select-input__option" data-value="3">김포공항</div>
                <div class="select-input__option" data-value="4">제주공항</div>
              </div>
              <select id="select-line-default" class="select-input__native">
                <option value="">출국장소를 입력해주세요</option>
                <option value="1">인천국제공항</option>
                <option value="2">김포공항</option>
                <option value="3">김포공항</option>
                <option value="4">제주공항</option>
              </select>
            </div>
          </div>
        </div>
      `;
  }

  return styles + result + scripts;
};
