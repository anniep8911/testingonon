import{r as b}from"./style-CUJ3xHXS.js";import{k as f,m as D}from"./fnc-RF4Phh58.js";const k=`
<ol>
<li>2space 단위로 들여쓰기</li>

<h5>✅ Do</h5>
<pre class="code">
button.on('click',function(){
  console.log('2스페이스 들여쓰기');
});
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
button.on('click',function(){
      console.log('2스페이스 들여쓰기');
});
</pre>

<li>세미콜론 필수</li>

<h5>✅ Do</h5>
<pre class="code">
console.log('끝에 세미콜론!');
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
console.log('끝에 세미콜론!')
</pre>

<li>연산자 양옆 공백</li>

<h5>✅ Do</h5>
<pre class="code">
if(a === b){
  console.log('연산자 양 옆 공백');
}
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
if(a===b){
  console.log('연산자 양 옆 공백');
}
</pre>

<li>쉼표 뒤 공백</li>

<h5>✅ Do</h5>
<pre class="code">
let arr = [0, 1, 2, 3, 4, 5];
</pre>

<h5>⛔ Don't</h5>
<pre class="code">
let arr = [0,1,2,3,4,5];
</pre>

<li>최대 글자수 120자</li>
<h5>✅ Do</h5>
<pre class="code">
(true) ? 
console.log('최대 글자수 120자')
: console.log('최대 글자수 120자');
</pre>

<h5>⛔ Don't</h5>
<pre class="code">
  (true) ? console.log('최대 글자수 120자') : console.log('최대 글자수 120자');
</pre>

<li>연속된 2줄 이상의 빈 줄 금지</li>

<h5>✅ Do</h5>
<pre class="code">
function test() {
  console.log('line 1');
  console.log('line 2');
}
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
function test() {
  console.log('line 1');


  console.log('line 2');
}
</pre>

<li>객체/배열 줄바꿈</li>

<h5>✅ Do</h5>
<pre class="code">
const user = {
  name: 'Tom',
  age: 20,
};

const list = [
  'apple',
  'banana',
  'orange',
];
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const user = { name: 'Tom', age: 20 };

const list = ['apple', 'banana', 'orange'];
</pre>


<li>주석 스타일 규칙</li>
<h5>✅ Do</h5>
<pre class="code">
/* component: 모달 show/hide*/
function modal(dom){
  dom.toggleClass('show');
}
</pre>

<h5>⛔ Don't</h5>
<pre class="code">
/* 모달 */
function modal(dom){
  dom.toggleClass('show');
}
</pre>

<li>의미 있는 변수명/함수명</li>

<h5>✅ Do</h5>
<pre class="code">
function getUserAge() {
  const userAge = 25;
  return userAge;
}
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
function ga() {
  const a = 25;
  return a;
}
</pre>


<li>함수 안에서 로직 순서 명확하게 정렬</li>

<h5>✅ Do</h5>
<pre class="code">
function processUser() {
  // 1. 입력값 검증
  if (!user) return;

  // 2. 데이터 처리
  const formatted = formatUser(user);

  // 3. 결과 반환
  return formatted;
}
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
function processUser() {
  const formatted = formatUser(user);
  if (!user) return;
  return formatted;
}
</pre>

<li>UI 상태 변경은 명확한 class 이름 사용</li>

<h5>✅ Do</h5>
<pre class="code">
button.classList.add('is-active');
modal.classList.remove('is-open');
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
button.classList.add('on');
modal.classList.remove('open2');
</pre>
</ol>
`,$=`
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
`,w=`
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

<li>inline onclick 금지 (API 제외)</li>
<h5>✅ Do</h5>
<pre class="code">
<button>클릭</button>

// 스크립트 부분
const btn = $('button');

function handleClick() {
  console.log('클릭 이벤트 처리');
}   

btn.on('click',handleClick);

</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
<button onclick="handleClick()">클릭</button>

// 스크립트 부분
function handleClick() {
  console.log('클릭 이벤트 처리');
}
</pre>

<li>UI 토글 패턴 통일 (classList.add/remove/toggle)</li>
<h5>✅ Do</h5>
<pre class="code">
$('.element').toggleClass('active');
</pre>

<h5>⛔ Don't</h5>
<pre class="code">
if($('.element').hasClass('active')){
  $('.element').css({background:'orange'});
} else {  
  $('.element').css({background:'transparent'});
}
</pre>

<li>코드 작성 순서 통일 :: 변수 → 함수 → init → 이벤트  </li>
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

`,y=c=>{let e="";switch(c){case"readable":e=k;break;case"consis":e=w;break;case"maintain":e=$;break}return`${b}${e}`};let v="코드규약/JS/공통/01.기초원칙/01.코드스타일 원칙",C=`
  협업의 비용최소화 ( 코드 분석에 따른 시간소요 )를 위해서 다음과 같은 세가지 키워드의 내용의 원칙을 준수하여 코드품질을 유지한다.
`;const m=c=>{let e="";switch(c){case"readable":e="줄바꿈, 공백, 주석등을 명확히 하여 가독성을 올린다.";break;case"consis":e="예측가능한 패턴의 규칙을 사용하여 모든 파일을 통일한다.";break;case"maintain":e=" 원본을 직접 바꾸지 않고 새로운 상태를 생성한다";break;default:e=C}return e},U={title:v,parameters:{docs:{description:{component:f(m())},codePanel:!1}}},n=D(y,m,["readable","consis","maintain"],"none"),o=n.readable,s=n.consis,t=n.maintain;var l,a,r;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"stories.readable",...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var i,d,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"stories.consis",...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,u,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"stories.maintain",...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const L=["가독성","일관성","유지보수성"];export{L as __namedExportsOrder,U as default,o as 가독성,t as 유지보수성,s as 일관성};
