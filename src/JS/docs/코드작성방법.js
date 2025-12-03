const 변수상수관리 = {
  LET: `<h5>✅ Do</h5>
<pre class="code">
let cont = 0;

function increaseCount (){
    count++;
}
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">

function increaseCount (){
  count++;
}

var cont = 0;
</pre>
`,
  CONST: `
<h5>✅ Do</h5>
<pre class="code">
const button = $('button');

button.on('click',function(){
    console.log('버튼 클릭');
});
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">

var button = $('button');

button.on('click',function(){
    button = $('button#new');
});
</pre>
`
};
const 함수작성규칙 = {
  함수선언: `
<h5>✅ Do</h5>
<pre class="code">
function 함수명 (){
  // 함수내용
}
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const 함수명 = function (){
  // 함수내용
}

const 함수명 = ()=>{
  // 함수내용
}

</pre>
    `,
  호출순서: `
<h5>✅ Do</h5>
<pre class="code">
  function abs(a,b){
    return a+b;
  }

  function result (){
    return abs(1,2);
  }

  console.log(\`$\{result()\}값 입니다.\`);
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
  abs(1,2);

  function abs(a,b){
    return a+b;
  }
    
</pre>
`
};

const DOM탐색조작 = {
  DOM탐색: `
<h5>✅ Do</h5>
<pre class="code">
  const dom =  $('.dom');
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
  const dom = document.querySelector('.dom');
  let dom = $('.dom');
  var dom = $('.dom');
</pre>
  `,
  DOM조작: `
<ol>
<li>dom이 없는 케이스는 미리 방지한다.</li>
<h5>✅ Do</h5>
<pre class="code">
const dom = $('.dom');
if (!dom.length) return;

dom.on('click',function(){
  console.log('클릭이벤트 실행');
})
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const dom = $('.dom');

dom.on('click',function(){
  console.log('클릭이벤트 실행');
})
</pre>

<li>직접적 스타일 조작 금지</li>
<h5>✅ Do</h5>
<pre class="code">
const dom = $('.dom');

dom.on('click',function(){
  $(this).toggleClass('active');
});
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const dom = $('.dom');

dom.on('click',function(){
  $(this).css({background:'orange'})
});
</pre>

<li>DOM직접 조작 금지</li>
<h5>✅ Do</h5>
<pre class="code">
const dom =  $('.dom');
const node = $('.node').clone();

dom.append(node);
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const dom =  $('.dom');
const node = $('.node').clone();

dom.html(dom.html() + node.prop('outerHTML')); 
</pre>


</ol>
  `
};
const 이벤트핸들링 = {
  기본패턴: `
<h5>✅ Do</h5>
<pre class="code">
const button = $('button');

button.on('click',function(){
  console.log('이벤트 내용');
});
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const button = $('button');

button.click(function(){
  console.log('이벤트 내용');
});
</pre>

  
  `,
  사이드이펙트제거: `
모든 이벤트는 다음과 같이 dom이 없는 경우 예외처리하여 오류를 방지한다.
<h5>✅ Do</h5>
<pre class="code">
const button = $('button');

if(!button.length) return;

button.on('click',function(){
  console.log('이벤트내용');
});

</pre>
<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const button = $('button');

button.on('click',function(){
  console.log('이벤트내용');
});
</pre>
  `
};

export default { 변수상수관리, 함수작성규칙, DOM탐색조작, 이벤트핸들링 };
