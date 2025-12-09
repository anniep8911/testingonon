/**
 * 숫자를 지정된 소수점 자릿수까지만 남기고 버림 처리합니다.
 * @param {number} num - 버림 처리할 숫자.
 * @param {number} decimals - 남길 소수점 자릿수 (0 또는 양의 정수).
 * @returns {number} - 버림 처리된 숫자.
 */
function truncate(num, decimals) {
    if (typeof num !== 'number' || typeof decimals !== 'number' || decimals < 0) {
        // 유효성 검사 (숫자가 아니거나 자릿수가 음수인 경우)
        return NaN; 
    }

    // 1. 10의 (decimals) 제곱 값을 계산합니다 (예: 2자리 -> 100).
    const multiplier = Math.pow(10, decimals);
    
    // 2. 숫자에 multiplier를 곱하여 지정된 자릿수를 정수 영역으로 이동시킨 후,
    //    Math.floor()를 사용하여 소수점 이하 전체를 버립니다.
    const truncatedValue = Math.floor(num * multiplier);
    
    // 3. 다시 multiplier로 나누어 원래 소수점 위치로 되돌립니다.
    return truncatedValue / multiplier;
}

export default truncate;