// import { join } from "path";

$(function () {

    var ltKeyArr = JSON.parse(localStorage.getItem("ltkey") || "[]");

    if (ltKeyArr.length > 0) {
        var html = '';
        // forEach无法使用break终止循环
        ltKeyArr.forEach(function (value) {
            html += "<li class='mui-table-view-cell'>" + value + "</li>"
        });
        $("#historyList").html(html);
        $("#historyList").html();

    }


    $("#searchBtn").on("click", function () {
        var keyWord = $(this).siblings("input").val();

        //trim()去除两边的空白
        if (keyWord.trim().length == 0) {
            return mui.alert("请输入关键字")
        }

        ltKeyArr.push(keyWord)
        localStorage.setItem("ltkey", JSON.stringify(ltKeyArr));

        location.assign(`search-res.html?keyWord=${keyWord}`)
    })

})