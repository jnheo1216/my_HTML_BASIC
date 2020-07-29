function start_clock() {
    //alert("버튼이 클릭클릭~")
    // 시계를 출력해야함
    // 현재시간을 구해요
    // 이걸 HTML특정 영역에 출력
    // 위의 작업을 1초마다 반복하면 된다!!
    // JavaScript는 특정시간마다 특정 행동을 반복해주는 함수가 있다!

    setInterval(function() {
        var today = new Date() // 날짜 객체 생성
        console.log(today.toLocaleString())
        //HTML의 특정 위치를 지정!
        var my_div = document.getElementById("myDiv")
        my_div.innerText = today.toLocaleString()
    }, 1000)

}