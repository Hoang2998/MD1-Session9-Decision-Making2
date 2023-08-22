let a = +prompt("nhap a")
let b = +prompt("nhap b")
let c = +prompt("nhap c")
let x=(c-b)/a
if(a != 0){
    alert(`pt co nghiem ${x} `)
}else if(c == 0 && b == 0 ){
    alert("pt co vo so nghiem")
}else {
    alert("pt vo nghiem")
}
