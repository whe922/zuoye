/**
 * Created by sks on 2016/6/20.
 */
(function () {
    var a1,menu1;
        function div() {
             a1=document.getElementsByClassName("a");
            menu1=document.getElementById("menu");
            a1[0].style.width="200px";
            a1[0].style.height="200px";
            a1[0].style.backgroundColor="red";
        }
    function addListeners() {
        a1[0].addEventListener("contextmenu", function (event) {
            // console.log("将要呈现右键菜单");
           event.preventDefault();
        })
      document.addEventListener("mouseup",function () {
          menu1.style.display="none";
      });
        document.addEventListener("click", function (event) {
            menu1.style.display="none";
        });
        a1[0].oncontextmenu=function (event) {
           var event=event||window.event;
            menu1.style.display="block";
           menu1.style.left=event.pageX+"px";
           menu1.style.top=event.pageY+"px";
       }

    }
    function init() {
      div();
        addListeners();
    }
    init();
    })();
//
// （function () {
//     Object.defineProperties(HTMLElement.prototype,{
//         useCustomContextMenu:{
//             get: function(){
//                 return this._useCustomContextMenu;
//             },
//             set: function(value){
//                 this._useCustomContextMenu = value;
//
//                 if (this._useCustomContextMenu){
//                     this.o=ncontextmenu=function(event){
//                         event.preventDefault();
//                     }
//                 }else{
//                     this.oncontextmenu=null;
//                 }
//             }
//         }
//     });
//
// }
//
// )();
// (function () {
//     function Human(name) {
//         this._name=name;
//     }
//     function hello() {
//         console.log("hello"+this._name)
//     }
//     var h=new Human("");
//     hello.call(h);
// })();
//function () {
//     function Human(name) {
//         this._name=name;
//     }
//     function hello() {
//         console.log("hello"+this._name)
//     }
//     var h=new Human("du");
//     hello.call(h);
// })();
//bind 绑定上下文对象
//console.log(arguments.callee)可调用宁明函数
// setTimeout(function () {
//     console.log(this);
// },1000);

//function () {
//     function Human(name) {
//         this._name=name;
//     }
//     function hello() {
//         console.log("hello"+this._name)
//     }
//     var h=new Human("du");
//     hello.call(h);
// })();
function max() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    arr.sort(function (a, b) {
        return a < b;

    });
    return arr[0];
}
console.log(max(1,2,3,4,-1,7));
