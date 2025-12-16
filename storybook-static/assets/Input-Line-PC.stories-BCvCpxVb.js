import{k as B,m as D}from"./fnc-RF4Phh58.js";const z=(d,e=[])=>{e[0],e[1];const F=`
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
  `,S=`
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>
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
    <\/script>
  `;let r="";switch(d){case"default":r=`
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
      `;break;case"focus":r=`
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
      `;break;case"filled":r=`
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
      `;break;case"disabled":r=`
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
      `;break;case"error":r=`
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
      `;break;default:r=`
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
      `}return F+S+r};let $="컴포넌트/Form/PC/Input-Line",j=`
<ul>
  <li>Line Input은 하단 선만 표시되는 입력 필드입니다</li>
  <li>포커스 시 border-bottom이 2px로 굵어지며 검은색으로 변경됩니다</li>
  <li>투명한 배경으로 깔끔한 디자인을 제공합니다</li>
  <li>에러 상태에서는 하단 선과 에러 메시지가 빨간색으로 표시됩니다</li>
</ul>
`;const C=d=>{let e="";switch(d){case"default":e="Default - 기본 상태의 Line Input";break;case"focus":e="Focus - 포커스 상태 (입력값 포함)";break;case"filled":e="Filled - 입력값이 있는 상태";break;case"disabled":e="Disabled - 비활성화 상태";break;case"error":e="Error - 에러 메시지가 표시되는 상태";break;default:e=j}return e},I={title:$,parameters:{docs:{description:{component:B(C())},codePanel:!0}}},o=D(z,C,["default","focus","filled","disabled","error"],"both",["pc","input-line"]),t=o.default,i=o.focus,s=o.filled,l=o.disabled,a=o.error;var c,n,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:'stories["default"]',...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var f,u,m;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:'stories["focus"]',...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,_,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:'stories["filled"]',...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var h,g,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:'stories["disabled"]',...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var w,y,k;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:'stories["error"]',...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const L=["Default","Focus","Filled","Disabled","Error"];export{t as Default,l as Disabled,a as Error,s as Filled,i as Focus,L as __namedExportsOrder,I as default};
