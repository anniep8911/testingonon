import{k as w,m as S}from"./fnc-RF4Phh58.js";const y=c=>{const e=`
    <style>
      .select-box {
        display: inline-block;
        width: 100%;
        margin-bottom: 24px;
      }
      
      .select-box__label {
        display: block;
        font-size: 14px;
        color: #333;
        margin-bottom: 8px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1.5;
      }
      
      .select-box__wrapper {
        position: relative;
        width: 100%;
      }
      
      .select-box__custom {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      
      .select-box__trigger {
        width: 100%;
        height: 56px;
        font-size: 16px;
        padding: 16px 40px 16px 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        box-sizing: border-box;
        background-color: #fff;
        color: #999;
        letter-spacing: -0.02em;
        cursor: pointer;
        line-height: 1.5;
        position: relative;
      }
      
      .select-box__trigger::after {
        content: '';
        position: absolute;
        right: 16px;
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
      
      .select-box__trigger.is--opened {
        border-color: #000;
        border-width: 2px;
        padding: 15px 39px 15px 15px;
        color: #333;
      }
      
      .select-box__trigger.is--opened::after {
        transform: translateY(-50%) rotate(180deg);
        background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1 1L7 7L13 1" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
      }
      
      .select-box__trigger.is--filled {
        color: #333;
      }
      
      .select-box__trigger.is--disabled {
        background-color: #f5f5f5;
        color: #ccc;
        cursor: not-allowed;
        border-color: #ddd;
      }
      
      .select-box__trigger.is--disabled::after {
        opacity: 0.5;
      }
      
      .select-box__options {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        max-height: 240px;
        overflow-y: auto;
        display: none;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      
      .select-box__options.is--opened {
        display: block;
      }
      
      .select-box__option {
        padding: 14px 18px;
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        line-height: 1.5;
        border-bottom: 1px solid #e5e5e5;
        transition: background-color 0.2s;
      }
      
      .select-box__option:hover {
        background-color: #f5f5f5;
      }
      
      .select-box__option.is--selected {
        background-color: #f9f9f9;
      }
      
      .select-box__option.is--disabled {
        color: #ccc;
        cursor: not-allowed;
        background-color: transparent;
      }
      
      .select-box__option.is--disabled:hover {
        background-color: transparent;
      }
      
      .select-box__option:last-child {
        border-bottom: none;
      }
      
      .select-box__native {
        display: none;
      }
    </style>
  `,k=`
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
    <script>
      $(document).ready(function() {
        $('.select-box__custom').each(function() {
          const customSelect = $(this);
          
          // 이미 초기화된 컴포넌트는 스킵
          if (customSelect.data('initialized')) return;
          customSelect.data('initialized', true);
          
          const trigger = customSelect.find('.select-box__trigger');
          const options = customSelect.find('.select-box__options');
          const selectOptions = customSelect.find('.select-box__option');
          const nativeSelect = customSelect.find('.select-box__native');
          
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
            // disabled 옵션은 선택 불가
            if ($(this).hasClass('is--disabled')) return;
            
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
  `;let o="";switch(c){case"default":o=`
        <div class="select-box">
          <label for="select-box-default" class="select-box__label">출국장소</label>
          <div class="select-box__wrapper">
            <div class="select-box__custom">
              <div class="select-box__trigger">장바구니쿠폰과 중복 사용 불가</div>
              <div class="select-box__options">
                <div class="select-box__option" data-value="">장바구니쿠폰과 중복 사용 불가</div>
                <div class="select-box__option" data-value="1">골든나이트</div>
                <div class="select-box__option" data-value="2">실버나이트</div>
                <div class="select-box__option" data-value="3">브론즈나이트</div>
                <div class="select-box__option" data-value="4">블랙나이트</div>
              </div>
              <select id="select-box-default" class="select-box__native">
                <option value="">장바구니쿠폰과 중복 사용 불가</option>
                <option value="1">골든나이트</option>
                <option value="2">실버나이트</option>
                <option value="3">브론즈나이트</option>
                <option value="4">블랙나이트</option>
              </select>
            </div>
          </div>
        </div>
      `;break;case"option-opened":o=`
        <div class="select-box">
          <label for="select-box-opened" class="select-box__label">출국장소</label>
          <div class="select-box__wrapper">
            <div class="select-box__custom">
              <div class="select-box__trigger is--opened">골든나이트</div>
              <div class="select-box__options is--opened">
                <div class="select-box__option" data-value="">장바구니쿠폰과 중복 사용 불가</div>
                <div class="select-box__option is--selected" data-value="1">골든나이트</div>
                <div class="select-box__option" data-value="2">실버나이트</div>
                <div class="select-box__option" data-value="3">브론즈나이트</div>
                <div class="select-box__option" data-value="4">블랙나이트</div>
              </div>
              <select id="select-box-opened" class="select-box__native">
                <option value="">장바구니쿠폰과 중복 사용 불가</option>
                <option value="1" selected>골든나이트</option>
                <option value="2">실버나이트</option>
                <option value="3">브론즈나이트</option>
                <option value="4">블랙나이트</option>
              </select>
            </div>
          </div>
        </div>
      `;break;case"option-disabled":o=`
        <div class="select-box">
          <label for="select-box-option-disabled" class="select-box__label">출국장소</label>
          <div class="select-box__wrapper">
            <div class="select-box__custom">
              <div class="select-box__trigger is--opened">골든나이트</div>
              <div class="select-box__options is--opened">
                <div class="select-box__option" data-value="">장바구니쿠폰과 중복 사용 불가</div>
                <div class="select-box__option is--selected" data-value="1">골든나이트</div>
                <div class="select-box__option is--disabled" data-value="2">실버나이트</div>
                <div class="select-box__option" data-value="3">브론즈나이트</div>
                <div class="select-box__option is--disabled" data-value="4">블랙나이트</div>
              </div>
              <select id="select-box-option-disabled" class="select-box__native">
                <option value="">장바구니쿠폰과 중복 사용 불가</option>
                <option value="1" selected>골든나이트</option>
                <option value="2" disabled>실버나이트</option>
                <option value="3">브론즈나이트</option>
                <option value="4" disabled>블랙나이트</option>
              </select>
            </div>
          </div>
        </div>
      `;break;case"disabled":o=`
        <div class="select-box">
          <label for="select-box-disabled" class="select-box__label">출국장소</label>
          <div class="select-box__wrapper">
            <div class="select-box__custom">
              <div class="select-box__trigger is--disabled is--filled">장바구니쿠폰과 중복 사용 불가</div>
              <div class="select-box__options">
                <div class="select-box__option is--selected" data-value="">장바구니쿠폰과 중복 사용 불가</div>
                <div class="select-box__option" data-value="1">골든나이트</div>
                <div class="select-box__option" data-value="2">실버나이트</div>
                <div class="select-box__option" data-value="3">브론즈나이트</div>
                <div class="select-box__option" data-value="4">블랙나이트</div>
              </div>
              <select id="select-box-disabled" class="select-box__native" disabled>
                <option value="" selected>장바구니쿠폰과 중복 사용 불가</option>
                <option value="1">골든나이트</option>
                <option value="2">실버나이트</option>
                <option value="3">브론즈나이트</option>
                <option value="4">블랙나이트</option>
              </select>
            </div>
          </div>
        </div>
      `;break;default:o=`
        <div class="select-box">
          <label for="select-box-default" class="select-box__label">출국장소</label>
          <div class="select-box__wrapper">
            <div class="select-box__custom">
              <div class="select-box__trigger">장바구니쿠폰과 중복 사용 불가</div>
              <div class="select-box__options">
                <div class="select-box__option" data-value="">장바구니쿠폰과 중복 사용 불가</div>
                <div class="select-box__option" data-value="1">골든나이트</div>
                <div class="select-box__option" data-value="2">실버나이트</div>
                <div class="select-box__option" data-value="3">브론즈나이트</div>
                <div class="select-box__option" data-value="4">블랙나이트</div>
              </div>
              <select id="select-box-default" class="select-box__native">
                <option value="">장바구니쿠폰과 중복 사용 불가</option>
                <option value="1">골든나이트</option>
                <option value="2">실버나이트</option>
                <option value="3">브론즈나이트</option>
                <option value="4">블랙나이트</option>
              </select>
            </div>
          </div>
        </div>
      `}return e+o+k};let C="컴포넌트/Form/PC/Select-Box",O=`
<ul>
  <li>Select Box는 전체 테두리가 있는 박스 형태의 선택 필드입니다</li>
  <li>포커스 시 border가 2px로 굵어지며 검은색으로 변경됩니다</li>
  <li>박스 형태로 안정적인 디자인을 제공합니다</li>
  <li>드롭다운은 박스 하단에 약간의 간격을 두고 표시됩니다</li>
  <li>PC 버전은 MOB보다 큰 폰트와 패딩을 사용합니다</li>
  <li>native select 요소를 사용합니다</li>
</ul>
`;const h=c=>{let e="";switch(c){case"default":e="Default - 닫힌 상태의 Select Box";break;case"option-opened":e="Option Opened - 열린 드롭다운 상태";break;case"option-disabled":e="Option Disabled - 일부 옵션이 비활성화된 상태";break;case"disabled":e="Disabled - 전체 비활성화 상태";break;default:e=O}return e},D={title:C,parameters:{docs:{description:{component:w(h())},codePanel:!0}}},a=S(y,h,["default","option-opened","option-disabled","disabled"],"both",["pc","select-box"]),t=a.default,s=a["option-opened"],i=a["option-disabled"],l=a.disabled;var d,n,r;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:'stories["default"]',...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var p,b,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:'stories["option-opened"]',...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var _,u,x;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:'stories["option-disabled"]',...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,m,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:'stories["disabled"]',...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const z=["Default","OptionOpened","OptionDisabled","Disabled"];export{t as Default,l as Disabled,i as OptionDisabled,s as OptionOpened,z as __namedExportsOrder,D as default};
