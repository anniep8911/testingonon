const consis = `
<ol>
<li>DOM 선택 규칙 (class 기반)</li>
<h5>✅ Do</h5>
<pre class="code">
const dom = $('.dom');
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const dom = $('#dom');
</pre>

<li>이벤트 바인딩 패턴 통일</li>
<h5>✅ Do</h5>
<pre class="code">
$('.save-btn').on('click', function () {
  console.log('저장!');
});

$('.item').on('mouseenter', function () {
  console.log('hover!');
});
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
$('.save-btn').click(function () {
  console.log('저장!');
});

$('.item').mouseenter(function () {
  console.log('hover!');
});
</pre>


<li>문자열 리터럴 템플릿 사용</li>
<h5>✅ Do</h5>
<pre class="code">
const button =  $('button').text();
console.log(\`버튼안의 값은 \${button}입니다.\`);
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const button =  $('button').text();
console.log('버튼안의 값은 + button + '입니다.');
</pre>

<li>inline onclick 금지 (api제외)</li>


<li>함수 네이밍 규칙
&nbsp;&nbsp;&nbsp;&nbsp;- initSomething
&nbsp;&nbsp;&nbsp;&nbsp;- bindSomething
&nbsp;&nbsp;&nbsp;&nbsp;- handleSomething</li>
<li>공통 모듈/유틸 구조 통일</li>
<li>UI 토글 패턴 통일 (classList.add/remove/toggle)</li>
<li>코드 작성 순서 통일 :: 변수 → 함수 → init → 이벤트  </li>
<li>코드 작성 순서 통일 :: 변수 → 함수 → init → 이벤트</li>
<h5>✅ Do</h5>
<pre class="code">
// 변수
let count = 0;

// 함수
function increase() {
  count++;
}

function render() {
  console.log(count);
}

// init
function init() {
  render();
}

// 이벤트
$('#btn').on('click', function () {
  increase();
  render();
});

init();
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
// 함수
function increase() {
  count++;
}

// 이벤트
$('#btn').click(function () {
  increase();
  console.log(count);
});

// 변수
let count = 0;

// init
(function () {
  console.log(count);
})();
</pre>

</ol>

`;

export default consis;
