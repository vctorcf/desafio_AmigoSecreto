const amigosIncluidos =[];
const amigoSecreto =[];

function adicionar(){
    let novoAmigo = document.getElementById("nome-amigo").value;
    console.log(novoAmigo);

    if(novoAmigo==''){
        alert("Por favor, insira um nome.");
        return;
    } else if(amigosIncluidos.includes(novoAmigo)){
        alert(`O nome "${novoAmigo}" já existe na lista! Se 2 ou mais participantes possuirem o mesmo nome, por favor insira também um segundo nome para diferencia-los.`);
    } else{
    amigosIncluidos.push(novoAmigo);
    amigoSecreto.push(novoAmigo);
    console.log(amigosIncluidos)

    document.getElementById("lista-amigos").innerHTML = amigosIncluidos;
    }
}

function sortear(){
    metodoFisherYates(amigoSecreto);
    console.log(amigoSecreto);
    
    if(checarNomesIguais(amigosIncluidos,amigoSecreto)==true){
        return sortear();
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

for(let i=0;amigoSecreto.length!=0;i++){
    amigoSecreto.pop();
}


document.getElementById("lista-amigos").textContent="";
document.getElementById("lista-sorteio").textContent = "";
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
