function tinhTrungBinh(){
    var soThuNhat = +document.getElementById("soThuNhat").value;
    var soThuHai = +document.getElementById("soThuHai").value;
    var soThuBa = +document.getElementById("soThuBa").value;
    var soThuTu = +document.getElementById("soThuTu").value;
    var soThuNam = +document.getElementById("soThuNam").value;
    var trungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5
    var trungBinhEl = document.createElement("p");
 
    trungBinhEl.innerHTML="Trung bình của 5 số nhập vào là :"+ trungBinh
    var ketQua = document.getElementById("ketQua");
    ketQua.innerHTML="";
    ketQua.appendChild(trungBinhEl);
    
}