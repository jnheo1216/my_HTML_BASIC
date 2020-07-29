// 자바 코드를 작성하자
// 자바스크립트에 대해 알아봐요

// 자바스크립트? 웹 클라이언트에서 실행되는 언어
// 요즘엔 서버용 개발언어로 쓰기도 함 (Node.js)


// my_var = 100(python)
var my_var = 100 // java script
var tmp = 3.14 // number
var tmp1 = "Hello" // string (파이썬과 동일)
var tmp2 = true // boolean (파이썬은 대문자임)
var tmp3 = [1,2,3,4,555] // array

// 객체를 표현할 때????
var tmp4 = {name : "홍길동", age : "25"} //마치 dict처럼
console.log(tmp4.name)

// 함수는 두가지가 있음
// 1. 선언적 함수 ( 파이썬의 일반적인 함수 ) 함수의 이름이 존재
function my_func(x, y) {
    return x + y
}
// 2. 익명함수( 함수의 이름이 없어요! ) => 다른 말로 람다함수 (=파이썬의 일급함수(first class))
// 변수에 저장해서 사용. 일급함수의 특징임
// 함수를 다른 함수의 인자로, 함수의 리턴값으로 함수를 이용
var my_add = function (x, y) {
    return x + y
}


