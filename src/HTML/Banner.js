export const SinglePage = (cat) =>{
  let bigcat = 'banner';
  let ele = 
  `<div class="${bigcat}__wrap" style="background-image:url('./block_${bigcat}.png')">
    <div class="${bigcat}">
      { 섹션이 오는자리 }
    </div>
</div>`;

if(cat ==='section'){
  ele = 
  `<div class="${bigcat}__wrap" style="background-image:url('./sect_${bigcat}.png');">
    <div class="${bigcat}">
        /* 타이틀 영역*/
       <header></header>
       /* 내용 영역 */
       <section></section>
    </div>
</div>`;
}else if(cat ==='element'){
    ele = 
   `<div class="${bigcat}__wrap" style="background-image:url('./ele_${bigcat}.png');">
      <div class="${bigcat}">

          /* 타이틀 영역*/
          <header>
            <h2> 배너타이틀 </h2>
            <h4> 배너 서브타이틀 </h4>
            <p>두줄이상의 내용</p>
          </header>

          /* 내용 영역 */
          <section>
              <img>
              <video>
              <article>
              ** 그외 어떤것이듯
          </section>
      </div>
</div>`;
  
}
  let result = `
      <style>
        .${bigcat}__wrap{
          max-width: 1000px;
          width:100%;
          padding-top: min(30%,300px);
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
  
