import{k as j,m as q}from"./fnc-RF4Phh58.js";const A=(e,a=[])=>{const r=a[0]||"pc";a[1];const O=`
    <style>
      .form-field-box {
        display: inline-block;
        width: 400px;
        margin-bottom: 24px;
      }
      
      .form-label-box {
        display: block;
        font-size: 12px;
        color: #999;
        margin-bottom: 12px;
        font-weight: 400;
        letter-spacing: -0.02em;
      }
      
      .input-wrapper-box {
        position: relative;
        width: 100%;
      }
      
      .input-box-${r}-${e} {
        width: 100%;
        height: 48px;
        font-size: 16px;
        padding: 0 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s;
        font-family: inherit;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        letter-spacing: -0.02em;
      }
      
      .input-box-${r}-${e}::placeholder {
        color: #ccc;
        font-weight: 300;
      }
      
      .input-box-${r}-${e}:focus {
        border-color: #000;
        border-width: 2px;
        padding: 0 15px;
      }
      
      .input-box-${r}-${e}.has-value {
        border-color: #000;
      }
      
      .input-box-${r}-${e}.error {
        border-color: #ff0000;
      }
      
      .input-box-${r}-${e}:disabled {
        background-color: #f5f5f5;
        color: #ccc;
        cursor: not-allowed;
        border-color: #ddd;
      }
      
      .textarea-box-${r}-${e} {
        width: 100%;
        min-height: 120px;
        font-size: 16px;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s;
        font-family: inherit;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        letter-spacing: -0.02em;
        resize: vertical;
      }
      
      .textarea-box-${r}-${e}::placeholder {
        color: #ccc;
        font-weight: 300;
      }
      
      .textarea-box-${r}-${e}:focus {
        border-color: #000;
        border-width: 2px;
        padding: 11px 15px;
      }
      
      .error-message-box {
        display: block;
        font-size: 12px;
        color: #ff0000;
        margin-top: 8px;
        letter-spacing: -0.02em;
      }
      
      .helper-text {
        display: block;
        font-size: 12px;
        color: #999;
        margin-top: 8px;
        letter-spacing: -0.02em;
      }
    </style>
  `;let o="";switch(e){case"default":o=`
        <div class="form-field-box">
          <label class="form-label-box">한글설명</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${r}-${e}" 
              placeholder="한글설명을 입력해주세요"
            />
          </div>
        </div>
      `;break;case"focus":o=`
        <div class="form-field-box">
          <label class="form-label-box">한글설명</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${r}-${e} has-value" 
              value="현대"
            />
          </div>
        </div>
      `;break;case"filled":o=`
        <div class="form-field-box">
          <label class="form-label-box">한글설명</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${r}-${e} has-value" 
              value="현대백"
            />
          </div>
        </div>
      `;break;case"disabled":o=`
        <div class="form-field-box">
          <label class="form-label-box">한글설명</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${r}-${e}" 
              placeholder="한글설명을 입력해주세요"
              disabled
            />
          </div>
        </div>
      `;break;case"error":o=`
        <div class="form-field-box">
          <label class="form-label-box">Error</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${r}-${e} error" 
              value="나도몰"
            />
          </div>
          <span class="error-message-box">너무 짧아 내용을 입력하삼쇼.</span>
        </div>
      `;break;case"textarea":o=`
        <div class="form-field-box">
          <label class="form-label-box">Textarea</label>
          <div class="input-wrapper-box">
            <textarea 
              class="textarea-box-${r}-${e}" 
              placeholder="설명으로든 문장으로든 술 골라"
            ></textarea>
          </div>
        </div>
      `;break;case"textarea-filled":o=`
        <div class="form-field-box">
          <label class="form-label-box">Textarea</label>
          <div class="input-wrapper-box">
            <textarea 
              class="textarea-box-${r}-${e}"
            >남아</textarea>
          </div>
        </div>
      `;break;default:o=`
        <div class="form-field-box">
          <label class="form-label-box">한글설명</label>
          <div class="input-wrapper-box">
            <input 
              type="text" 
              class="input-box-${r}-${e}" 
              placeholder="한글설명을 입력해주세요"
            />
          </div>
        </div>
      `}return O+o};let G="컴포넌트/Form/PC/Input-Box",H=`
<ul>
  <li>Box Input은 주변/줄게 테이프가 사용됩니다</li>
  <li>포커스 시 border가 2px로 굵어지며 검은색으로 변경됩니다</li>
  <li>Select, Textarea 등 다양한 형태를 지원합니다</li>
  <li>에러 상태에서는 border와 에러 메시지가 빨간색으로 표시됩니다</li>
</ul>
`;const C=e=>{let a="";switch(e){case"default":a="Default - 기본 상태의 Box Input";break;case"focus":a="Focus - 포커스 상태 (입력값 포함)";break;case"filled":a="Filled - 입력값이 있는 상태";break;case"disabled":a="Disabled - 비활성화 상태";break;case"error":a="Error - 에러 메시지가 표시되는 상태";break;case"textarea":a="Textarea - 여러 줄 입력 필드";break;case"textarea-filled":a="Textarea Filled - 입력값이 있는 Textarea";break;default:a=H}return a},K={title:G,parameters:{docs:{description:{component:j(C())},codePanel:!0}}},s=q(A,C,["default","focus","filled","disabled","error","textarea","textarea-filled"],"both",["pc","input-box"]),l=s.default,t=s.focus,i=s.filled,c=s.disabled,d=s.error,p=s.textarea,b=s["textarea-filled"];var x,n,u;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:'stories["default"]',...(u=(n=l.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var f,m,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:'stories["focus"]',...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,$,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:'stories["filled"]',...(h=($=i.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var k,w,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:'stories["disabled"]',...(F=(w=c.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var S,T,z;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:'stories["error"]',...(z=(T=d.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var D,E,B;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:'stories["textarea"]',...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var I,P,_;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:'stories["textarea-filled"]',...(_=(P=b.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const L=["Default","Focus","Filled","Disabled","Error","Textarea","TextareaFilled"];export{l as Default,c as Disabled,d as Error,i as Filled,t as Focus,p as Textarea,b as TextareaFilled,L as __namedExportsOrder,K as default};
