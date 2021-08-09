var items=document.getElementsByClassName('item');
var goprebtn=document.getElementById('gopre');
var gonextbtn=document.getElementById('gonext');
var points=document.getElementsByClassName('point');
var point=document.getElementsByClassName('point');
var index=0;//表示第Index张图片在最上面
  //清除所有的active
  var clearactive=function(){
   for(var i=0;i<items.length;i++){
       items[i].className='item';
   }
   for(var i=0;i<items.length;i++){
       points[i].className='point';
   }
}
//跳到应该去的点和图片
var goindex = function(){
    clearactive();
    items[index].className='item active';
    points[index].className='point active';
    }
//去下一张图片
var gonext=function(){
 if(index<3)
     {
         index++;
        }
     else{index=0;
    } 
     goindex();
}
//去上一张图片
var gopre=function(){
 if(index>0)
     {
         index--;
        }
     else{index=3;
    } 
     goindex();
}

 
//给按钮加上相应功能
gonextbtn.addEventListener('click',function(){
   gonext();
   time=0;
})
goprebtn.addEventListener('click',function(){
   gopre();
   time=0;
})

//给点点加上相应功能
for(var i=0;i<points.length;i++){
   points[i].addEventListener('click',function(){
       var pointindex=this.getAttribute('data-index');
       index=pointindex;
       goindex();
       time=0;
   })
}

//设置定时器  2000毫秒跳转一次
var time=0;

setInterval(function(){
    time++
    if(time==20)
   {  
       gonext();
       time=0;
   }
},100)