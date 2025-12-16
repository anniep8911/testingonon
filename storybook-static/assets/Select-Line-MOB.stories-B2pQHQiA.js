import{k as f,m as h}from"./fnc-RF4Phh58.js";const x=l=>{const e=`
    <style>
      .select-input {
        display: inline-block;
        width: 100%;
        margin-bottom: 24px;
      }
      
      .select-input__label {
        display: block;
        font-size: 12px;
        color: #999;
        margin-bottom: 12px;
        font-weight: 400;
        letter-spacing: -0.02em;
        line-height: 1.4;
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
        height: 40px;
        font-size: 14px;
        padding: 8px 20px 8px 0;
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
        width: 12px;
        height: 8px;
        background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1 1L6 6L11 1" stroke="%23999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transition: transform 0.3s ease;
      }
      
      .select-input__trigger.is--opened {
        border-bottom-color: #000;
        border-bottom-width: 2px;
        padding: 7px 20px 7px 0;
        color: #333;
      }
      
      .select-input__trigger.is--opened::after {
        transform: translateY(-50%) rotate(180deg);
        background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1 1L6 6L11 1" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
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
        max-height: 200px;
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
        padding: 12px 16px;
        cursor: pointer;
        font-size: 14px;
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
        background-color: #f0f0f0;
      }
      
      .select-input__option:last-child {
        border-bottom: none;
      }
      
      .select-input__native {
        display: none;
      }
    </style>
  `,m=`
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
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
    <\/script>
  `;let t="";switch(l){case"default":t=`
        <div class="select-input">
          <label for="select-line-default" class="select-input__label">출국장소</label>
          <div class="select-input__wrapper">
            <div class="select-input__custom">
              <div class="select-input__trigger">출국장소를 입력해주세요</div>
              <div class="select-input__options">
                <div class="select-input__option" data-value="">출국장소를 입력해주세요</div>
                <div class="select-input__option" data-value="1">인천국제공항</div>
                <div class="select-input__option" data-value="2">김포국제공항</div>
                <div class="select-input__option" data-value="3">제주국제공항</div>
                <div class="select-input__option" data-value="4">김해국제공항</div>
              </div>
              <select id="select-line-default" class="select-input__native">
                <option value="">출국장소를 입력해주세요</option>
                <option value="1">인천국제공항</option>
                <option value="2">김포국제공항</option>
                <option value="3">제주국제공항</option>
                <option value="4">김해국제공항</option>
              </select>
            </div>
          </div>
        </div>
      `;break;case"option-opened":t=`
        <div class="select-input">
          <label for="select-line-opened" class="select-input__label">출국장소</label>
          <div class="select-input__wrapper">
            <div class="select-input__custom">
              <div class="select-input__trigger is--opened">출국장소를 입력해주세요</div>
              <div class="select-input__options is--opened">
                <div class="select-input__option" data-value="">출국장소를 입력해주세요</div>
                <div class="select-input__option" data-value="1">인천국제공항</div>
                <div class="select-input__option" data-value="2">김포국제공항</div>
                <div class="select-input__option" data-value="3">제주국제공항</div>
                <div class="select-input__option" data-value="4">김해국제공항</div>
              </div>
              <select id="select-line-opened" class="select-input__native">
                <option value="">출국장소를 입력해주세요</option>
                <option value="1">인천국제공항</option>
                <option value="2">김포국제공항</option>
                <option value="3">제주국제공항</option>
                <option value="4">김해국제공항</option>
              </select>
            </div>
          </div>
        </div>
      `;break;case"disabled":t=`
        <div class="select-input">
          <label for="select-line-disabled" class="select-input__label">출국장소</label>
          <div class="select-input__wrapper">
            <div class="select-input__custom">
              <div class="select-input__trigger is--disabled is--filled">인천국제공항</div>
              <div class="select-input__options">
                <div class="select-input__option" data-value="">출국장소를 입력해주세요</div>
                <div class="select-input__option" data-value="1">인천국제공항</div>
                <div class="select-input__option" data-value="2">김포국제공항</div>
                <div class="select-input__option" data-value="3">제주국제공항</div>
                <div class="select-input__option" data-value="4">김해국제공항</div>
              </div>
              <select id="select-line-disabled" class="select-input__native" disabled>
                <option value="">출국장소를 입력해주세요</option>
                <option value="1" selected>인천국제공항</option>
                <option value="2">김포국제공항</option>
                <option value="3">제주국제공항</option>
                <option value="4">김해국제공항</option>
              </select>
            </div>
          </div>
        </div>
      `;break;default:t=`
        <div class="select-input">
          <label for="select-line-default" class="select-input__label">출국장소</label>
          <div class="select-input__wrapper">
            <div class="select-input__custom">
              <div class="select-input__trigger">출국장소를 입력해주세요</div>
              <div class="select-input__options">
                <div class="select-input__option" data-value="">출국장소를 입력해주세요</div>
                <div class="select-input__option" data-value="1">인천국제공항</div>
                <div class="select-input__option" data-value="2">김포국제공항</div>
                <div class="select-input__option" data-value="3">제주국제공항</div>
                <div class="select-input__option" data-value="4">김해국제공항</div>
              </div>
              <select id="select-line-default" class="select-input__native">
                <option value="">출국장소를 입력해주세요</option>
                <option value="1">인천국제공항</option>
                <option value="2">김포국제공항</option>
                <option value="3">제주국제공항</option>
                <option value="4">김해국제공항</option>
              </select>
            </div>
          </div>
        </div>
      `}return e+t+m};let k="컴포넌트/Form/MOB/Select-Line",w=`
<ul>
  <li>Select Line은 하단 선만 표시되는 선택 필드입니다</li>
  <li>포커스 시 border-bottom이 2px로 굵어지며 검은색으로 변경됩니다</li>
  <li>투명한 배경으로 깔끔한 디자인을 제공합니다</li>
  <li>에러 상태에서는 하단 선이 빨간색으로 표시됩니다</li>
  <li>native select 요소를 사용합니다</li>
</ul>
`;const b=l=>{let e="";switch(l){case"default":e="Default - 닫힌 상태의 Select Box";break;case"option-opened":e="Option Opened - 열린 드롭다운 상태";break;case"disabled":e="Disabled - 비활성화 상태";break;default:e=w}return e},y={title:k,parameters:{docs:{description:{component:f(b())},codePanel:!0}}},n=h(x,b,["default","option-opened","disabled"],"both",["mob","select-line"]),i=n.default,s=n["option-opened"],o=n.disabled;var a,c,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:'stories["default"]',...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,r,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:'stories["option-opened"]',...(u=(r=s.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var v,_,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:'stories["disabled"]',...(g=(_=o.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const C=["Default","OptionOpened","Disabled"];export{i as Default,o as Disabled,s as OptionOpened,C as __namedExportsOrder,y as default};
