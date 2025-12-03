const readable = `
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
`;

export default readable;
