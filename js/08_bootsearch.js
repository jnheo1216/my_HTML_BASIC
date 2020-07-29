
function call_ajax() {
    //입력텍스트 상자에서 키보드로 입력이 들어갔을 때 호출
    //모든 키가 아니라 엔터키 경우에만 처리되도록
    if(event.keyCode == 13) {
        //alert("엔터가 입력")
        //AJAX콜을 이용해서 데이터를 받는 코드
        //ajax의 인자로 자바스크립트 객체를 넣어줘요 json
        // => 파이썬의 dict와 유사함
        // data : 서버프로그램에 넘겨줄 데이터들
        $.ajax({
            async : true, // 키값 정해져있음 // async : true => 비동기방식(default)
            url : "http://192.168.0.200:8080/bookSearch/search",
            data : { keyword : $("input[type=text]").val() },
            type : "GET",
            timeout : 3000,
            dataType : "json",  // 결과 json을 자동으로 객체로 변환 // 원래 json은 객체가 아니고 그냥 문자열ㅇ;ㅁ
            success : function(result) {
                //alert("서버호출 성공")
                //alert(result[0].title)  //제목
                /*
                    <tr>
                        <td><img src=""></td>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>sit</td>
                    </tr>  이거 만들어야함
                */
                $("tbody").empty()

                //jQuery식 반복문 방법
                // $.each(result, function (idx, item) {
                //     var tr = $("<tr></tr>")
                //     var imgTd = $("<td></td>")
                //     var img = $("<img />").attr("src", item.img)  //이미지 태그 만드는 법
                //     imgTd.append(img)  //합체진화
                //     tr.append(imgTd)
                //     var titleTd = $("<td></td>").text(item.title)
                //     var authorTd = $("<td></td>").text(item.author)
                //     var priceTd = $("<td></td>").text(item.price)
                //     var buttonTd = $("<td></td>")
                //     var button = $("<button />").text("Del")//.attr("onclick", del_list())
                //     buttonTd.append(button)
                //     tr.append(titleTd)
                //     tr.append(authorTd)
                //     tr.append(priceTd) //만듬
                //     tr.append(buttonTd)
                //     $("tbody").append(tr) //붙여
                // })

                for (var i=0; i<result.length;i++) {
                    var tr = $("<tr></tr>")
                    var imgTd = $("<td></td>")
                    var img = $("<img />").attr("src", result[i].img)  //이미지 태그 만드는 법
                    imgTd.append(img)  //합체진화
                    tr.append(imgTd)
                    var titleTd = $("<td></td>").text(result[i].title)
                    var authorTd = $("<td></td>").text(result[i].author)
                    var priceTd = $("<td></td>").text(result[i].price)
                    var delTd = $("<td></td>")
                    var delBtn = $("<input />").attr("type", "button").attr("value", "삭제")

                    delBtn.on("click", function () {
                        //alert("del")
                        $(this).parent().parent().remove()  //현재 이벤트가 발생된 객체를 지칭
                    })
                    
                    delTd.append(delBtn)
                    tr.append(titleTd)
                    tr.append(authorTd)
                    tr.append(priceTd) //만듬
                    tr.append(delTd)
                    $("tbody").append(tr) //붙여
                }

            }, // 성공하면 이거 해라
            error : function (error) {
                alert("서버호출 실패")
            } // 실패하면 이거 해라
        })
    }

}

