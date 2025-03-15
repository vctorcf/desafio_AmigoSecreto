const amigosIncluidos =[];
const amigoSecreto =[];

let teste = document.getElementById("lista-amigos");
teste.remove();
let espacoBotaoRemover = document.querySelector(".friends__container");

function adicionar(){
    let novoAmigo = document.getElementById("nome-amigo").value;

    if(novoAmigo==''){
        alert("Por favor, insira um nome.");
        return;
    } else if(amigosIncluidos.includes(novoAmigo)){
        alert(`O nome "${novoAmigo}" já existe na lista! Se 2 ou mais participantes possuirem o mesmo nome, por favor insira também um segundo nome para diferencia-los.`);
    } else{
    amigosIncluidos.push(novoAmigo);
    amigoSecreto.push(novoAmigo);

    espacoBotaoRemover.innerHTML +=`<button id="${novoAmigo}__button" onclick="remover('${novoAmigo}')" type="button" class="button secondary">${novoAmigo}</button>`;
    console.log(amigosIncluidos);
    }
}

function sortear(){
    metodoFisherYates(amigoSecreto);
    console.log(amigoSecreto);
    
    if(checarNomesIguais(amigosIncluidos,amigoSecreto)==true){
        return sortear();
    } else if (amigosIncluidos.length<4){
        alert("Para que o jogo do amigo secreto funcione de verdade é necessário um mínimo de 4 participantes!")
        return;
    } else {
        let listaDosAmigosSecretos = "";
        for(let i=0;i!=amigosIncluidos.length;i++){
            listaDosAmigosSecretos=listaDosAmigosSecretos+amigosIncluidos[i]+"→"+amigoSecreto[i]+"<br>";
        }
        document.getElementById("lista-sorteio").innerHTML = listaDosAmigosSecretos;
    }
    
}

function reiniciar(){
    for(let i=0;amigosIncluidos.length!=0;i++){
        amigosIncluidos.pop();
    }
    console.log("Reiniciar amigosIncluidos OK");

    for(let i=0;amigoSecreto.length!=0;i++){
        amigoSecreto.pop();
    }
    console.log("Reiniciar amigoSecreto OK");

    document.getElementById("lista-sorteio").textContent = "";
    console.log("Reiniciar a lista de sorteio OK");
    

    espacoBotaoRemover.innerHTML='';
    console.log("Reiniciar botões de remover OK");
}

function metodoFisherYates(array){
    for (let i= array.length-1;i>0;i--){
        let j = Math.floor(Math.random()*(i+1));
        let k = array[i];
        array[i] = array[j];
        array[j] = k;
    }
}

function checarNomesIguais(array1,array2){
    for(let i=0;array1.length!=i;i++){
        if (array1[i]==array2[i]){
            console.log(array1[i],array2[i]);
            return true;
        }
    }
}

function remover(participante){
    let indexAmigosIncluidos = amigosIncluidos.findIndex(amigo => amigo === participante);
    let indexAmigoSecreto = amigoSecreto.findIndex(amigo => amigo === participante);
    console.log("Index encontrado!");

    amigosIncluidos.splice(indexAmigosIncluidos,1);
    amigoSecreto.splice(indexAmigoSecreto,1);
    console.log("Nomes removidos da 2 listas!");

    document.getElementById(`${participante}__button`).remove();
}
