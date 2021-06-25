function tinhTong(){
    var so = +document.getElementById("so").value;
    var unit,ten,sum;
    unit = so%10;
    ten = Math.floor(so%100/10);
    sum = unit + ten
    sumEl = document.createElement("p");
    sumEl.innerHTML = "Tổng 2 ký số của " + so + " là : " + sum;
    var ketQua = document.getElementById("ketQua");
    ketQua.innerHTML= "";
    ketQua.appendChild(sumEl)
  
}