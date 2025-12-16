const l=()=>{let t="";return t+=`
    <style>
      .excel-container {
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .excel-tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        border-bottom: 2px solid #eee;
      }

      .excel-tab {
        padding: 10px 20px;
        background: none;
        border: none;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        font-size: 14px;
        color: #666;
        transition: all 0.3s;
      }

      .excel-tab.active {
        color: #1B1E23;
        border-bottom-color: #1B1E23;
        font-weight: 600;
      }

      .excel-section {
        display: none;
      }

      .excel-section.active {
        display: block;
      }

      .plan-section {
        display: none;
      }

      .plan-section.active {
        display: block;
      }

      .money-table, .schedule-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }

      .money-table th, .schedule-table th {
        background: #f5f5f5;
        padding: 12px;
        text-align: left;
        font-weight: 600;
        border: 1px solid #ddd;
        color: #1B1E23;
      }

      .money-table td, .schedule-table td {
        padding: 12px;
        border: 1px solid #ddd;
      }

      .money-table input, .schedule-table input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
      }

      .money-table input:focus, .schedule-table input:focus {
        outline: none;
        border-color: #1B1E23;
        box-shadow: 0 0 0 2px rgba(27, 30, 35, 0.1);
      }

      .result-cell {
        background: #f9f9f9;
        font-weight: 600;
        color: #EA2869;
      }

      .action-buttons {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }

      button {
        padding: 10px 20px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s;
      }

      button:hover {
        background: #f5f5f5;
        border-color: #1B1E23;
      }

      .btn-primary {
        background: #1B1E23;
        color: white;
        border-color: #1B1E23;
      }

      .btn-primary:hover {
        background: #2a2d32;
      }

      .btn-danger {
        color: #EA2869;
        border-color: #EA2869;
      }

      .btn-danger:hover {
        background: #fef0f5;
      }

      .summary {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 4px;
        margin-top: 20px;
        border-left: 4px solid #EA2869;
      }

      .summary-item {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        font-size: 14px;
      }

      .summary-item strong {
        color: #EA2869;
      }
    </style>

    <div class="excel-container">
      <div class="excel-tabs">
        <button class="excel-tab active" onclick="switchTab(event, 'money')">💰 돈 계산</button>
        <button class="excel-tab" onclick="switchTab(event, 'schedule')">📅 스케줄</button>
      </div>

      <!-- 돈 계산 섹션 -->
      <div id="money" class="excel-section active">
        <!-- 플랜 A/B 탭 -->
        <div class="excel-tabs" style="margin-bottom: 15px;">
          <button class="excel-tab active" onclick="switchPlan(event, 'planA')">📋 플랜 A</button>
          <button class="excel-tab" onclick="switchPlan(event, 'planB')">📋 플랜 B</button>
          <button class="excel-tab" onclick="switchPlan(event, 'comparison')">⚖️ 비교</button>
        </div>

        <!-- 플랜 A -->
        <div id="planA" class="plan-section active">
          <h3 style="margin-bottom: 15px;">플랜 A</h3>
          <table class="money-table">
            <thead>
              <tr>
                <th>항목</th>
                <th>금액</th>
                <th>수량</th>
                <th>합계</th>
                <th>1인</th>
              </tr>
            </thead>
            <tbody id="moneyBodyA">
              <tr>
                <td><input type="text" placeholder="항목명" class="money-item-a"></td>
                <td><input type="number" placeholder="0" class="money-amount-a" value="0"></td>
                <td><input type="number" placeholder="1" class="money-qty-a" value="1"></td>
                <td class="result-cell money-total-a">0</td>
                <td class="result-cell money-per-person-a">0</td>
              </tr>
              <tr>
                <td><input type="text" placeholder="항목명" class="money-item-a"></td>
                <td><input type="number" placeholder="0" class="money-amount-a" value="0"></td>
                <td><input type="number" placeholder="1" class="money-qty-a" value="1"></td>
                <td class="result-cell money-total-a">0</td>
                <td class="result-cell money-per-person-a">0</td>
              </tr>
              <tr>
                <td><input type="text" placeholder="항목명" class="money-item-a"></td>
                <td><input type="number" placeholder="0" class="money-amount-a" value="0"></td>
                <td><input type="number" placeholder="1" class="money-qty-a" value="1"></td>
                <td class="result-cell money-total-a">0</td>
                <td class="result-cell money-per-person-a">0</td>
              </tr>
            </tbody>
          </table>

          <div class="summary">
            <div class="summary-item">
              <span>총합계</span>
              <strong id="totalMoneyA">0</strong>
            </div>
            <div class="summary-item">
              <span>1인 합계</span>
              <strong id="totalPerPersonA">0</strong>
            </div>
          </div>

          <div class="action-buttons">
            <button class="btn-primary" onclick="addMoneyRowA()">행 추가</button>
            <button class="btn-danger" onclick="clearMoneyA()">초기화</button>
            <button class="btn-primary" onclick="saveMoneyDataA()">저장</button>
          </div>
        </div>

        <!-- 플랜 B -->
        <div id="planB" class="plan-section">
          <h3 style="margin-bottom: 15px;">플랜 B</h3>
          <table class="money-table">
            <thead>
              <tr>
                <th>항목</th>
                <th>금액</th>
                <th>수량</th>
                <th>합계</th>
                <th>1인</th>
              </tr>
            </thead>
            <tbody id="moneyBodyB">
              <tr>
                <td><input type="text" placeholder="항목명" class="money-item-b"></td>
                <td><input type="number" placeholder="0" class="money-amount-b" value="0"></td>
                <td><input type="number" placeholder="1" class="money-qty-b" value="1"></td>
                <td class="result-cell money-total-b">0</td>
                <td class="result-cell money-per-person-b">0</td>
              </tr>
              <tr>
                <td><input type="text" placeholder="항목명" class="money-item-b"></td>
                <td><input type="number" placeholder="0" class="money-amount-b" value="0"></td>
                <td><input type="number" placeholder="1" class="money-qty-b" value="1"></td>
                <td class="result-cell money-total-b">0</td>
                <td class="result-cell money-per-person-b">0</td>
              </tr>
              <tr>
                <td><input type="text" placeholder="항목명" class="money-item-b"></td>
                <td><input type="number" placeholder="0" class="money-amount-b" value="0"></td>
                <td><input type="number" placeholder="1" class="money-qty-b" value="1"></td>
                <td class="result-cell money-total-b">0</td>
                <td class="result-cell money-per-person-b">0</td>
              </tr>
            </tbody>
          </table>

          <div class="summary">
            <div class="summary-item">
              <span>총합계</span>
              <strong id="totalMoneyB">0</strong>
            </div>
            <div class="summary-item">
              <span>1인 합계</span>
              <strong id="totalPerPersonB">0</strong>
            </div>
          </div>

          <div class="action-buttons">
            <button class="btn-primary" onclick="addMoneyRowB()">행 추가</button>
            <button class="btn-danger" onclick="clearMoneyB()">초기화</button>
            <button class="btn-primary" onclick="saveMoneyDataB()">저장</button>
          </div>
        </div>

        <!-- 비교 섹션 -->
        <div id="comparison" class="plan-section">
          <h3 style="margin-bottom: 15px;">플랜 비교</h3>
          <table class="money-table" style="max-width: 500px;">
            <thead>
              <tr>
                <th>항목</th>
                <th>플랜 A</th>
                <th>플랜 B</th>
                <th>차이</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>총합계</td>
                <td id="compTotalA">0</td>
                <td id="compTotalB">0</td>
                <td id="compTotalDiff" class="result-cell">0</td>
              </tr>
              <tr>
                <td>1인 합계</td>
                <td id="compPerPersonA">0</td>
                <td id="compPerPersonB">0</td>
                <td id="compPerPersonDiff" class="result-cell">0</td>
              </tr>
            </tbody>
          </table>

          <div class="summary">
            <div class="summary-item">
              <span>저렴한 플랜</span>
              <strong id="cheaperPlan">-</strong>
            </div>
            <div class="summary-item">
              <span>절약액 (1인 기준)</span>
              <strong id="savingAmount">0</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 스케줄 섹션 -->
      <div id="schedule" class="excel-section">
        <table class="schedule-table">
          <thead>
            <tr>
              <th>일정</th>
              <th>시작일</th>
              <th>종료일</th>
              <th>일수</th>
            </tr>
          </thead>
          <tbody id="scheduleBody">
            <tr>
              <td><input type="text" placeholder="일정명" class="schedule-name"></td>
              <td><input type="date" class="schedule-start"></td>
              <td><input type="date" class="schedule-end"></td>
              <td class="result-cell schedule-days">0</td>
            </tr>
            <tr>
              <td><input type="text" placeholder="일정명" class="schedule-name"></td>
              <td><input type="date" class="schedule-start"></td>
              <td><input type="date" class="schedule-end"></td>
              <td class="result-cell schedule-days">0</td>
            </tr>
            <tr>
              <td><input type="text" placeholder="일정명" class="schedule-name"></td>
              <td><input type="date" class="schedule-start"></td>
              <td><input type="date" class="schedule-end"></td>
              <td class="result-cell schedule-days">0</td>
            </tr>
          </tbody>
        </table>

        <div class="summary">
          <div class="summary-item">
            <span>총 일수</span>
            <strong id="totalDays">0</strong>
          </div>
        </div>

        <div class="action-buttons">
          <button class="btn-primary" onclick="addScheduleRow()">행 추가</button>
          <button class="btn-danger" onclick="clearSchedule()">초기화</button>
          <button class="btn-primary" onclick="saveScheduleData()">저장</button>
        </div>
      </div>
    </div>

    <script>
      // 탭 전환
      window.switchTab = function(event, tabName) {
        event.preventDefault();
        
        const sections = document.querySelectorAll('.excel-section');
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(tabName).classList.add('active');

        const tabs = document.querySelectorAll('.excel-tabs:first-child .excel-tab');
        tabs.forEach(t => t.classList.remove('active'));
        event.target.classList.add('active');
      };

      // 플랜 전환 (A/B/비교)
      window.switchPlan = function(event, planName) {
        event.preventDefault();
        
        const sections = document.querySelectorAll('.plan-section');
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(planName).classList.add('active');

        const tabs = event.target.parentElement.querySelectorAll('.excel-tab');
        tabs.forEach(t => t.classList.remove('active'));
        event.target.classList.add('active');

        if (planName === 'comparison') {
          updateComparison();
        }
      };

      // 돈 계산 함수 - 플랜 A
      window.calculateMoneyRowA = function(row) {
        const amountInput = row.querySelector('.money-amount-a');
        const qtyInput = row.querySelector('.money-qty-a');
        const totalCell = row.querySelector('.money-total-a');
        const perPersonCell = row.querySelector('.money-per-person-a');
        
        const amount = parseFloat(amountInput.value) || 0;
        const qty = parseFloat(qtyInput.value) || 1;
        const total = amount * qty;
        const perPerson = Math.round(total / 2);
        
        totalCell.textContent = total.toLocaleString();
        perPersonCell.textContent = perPerson.toLocaleString();
        updateMoneyTotalA();
      };

      window.updateMoneyTotalA = function() {
        const rows = document.querySelectorAll('#moneyBodyA tr');
        let totalMoney = 0;
        let totalPerPerson = 0;
        
        rows.forEach(row => {
          const amountInput = row.querySelector('.money-amount-a');
          const qtyInput = row.querySelector('.money-qty-a');
          const amount = parseFloat(amountInput.value) || 0;
          const qty = parseFloat(qtyInput.value) || 1;
          const total = amount * qty;
          totalMoney += total;
          totalPerPerson += Math.round(total / 2);
        });
        
        document.getElementById('totalMoneyA').textContent = totalMoney.toLocaleString();
        document.getElementById('totalPerPersonA').textContent = totalPerPerson.toLocaleString();
      };

      window.addMoneyRowA = function() {
        const tbody = document.getElementById('moneyBodyA');
        const newRow = document.createElement('tr');
        newRow.innerHTML = \`
          <td><input type="text" placeholder="항목명" class="money-item-a"></td>
          <td><input type="number" placeholder="0" class="money-amount-a" value="0" onchange="calculateMoneyRowA(this.closest('tr'))"></td>
          <td><input type="number" placeholder="1" class="money-qty-a" value="1" onchange="calculateMoneyRowA(this.closest('tr'))"></td>
          <td class="result-cell money-total-a">0</td>
          <td class="result-cell money-per-person-a">0</td>
        \`;
        tbody.appendChild(newRow);
      };

      window.clearMoneyA = function() {
        document.getElementById('moneyBodyA').querySelectorAll('input').forEach(input => {
          if (input.classList.contains('money-item-a')) input.value = '';
          else if (input.classList.contains('money-amount-a')) input.value = '0';
          else if (input.classList.contains('money-qty-a')) input.value = '1';
        });
        updateMoneyTotalA();
      };

      window.saveMoneyDataA = function() {
        const rows = document.querySelectorAll('#moneyBodyA tr');
        const data = [];
        rows.forEach(row => {
          data.push({
            item: row.querySelector('.money-item-a').value,
            amount: row.querySelector('.money-amount-a').value,
            qty: row.querySelector('.money-qty-a').value
          });
        });
        localStorage.setItem('moneyDataA', JSON.stringify(data));
        alert('플랜 A가 저장되었습니다!');
      };

      // 돈 계산 함수 - 플랜 B
      window.calculateMoneyRowB = function(row) {
        const amountInput = row.querySelector('.money-amount-b');
        const qtyInput = row.querySelector('.money-qty-b');
        const totalCell = row.querySelector('.money-total-b');
        const perPersonCell = row.querySelector('.money-per-person-b');
        
        const amount = parseFloat(amountInput.value) || 0;
        const qty = parseFloat(qtyInput.value) || 1;
        const total = amount * qty;
        const perPerson = Math.round(total / 2);
        
        totalCell.textContent = total.toLocaleString();
        perPersonCell.textContent = perPerson.toLocaleString();
        updateMoneyTotalB();
      };

      window.updateMoneyTotalB = function() {
        const rows = document.querySelectorAll('#moneyBodyB tr');
        let totalMoney = 0;
        let totalPerPerson = 0;
        
        rows.forEach(row => {
          const amountInput = row.querySelector('.money-amount-b');
          const qtyInput = row.querySelector('.money-qty-b');
          const amount = parseFloat(amountInput.value) || 0;
          const qty = parseFloat(qtyInput.value) || 1;
          const total = amount * qty;
          totalMoney += total;
          totalPerPerson += Math.round(total / 2);
        });
        
        document.getElementById('totalMoneyB').textContent = totalMoney.toLocaleString();
        document.getElementById('totalPerPersonB').textContent = totalPerPerson.toLocaleString();
      };

      window.addMoneyRowB = function() {
        const tbody = document.getElementById('moneyBodyB');
        const newRow = document.createElement('tr');
        newRow.innerHTML = \`
          <td><input type="text" placeholder="항목명" class="money-item-b"></td>
          <td><input type="number" placeholder="0" class="money-amount-b" value="0" onchange="calculateMoneyRowB(this.closest('tr'))"></td>
          <td><input type="number" placeholder="1" class="money-qty-b" value="1" onchange="calculateMoneyRowB(this.closest('tr'))"></td>
          <td class="result-cell money-total-b">0</td>
          <td class="result-cell money-per-person-b">0</td>
        \`;
        tbody.appendChild(newRow);
      };

      window.clearMoneyB = function() {
        document.getElementById('moneyBodyB').querySelectorAll('input').forEach(input => {
          if (input.classList.contains('money-item-b')) input.value = '';
          else if (input.classList.contains('money-amount-b')) input.value = '0';
          else if (input.classList.contains('money-qty-b')) input.value = '1';
        });
        updateMoneyTotalB();
      };

      window.saveMoneyDataB = function() {
        const rows = document.querySelectorAll('#moneyBodyB tr');
        const data = [];
        rows.forEach(row => {
          data.push({
            item: row.querySelector('.money-item-b').value,
            amount: row.querySelector('.money-amount-b').value,
            qty: row.querySelector('.money-qty-b').value
          });
        });
        localStorage.setItem('moneyDataB', JSON.stringify(data));
        alert('플랜 B가 저장되었습니다!');
      };

      // 비교 분석
      window.updateComparison = function() {
        const totalA = parseInt(document.getElementById('totalMoneyA').textContent.replace(/,/g, '')) || 0;
        const totalB = parseInt(document.getElementById('totalMoneyB').textContent.replace(/,/g, '')) || 0;
        const perPersonA = parseInt(document.getElementById('totalPerPersonA').textContent.replace(/,/g, '')) || 0;
        const perPersonB = parseInt(document.getElementById('totalPerPersonB').textContent.replace(/,/g, '')) || 0;

        document.getElementById('compTotalA').textContent = totalA.toLocaleString();
        document.getElementById('compTotalB').textContent = totalB.toLocaleString();
        document.getElementById('compTotalDiff').textContent = Math.abs(totalA - totalB).toLocaleString();

        document.getElementById('compPerPersonA').textContent = perPersonA.toLocaleString();
        document.getElementById('compPerPersonB').textContent = perPersonB.toLocaleString();
        document.getElementById('compPerPersonDiff').textContent = Math.abs(perPersonA - perPersonB).toLocaleString();

        if (perPersonA < perPersonB) {
          document.getElementById('cheaperPlan').textContent = '플랜 A (저렴)';
          document.getElementById('savingAmount').textContent = (perPersonB - perPersonA).toLocaleString();
        } else if (perPersonB < perPersonA) {
          document.getElementById('cheaperPlan').textContent = '플랜 B (저렴)';
          document.getElementById('savingAmount').textContent = (perPersonA - perPersonB).toLocaleString();
        } else {
          document.getElementById('cheaperPlan').textContent = '동일';
          document.getElementById('savingAmount').textContent = '0';
        }
      };

      // 스케줄 계산 함수
      window.calculateScheduleRow = function(row) {
        const startInput = row.querySelector('.schedule-start');
        const endInput = row.querySelector('.schedule-end');
        const daysCell = row.querySelector('.schedule-days');
        
        if (startInput.value && endInput.value) {
          const start = new Date(startInput.value);
          const end = new Date(endInput.value);
          const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
          daysCell.textContent = days > 0 ? days : 0;
        } else {
          daysCell.textContent = 0;
        }
        updateScheduleTotal();
      };

      window.updateScheduleTotal = function() {
        const rows = document.querySelectorAll('#scheduleBody tr');
        let totalDays = 0;
        
        rows.forEach(row => {
          const startInput = row.querySelector('.schedule-start');
          const endInput = row.querySelector('.schedule-end');
          if (startInput.value && endInput.value) {
            const start = new Date(startInput.value);
            const end = new Date(endInput.value);
            const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
            totalDays += days > 0 ? days : 0;
          }
        });
        
        document.getElementById('totalDays').textContent = totalDays;
      };

      window.addScheduleRow = function() {
        const tbody = document.getElementById('scheduleBody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = \`
          <td><input type="text" placeholder="일정명" class="schedule-name"></td>
          <td><input type="date" class="schedule-start" onchange="calculateScheduleRow(this.closest('tr'))"></td>
          <td><input type="date" class="schedule-end" onchange="calculateScheduleRow(this.closest('tr'))"></td>
          <td class="result-cell schedule-days">0</td>
        \`;
        tbody.appendChild(newRow);
      };

      window.clearSchedule = function() {
        document.getElementById('scheduleBody').querySelectorAll('input').forEach(input => {
          input.value = '';
        });
        document.querySelectorAll('#scheduleBody .schedule-days').forEach(cell => {
          cell.textContent = '0';
        });
        updateScheduleTotal();
      };

      window.saveScheduleData = function() {
        const rows = document.querySelectorAll('#scheduleBody tr');
        const data = [];
        rows.forEach(row => {
          data.push({
            name: row.querySelector('.schedule-name').value,
            start: row.querySelector('.schedule-start').value,
            end: row.querySelector('.schedule-end').value
          });
        });
        localStorage.setItem('scheduleData', JSON.stringify(data));
        alert('저장되었습니다!');
      };

      // 초기화 - 저장된 데이터 로드
      window.initExcel = function() {
        const moneyDataA = localStorage.getItem('moneyDataA');
        const moneyDataB = localStorage.getItem('moneyDataB');
        const scheduleData = localStorage.getItem('scheduleData');
        
        // 플랜 A 로드
        if (moneyDataA) {
          const data = JSON.parse(moneyDataA);
          const tbody = document.getElementById('moneyBodyA');
          tbody.innerHTML = '';
          data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = \`
              <td><input type="text" placeholder="항목명" class="money-item-a" value="\${item.item}"></td>
              <td><input type="number" placeholder="0" class="money-amount-a" value="\${item.amount}" onchange="calculateMoneyRowA(this.closest('tr'))"></td>
              <td><input type="number" placeholder="1" class="money-qty-a" value="\${item.qty}" onchange="calculateMoneyRowA(this.closest('tr'))"></td>
              <td class="result-cell money-total-a">0</td>
              <td class="result-cell money-per-person-a">0</td>
            \`;
            tbody.appendChild(row);
            calculateMoneyRowA(row);
          });
        }

        // 플랜 B 로드
        if (moneyDataB) {
          const data = JSON.parse(moneyDataB);
          const tbody = document.getElementById('moneyBodyB');
          tbody.innerHTML = '';
          data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = \`
              <td><input type="text" placeholder="항목명" class="money-item-b" value="\${item.item}"></td>
              <td><input type="number" placeholder="0" class="money-amount-b" value="\${item.amount}" onchange="calculateMoneyRowB(this.closest('tr'))"></td>
              <td><input type="number" placeholder="1" class="money-qty-b" value="\${item.qty}" onchange="calculateMoneyRowB(this.closest('tr'))"></td>
              <td class="result-cell money-total-b">0</td>
              <td class="result-cell money-per-person-b">0</td>
            \`;
            tbody.appendChild(row);
            calculateMoneyRowB(row);
          });
        }
        
        if (scheduleData) {
          const data = JSON.parse(scheduleData);
          const tbody = document.getElementById('scheduleBody');
          tbody.innerHTML = '';
          data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = \`
              <td><input type="text" placeholder="일정명" class="schedule-name" value="\${item.name}"></td>
              <td><input type="date" class="schedule-start" value="\${item.start}" onchange="calculateScheduleRow(this.closest('tr'))"></td>
              <td><input type="date" class="schedule-end" value="\${item.end}" onchange="calculateScheduleRow(this.closest('tr'))"></td>
              <td class="result-cell schedule-days">0</td>
            \`;
            tbody.appendChild(row);
            calculateScheduleRow(row);
          });
        }
      };

      // 이벤트 리스너 추가
      document.addEventListener('DOMContentLoaded', function() {
        initExcel();
        
        // 초기 행들 계산 (저장된 데이터가 없을 때만)
        const initialRowsA = document.querySelectorAll('#moneyBodyA tr');
        initialRowsA.forEach(row => {
          calculateMoneyRowA(row);
        });

        const initialRowsB = document.querySelectorAll('#moneyBodyB tr');
        initialRowsB.forEach(row => {
          calculateMoneyRowB(row);
        });
        
        // 돈 계산 입력값 변경 감지
        document.addEventListener('change', function(e) {
          if (e.target.classList.contains('money-amount-a') || 
              e.target.classList.contains('money-qty-a')) {
            calculateMoneyRowA(e.target.closest('tr'));
          }
          if (e.target.classList.contains('money-amount-b') || 
              e.target.classList.contains('money-qty-b')) {
            calculateMoneyRowB(e.target.closest('tr'));
          }
          if (e.target.classList.contains('schedule-start') || 
              e.target.classList.contains('schedule-end')) {
            calculateScheduleRow(e.target.closest('tr'));
          }
        });
      });
    <\/script>
  `,t},s=t=>({Excel:"돈 계산과 스케줄 관리를 위한 간단한 엑셀 도구"})[t],c={Excel:{render:()=>l()}},e=c.Excel,d={title:"Etc/Excel",parameters:{docs:{description:{component:s("Excel")}}}};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"stories.Excel",...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const u=["Excel"];export{e as Excel,u as __namedExportsOrder,d as default};
