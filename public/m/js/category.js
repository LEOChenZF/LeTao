

$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    $.ajax({
        type: "get",
        url: "/category/queryTopCategory",
        dataType: "json",
        success: function (res) {
            var html = template("templateId", res);
            $("#dataList").html(html)


            var id = res.rows[0].id;
            getAjax(id);
            $("#dataList").find("li").eq(0).addClass("active")


        }
    })



    $("#dataList").on("click", "li", function () {

        var id = $(this).attr("data-id")
        $(this).addClass("active").siblings().removeClass("active")

        getAjax(id);


    })


    function getAjax(id) {
        $.ajax({
            type: "get",
            url: "/category/querySecondCategory",
            data: {
                id: id
            },
            dataType: "json",
            success: function (res) {
                var html = template("erTemplateId", res);
                $("#erdataList").html(html)

            }
        })
    }

})