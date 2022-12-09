function chaycho(){
    const vtanh=document.querySelectorAll(".hinhanh img")
        const vtanhc=document.querySelector('.hinhanh')
        let soanh= vtanh.length
        let index=0
        vtanh.forEach(function(image,index) {
            image.style.left=index*100+"%"
        })
      
            index++;
            if(index >= soanh){index=0}
            vtanhc.style.left="-"+index*100+"%"
  
            setInterval(chaycho,10)
} 
window.addEventListener("scroll",function(){
    x.window.pageYOffset
    if(x>0){
        header.classlist.add("sticky")
    }
    else{
        header.classlist.remove("sticky")
    }
})
       