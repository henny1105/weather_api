$(window).on('load', function() {
    loading();

    function loading(){
        setTimeout(function(){
            $(".loading").addClass("show");
        }, 500)	
    }

    setTimeout(function(){
       $(".loading .inner").addClass("on");
    }, 1600)	

    setTimeout(function(){
        $(".loading").addClass("on")
     }, 2200)

     setTimeout(function(){
        $("#container").addClass("on")
     }, 3000)

});


var city = ['New York', 'tokyo', 'paris', 'beijing', 'sydney'];

callData();

function callData() {
    for (var i = 0; i < city.length; i++) {
        var apiKey = "84bbf1bc16c21571bb35b7478e7b2d24" 
        var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=" + city[i] + "&appid=" + apiKey;

        (function (i) {
            $.ajax({
                url: apiURI,
                dataType: "json",
                type: "GET",
                success: function (data) {
                    console.log(data);
                    createList(data);
                },
                error: function (error) {
                    console.error(error);
                }
            })
        })(i);
    }
}

function createList(data) {
    var city = data.name;
    var tit = data.main.temp - 273.15;
    var tit_min = data.main.temp_min - 273.15;
    var tit_max = data.main.temp_max - 273.15;
    var weather = data.weather[0].main;
    var weather_desc = data.weather[0].description;
    var humidity = data.main.humidity + "%";
    var wind = data.wind.speed + "m/s SSW";
    var cloudy = (data.clouds.all) + "%";
    var imgSrc = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $("html컴포넌트").attr("src", imgSrc);

    if (city == 'New York') {
        $(".newyork .temp span").text(`${Math.floor(tit)}°`); 
        $(".newyork .temp_max span").text(`${Math.floor(tit_max)}°`); 
        $(".newyork .temp_min span").text(`${Math.floor(tit_min)}°`); 
        $(".newyork .weather span").text(weather);
        $(".newyork .weather_desc span").text(weather_desc);
        $(".newyork .humidity span").text(humidity);

        $(".newyork .wind span").text(wind);
        $(".newyork .cloudy span").text(cloudy);        

        $(".newyork .imgSrc span").css({
            backgroundImage: "url(" + imgSrc + ")",
            width: '50px',
            height: '50px',
            display: 'inline-block'
        })
    }else if(city == "Beijing") {
        $(".beijing .city").text(city);
        $(".beijing .temp span").text(`${Math.floor(tit)}°`);
        $(".beijing .temp_max span").text(`${Math.floor(tit_max)}°`); 
        $(".beijing .temp_min span").text(`${Math.floor(tit_min)}°`); 
        $(".beijing .weather span").text(weather);
        $(".beijing .weather_desc span").text(weather_desc);
        $(".beijing .humidity span").text(humidity);

        $(".beijing .wind span").text(wind);
        $(".beijing .cloudy span").text(cloudy);
        $(".beijing .imgSrc span").css({
            backgroundImage: "url(" + imgSrc + ")",
            width: '50px',
            height: '50px',
            display: 'inline-block'
        })
    }else if(city == "Tokyo") {
        $(".tokyo .city").text(city);
        $(".tokyo .temp span").text(`${Math.floor(tit)}°`);
        $(".tokyo .temp_max span").text(`${Math.floor(tit_max)}°`); 
        $(".tokyo .temp_min span").text(`${Math.floor(tit_min)}°`); 
        $(".tokyo .weather span").text(weather);
        $(".tokyo .weather_desc span").text(weather_desc);
        $(".tokyo .humidity span").text(humidity);

        $(".tokyo .wind span").text(wind);
        $(".tokyo .cloudy span").text(cloudy);
        $(".tokyo .imgSrc span").css({
            backgroundImage: "url(" + imgSrc + ")",
            width: '50px',
            height: '50px',
            display: 'inline-block'
        })
    }else if(city == "Paris") {
        $(".paris .city").text(city);
        $(".paris .temp span").text(`${Math.floor(tit)}°`);
        $(".paris .temp_max span").text(`${Math.floor(tit_max)}°`); 
        $(".paris .temp_min span").text(`${Math.floor(tit_min)}°`); 
        $(".paris .weather span").text(weather);
        $(".paris .weather_desc span").text(weather_desc);
        $(".paris .humidity span").text(humidity);

        $(".paris .wind span").text(wind);
        $(".paris .cloudy span").text(cloudy);
        $(".paris .imgSrc span").css({
            backgroundImage: "url(" + imgSrc + ")",
            width: '50px',
            height: '50px',
            display: 'inline-block'
        })
    }else if(city == "Sydney") {
        $(".sydney .city").text(city);
        $(".sydney .temp span").text(`${Math.floor(tit)}°`);
        $(".sydney .temp_max span").text(`${Math.floor(tit_max)}°`); 
        $(".sydney .temp_min span").text(`${Math.floor(tit_min)}°`); 
        $(".sydney .weather span").text(weather);
        $(".sydney .weather_desc span").text(weather_desc);
        $(".sydney .humidity span").text(humidity);

        $(".sydney .wind span").text(wind);
        $(".sydney .cloudy span").text(cloudy);
        $(".sydney .imgSrc span").css({
            backgroundImage: "url(" + imgSrc + ")",
            width: '50px',
            height: '50px',
            display: 'inline-block'
        })
    }
}


$(".america").on("click", function(){
    $(".popup.newyork").css({
        opacity: 1,
        zIndex: 999
    })
});
$(".china").on("click", function(){
    $(".popup.beijing").css({
        opacity: 1,
        zIndex: 999
    })
});
$(".japan").on("click", function(){
    $(".popup.tokyo").css({
        opacity: 1,
        zIndex: 999
    })
});
$(".france").on("click", function(){
    $(".popup.paris").css({
        opacity: 1,
        zIndex: 999
    })
});
$(".australia").on("click", function(){
    $(".popup.sydney").css({
        opacity: 1,
        zIndex: 999
    })
});

$(".icon").on("click", function(){
    $(".popup").css({
        zIndex: -1,
        opacity: 0
    })
});