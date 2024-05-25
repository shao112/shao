document.addEventListener("DOMContentLoaded", function(){
    changeRandomChar("S", 60, 3000);
    changeRandomChar("H", 80, 4000);
    changeRandomChar("A", 100, 5000);
    changeRandomChar("O", 50, 6000);
})

/**
 * 改變隨機字元
 * 註：setInterval 裡面的 function 若直接寫 setInterval()，會導致只執行一次
 * @param {String} elementId 元素 id
 * @param {Number} frequency 每多少毫秒改變一次
 * @param {Number} stopTime 多少毫秒後停止
 */
function changeRandomChar(elementId, frequency, stopTime){
    // 每 frequency 毫秒改變一次字元
    const randomID = setInterval(function(){setRandomChar(elementId)}, frequency);
    // stopTime 毫秒後停止
    setTimeout(function(){stopInterval(randomID, elementId)}, stopTime);
}

/**
 * 設置隨機字元
 * @param {String} elementId 元素 id
 */
function setRandomChar(elementId) {
    // 隨機字元的範圍
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
    // 取字元長度
    const charactersLength = characters.length;
    // 取隨機數(0 ~ 1)
    const random = Math.random();
    // 取 characters 隨機字元
    const result = characters.charAt(Math.floor(random * charactersLength));
    // 改變元素值
    document.getElementById(elementId).innerHTML = result;
}

/**
 * 停止 Interval
 * @param {String} elementId 元素 id
 * @param {String} character 最後要顯示的字元
 */
function stopInterval(elementId, character) {
    clearInterval(elementId);
    document.getElementById(character).innerHTML = character;
}