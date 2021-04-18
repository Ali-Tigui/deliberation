setInterval(function(){
    document.querySelector('div').style.top=(window.innerHeight-document.querySelector('div').offsetHeight)/2+ "px";
    document.querySelector('div').style.left=(window.innerWidth-document.querySelector('div').offsetWidth)/2 +"px";
},10)
document.getElementById('btn').onclick=function(){
    
    var moy=(Number(document.querySelectorAll("input")[0].value)*2+Number(document.querySelectorAll("input")[1].value)*2+Number(document.querySelectorAll("input")[2].value)*3+Number(document.querySelectorAll("input")[3].value)*2+Number(document.querySelectorAll("input")[4].value)*1+Number(document.querySelectorAll("input")[5].value)*2+Number(document.querySelectorAll("input")[6].value)*0.5+Number(document.querySelectorAll("input")[7].value)*0.5+Number(document.querySelectorAll("input")[8].value)*1+Number(document.querySelectorAll("input")[9].value)*1+Number(document.querySelectorAll("input")[10].value)*1+Number(document.querySelectorAll("input")[11].value)*1)/17;
        if (moy <10 ){
            document.querySelector('.not').style.color="red";
        }else if(moy<13){
         document.querySelector('.not').style.color="#00249b";
            
        }else{
            document.querySelector('.not').style.color="#043c0d";
        }
    document.querySelector('.not').textContent=moy;
    
}
