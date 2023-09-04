const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
//trazendo com as variaveis do html e do css

button.addEventListener('click',function(){  //adicionando o envento de click
    mobileNavbar.classList.toggle('active'); //toggle ativa ou tira alguma classe 
});


window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});     //adicionando um evento de scroll

