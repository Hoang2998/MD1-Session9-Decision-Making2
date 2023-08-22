let a = +prompt("moi nhap canh a");
let b = +prompt("moi nhap canh b");
let c = +prompt("moi nhap canh c");
if (a > 0 && b > 0 && c > 0) {
  if (a + b > c) {
    if (b + c > a) {
      if (a + c > b) {
        alert("day la 3 canh tam giac");
      } else {
        alert("day ko phai 3 canh tamgia");
      }
    }else{alert("day ko phai la canh cua tam giac")}
}else{alert("day ko phai la canh cua tam giac")}
}
 
