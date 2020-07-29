function print_text() {
    //버튼을 눌렀을때 실행할 함수
    //alert("???????????")
    console.log($("#apple").text())  // text : 태그와 태그 사이의 글자를 가져오는 것
    console.log($("#pineapple").text())
    console.log($("ul > li.mylist").text())  // ul의 자식중에 li중에서 mylist란 클래스 찾는 법
    console.log($("ul > li[class]").text())  // 위에랑 같은말임

    console.log($("input[type=text]").val())

    console.log($("ol > li.mylist:first").text())  // :first = 선택된 것들중에 제일 처음에 있는거
    console.log($("ol > li.mylist:last").text())  // 마지막거
    console.log($("ol > li.mylist:first + li").text())  // + 기호 : 이거 다음거
    console.log($("ol > li.mylist:nth-child(2)").text())  //nth-child : 몇번째 순서니?

    $("input[type=text]").attr("size",10)  // attr() : 속성을 제어해줌
}

function my_func2() {
    // alert("file change")
    // 1. 선택한 과일이 뭔지 알아내야함
    var fruit = $("select > option:selected").text()

    var my_list = $("ul > li")
    my_list.each(function (idx, item) {
        //console.log($(item).text())
        if ($(item).text() == fruit) {
            $(item).css("color", "red")
        }
    })  // each : 반복해!!

}