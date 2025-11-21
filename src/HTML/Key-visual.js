export default {
  title: 'Examples/SinglePage',
};

/**
 * HTML과 CSS를 한 스토리 파일 안에 모두 포함
 * 별도의 import 없이 HTML 안의 <style>로 처리됨
 */
export const SinglePage = (cat) =>{
  let bigcat = 'key-visual';
  let ele = 
  `<div class="${bigcat}__wrap" style="background-image:url('./block_main.png')">
    <div class="${bigcat}">
      { 섹션(image+texts)이 오는자리 }
    </div>
</div>`;

if(cat ==='section'){
  ele = 
  `<div class="${bigcat}__wrap" style="background-image:url('./sect_main.png');">
    <div class="${bigcat}">
        /*이미지 or 비디오 영역*/
        <source class="${bigcat}__image">
          <video></video>
        </source>
        /* 텍스트 영역 */
        <div class="${bigcat}__texts"></div>
    </div>
</div>`;
}else if(cat ==='element'){
    ele = 
   `<div class="${bigcat}__wrap" style="background-image:url('./ele_main.png');">
      <div class="${bigcat}">
       /*이미지 or 비디오 영역*/
        <source class="${bigcat}__image">
          <video></video>
        </source>
        /* 텍스트 영역 */
        <div class="${bigcat}__texts">
          <h2> 타이틀 </h2>
          <h4> 서브타이틀 </h4>
          <p> 2줄 이상의 문단 </p>  
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
  
