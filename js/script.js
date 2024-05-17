// HTML 
const elementIcon = document.querySelector("#element_icon");
const nextElement = document.querySelector("#next_element");
const textField = document.querySelector("#user_response");
const submitButton = document.querySelector("#submit_button");
const tipField = document.querySelectorAll(".tip");
const showTipButton = document.querySelector("#see_tip");


// Making object with the variables
const elements = {
    Ferro: "./images/ferro.png",
    Ouro: "./images/Ouro.png",
    Plutonio: "./images/Plutonio.png",
    Carbono: "./images/carbono.png",
    Helio: "./images/helio.png",
    Cobre: "./images/cobre.png",
    Silicio: "./images/silicio.png",
};

// Making the tips
const elementsTips = {
    Ferro: ["usado na siderurgica", "Usado em portoes", "Metal resistente", "Condutor", "Magnetico", "Abundancia no universo"],
    Ouro: ["Valorizado por sua raridade", "Utilizado em joalheria", "Excelente condutor de eletricidade", "Inerte quimicamente", "Cor dourada caracteristica", "Historia de uso em moedas e ornamentos"],
    Plutonio: ["Altamente radioativo", "Usado em reatores nucleares", "Produzido em reacoes nucleares", "Utilizado em armas nucleares", "Descoberto em 1940", "Tem isotopos com diferentes aplicacoes"],
    Carbono: ["Fundamental para a vida na Terra", "Forma a base de moleculas organicas", "Pode existir em varias formas (diamante, grafite, etc.)", "Usado em nanotecnologia", "Encontrado em todos os organismos vivos"],
    Helio: ["Gas nobre", "Leve e nao reativo", "Utilizado em baloes de ar quente", "Usado em atmosferas controladas para soldagem", "Descoberto no espectro solar antes de ser encontrado na Terra"],
    Silicio: ["Segundo elemento mais abundante na crosta terrestre", "Usado em chips de computador e semicondutores", "Pode formar liga com outros elementos para criar materiais resistentes", "Encontrado em muitos minerais"],
    Cobre: ["Excelente condutor de eletricidade", "Usado em fios eletricos", "Tem boa maleabilidade e ductilidade", "Cor caracteristica avermelhada", "Utilizado em tubulacoes de agua"],
    Oxigenio: ["Elemento essencial para a vida na Terra", "Componente principal da atmosfera terrestre", "Fundamental para a respiracao aerobica", "Presente na maioria dos compostos organicos e inorganicos"],
    Nitrogenio: ["Abundante na atmosfera terrestre", "Utilizado na producao de fertilizantes", "Essencial para o ciclo do nitrogenio", "Presente em muitos compostos organicos", "Gasoso a temperatura ambiente"],
    Litio: ["Metal alcalino leve", "Usado em baterias recarregaveis", "Pode ser encontrado em alguns medicamentos psiquiatricos", "Abundante em alguns tipos de rochas", "Pode reagir violentamente com agua"],
    Enxofre: ["Presente em muitos compostos organicos", "Usado na producao de acido sulfurico", "Tem um cheiro caracteristico desagradavel", "Pode formar cristais como o sulfato de calcio (gipsita)"],
    Calcio: ["Importante para a formacao e manutencao dos ossos e dentes", "Essencial para a transmissao de impulsos nervosos", "Encontrado em laticinios e vegetais de folhas verdes", "Usado na producao de materiais como cimento e gesso"],
    Zinco: ["Presente em muitas enzimas e proteinas", "Usado em galvanizacao para protecao contra corrosao", "Essencial para o sistema imunologico", "Pode ser encontrado em alimentos como carne, mariscos e legumes"],
    Aluminio: ["Metal leve e resistente", "Amplamente utilizado em embalagens, construcao civil e industria automobilistica", "Pode ser encontrado em forma combinada na argila", "Reciclavel em grande quantidade"],
    Sodio: ["Metal alcalino reativo", "Essencial para a regulacao do equilibrio de fluidos no corpo humano", "Presente em grandes quantidades em alimentos processados", "Pode reagir violentamente com agua"],
    Cloro: ["Gas altamente reativo", "Usado na purificacao de agua potavel", "Presente no sal de cozinha (cloreto de sodio)", "Pode ser toxico em altas concentracoes", "Essencial para o funcionamento do sistema imunologico"],
    Magnesio: ["Importante para a saude ossea", "Envolvido em mais de 300 reacoes enzimaticas no corpo humano", "Presente em alimentos como nozes, vegetais de folhas verdes e graos integrais", "Usado em ligas metalicas para reduzir peso"],
    Potassio: ["Essencial para a funcao muscular e cardiaca", "Importante para o equilibrio eletrolitico do corpo humano", "Presente em alimentos como bananas, batatas e feijoes", "Pode ser usado como fertilizante"],
    Mercurio: ["Unico metal liquido em temperatura ambiente", "Altamente toxico para organismos vivos", "Usado em termometros e barometros", "Pode ser encontrado em peixes de agua doce e marinhos devido a bioacumulacao"],
    Niquel: ["Usado em ligas metalicas, como o aco inoxidavel", "Pode causar alergias em algumas pessoas", "Encontrado em meteoritos e minerais terrestres", "Utilizado em moedas e objetos decorativos"],
    Bromo: ["Liquido a temperatura ambiente", "Usado em retardadores de chama", "Pode ser encontrado em aguas minerais e oceanos", "Altamente irritante para os olhos, pele e trato respiratorio"],
    Sodio: ["Metal alcalino reativo", "Essencial para a regulacao do equilibrio de fluidos no corpo humano", "Presente em grandes quantidades em alimentos processados", "Pode reagir violentamente com agua"]
};


// Function to choose an element randomly
let randomElementKey; // I will use it to check with the user's response
function randomElement() {
    // Clear Fields
    clearTipFilds();
    
    const elementKeys = Object.keys(elements);
    const randomIndex = Math.floor(Math.random() * elementKeys.length);
    randomElementKey = elementKeys[randomIndex];
    const randomElementImagePath = elements[randomElementKey];
    elementIcon.setAttribute('src', randomElementImagePath);
}


// Function to check the user's response    
function checkUserResponse(userResponse) {
    if(userResponse === randomElementKey) {
        textField.style.border = "2px solid green";

        // Waits 1000 milliseconds (1 second) before executing the rest of the code
        setTimeout(function () {
            // Clear Fields
            textField.value = "";
            clearTipFilds();

            textField.style.border = "2px solid gray";
            randomElement();
        }, 1000);
    } 
    else {
        textField.style.border = "2px solid red";
    }
}


// Function to show the tips 
let counter = 0; // Used to control the tips field and to access the object that has the tips (randomElementKey)
function showTip() {
    if(counter == 6) {
        alert("Você ja usou todas as dicas!");
    }
    else {
        tipField[counter].innerHTML = elementsTips[randomElementKey][counter];
        counter++;
    }
}

// Function to clear tips fields
function clearTipFilds() {
    for(let i = 0; i < 6; i++) {
        tipField[i].innerHTML = "";

        // Reset the counter for the next tips.
        counter = 0;
    }
}
