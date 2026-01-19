console.log("Ola Aventureiro!!! Qual seu Nome??");
let NomeAventureiro = "Garcia";
console.log("Bem vindo "+ NomeAventureiro +"!!!");
console.log("Qual seu XP?");
let Nivel = 13000;

if(Nivel <= 1000){
    console.log("O Herói de nome " + NomeAventureiro + " está no nível de FERRO")
}else if (Nivel >= 1001 && Nivel < 2000) {
    console.log("O Herói de nome " + NomeAventureiro + " está no nível de BRONZE")
}else if (Nivel >= 2001 && Nivel < 5000) {
    console.log("O Herói de nome " + NomeAventureiro + " está no nível de PRATA")
}else if (Nivel >= 5001 && Nivel < 7000) {
    console.log("O Herói de nome " + NomeAventureiro + " está no nível de OURO")
}else if (Nivel >= 7001 && Nivel < 8000) {
    console.log("O Herói de nome " + NomeAventureiro + " está no nível de PLATINA")
}else if (Nivel >= 8001 && Nivel < 9000) {
    console.log("O Herói de nome " + NomeAventureiro + " está no nível de ASCENDENTE")
}else if (Nivel >= 9001 && Nivel < 10000) {
    console.log("O Herói de nome " + NomeAventureiro + " está no nível de IMORTAL")
}else if (Nivel >= 10001) {
    console.log("O Herói de nome " + NomeAventureiro + " está no nível de RADIANTE")
};