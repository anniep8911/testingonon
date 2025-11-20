export default {
  title: 'Examples/SinglePage',
};

export const SinglePage = (cat) =>{
 let ele= ``;
 let arr=``;


switch(cat){
  case 'margin': arr=`<arr style="top:0"><span>↕</span><span class="tag">margin-top</span></arr>`, ele=`<arr style="top:-40px"><span>↕</span><span class="tag">margin-top</span></arr>`;
  break;
  case 'padding': arr='',ele=`<arr style="top:0"><span>↕</span><span class="tag">padding-top</span></arr><arr style="bottom:0"><span>↕</span><span class="tag">padding-bottom</span></arr>`;
  break;
  case 'grid': ele='',arr=`<ul class="grid"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>`;
  break;
}

  let result = `
    <style>
      .grid{
        height: 209%;
        position: absolute;
        width: 80%;
        margin: auto;
        left:0;
        right:0;
        z-index:10;
        list-style:none;
        padding-left:0;
        top:0;
        display:flex;
        column-gap:20px;
        justify-content: space-between;

      }
      .grid li{
        background:red;
        width: calc(100% / 12 - 10px);
        hieght: 100%;
        opacity: 0.1;
      }
      .content__wrap{
        width: 100%;
        text-align:center;
        position: relative;
        padding-top:40px;
      }
      .content__wrap--02{
        padding-top:0;
      }
      .content__wrap .content{
        margin-top:0;
      }
      .content section{
        display:flex;
        column-gap: 20px;
        margin-top:20px;
      }
      .content__wrap--02 .content article{
        width: 50%;
      }
      .content .image{
        background: #ccc;
        height: 200px;
      }
      .content header h2{
        font-size:25px;
        line-height: 40px;
      
      }
      .content .texts{
        padding: 20px;
      }
      .content .texts h3{
        font-size:18px;
        line-height: 40px;
      }
      .content .texts p{
        font-size: 12px;
        line-height: 20px;
        height: 40px;
        overflow:hidden;
      }
      .content__wrap .texts p{
        height: 80px;
      }

      .content--02{
        margin-top: 0
      }
      .content--02 .texts{
        background: #fff;
      }
      .content__wrap--02{
        background: linear-gradient(135deg, #ffb3c1, #c1d9f3, #b8e3c1, #f3e0b8);
      }
      .css-11xgcgt{
        display:none !important;
      }
      .content{
        margin: 0 auto;
        margin-top: 40px;
        width: 80%;
      }
      
      .content--02{
        padding-top:40px;
        padding-bottom: 40px;
      }

      header{
        position: relative
      }
      arr {
        position: absolute;
        display: flex;
        width:100%;
        justify-content: center;
        align-items:center;
      }
      arr span:nth-of-type(1){
        color:red;
        font-size:40px;
        line-height:40px;
        color:red;
        padding-left: 10%;
      }  
      arr span:nth-of-type(2){
        background:#333;
        color:#fff;
        padding: 0px 10px;
        font-size:13px;
        line-height: 20px;
      }
    </style>
     <div class="content__wrap content__wrap--01">
        ${arr}
        <div class="content content--01">
            <header>
              <h2>Endless Reinvention</h2>
            </header>
            <section>
              <article>
                <div class="image image--01"></div>
                <div class="texts">
                  <h3>Timeless Reinvention</h3>
                  <p>Embodying a vision that transcends time and trends, our collection is an ode to the art of constant reinvention, blending innovation with the heritage of classic craftsmanship for those who seek to redefine the ordinary in their pursuit of the extraordinary.</p>
                </div>
              </article>
            </section>    
        </div>
    </div>
    <div class="content__wrap content__wrap--02">
        ${ele}
        <div class="content content--02">
            <header>
              <h2>Luxury Synthesis</h2>
            </header>
            <section>
              <article>
                <div class="image image--02"></div>
                <div class="texts">
                  <h3>Fluid Luxury</h3>
                  <p>Where elegance is redefined through the interplay of fluidity and structure, our designs capture the essence of modern luxury, offering a canvas where form, function, and emotion collide in an endless journey towards a new era of sophistication and style.</p>
                </div>
              </article>
              <article>
                <div class="image image--02"></div>
                <div class="texts">
                  <h3>Bold Synthesis</h3>
                  <p>Through a perfect synthesis of timeless design principles and bold, contemporary statements, each piece in our collection tells a story of transformation, where past meets future in an intricate dance of textures, colors, and silhouettes that inspire a new sense of possibility in fashion.</p>
                </div>
              </article>
            </section>
        </div>
    </div>
`

  return result
}
  
