export default {
  title: 'Examples/SinglePage',
};

/**
 * HTML과 CSS를 한 스토리 파일 안에 모두 포함
 * 별도의 import 없이 HTML 안의 <style>로 처리됨
 */
export const SinglePage = (cat) =>{
  let bigcat = 'content';
  let ele = 
  `<div class="${bigcat}__wrap ${bigcat}__wrap--01" style="background-image:url('./block_${bigcat}.png')">
    <div class="${bigcat} ${bigcat}--01">
      { 섹션(header+section)이 오는자리 }
    </div>
</div>`;

if(cat ==='section'){
  ele = 
  `<div class="${bigcat}__wrap ${bigcat}__wrap--01" style="background-image:url('./sect_${bigcat}.png');">
    <div class="${bigcat} ${bigcat}--01">
        /* 타이틀 영역*/
       <header></header>
       /* 내용 영역 */
       <section></section>
    </div>
</div>`;
}else if(cat ==='element'){
    // img = 'ele_main';
    ele = 
   `<div class="${bigcat}__wrap ${bigcat}__wrap--01" style="background-image:url('./ele_${bigcat}.png');">
      <div class="${bigcat} ${bigcat}--01">
        /* 타이틀 영역*/
       <header>
          <h2>콘텐츠 타이틀</h2>
          <h4>콘텐츠 서브 타이틀</h4>
       </header>
       /* 내용 영역 */
       <section>
          <article></article>
          <button></button>
       </section>
      </div>
</div>`;
  
}else if(cat ==='item'){
    // img = 'ele_main';
    ele = 
   `<div class="${bigcat}__wrap ${bigcat}__wrap--01" style="background-image:url('./item_${bigcat}.png');">
    <div class="${bigcat} ${bigcat}--01">
        /* 타이틀 영역*/
       <header>
          <h2>콘텐츠 타이틀</h2>
          <h4>콘텐츠 서브 타이틀</h4>
       </header>
       /* 내용 영역 */
       <section>
          <article>
              <div class="image"></div>
              <div class="texts">
                <h3>아티클 타이틀</h3>
                <h4>아티클 섭타이틀</h4>
                <p> 두줄이상의 내용 </p>
              </div>
          </article>
       </section>
    </div>
</div>`;
  
}


  let result = `
      <style>
        .content__wrap{
          max-width: 1000px;
          padding-top: min(50%,500px);
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
        .sb-anchor:nth-of-type(1){
          display:none;
        }
      </style>

     ${ele}
      
    `;

  return result
}
  
