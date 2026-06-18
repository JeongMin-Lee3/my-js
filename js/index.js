$(document).ready(()=>{
    
    $('#login-btn').on('click', ()=>{
        //alert('로그인 버튼이 클릭되었습니다.');
        // $('body').css('background-color', 'red');

        var userId = $('#user-id').val();
        console.log(userId);

        alert(userId + '로 가입합니다.');
    });



});