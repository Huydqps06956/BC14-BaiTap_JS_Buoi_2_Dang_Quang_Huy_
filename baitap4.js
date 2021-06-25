function tinhToan(){
var chieuDai = +document.getElementById("chieuDai").value;
var chieuRong = +document.getElementById("chieuRong").value;
var chuVi= (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;
var ketQuaEl = document.getElementById("ketQua");
ketQuaEl.innerHTML="";
var chuviEl = document.createElement("p");
chuviEl.innerHTML = "Chu vi: "+ chuVi;
var dienTichEl = document.createElement("p");
dienTichEl.innerHTML = "Diện tích: "+ dienTich;

ketQuaEl.appendChild(chuviEl);
ketQuaEl.appendChild(dienTichEl);
}