let ketQua = Math.floor (Math.random()*10);
let time = 1;
let input = document.getElementsByClassName ('content-input');

function check () {
    let input_value = parseFloat (input[0].value);

    if (time <=3){
        console.log (input_value);
        console.log (ketQua);
        if ((input_value == NaN)||(input_value>10)){
            alert (`Nhập lần thứ ${time}:Bạn hãy nhập số. Đề nghị nhập lại`)
        } else if (input_value != ketQua) {
            alert (`Nhập lần thứ ${time}: Bạn đã nhập sai. Đề nghị nhập lại`);
        } else if (input_value == ketQua) {
            alert (`Xin chúc mừng. Bạn đã nhập đúng. Đi đánh đề thôi`);
            ketQua = Math.floor (Math.random()*10);
            time = 0;
        }
        time++;
    } else {
        time = 1;
        alert (`Bạn đã hết lượt. Kết quả là ${ketQua}`);
        ketQua = Math.floor (Math.random()*10);
        
    }
}