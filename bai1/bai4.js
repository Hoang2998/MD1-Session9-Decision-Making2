let a = +prompt("moi nhap so a");
let b = +prompt("moi nhap so b");
let c = +prompt("moi nhap so c");
if(a>=b){
    if(b>=c){
        alert(`Max = ${a}`)
    }else if(a>=c){
        alert(`Max = ${a}`)
    }else {
        alert(`Max = ${c}`)
    }
}else if(b>=c){
    alert(`Max = ${b}`)
}else{alert(`Max = ${c}`)
}