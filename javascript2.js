// Bài 1
      document.getElementById('convert1').addEventListener('click', convert);
      function convert() {
          let do_c = +(document.getElementById('temperature').value);
          let do_f = (do_c * 9)/5 + 32;
          document.getElementById('result1').innerHTML = do_f +' độ F'

      }
// Bài 2
      document.getElementById('convertM').addEventListener('click', convertM);
      function convertM() {
          let soM = document.getElementById('soM').value;
          let soFeet = soM *3.2808;
          document.getElementById('result2').innerHTML = soFeet + ' Feet';
      }

// Bài 3
      document.getElementById('square').addEventListener('keyup', acreage);
      function acreage() {
          let a = document.getElementById('square').value;
          let acreage = a**2;
          document.getElementById('result3').innerHTML = 'Diện tích hình vuông là: ' + acreage + ' cm <sup>2</sup>';
      }

// Bài 4
     function acreage4() {
          let a = document.getElementById('widthHcn').value;
          let b = document.getElementById('heightHcn').value;
          let acreage = a * b;
          document.getElementById('result4').innerHTML = 'Diện tích hình chữ nhật là ' + acreage + ' cm <sup>2</sup>'
     }

// Bài 5
    function acreageTamgiacvuong(id) {
          let a = document.getElementById('widthCanha').value;
          let b = document.getElementById('widthCanhb').value;
          let c = 1/2 * a * b;
          document.getElementById('result5').innerHTML = 'Diện tích tam giác vuông là: ' + c + ' (Đơn vị diện tích)';
    }

// Bài 6
    document.getElementById('result6').addEventListener('click', timNghiem);
      function timNghiem() {
          let a = document.getElementById('equation-a').value;
          let b = document.getElementById('equation-b').value;
          let x;
          console.log(a);
          console.log(b);

          if (a == 0) {
              if (b == 0){
                  document.getElementById('nghiem').innerHTML = 'Phương trình vô số nghiệm';
              } else {
                  document.getElementById('nghiem').innerHTML = 'Phương trình vô nghiệm';
              }
          } else {
              x = -b / a;
              document.getElementById('nghiem').innerHTML = 'Phương trình có nghiệm là x = ' + x;
          }
      }

// Bài 7:
    function timNghiem() {
          let a = document.getElementById('nhap-a').value;
          let b = document.getElementById('nhap-b').value;
          let c = document.getElementById('nhap-c').value;
          let delta = (b * b) - (4 * a * c);
          let x_1;
          let x_2;

          if (delta > 0) {
              x_1 = (-b + Math.sqrt(delta)) / (2 * a);
              x_2 = (-b - Math.sqrt(delta)) / (2 * a);
              document.getElementById('result7').innerHTML = 'Phương trình có 2 nghiệm: ' + 'x1 = ' + eval(x_1) + ' x2 = ' + eval(x_2);
          } else  if (delta == 0) {
              x_1 = -b / 2 * a;
              document.getElementById('result7').innerHTML = 'Phương trình có nghiệm kép x1 = x2 = ' + x_1;
          } else document.getElementById('result7').innerHTML = 'Phương trình vô nghiệm';
    }

    // Bài 8
         document.getElementById('age').addEventListener('keyup', age);
         function age() {
             let a = parseInt(document.getElementById('age').value);
             if (a < 120 && a > 0) {
                 alert('Bạn' + a + 'tuổi');
             } else alert('Số tuổi nhập không hợp lệ');
         }
// Bai 9
document.getElementById('checkNumber').addEventListener('click',function (){
    let num1 = parseFloat(document.getElementById('number1').value)
    let num2 = parseFloat(document.getElementById('number2').value)
    let num3 = parseFloat(document.getElementById('number3').value)
    if(num1>0&&num2>0&&num3>0){
        if(((num1+num2)>num3)&&((num1+num3)>num2)&&((num3+num2)>num1)){
            document.getElementById('result3number').innerHTML = 'So ban nhap la ba canh cua tam giac';
        }
        else {document.getElementById('result3number').innerHTML = 'So ban nhap khong la ba canh cua tam giac';}
    }
    else {document.getElementById('result3number').innerHTML = 'So ban nhap khong la ba canh cua tam giac';}
})
// Bai 10
document.getElementById('tinhCs').addEventListener('click',function (){
    let cs = parseFloat(document.getElementById('kwH').value);
    if(cs<=50){
        let result = cs*1678*1.1;
        document.getElementById('resultCs').innerHTML = 'Gia dien la: ' + result;
    }
    else{
        let result = ((cs-50)*1734 + 50*1678)*1.1;
        document.getElementById('resultCs').innerHTML = 'Gia dien la: ' + result;
    }
})
// bai 11
function clickedb11() {
    var a = parseFloat(document.getElementById("b11_a").value);
    if(a<5)    alert("Thue phai tra la"+(a*5/100))
    else if(a>5 && a<10) alert("Thue phai tra la"+(0.25+a*10/100))
    else if(a>10 && a<18) alert("Thue phai tra la"+(0.75+a*15/100))
    else if(a>18 && a<32) alert("Thue phai tra la"+(1.95+a*20/100))
    else if(a>32 && a<52) alert("Thue phai tra la"+(4.75+a*25/100))
    else if(a>52 && a<80) alert("Thue phai tra la"+(9.75+a*30/100))
    else alert("Thue phai tra la"+(18.15+a*35/100))
}
// bai 12
function clickedb12() {
    var a = parseFloat(document.getElementById("b12_a").value);
    var b = parseFloat(document.getElementById("b12_b").value);
    var c = parseFloat(document.getElementById("b12_c").value);
    if(a>0 &&  b>0 && c>0){
        var sum=  Math.pow(a*(1+c/100),b);
        alert(sum);
    }
    else
        alert("So tien khong co gia tri am");
}

