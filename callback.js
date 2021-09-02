function welcomeMessage(names,name){
    name(names);
}
// const names = ['Ishtiak anam','Kairul anam'];
// const myObj = {name:"ashraful",age:"20"};
function greetmorning(name){
    console.log('Good morning',name)
}
welcomeMessage('Ishtiak Anam',greetmorning);