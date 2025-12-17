// Tab-PC.js: Button-PC.js 구조 기반 PC용 Tab 컴포넌트

export const SinglePage = (cat, ext) => {
  let result = '';
  switch (cat) {
    case 'type1':
      result = `
<style>
  .tab-pc.tab-pc--type1 {
    height: 57px;
    background: #fff;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
    .tab-pc.tab-pc--type1 .tab-list {
      display: flex;
      align-items: flex-end;
      height: 55px;
      position: relative;
      z-index: 1;
      width: 100%;
      justify-content: center;
      text-align: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .tab-pc__type1--item {
      color: #ABB2BE;
      font-family: "Noto Sans KR", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 56px;
      letter-spacing: -0.45px;
      text-align: center;
      height: 55px;
      padding-left: 20px;
      padding-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      background: none;
      border: none;
      outline: none;
      transition: color 0.2s;
      margin: 0;
      user-select: none;
    }
    .tab-pc__type1--item.is--active {
      color: #1B1E23;
    }
    .tab-pc__type1--item.is--active::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: #1B1E23;
      border-radius: 0;
    }
  .tab-pc.tab-pc--type1 .tab-underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #DDE0E5;
    z-index: 0;
  }
</style>
<div class="tab-pc tab-pc--type1">
    <ul class="tab-list">
      <li class="tab-pc__type1--item is--active">인터넷면세점</li>
      <li class="tab-pc__type1--item">오프라인 지점</li>
    </ul>
  <div class="tab-underline"></div>
</div>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
  $(function() {
    $('.tab-pc__type1--item').on('click', function() {
      const self = $(this);
      self.siblings('.tab-pc__type1--item').removeClass('is--active');
      self.addClass('is--active');
    });
  });
</script>
      `;
      break;
    case 'type2':
      result = `
<style>
  .tab-pc.tab-pc--type2 {
    height: 40px;
    background: #fff;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .tab-pc.tab-pc--type2 .tab-list {
    display: flex;
    align-items: flex-end;
    height: 40px;
    position: relative;
    z-index: 1;
    width: 100%;
    justify-content: center;
    text-align: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 16px;
  }
  .tab-pc__type2--item {
    color: #5C6677;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: -0.45px;
    text-align: center;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    background: none;
    border: none;
    outline: none;
    transition: color 0.2s;
    margin: 0;
    user-select: none;
  }
  .tab-pc__type2--item.is--active {
    color: #1B1E23;
    font-weight: 700;
  }
  .tab-pc__type2--item.is--active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #1B1E23;
  }
</style>
<div class="tab-pc tab-pc--type2">
  <ul class="tab-list">
    <li class="tab-pc__type2--item is--active">베스트 상품</li>
    <li class="tab-pc__type2--item">베스트 브랜드</li>
  </ul>
</div>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
  $(function() {
    $('.tab-pc__type2--item').on('click', function() {
      const self = $(this);
      self.siblings('.tab-pc__type2--item').removeClass('is--active');
      self.addClass('is--active');
    });
  });
</script>
      `;
      break;
    case 'hashtag':
      result = `
<style>
  .tab-pc.tab-pc--hashtag {
    background: #fff;
    border-radius: 24px;
    border: 2px solid #E3E6EA;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 0 3px;
    width: fit-content;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .tab-pc.tab-pc--hashtag .tab-list {
    display: flex;
    align-items: center;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .tab-pc__hashtag--item {
    color: #788497;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.35px;
    background: none;
    border: none;
    outline: none;
    border-radius: 20px;
    /* padding: 0 28px; */
    height: 40px;
    min-width: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition: background 0.2s, color 0.2s, font-weight 0.2s;
    user-select: none;
  }
  .tab-pc__hashtag--item.is--active {
    color: #FFF;
    background: #23272F;
    font-weight: 700;
  }
</style>
<div class="tab-pc tab-pc--hashtag">
  <ul class="tab-list">
    <li class="tab-pc__hashtag--item is--active">혜택</li>
    <li class="tab-pc__hashtag--item">발견</li>
    <li class="tab-pc__hashtag--item">탐색</li>
  </ul>
</div>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
  $(function() {
    $('.tab-pc__hashtag--item').on('click', function() {
      const self = $(this);
      self.siblings('.tab-pc__hashtag--item').removeClass('is--active');
      self.addClass('is--active');
    });
  });
</script>
      `;
      break;
    case 'group':
      result = `
<style>
  .tab-pc.tab-pc--group {
    background: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 57px;
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }
  .tab-pc.tab-pc--group .tab-list {
    display: flex;
    align-items: flex-end;
    height: 55px;
    width: 100%;
    justify-content: flex-start;
    text-align: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0;
  }
  .tab-pc__group--item {
    color: #ABB2BE;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.45px;
    text-align: center;
    min-width: 115px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    background: none;
    border: none;
    outline: none;
    transition: color 0.2s, font-weight 0.2s;
    user-select: none;
    font-variant-numeric: tabular-nums;
  }
        .tab-pc__group--item.is--active {
          color: #1B1E23;
    font-weight: 700;
  }
  .tab-pc__group--item.is--active::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 115px;
    height: 2px;
    background: #1B1E23;
    border-radius: 1px;
    z-index: 2;
  }
  .tab-pc.tab-pc--group .tab-underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: #DDE0E5;
    z-index: 0;
  }
</style>
<div class="tab-pc tab-pc--group">
  <ul class="tab-list">
    <li class="tab-pc__group--item is--active">전체 22</li>
    <li class="tab-pc__group--item">플러스혜택 12</li>
    <li class="tab-pc__group--item">결제혜택 9</li>
    <li class="tab-pc__group--item">제휴혜택 29</li>
    <li class="tab-pc__group--item">회원혜택 9</li>
  </ul>
  <div class="tab-underline"></div>
</div>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
  $(function() {
    $('.tab-pc__group--item').on('click', function() {
      const self = $(this);
      self.siblings('.tab-pc__group--item').removeClass('is--active');
      self.addClass('is--active');
    });
  });
</script>
      `;
      break;
    default:
      result = '';
  }
  return `${result}`;
};
