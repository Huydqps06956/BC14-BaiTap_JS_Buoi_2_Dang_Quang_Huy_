const LUONG_CO_BAN = 100000;
function tinhLuong(){
    var soNgayLam = +document.getElementById("soNgayLam").value;
    var tongLuong = document.getElementById("tongLuong");
    var soLuong = LUONG_CO_BAN * soNgayLam;
    var spanEl = document.createElement("span");
    spanEl.innerHTML="Số Lương :" + soLuong;
    tongLuong.style.display ="block"
    tongLuong.innerHTML = "";
    tongLuong.appendChild(spanEl);
}