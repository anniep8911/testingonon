const maintain = `
<ol>
<li>원본 DOM 직접 변경 금지</li>
<h5>✅ Do</h5>
<pre class="code">
const news  =  $('.news');
news.addClass('--active)';
news.append('&lt;li&gt;새 아이템&lt;/li&gt;');
</pre>
<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const news  =  $('.news');
news[0].classList ='--active';
news.html('&lt;li&gt;새 아이템&lt;/li&gt;');
</pre>

<li>스타일 직접 변경 금지 → class 기반으로 변경</li>
<h5>✅ Do</h5>
<pre class="code">
const news  =  $('.news');

news.on('click',function(){
  news.toggleClass('--active');
});
</pre>
<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const news  =  $('.news');

news.on('click',function(){
  news.css({opacity:1})
});
</pre>

<li>DOM 접근 최소화 (캐싱)</li>
<h5>✅ Do</h5>
<pre class="code">
const btn =  $('button');
const art = $('article');

btn.on('click',function(){
  art.toggleClass('--active');
  btn.text('닫기');
})
</pre>
<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
$('button').on('click',function(){
  $('article').toggleClass('--active');
  $('button').text('닫기');
});
</pre>

<li>예외 처리 (guard clause) </li>
<h5>✅ Do</h5>
<pre class="code">
const button = $('button');
// 예외처리구간
if(!button) return;

button.on('click',function(){
  console.log('버튼');
});
</pre>
<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const button = $('button');

button.on('click',function(){
  console.log('버튼');
});
</pre>

<li>복잡한 조건문 분리</li>
<h5>✅ Do</h5>
<pre class="code">
function check(num){
  // 논리 연산결과를 변수에 저장
  let flag = num !== 1;
  
  if(flag){
    switch(num){
      case 2: console.log('2회 참여');
      break;
      case 3: console.log('3회 참여');
      break;
      case 4: console.log('4회 참여');
      break;
      default: console.log('더이상 참여불가');
    }
  }
}
</pre>
<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
function check(num){
  if(num !== 1){
    if(num === 2) {
      console.log('2회 참여')
    }else if(num === 3) {
      console.log('3회 참여');
    } else if(num === 4){
      console.log('4회 참여');
    } else{
      console.log('더이상 참여불가');
    }  
  }
}
</pre>

<li>죽은 코드/콘솔 제거</li>
<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const button = $('button');

button.on('click',function(){
  console.log('테스트');
  // button.html('테스트입니다');
  button.text('닫기');
});
</pre>

<h5>✅ Do</h5>
<pre class="code">
const button = $('button');

button.on('click',function(){
  button.text('닫기');
});
</pre>

</ol>
`;

export default maintain;
