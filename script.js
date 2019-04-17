$("button").click(function(){
   $.ajax({
    url: "https://aws.random.cat/meow",
    method: "GET",
    success: function(response) {
    var image_url = response.file;
    $(".imageContainer").append("<img src='"+ image_url + "'/>");  },
});
});