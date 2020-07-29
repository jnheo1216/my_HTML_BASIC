// 제이쿼리를 이용했기때문에 사용 가능

// 머튼을 누르면 함수 발동
function my_func1() {
    // 0. 가장 먼저 배워야 하는 것 : selector
    // 1. 전체선택자(universal selector)
    $("*").css("color", "red") // 모든 앨리먼트들을 다 선택해
    // 2. 태그 선택자(tag selector)
    $("li").css("color", "yellow")
    // 3. 아이디 선택자(id selector)
    $("#haha").text("제주")   //인자가 없으면 값을 알아오라는 소리
                             //인자가 있으면 값을 변경하라는 소리
    // 4. 클래스 선택자(class selector
    $(".region").css("background-color", "blue")
    // 5. 구조 선택자(자식선택자 후손선택자)
    $("ol > li").css("color", "steelblue")
    $("div li").css("color", "pink")  // 스페이스바는 후손을 의미한다
    // 6. 구조선택자 ( 형제선택자 )
    $("#haha + p").remove()
    $("#hong ~ li").remove()
    // 7. 속성선택자
    $("[id]").css("color", "darkblue")
    // 요 7개면은 어지간한 앨리먼트는 다 선택가능

}