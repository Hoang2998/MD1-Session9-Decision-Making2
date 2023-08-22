let a = +prompt(" moi nhap a")
let b = +prompt(" moi nhap b")
let c = +prompt(" moi nhap c")
let x;
if(a==0){
    x=(-c)/b;
    if(b==0){
        if(c==0){alert("pt vo so nghiem")}
        else{alert("pt vo nghiem")}
    }else {
        alert(`nghiem cua pt la ${x}`)
    }
}else {
    let delta = b*b - 4*a*c;
    if(delta<0) {
        alert("pt vo nghiem")
        
    }else if(delta==0){
        x=-b/(2*a)
        alert(`pt co nghiem kep ${x}`)
    }else {
        let x1 = (-b- Math.sqrt(delta))/(2*a)
        let x2 = (-b+ Math.sqrt(delta))/(2*a)
        alert("pt co 2 nghiem")
        alert(`x1 = ${x1}`)
        alert(`x2 = ${x2}`)
    }
}