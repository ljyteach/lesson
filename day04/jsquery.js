function $(selector){
   return $.prototype.init(selector);
}

$.prototype.init = function(selector){
    if(selector instanceof Object){
        this.dom = [selector];
    }else{
        this.dom = document.querySelectorAll(selector);
    }
    return this;
}

$.prototype.click = function(fun){
    // this.dom.onclick = fun;
    for(var i = 0;i<this.dom.length;i++){
        this.dom[i].addEventListener('click',fun);
    }
   
}

$.prototype.text = function(){
    return this.dom[0].innerHTML;
}

