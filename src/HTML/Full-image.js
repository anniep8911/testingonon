export default {
  title: 'Examples/SinglePage',
};

/**
 * HTML과 CSS를 한 스토리 파일 안에 모두 포함
 * 별도의 import 없이 HTML 안의 <style>로 처리됨
 */
export const SinglePage = (cat) =>{
  let bigcat = 'full-image';
  let ele = 
  `<div class="${bigcat}__wrap ${bigcat}__pola" style="background-image:url('./block_${bigcat}.png')">
    {여기에 섹션내용 들어옴}
</div>`;

if(cat ==='section'){
  ele = 
  `<div class="${bigcat}__wrap" style="background-image:url('./sect_${bigcat}.png')">
    <img src="경로" alt="브랜드명"/>
    <div class="${bigcat}__options">
      {여기에 옵션 내용이 들어감}
    </div>
</div>`;
}else if(cat ==='element'){
    ele = 
  `<div class="${bigcat}__wrap" style="background-image:url('./ele_${bigcat}.png')">
    <img class="${bigcat}"/>
    <div class="${bigcat}__options">
      <a class="${bigcat}__link ${bigcat}__link--01">
        링크될 내용 작성 예)일괄다운로드
      </a>
      <div class="opts opts--01">
        내용 설명: 예) 베네핏1 구간 솔드아웃
      </div>
      <div class="opts opts--02">
        내용 설명: 예) 베네핏2 구간 재입고
      </div>
    </div>
</div>`;
  
}


  let result = `
      <style>
        .${bigcat}__wrap{
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
        .${bigcat}__wrap *{
          display: none;
        }
      </style>

     ${ele}
      
    `;

  return result
}
  
