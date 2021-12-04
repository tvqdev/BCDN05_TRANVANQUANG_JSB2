/**Bài 1 : Quy đổi tiền tệ
 * 
 * 
 * K1 : Giá 1 USD hiện nay là 23.500 VNĐ
 * Input 
 * VND = 23500;
 * USD
 * 
 * K2 :
 * B1 : Khai báo biến và gán giá trị :
 * B2 : CT quy đổi USD sang VND
 * soTienDoi = USD * 23.500 ;
 * 
 * 
 * K3 : Kết quả đạt được
 *output: soTienDoi 
 */

function tinhUSD() {
     var VND = 23500;
     var USD = document.getElementById("usd").value;
      var soTienDoi = USD * VND;
      document.getElementById('sotiendoi').innerHTML = "<span Số tiền đổi là: >" + soTienDoi + " VND </span>";
     
     console.log(soTienDoi);

}



 /**
  * BÀI 2 : Tính diện tích và CV HCN
  * 
  * K1: Nhập vào 2 chiều dài và chiều rộng của hcn
  * input :
  * long 
  * withs
  * 
  * 
  * K2
  * B1: Khai báo biến và gán giá trị
  * B2: Lập CT tính
  * DT = long * with;
  * CV = (long + with) * 2
  * 
  * 
  * K3
  * output
  * DT
  * CV
  */

function DT() {
     var dai = document.getElementById("dai").value;
     var rong = document.getElementById("rong").value;

     var DT = dai * rong;
     DT = document.getElementById("txt").innerHTML = "<span> Diện tích hình chử nhật là: " + DT + "</span>";
}

function CV() {
     var dai = Number(document.getElementById("dai").value);
     var rong = Number(document.getElementById("rong").value);
     var CV = (dai + rong) * 2;
     CV = Number(document.getElementById("txt").innerHTML = "<span> Chu vi hình chử nhật là: " + CV + "</span>");
}

/**
  * Bài 3 : Tính tổng 2 ký sôs
  * 
  * K1 : nhập vào một số có 2 chử số : 12
  * input 
  * num = 12
  * 
  * K2
  * ks1 = num % 10
  * ks2 = num /10 
  * tong = ks1 + ks2
  * K3
  */


function ks() {

     var num = Number(document.getElementById("num1").value);
     var ks1 = num % 10;
     console.log(ks1);
     var ks2 = Math.floor(num / 10);
     console.log(ks2);
     
     var tong = ks1 + ks2;

     tong = Number(document.getElementById("txtks").innerHTML =  "<span> Tổng 2 ký số: " + tong + "</span>");

}
