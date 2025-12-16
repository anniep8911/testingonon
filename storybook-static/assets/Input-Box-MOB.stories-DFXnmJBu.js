import{k as E,m as M}from"./fnc-RF4Phh58.js";const U=p=>{const e=`
    <style>
      .text-input-box {
        display: inline-block;
        width: 100%;
        margin-bottom: 24px;
      }
      
      .text-input-box__label {
        display: block;
        font-size: 12px;
        color: #999;
        margin-bottom: 12px;
        font-weight: 400;
        letter-spacing: -0.02em;
        line-height: 1.4;
      }
      
      .text-input-box__label.is--required::after {
        content: '';
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: #ff1493;
        border-radius: 50%;
        margin-left: 4px;
        vertical-align: middle;
      }
      
      .text-input-box__wrapper {
        position: relative;
        width: 100%;
      }
      
      .text-input-box__field {
        width: 100%;
        height: 48px;
        font-size: 14px;
        padding: 0 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        box-sizing: border-box;
        background-color: #fff;
        color: #333;
        letter-spacing: -0.02em;
        line-height: 1.6;
      }
      
      .text-input-box__field::placeholder {
        color: #999;
        font-weight: 400;
        font-size: 14px;
      }
      
      .text-input-box__field:focus,
      .text-input-box__field.is--focused {
        border-color: #000;
        border-width: 2px;
        padding: 0 15px;
      }
      
      .text-input-box__field.is--filled {
        border-color: #000;
      }
      
      .text-input-box__field.is--error {
        border-color: #ff0000;
      }
      
      .text-input-box__field:disabled,
      .text-input-box__field.is--disabled {
        background-color: #f5f5f5;
        color: #ccc;
        cursor: not-allowed;
        border-color: #ddd;
      }
      
      .text-input-box__field--textarea {
        width: 100%;
        min-height: 120px;
        font-size: 14px;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        box-sizing: border-box;
        background-color: #fff;
        color: #333;
        letter-spacing: -0.02em;
        resize: vertical;
        line-height: 1.6;
      }
      
      .text-input-box__field--textarea::placeholder {
        color: #999;
        font-weight: 400;
        font-size: 14px;
      }
      
      .text-input-box__field--textarea:focus {
        border-color: #000;
        border-width: 2px;
        padding: 11px 15px;
      }
      
      .text-input-box__error-message {
        display: block;
        font-size: 12px;
        color: #ff0000;
        margin-top: 8px;
        letter-spacing: -0.02em;
        line-height: 1.4;
      }
      
      .text-input-box__helper-text {
        display: block;
        font-size: 12px;
        color: #999;
        margin-top: 8px;
        letter-spacing: -0.02em;
        line-height: 1.4;
      }
    </style>
  `;let t="";switch(p){case"default":t=`
        <div class="text-input-box">
          <label for="input-box-default" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-default" class="text-input-box__field" placeholder="텍스트를 입력하세요" />
          </div>
        </div>
      `;break;case"focus":t=`
        <div class="text-input-box">
          <label for="input-box-focus" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-focus" class="text-input-box__field is--focused" value="입력중" />
          </div>
        </div>
      `;break;case"filled":t=`
        <div class="text-input-box">
          <label for="input-box-filled" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-filled" class="text-input-box__field is--filled" value="입력완료" />
          </div>
        </div>
      `;break;case"disabled":t=`
        <div class="text-input-box">
          <label for="input-box-disabled" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-disabled" class="text-input-box__field is--disabled" value="입력완료" disabled />
          </div>
        </div>
      `;break;case"error":t=`
        <div class="text-input-box">
          <label for="input-box-error" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-error" class="text-input-box__field is--error" value="잘못된 입력" />
          </div>
          <span class="text-input-box__error-message">*오류 메세지 입력하세요</span>
        </div>
      `;break;case"textarea":t=`
        <div class="text-input-box">
          <label for="textarea-box" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <textarea id="textarea-box" class="text-input-box__field text-input-box__field--textarea" placeholder="텍스트를 입력하세요"></textarea>
          </div>
          <span class="text-input-box__helper-text">0/1,000 자</span>
        </div>
      `;break;case"textarea-filled":t=`
        <div class="text-input-box">
          <label for="textarea-box-filled" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <textarea id="textarea-box-filled" class="text-input-box__field text-input-box__field--textarea is--filled" style="border-color: #000;">입력된 텍스트입니다.</textarea>
          </div>
          <span class="text-input-box__helper-text">11/1,000 자</span>
        </div>
      `;break;default:t=`
        <div class="text-input-box">
          <label for="input-box-default" class="text-input-box__label is--required">라벨</label>
          <div class="text-input-box__wrapper">
            <input type="text" id="input-box-default" class="text-input-box__field" placeholder="텍스트를 입력하세요" />
          </div>
        </div>
      `}return e+t};let C="컴포넌트/Form/MOB/Input-Box",P=`
<ul>
  <li>Box Input은 주변/줄게 테이프가 사용됩니다</li>
  <li>포커스 시 border가 2px로 굵어지며 검은색으로 변경됩니다</li>
  <li>Select, Textarea 등 다양한 형태를 지원합니다</li>
  <li>에러 상태에서는 border와 에러 메시지가 빨간색으로 표시됩니다</li>
</ul>
`;const O=p=>{let e="";switch(p){case"default":e="Default - 기본 상태의 Box Input";break;case"focus":e="Focus - 포커스 상태 (입력값 포함)";break;case"filled":e="Filled - 입력값이 있는 상태";break;case"disabled":e="Disabled - 비활성화 상태";break;case"error":e="Error - 에러 메시지가 표시되는 상태";break;case"textarea":e="Textarea - 여러 줄 입력 필드";break;case"textarea-filled":e="Textarea Filled - 입력값이 있는 Textarea";break;default:e=P}return e},j={title:C,parameters:{docs:{description:{component:E(O())},codePanel:!0}}},r=M(U,O,["default","focus","filled","disabled","error","textarea","textarea-filled"],"both",["mob","input-box"]),a=r.default,i=r.focus,o=r.filled,l=r.disabled,s=r.error,d=r.textarea,x=r["textarea-filled"];var n,c,b;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:'stories["default"]',...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var u,f,_;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:'stories["focus"]',...(_=(f=i.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var m,g,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:'stories["filled"]',...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,k,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:'stories["disabled"]',...(y=(k=l.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var w,S,F;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:'stories["error"]',...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var z,q,B;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:'stories["textarea"]',...(B=(q=d.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var T,D,I;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:'stories["textarea-filled"]',...(I=(D=x.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const A=["Default","Focus","Filled","Disabled","Error","Textarea","TextareaFilled"];export{a as Default,l as Disabled,s as Error,o as Filled,i as Focus,d as Textarea,x as TextareaFilled,A as __namedExportsOrder,j as default};
