//获取实际的offset
export const offset=function(curEle){
    var totalLeft = null,totalTop = null,par = curEle.offsetParent;
    //首先加自己本身的左偏移和上偏移
    totalLeft+=curEle.offsetLeft;
    totalTop+=curEle.offsetTop
    //只要没有找到body，我们就把父级参照物的边框和偏移也进行累加
    while(par){
        if(navigator.userAgent.indexOf("MSIE 8.0")===-1){
        //累加父级参照物的边框
        totalLeft+=par.clientLeft;
        totalTop+=par.clientTop
        }
        
        //累加父级参照物本身的偏移
        totalLeft+=par.offsetLeft;
        totalTop+=par.offsetTop
        par = par.offsetParent;
    }

    return{
        left:totalLeft,
        top:totalTop
    }
}

//生成加入购物车动画
export const addcart=function(src,call){
    //生成飞入曲线动画
    let port=document.createElement('img')
    let startX=offset(event.currentTarget).left+(event.currentTarget.offsetWidth/2)
    let startY=offset(event.currentTarget).top-document.documentElement.scrollTop+(event.currentTarget.offsetHeight/4)
    let cart=document.querySelector('#cart-icon')
    let endX=document.body.offsetWidth-document.querySelector('.xjk-right-bar').offsetWidth,endY='52%'
    port.className='add-port'
    port.style.left=startX+'px'
    port.style.top=startY+'px'
    port.src=src
    document.body.append(port)
    setTimeout(()=>{
        port.style.left=endX+'px'
        port.style.top=endY
        port.style.height='10px'
        port.style.width='10px'
        port.style.opacity='0'
    },100)
    port.addEventListener('transitionend',()=>{
        if(port&&port.parentNode){
            port.parentNode.removeChild(port);
            bubble()
            if(call){
                call()
            }
        }
    },false);

    //生成+1冒泡动画
    function bubble(){
        let bub=document.createElement('div')
        bub.className='cart-bubble'
        bub.style.left=endX+'px'
        bub.style.top='51%'
        bub.innerText='+1'
        document.body.append(bub)
        cart.parentNode.style.transition= 'all .5s ease-out';
        setTimeout(()=>{
            bub.style.left=endX+'px'
            bub.style.top='45%'
            bub.style.opacity='0'
            bub.style.transform="scale(0.8)"
            cart.parentNode.style.transform="scale(1.5)"
        },20)
        bub.addEventListener('transitionend',()=>{
            if(bub&&bub.parentNode){
                bub.parentNode.removeChild(bub);
            }
        },false);
        cart.parentNode.addEventListener('transitionend',()=>{
            cart.parentNode.style.transform="scale(1)"
        },false);
    }
}