const character = document.getElementsByClassName("character")[0]; //Declarando e acessando a variável do personagem
const containerCharacter = document.getElementsByClassName("container-character")[0]; //Declarando e acessando a varivável do personagem

const VELOCITY = 10; //Declarando a variável da velocidade com a qual o objeto irá percorrer na tela
   
const SCREEN_WIDTH = innerWidth; //Declara a largura da tela do usuário
const SCREEN_HEIGHT = innerHeight; //Declara a altura da tela do usuário

let xPosition = 500; //Declarando a posição inicial do objeto na tela no eixo x
let yPosition = 300; //Declarando a posição inicial do objeto na tela no eixo y

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]; //Declarando a vaviável quando uma tecla é pressionada  
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; //Declarando a variável para rotacionar o objeto na tela de acordo com as classes definidas no arquivo directions.css

window.addEventListener("keydown", (event) => { //Essa função vai associar os movimentos quando uma tecla é pressionada a um evento 
    const key  = event.key; //Declarando a variável key ao evento

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => { //Essa função verifica se alguma tecla key foi acionada
        return currentKey === key; //Caso positivo, ela irá retornar a key
    })

    if(!keyPressedAvaiable) return; //Caso contrário, ela irá retornar ao inicio

    directions.forEach((direction) => { //Essa função verifica cada direction para saber se há alguma classe
        if(character.classList.contains(direction)) character.classList.remove(direction); //Se tiver, ele irá retirar
    })

    if(key === "ArrowUp"){ // Quando a tecla seta para cima é pressionada
        character.classList.add("turnUp"); // A classe directions é alterada para "turnUp"
        yPosition -= VELOCITY; // A posição do objeto na eixo y negativo é alterada de acordo com a velocidade
    }

    if(key === "ArrowDown"){ // Quando a tecla seta para baixo é pressionada
        character.classList.add("turnDown"); // A classe directions é alterada para "turnDown"
        yPosition += VELOCITY; // A posição do objeto na eixo y positivo é alterada de acordo com a velocidade
    }

    if(key === "ArrowLeft"){ // Quando a tecla seta para esquerda é pressionada
        character.classList.add("turnLeft"); // A classe directions é alterada para "turnLeft"
        xPosition -= VELOCITY; // A posição do objeto na eixo x negativo é alterada de acordo com a velocidade
    }

    if(key === "ArrowRight"){ // Quando a tecla seta para direita é pressionada
        character.classList.add("turnRight"); // A classe directions é alterada para "turnRight"
        xPosition += VELOCITY; // A posição do objeto na eixo x positivo é alterada de acordo com a velocidade
    }

    //Essa parte foi adicionada para criar a colisão do personagem com as bordas da tela do usuário
    if(xPosition < 0){ //Se o usuário mover o personagem para a posição 0 no eixo de coordenadas x
        xPosition = xPosition + 10; //O personagem irá mover 10 posições no eixo x para a direita 
    }
    
    if(xPosition > SCREEN_WIDTH){ //Se o usuário mover o personagem para o fim da tela
        xPosition = xPosition - 100; //O personagem irá mover 100 posições no eixo x para a esquerda
    }

    if(yPosition < 0){ //Se o usuário mover o personagem para a posição 0 no eixo de coordenadas y
        yPosition = yPosition + 10; //O personagem irá mover 10 posições no eixo y para baixo
    }
    
    if(yPosition > SCREEN_HEIGHT){ //Se o usuário mover o personagem para o fim da tela
        yPosition = yPosition - 100; //O personagem irá mover 100 posições no eixo y para cima
    }
    
    containerCharacter.style.top = `${yPosition}px`; // Define a posição superior do elemento na coordenada y
    containerCharacter.style.left = `${xPosition}px`; // Define a posição esquerda do elemento da coordenada x
});