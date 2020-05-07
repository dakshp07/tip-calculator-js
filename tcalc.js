$(".submit").on("click",function even(){
    if($(".amt").val()=="")
    {
        alert("Please Fill The Fields");
    }
    else{
        var amou=$(".amt").val();
        var tips=$(".tip").val();
        var tipamou=(tips/100)*amou;
        var totalamt=parseFloat(tipamou)+parseFloat(amou);
        $(".tamt").val(totalamt);
    }
});
$(".clear").on("click",function odd(){
    location.reload(false);
})