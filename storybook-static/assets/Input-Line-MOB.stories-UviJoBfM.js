import{k as j,m as I}from"./fnc-RF4Phh58.js";const L=p=>{const t=`
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
  `,Y=`
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>
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
    <\/script>
  `;let e="";switch(p){case"default":e=`
        <div class="text-input">
          <label for="input-line-default" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-default" class="text-input__field" placeholder="텍스트를 입력하세요" />
            <button type="button" class="text-input__clear-btn"></button>
          </div>
        </div>
      `;break;case"focus":e=`
        <div class="text-input">
          <label for="input-line-focus" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-focus" class="text-input__field is--active" value="입력" />
            <button type="button" class="text-input__clear-btn is--show"></button>
          </div>
        </div>
      `;break;case"filled":e=`
        <div class="text-input">
          <label for="input-line-filled" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-filled" class="text-input__field is--filled" value="입력완료" />
            <button type="button" class="text-input__clear-btn"></button>
          </div>
        </div>
      `;break;case"disabled":e=`
        <div class="text-input">
          <label for="input-line-disabled" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-disabled" class="text-input__field is--disabled" value="입력완료" disabled />
          </div>
        </div>
      `;break;case"error":e=`
        <div class="text-input">
          <label for="input-line-error" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-error" class="text-input__field is--error" value="잘못된 입력" />
            <button type="button" class="text-input__clear-btn"></button>
          </div>
          <span class="text-input__error-message">*오류 메세지 입력하세요</span>
        </div>
      `;break;case"date":e=`
        <div class="text-input">
          <label for="input-line-date" class="text-input__label">여권만료일</label>
          <div class="text-input__wrapper">
            <input type="date" id="input-line-date" class="text-input__field text-input__field--date" placeholder="YYYY-MM-DD" />
          </div>
        </div>
      `;break;case"field-btn":e=`
        <div class="text-input">
          <label for="input-line-field-btn" class="text-input__label">편명</label>
          <div class="text-input__wrapper--with-btn">
            <input type="text" id="input-line-field-btn" class="text-input__field" placeholder="예) KE1234" />
            <button type="button" class="text-input__btn">검색</button>
          </div>
        </div>
      `;break;default:e=`
        <div class="text-input">
          <label for="input-line-default" class="text-input__label">라벨</label>
          <div class="text-input__wrapper">
            <input type="text" id="input-line-default" class="text-input__field" placeholder="텍스트를 입력하세요" />
            <button type="button" class="text-input__clear-btn"></button>
          </div>
        </div>
      `}return t+e+Y};let O="컴포넌트/Form/MOB/Input-Line",P=`
<ul>
  <li>Line Input은 하단 선만 표시되는 입력 필드입니다</li>
  <li>포커스 시 border-bottom이 2px로 굵어지며 검은색으로 변경됩니다</li>
  <li>투명한 배경으로 깔끔한 디자인을 제공합니다</li>
  <li>에러 상태에서는 하단 선과 에러 메시지가 빨간색으로 표시됩니다</li>
</ul>
`;const z=p=>{let t="";switch(p){case"default":t="Default - 기본 상태의 Line Input";break;case"focus":t="Focus - 포커스 상태 (입력값 포함)";break;case"filled":t="Filled - 입력값이 있는 상태";break;case"disabled":t="Disabled - 비활성화 상태";break;case"error":t="Error - 에러 메시지가 표시되는 상태";break;case"date":t="Date - 날짜 선택 입력 필드 (달력 아이콘 포함)";break;case"field-btn":t="Field + Button - 입력 필드와 버튼이 함께 있는 형태 (예: 검색)";break;default:t=P}return t},K={title:O,parameters:{docs:{description:{component:j(z())},codePanel:!0}}},i=I(L,z,["default","focus","filled","disabled","error","date","field-btn"],"both",["mob","input-line"]),s=i.default,r=i.focus,a=i.filled,l=i.disabled,n=i.error,o=i.date,d=i["field-btn"];var c,u,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:'stories["default"]',...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var _,x,f;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:'stories["focus"]',...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var m,h,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:'stories["filled"]',...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,w,k;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:'stories["disabled"]',...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var y,F,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:'stories["error"]',...(D=(F=n.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var C,S,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:'stories["date"]',...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var B,$,M;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:'stories["field-btn"]',...(M=($=d.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const T=["Default","Focus","Filled","Disabled","Error","Date","FieldBtn"];export{o as Date,s as Default,l as Disabled,n as Error,d as FieldBtn,a as Filled,r as Focus,T as __namedExportsOrder,K as default};
