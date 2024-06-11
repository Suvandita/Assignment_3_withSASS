let button_element= document.getElementsByClassName("btn")[0];
let video_status=document.getElementsByTagName("video")[0];
        
        button_element.addEventListener("click",function (){
            if(button_element.innerHTML=="Play"){
                button_element.innerHTML="Pause";
                video_status.play();
            }
            else{
                button_element.innerHTML="Play";
                video_status.pause();
            }
        })


let element= document.getElementsByClassName("click_dropbtn")[0];
let count=0;
element.addEventListener("click",function(){
    count++;
    if(count%2==0){
        document.getElementsByClassName("click_dropdown-content")[0].style.display="none";
        console.log(count);
    }
    else{
        document.getElementsByClassName("click_dropdown-content")[0].style.display="block";
    }

})