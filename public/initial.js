var senhaLogin = document.querySelector('.senha.login');
var senhaRegister = document.querySelector('.senha.register');
var olhoLogin = document.querySelector(".icon2.login ion-icon");
var olhoRegister = document.querySelector('.icon2.register ion-icon')
var wrapper = document.querySelector('.wrapper');
var loginLink = document.querySelector(".login-link");
var registerLink = document.querySelector('.register-link');
var close = document.querySelector('.icon-close');
var btnLogin = document.querySelector('.btnLogin');
//troca de telas (criar conta/fazer login)
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');

});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');

});


//elemento que mostra ou não a senha digitada pelo usuário
olhoLogin.addEventListener('click',()=>{
    if (senhaLogin.type === "password"){
        senhaLogin.type = "text";
        olhoLogin.name = "eye-off-outline"
    }else{
        senhaLogin.type = "password";
        olhoLogin.name= "eye-outline";
    }
});
olhoRegister.addEventListener('click',()=>{
    if (senhaRegister.type === "password"){
        senhaRegister.type = "text";
        olhoRegister.name = "eye-off-outline"
    }else{
        senhaRegister.type = "password";
        olhoRegister.name= "eye-outline";
    }
});


//fechar e abrir páginas de login registro
