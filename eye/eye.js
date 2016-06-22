/**
 * Created by sks on 2016/6/18.
 */
(function () {
var leftx,X,Y,x,y,rightx;
function coordinate() {
   leftx=document.getElementsByClassName("left_ball");

    X=leftx[0].getBoundingClientRect().left+15;
     Y=leftx[0].getBoundingClientRect().top+15;

    rightx=document.getElementsByClassName("right_ball");

    x=rightx[0].getBoundingClientRect().left+15;
    y=rightx[0].getBoundingClientRect().top+15;
   
}
function listener() {
    addEventListener("mousemove",function (event) {
        document.onmousemove=function (eye) {
            var r=20;
            var eye= eye? eye :window.event;
            var  xx = eye.pageX;
            var  yy = eye.pageY;

           var de_left=Math.atan2(Math.abs(xx-X),Math.abs(yy-Y));
           var leftx=document.getElementsByClassName("left_ball");
            if (xx-X>0&&yy-Y>0){
            leftx[0].style.left=r*Math.sin(de_left)+"px";
            leftx[0].style.top=r*Math.cos(de_left)+"px";}
            else if (xx-X>0&&yy-Y<0){
                leftx[0].style.left=r*Math.sin(de_left)+"px";
                leftx[0].style.top=-r*Math.cos(de_left)+"px";}
            else if (xx-X<0&&yy-Y>0){
                leftx[0].style.left=-r*Math.sin(de_left)+"px";
                leftx[0].style.top=r*Math.cos(de_left)+"px";}
            else if(xx-X<0&&yy-Y<0){
                leftx[0].style.left=-r*Math.sin(de_left)+"px";
                leftx[0].style.top=-r*Math.cos(de_left)+"px";}

            var de_right=Math.atan2(Math.abs(xx-x),Math.abs(yy-y));
            var rightx=document.getElementsByClassName("right_ball");
            if (xx-x>0&&yy-y>0){
                rightx[0].style.left=r*Math.sin(de_right)+"px";
                rightx[0].style.top=r*Math.cos(de_right)+"px";}
            else if (xx-x>0&&yy-y<0){
                rightx[0].style.left=r*Math.sin(de_right)+"px";
                rightx[0].style.top=-r*Math.cos(de_right)+"px";}
            else if (xx-x<0&&yy-y>0){
                rightx[0].style.left=-r*Math.sin(de_right)+"px";
                rightx[0].style.top=r*Math.cos(de_right)+"px";}
            else if(xx-x<0&&yy-y<0){
                rightx[0].style.left=-r*Math.sin(de_right)+"px";
                rightx[0].style.top=-r*Math.cos(de_right)+"px";}

        }

    })

}



    function init() {
        coordinate();
        listener()
    }
    init();
}());
// (function () {
//
//     function findEye() {
//         leye = document.getElementById("eyel");
//         reye = document.getElementById("eyer");
//     }
//     var leye,reye,Tongue;
//     var eyel_x = 746;
//     var eyel_y = 275;
//     var eyer_x = 833;
//     var eyer_y = 275;
//     function Listener(){
//         addEventListener("mousemove",function (event) {
//             document.onmousemove = function(e){
//                 var e = e ? e :window.event;
//                 var  x = e.pageX;
//                 var  y = e.pageY;
//                 var deg_left = Math.atan2(y-eyel_y,x-eyel_x)/Math.PI*180+90;
//                 var deg_right = Math.atan2(y-eyer_y,x-eyer_x)/Math.PI*180+90 ;
//                 leye.style.transform = "rotate("+deg_left+"deg)";
//                 reye.style.transform = "rotate("+deg_right+"deg)";
//
//             };
//         });
//     }
//     function init() {
//         findEye();
//         Listener();
//     }
//     init();
// })();