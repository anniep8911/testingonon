// 변수 네이밍 문서
const LET = `
<h4>카멜케이스 사용</h4>
<h5>✅ Do</h5>
<pre class="code">
const mainButton =  $('key-visual__text button'); 
</pre>

<h5>⛔ Don't</h5>
<pre class="code" data-copy="hide">
const main-button = $('key-visual__text button'); 
const main__button =$('key-visual__text button'); 
cont mnbtn = $('key-visual__text button'); 
</pre>
`;

// 상수 네이밍 문서
const CONST = `
<table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
  <thead>
    <tr style="background-color: #eaeaeaff; color: #555; text-align: left;">
      <th style="padding: 10px; border: 1px solid #ccc;">역할/상황</th>
      <th style="padding: 10px; border: 1px solid #ccc;">추천 함수 접두사/동사</th>
      <th style="padding: 10px; border: 1px solid #ccc;">예시 함수명</th>
      <th style="padding: 10px; border: 1px solid #ccc;">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: rgb(246, 249, 252); color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">초기화 / 컴포넌트 준비</td>
      <td style="padding: 10px; border: 1px solid #ccc;">init</td>
      <td style="padding: 10px; border: 1px solid #ccc;">initSwiper(), initAccordion()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">컴포넌트 초기화, DOM 준비</td>
    </tr>
    <tr style="background-color: #fff; color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">토글 / 상태 변경</td>
      <td style="padding: 10px; border: 1px solid #ccc;">toggle</td>
      <td style="padding: 10px; border: 1px solid #ccc;">toggleAccordion(), toggleMenu()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">UI 상태 ON/OFF 토글</td>
    </tr>
    <tr style="background-color: rgb(246, 249, 252); color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">열기</td>
      <td style="padding: 10px; border: 1px solid #ccc;">open</td>
      <td style="padding: 10px; border: 1px solid #ccc;">openModal(), openDropdown()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">UI 요소 열기</td>
    </tr>
    <tr style="background-color: #fff; color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">닫기</td>
      <td style="padding: 10px; border: 1px solid #ccc;">close</td>
      <td style="padding: 10px; border: 1px solid #ccc;">closeModal(), closeDropdown()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">UI 요소 닫기</td>
    </tr>
    <tr style="background-color: rgb(246, 249, 252); color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">렌더링 / 갱신</td>
      <td style="padding: 10px; border: 1px solid #ccc;">render, update</td>
      <td style="padding: 10px; border: 1px solid #ccc;">renderTabs(), updateSlider()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">UI 다시 그리기 / 갱신</td>
    </tr>
    <tr style="background-color: #fff; color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">이벤트 핸들러</td>
      <td style="padding: 10px; border: 1px solid #ccc;">handle, on</td>
      <td style="padding: 10px; border: 1px solid #ccc;">handleClick(), onAccordionToggle()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">이벤트 처리 함수</td>
    </tr>
    <tr style="background-color: rgb(246, 249, 252); color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">체크 / 상태 확인</td>
      <td style="padding: 10px; border: 1px solid #ccc;">is, has</td>
      <td style="padding: 10px; border: 1px solid #ccc;">isActive(), hasClassActive()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">상태나 조건 체크</td>
    </tr>
    <tr style="background-color: #fff; color: #000;">
      <td style="padding: 10px; border: 1px solid #ccc;">선택 / 반환</td>
      <td style="padding: 10px; border: 1px solid #ccc;">get</td>
      <td style="padding: 10px; border: 1px solid #ccc;">getSelectedTab(), getActiveSlide()</td>
      <td style="padding: 10px; border: 1px solid #ccc;">특정 요소나 값 반환</td>
    </tr>
  </tbody>
</table>
`;

export default { LET, CONST };
