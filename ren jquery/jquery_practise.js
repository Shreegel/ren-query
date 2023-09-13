$(document).ready(function(){
    $("button").click (function(){
       $.get("https://reqres.in/api/users?page=1",function(response, status){
        console.log(status);
        if (status=="success"){
            let responseData= response.data;
            if(responseData.length>0){
                for (var i=0;i<responseData.length; i++){
                    $("#apiList").append("<li>"+responseData[i].first_name+"</li>");

                }
            }
            console.log(responseData);
        }
        else{
            $("#apiFailure").text('Error loading data');
        }
       });
    });
});