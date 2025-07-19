 var closebtn = document.getElementById("closebtn");
    var header0 = document.getElementById("header0");
    closebtn.addEventListener("click", function () {
        header0.style.display = "none";
    })

    const images = [
        "images/bg11.png",
        "images/bg22.png",
        "images/bg33.png"
    ];

    let currentIndex = 0;
    var slider = document.getElementById("slider");
    var nextbtn = document.getElementById("nextbtn")
    var previousbtn = document.getElementById("previousbtn")

    nextbtn.addEventListener("click", function () {
        currentIndex++;
        if (currentIndex > images.length) {
            currentIndex = 0;
        }
        slider.style = "transition:1s ";
        slider.style.backgroundImage = "url('" + images[currentIndex] + "')";
    })

    previousbtn.addEventListener("click", function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        slider.style = "transition:1s ";
        slider.style.backgroundImage = "url('" + images[currentIndex] + "')";
    });


//    menuicon
    var sidenavbarr =document.getElementById("sidenavbarr")
    var menuicon = document.getElementById("menuicon")
    menuicon.addEventListener("click",function(){
        sidenavbarr.style.left=0;
    })

    var sidenavclose = document.getElementById("sidenavclose")
    sidenavclose.addEventListener("click",function(){
        sidenavbarr.style.left="-50%";
    })

    // mostwantedsection NOTE THIS LOGIC DOWN IN THE COMMAND


//     const likeButton = document.getElementById("likebuttonn");
//      const likeIcon = document.getElementById("likeicon");

//   let liked = false;

//     likeButton.addEventListener("click",function(){
//         liked = !liked;
//         likeIcon.src = liked ? "images/liked.png" : "images/like.png";
//     })
    
//     const likeButton1 = document.getElementById("likebuttonn1")
//     const likeIcon1 = document.getElementById("likeicon1")

//     let liked1 = false;

//     likeButton1.addEventListener("click",function(){
//         liked1 = !liked1;
         
//         likeIcon1.src = liked1 ? "images/liked.png" : "images/like.png";
//     })

//     const likeButton2 = document.getElementById("likebuttonn2")
//     const likeIcon2 = document.getElementById("likeicon2");
    
//     let liked3 = false;

//     likeButton2.addEventListener("click",function(){
//         liked3 = !liked3;

//         likeIcon2.src = liked3 ? "images/liked.png" : "images/like.png"
//     })

//     const likeButton3 = document.getElementById("likebuttonn3")
//     const likeIcon3 = document.getElementById("likeicon3");
    
//     let liked4 = false;

//     likeButton3.addEventListener("click",function(){
//         liked4 = !liked4;

//         likeIcon3.src = liked4 ? "images/liked.png" : "images/like.png"
//     })

//     const likeButton4 = document.getElementById("likebuttonn4")
//     const likeIcon4 = document.getElementById("likeicon4");
    
//     let liked5 = false;

//     likeButton4.addEventListener("click",function(){
//         liked5 = !liked5;

//         likeIcon4.src = liked5 ? "images/liked.png" : "images/like.png"
//     })

//     const likeButton5 = document.getElementById("likebuttonn5")
//     const likeIcon5 = document.getElementById("likeicon5");
    
//     let liked6 = false;

//     likeButton5.addEventListener("click",function(){
//         liked6 = !liked6;

//         likeIcon5.src = liked6 ? "images/liked.png" : "images/like.png"
//     })

//     const likeButton6 = document.getElementById("likebuttonn6")
//     const likeIcon6 = document.getElementById("likeicon6");
    
//     let liked7 = false;

//     likeButton6.addEventListener("click",function(){
//         liked7 = !liked7;

//         likeIcon6.src = liked7 ? "images/liked.png" : "images/like.png"
//     })


 document.querySelectorAll(".like-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const icon = btn.querySelector(".like-icon");
        const liked = icon.src.includes("liked.png");
        icon.src = liked ? "images/like.png" : "images/liked.png";
      });
    });