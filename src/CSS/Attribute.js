export default {
  title: 'Examples/SinglePage',
};

export const SinglePage = (cat) =>{
 let ele= ``;
 let arr=``;
 let result = '';

switch(cat){
  case 'margin': arr=`<arr style="top:0"><span>↕</span><span class="tag">margin-top</span></arr>`, ele=`<arr style="top:-40px"><span>↕</span><span class="tag">margin-top</span></arr>`;
  break;
  case 'padding': arr='',ele=`<arr style="top:0"><span>↕</span><span class="tag">padding-top</span></arr><arr style="bottom:0"><span>↕</span><span class="tag">padding-bottom</span></arr>`;
  break;
  case 'grid': ele='',arr=`<p class="tag"><span style="color:red; font-size:25px;">←</span><span>width: n + margin: 0 auto</span><span style="color:red; font-size:25px;">→</span></p><ul class="grid"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>`;
  break;
  case 'text': arr='<arr style="top:20; left:65%; "><span>↕</span><span class="tag">line-height</span></arr>',ele=`<arr style="top:40px;left:65%; "><span>↕</span><span class="tag">line-height</span></arr>`;
  break;
  case 'zindex': arr='<arr style="background:rgba(255,165,0,0.2);"><span></span><span>z-index:200(max)</span></arr>',ele=`<arr style="background:rgba(255,165,0,0.2);bottom:auto; width: 80%;"><span>↕</span><span class="tag">z-index:20(max)</span></arr>`;
  break;
  case 'dont': arr='<arr style="bottom:-39px"><span>⛔</span><span>margin-bottom</span></arr> <arr style="top:0px;"><span>⛔</span><span>!important</span></arr>',ele=``;
  break;
  case 'hidden':ele=`<arr style="left:10%; top:5px; align-items: start;"><span style="transform: rotate(45deg);">←</span><span class="tag">
      width: 1px; <br/>
      height: 1px; <br/>
      margin: -1px; <br/>
      padding: 0; <br/>
      overflow: hidden;  <br/>
      white-space: nowrap; <br/>
      border: 0;<br/>
      outline: 1px solid red; </span></arr>`;
  break;
}


let stRest = `
  <style>
    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 0;
    }
    arr {
      position: absolute;
      display: flex;
      margin: auto;
      left:48%;
      align-items:center;
      width:fit-content;
    }
    arr span:nth-of-type(1){
      font-size:40px;
      line-height:40px;
      color:red;
    }  
    arr span:nth-of-type(2){
      background:#333;
      color:#fff;
      padding: 0px 10px;
      font-size:13px;
      line-height: 20px;
    }
  </style>

`;

let con =` 

${stRest}
<style>
      p.tag{
        background:#333; 
        width: 80%; 
        margin: auto;
        color: #fff;
        position: absolute;
        left:0;
        right: 0;
        height:30px;
        bottom:0;
        z-index:13;
        display: flex;
        align-items:center;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing:border-box;
      }
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
        box-shadow: 1px 1px 8px rgba(0,0,0,0.2);
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
        width: 80%;
      }
      
      .content--02{
        padding-top:40px;
        padding-bottom: 40px;
        margin-top:40px;
      }

      header{
        position: relative
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
                  <p>Embodying a vision that transcends time and trends, our collection is an ode to the art of constant reinvention, blending innovation with the heritage of classic craftsmanship for those who seek to redefine the ordinary in their pursuit of the extraordinary.Embodying a vision that transcends time and trends, our collection is an ode to the art of constant reinvention, blending innovation with the heritage of classic craftsmanship for those who seek to redefine the ordinary in their pursuit of the extraordinary.Embodying a vision that transcends time and trends, our collection is an ode to the art of constant reinvention, blending innovation with the heritage of classic craftsmanship for those who seek to redefine the ordinary in their pursuit of the extraordinary.Embodying a vision that transcends time and trends, our collection is an ode to the art of constant reinvention, blending innovation with the heritage of classic craftsmanship for those who seek to redefine the ordinary in their pursuit of the extraordinary.Embodying a vision that transcends time and trends, our collection is an ode to the art of constant reinvention, blending innovation with the heritage of classic craftsmanship for those who seek to redefine the ordinary in their pursuit of the extraordinary.</p>
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
</div>`;

let con2 = `

${stRest}
<style>
  .conBody{
    position: relative;
    overflow:hidden;
  }
  .conBody arr{
    width: 95%;
    height: 95%;
    left: 0;
    margin:auto;
    right: 0;
    top:0;
    bottom: 0;
    position: absolute;
    }
  .conBody arr span{
    position: absolute;
    margin: auto;
    left:0; 
    right:0;
    width: fit-content;
    font-size: 20px;
    line-height:30px;
    z-index:2;
    background: #333;
    color: #fff;
    position: absolute;
    top: 0;
    bottom:0;
    margin: auto;
    height: 40px;
  }
  .dimmed{
    width:100vw;
    height: 100vh;
    background: rgba(0,0,0,0.2);
  }
  
  .modal{
    position: absolute;
    width: 50%;
    height: fit-content;
    margin:auto;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background:#fff;
  }

  .modal__header {
    background: #222;
    color: #fff;
    padding: 15px 20px;
  }

  .modal__body {
    padding: 15px 20px;
    font-size: 14px;
    line-height: 1.5;
  }

  .modal__body hr {
    border: none;
    border-top: 1px solid #eee;
    margin: 10px 0;
  }

  .modal__footer {
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
    background: #f5f5f5;
    gap: 10px;
  }

  .modal__button {
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .modal__accept {
    background-color: #3498db;
    color: #fff;
  }

  .modal__close {
    background-color: #ccc;
    color: #222;
  }

  .conBody .header, .conBody .header nav{
    display:flex;
    justify-content: space-around;
    line-height: 40px;
    position:relative;
  }

  .conBody .header nav{
    width: 40%;
    column-gap:10px;
  }
  .conBody .header nav h4 {
    display:flex;
    flex-shrink:0;

  }
</style>
<div class="conBody">
  <div class="header">
    ${ele}
    <h1>logo</h1>
    <nav>
      <h4>location 01</h4>
      <h4>location 02</h4>
      <h4>location 03</h4>
      <h4>location 04</h4>
    </nav>
  </div>
  <div class="dimmed">
  </div>
  <div class="modal">
    ${arr}
    <div class="modal__header">
      <h3>Endless Reinvention</h3>
    </div>

    <div class="modal__body">
      <p><strong>Timeless Reinvention</strong><br>
      Embodying a vision that transcends time and trends, our collection is an ode to the art of constant reinvention, blending innovation with the heritage of classic craftsmanship for those who seek to redefine the ordinary in their pursuit of the extraordinary.</p>

      <hr>

      <p><strong>Luxury Synthesis</strong><br>
      Fluid Luxury<br>
      Where elegance is redefined through the interplay of fluidity and structure, our designs capture the essence of modern luxury, offering a canvas where form, function, and emotion collide in an endless journey towards a new era of sophistication and style.</p>

      <hr>

      <p><strong>Bold Synthesis</strong><br>
      Through a perfect synthesis of timeless design principles and bold, contemporary statements, each piece in our collection tells a story of transformation, where past meets future in an intricate dance of textures, colors, and silhouettes that inspire a new sense of possibility in fashion.</p>
    </div>

    <div class="modal__footer">
      <button class="modal__button modal__accept">Accept</button>
      <button class="modal__button modal__close">Close</button>
    </div>
  </div>
</div>

`;


let conHidden=`
  ${stRest}
  <style>
    .bnr{
      width: 80%;
      height: 180px;
      background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnb2xkIiB4MT0iMCIgeTE9IjAiIHgyPSIxMDAlIiB5Mj0iMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y4ZTdiOSIvPjxzdG9wIG9mZnNldD0iNDUlIiBzdG9wLWNvbG9yPSIjZTJjNDdhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjYjc5MjRhIi8+PC9saW5lYXJHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9InNwb3QiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjcwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjI1KSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0icmdiYSgwLDAsMCwwKSIvPjwvcmFkaWFsR3JhZGllbnQ+PGZpbHRlciBpZD0iZ2xvdyI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTIiIHJlc3VsdD0iYmx1ciIvPjxmZU1lcmdlPjxmZU1lcmdlTm9kZSBpbj0iYmx1ciIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjE0MDAiIGhlaWdodD0iMzYwIiBmaWxsPSIjMGMwYjBjIi8+PHJlY3Qgd2lkdGg9IjE0MDAiIGhlaWdodD0iMzYwIiBmaWxsPSJ1cmwoI3Nwb3QpIiBvcGFjaXR5PSIwLjQiLz48dGV4dCB4PSIxMDAiIHk9IjE3MCIgZmlsbD0idXJsKCNnb2xkKSIgZm9udC1zaXplPSI3MCIgZm9udC1mYW1pbHk9IkRpZG90LCBzZXJpZiIgZm9udC13ZWlnaHQ9IjYwMCIgbGV0dGVyLXNwYWNpbmc9IjMiIGZpbHRlcj0idXJsKCNnbG93KSI+TFVYVVJZIENTSFJJU1RNQVM8L3RleHQ+PHRleHQgeD0iMTAwIiB5PSIyMzAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjg1IiBmb250LXNpemU9IjI2IiBmb250LWZhbWlseT0iRGlkb3QsIHNlcmlmIiBsZXR0ZXItc3BhY2luZz0iMSI+RWxlZ2FuY2Ug4oCiIFJhZGlhbmNlIOKAoiBDZWxlYnJhdGlvbjwvdGV4dD48cG9seWdvbiBwb2ludHM9IjExMDAsMjYwIDEyMDAsODAgMTMwMCwyNjAiIGZpbGw9InVybCgjZ29sZCkiIG9wYWNpdHk9IjAuNyIvPjxwb2x5Z29uIHBvaW50cz0iMTEyMCwyNjAgMTIwMCwxMjAgMTI4MCwyNjAiIGZpbGw9InVybCgjZ29sZCkiIG9wYWNpdHk9IjAuNiIvPjxwb2x5Z29uIHBvaW50cz0iMTE0MCwyNjAgMTIwMCwxNjAgMTI2MCwyNjAiIGZpbGw9InVybCgjZ29sZCkiIG9wYWNpdHk9IjAuNSIvPjxjaXJjbGUgY3g9IjEyMDAiIGN5PSI3MCIgcj0iNyIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPjxjaXJjbGUgY3g9IjEyNTAiIGN5PSIxNTAiIHI9IjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjc1Ii8+PGNpcmNsZSBjeD0iMTE2MCIgY3k9IjE4MCIgcj0iNCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjEyMzAiIGN5PSIxMTAiIHI9IjMiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjY1Ii8+PC9zdmc+');
      background-repeat: no-repeat;
      background-size: contain;
      margin: 0 auto;
    }

    .bnr .hidden{
      position: relative;
      width: 1px; 
      height: 1px; 
      margin: -1px; 
      padding: 0;   
      white-space: nowrap; 
      border: 0;
      outline: 1px solid red;
    }
  </style>
  <div class"bnr__wrap">
    <div class="bnr">
      <p class="hidden">${ele}luxury christmas, elegance, radiance, celebration</p>
    </div>
  </div>
`;

let dont=`

`;


  if(cat==='margin'||cat==='padding'||cat==='grid'||cat==='text' || cat==='dont'){
    result = con;
  }else if(cat==='zindex'){
    result = con2;
  }else if(cat === 'hidden'){
    result = conHidden;
  }else{
    result= dont;
  }
  return result
}
  
