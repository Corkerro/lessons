// let a = prompt("Укажите время")
// 10-18
// if (a >= "10:00" && a <="18:00"){
//     if(a >= "12:00" && a <= "12:59"){
//         alert("У нас обед.")
//     }
//     else{alert("Магазин работает.")}
// }
// else[alert("Магазин закрыт.")]


// if (a < 10 || a > 18){
//     alert("Магазин закрыт.")
// }
// else[alert("Магазин работает.")]

// if (a <! 10 || a >! 18)[
//     alert("Магазин работает.")
// ]
// else[alert("Магазин закрыт.")]

// alert(1 || "Den")
// alert(null || 1)
// alert(null || 0 || 1)
// alert(null || 0)
// alert("Den" || 1)

// alert(alert(1) || 2 || alert(3))

let fq = prompt("Кто ты?")
if (fq != null){
    if (fq == "admin"){
    let sq = prompt("Введите пароль.")
        if (sq != null){
            if (sq == "adminpass"){
                alert("Приветствую")
            }
            else{alert("Пароль не верный!")}
        }

    }
    else{
        let user1Pass = prompt("Введите пароль:")
        alert("Добро пожаловать к нам на сайт, " + fq )
    }
}
