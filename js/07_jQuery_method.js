$(document).ready(function () {
    //브라우저에 내용이 완전히 출력되면 그 시점에 실행
    // li를 찾아서 각각에 대해  event처리를 지정해줘요
    $("ul > li").on("mouseover", function () {
        $(this).addClass("myStyle")
    })

    $("ul > li").on("mouseleave", function () {
        $(this).removeClass("myStyle")
    })
})

function insert_text() {
    //alert("rrrrrrrrrrrrrrrrr")
    $("#myDiv").html("<h1>고늠의 소리없는 아우성</h1>>")
    // text 그냥 문자임
    // html : 문자긴 문자인데 태그 적용이 가능함 ㄷㄷ
}

function delete_div() {
    //$("#deleteDiv").remove()  // 자기 포함 후손까지 전부 삭제
    $("#deleteDiv").empty()  // 자기는 놔두고 후손만 날림

}

function add_list() {
    var my_li = $("<li></li>").text("길동박").addClass("myStyle")
    // 태그를 생성한 다음 원하는 위치에 가져다 붙여요!
    // 1. append() : 자식으로 붙이고 맨 마지막 자식으로 붙여요!
    // $("ul").append(my_li)
    // 2. prepend() :자식으로 붙이고 맨 앞에 붙여요!
    // $("ul").prepend(my_li)
    // 3. after() : 형제로 붙이고 다음 형제로 붙여요!
    // $("ul > li:nth-child(3)").after(my_li)
    // 4. before() : 형제로 붙이고 바로 이전 형제로 붙여요!
    $("ul > li:last").before(my_li)


}