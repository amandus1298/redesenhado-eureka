function carregar(){
var data=new Date()
var hora=data.getHours()
var minuto=data.getMinutes()
var msg=document.getElementById('msg')

if(hora>=0 && hora<12){
    console.log('bom dia')
    document.body.style.background='linear-gradient(to left,#fdffd9,gold'
}else if(hora>=12 && hora<18){
    document.body.style.background='linear-gradient(to right,#b9a173,#fdffd9'
    console.log('boa tarde')
}else{
    document.body.style.background='linear-gradient(to right,#3a415a,#302c25'
    console.log('Boa noite')
}
msg.textContent=`são ${hora} horas e ${minuto} minutos `
msg.style.textTransform='uppercase'
}