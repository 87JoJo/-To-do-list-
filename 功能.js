window.onload = function () { 
    var space = null;
    var oBox = document.getElementById('box');
    var oActive = document.getElementsByClassName('active')[0];
    var oFinished = document.getElementsByClassName('finished')[0];
    var oAll = document.getElementsByClassName('all')[0];
    // 獲取輸入框的值
    var oInput = document.getElementById('keyInput');
    var oUl = document.getElementById('new');
    // 儲存列表數量
    var total = 0;
    // 暫存按鈕狀態
    var current = false;
    console.log(oInput);

    // 獲取鍵盤值
    oInput.onkeydown = function (ev) {
        // 兼容FF和IE
        ev = event || ev;
        // console.log(1);
        // 如果輸入框有值按下enter才觸發
        if (ev.keyCode == 13 && oInput.value != '') {
            // console.log(87);
            var oValue = this.value;
            generate(oValue);
            // 每產生一個就+1
            total++;
            sum(total);
            console.log(total);
            // console.log(oValue);
            // 每次enter後都清空輸入框的值
            oUl.style.display = 'block';
            oInput.value = '';
        }
    }
    // 產生列表
    function generate(data) {
        // 產生對應內容todolist
        // console.log(5);
        var oLi = document.createElement('li');
        oLi.innerHTML = data;
        // 在列表左邊設置一個按鈕
        var oIcon = document.createElement('em');
        oIcon.className = 'finished';
        oLi.appendChild(oIcon);
        // 在列表右邊設置一個取消按鈕
        var cancel = document.createElement('i');
        oLi.appendChild(cancel);
        oUl.appendChild(oLi);
        oLi.style.display = 'block';
        // 獲取li
        var oLi = document.getElementsByTagName('li');
        console.log(oLi);
        // 當滑鼠移入列表產生一個可取消的方塊
        for (i = 0; i < oLi.length; i++) {
            console.log(oLi[i]);
            // 滑鼠移入
            oLi[i].onmouseover = function () {
                // console.log(this);
                // 獲取取消
                var cancel = this.getElementsByTagName('i')[0];
                // 獲取點擊確認
                var oIcon = this.getElementsByTagName('em')[0];
                cancel.style.display = 'block';

                // 如果點擊取消會清除掉
                cancel.onclick = function (ev) {
                    ev = event || ev;
                    // 在消除前,如果是完成的,就不減(利用+1,來跟-1打平)
                    if (oIcon.className == 'active') {
                        total++;
                        // alert(1);
                    }
                    oUl.removeChild(this.parentNode);
                    total--;
                    sum(total);
                    console.log(total);
                }
                // 打勾確認操作
                oIcon.onclick = function (ev) {
                    ev = event || ev;
                    if (this.className == 'active') {
                        this.className = 'finished';
                        if (total >= 0) {
                            total++;
                            sum(total);
                        }
                    } else {
                        this.className = 'active';
                        if (total > 0) {
                            total--;
                            sum(total);
                        }
                    }
                    console.log(oIcon.className);
                }

            }
            // 滑鼠移出
            oLi[i].onmouseout = function () {
                var cancel = this.getElementsByTagName('i')[0];
                cancel.style.display = 'none';
                // console.log(cancel);
            }
        }
        oAll.addEventListener('click', function () {
            var oLi = Array.from(document.getElementsByTagName('li'));
            console.log(oLi);
            oLi.forEach(function(a) {
                console.log(a);
                a.style.display = 'none';
                a.style.display = 'block';
            });
        });
        oActive.addEventListener('click', function () {  
            var oLi = Array.from(document.getElementsByTagName('li'));
            oLi.forEach(function (b) {
                console.log(b);
                b.style.display = 'none';
                var oIcon= b.getElementsByTagName('em')[0];
                console.log(oIcon);
                if (oIcon.className == 'active') {
                    (oIcon.parentNode).style.display = 'block';
                    console.log(oIcon.parentNode);
                }
            });
        });
        oFinished.addEventListener('click', function () {
            var oLi = Array.from(document.getElementsByTagName('li'));
            oLi.forEach(function (c) {
                c.style.display = 'none';
                var oIcon= c.getElementsByTagName('em')[0];
                if (oIcon.className == 'finished') {
                    (oIcon.parentNode).style.display = 'block';
                }
            });
        });
    }
    // 待辦加總
    function sum(data) {
        var oSum = document.getElementsByClassName('sum')[0];
        oSum.innerHTML = data;
    }
}







