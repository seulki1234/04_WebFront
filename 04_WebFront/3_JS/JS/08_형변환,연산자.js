//형변환 확인
//(쿼리로 가져오거나 or getElementsByClassName 가져오거나 둘다 가능 )
//const btn1 = document.querySelector(".btn1");

//const btn1 = document.getElementsByClassName("btn1") 만 써주면
//배열형태로 가져옴(그래서 [0] 을 꼭 써줘야함)
const btn1 = document.getElementsByClassName("btn1")[0];


btn1.addEventListener("click",function(){
    console.log("parseInt('123')" + parseInt("123"));
    console.log("parseInt('3.14')" + parseInt("3.14"));
    console.log("---------------------------------")

    console.log("parseFloat('123')" + parseFloat("123"));
    console.log("parseFloat('3.14')" + parseFloat("3.14"));
    console.log("---------------------------------")

    console.log("Number('123')" + Number("123"));
    console.log("Number('3.14')" + Number("3.14"));

})

//isNaN(값) --Not a number
const input2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(){
    if(isNaN(input2.value)){
        alert("숫자가 아닙니다");
    }else{
        alert("숫자 입니다");
    }
})






//Math 확인
const input3=document.getElementById("input3");
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click",function(){

    console.log(Math.ceil(input3.value));
    console.log(Math.floor(input3.value));
    console.log(Math.trunc(input3.value));
    console.log(Math.round(input3.value));
})


//Math.random()
document.getElementById("btn4").addEventListener("click",function(){

    //rgb 색상 랜덤 대입(0~255)
    const r = Math.floor(Math.random() * 256)    //0 <= ran <256
    const g = Math.floor(Math.random() * 256)    //0 <= ran <256
    const b = Math.floor(Math.random() * 256)    //0 <= ran <256

    document.querySelector("body").style.backgroundColor
     = "rgb(" + r + "," + g + "," + b + ")"
})