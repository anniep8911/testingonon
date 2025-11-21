export default {
  title: 'Examples/SinglePage',
};

/**
 * HTML과 CSS를 한 스토리 파일 안에 모두 포함
 * 별도의 import 없이 HTML 안의 <style>로 처리됨
 */
export const SinglePage = (cat) =>{
  let bigcat = 'modal';
  let ele = 
  `<div class="${bigcat}" style="background-image:url('./block_${bigcat}.png')">
      { 섹션(image+texts)이 오는자리 }
</div>`;

if(cat ==='section'){
  ele = 
  `<div class="${bigcat}" style="background-image:url('./sect_${bigcat}.png')">
    <div class="modal__header"></div>
    <div class="modal__section"></div>
    <div class="modal__footer"></div>
</div>`;
}else if(cat ==='element'){
    ele = 
   `<div class="${bigcat}" style="background-image:url('./ele_${bigcat}.png')">
    <div class="modal__header">
      <h3>모달제목</h3>
      <h4>서브타이틀</h4> 
      <button class="close">X</button>
    </div>
    <div class="modal__section">
      {{모달 내용이 들어옴}}
    </div>
    <div class="modal__footer">
      <a> 링크이동 </a>
      or
      <button> 확인 </button>
    </div>
</div>`;
  
}


  let result = `
      <style>
        .${bigcat}{
          max-width: 1000px;
          padding-top: min(70%,700px);
          color: transparent;
          background-repeat: no-repeat;
          background-size: contain; 
          user-select: none;
          -webkit-user-select: none; 
          -moz-user-select: none;  
          -ms-user-select: none;    
        }
        .${bigcat} *{
          display: none;
        }
      </style>

     ${ele}
      
    `;

  return result
}
  
