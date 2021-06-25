const tyGia = 23500;
function quiDoi(){
    var usd = document.getElementById("usd").value;
    var vnd = usd * tyGia;
    var ketQuaEl = document.createElement("p");
    ketQuaEl.innerHTML = usd+ " USD = " + vnd + " VNĐ";
    console.log(ketQuaEl);
    var ketQua = document.getElementById("ketQua");
    ketQua.innerHTML="";
    ketQua.appendChild(ketQuaEl);
}