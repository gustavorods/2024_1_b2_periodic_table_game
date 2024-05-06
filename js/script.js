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
    Plutônio: "./images/Plutonio.png",
    

};

// Making the tips
const elementsTips = {
    Ferro: ["usado na siderúrgica", "Usado em portões", "Metal resistente", "Condutor", "Magnético", "Abundância no universo"],
    Ouro: ["Valorizado por sua raridade", "Utilizado em joalheria", "Excelente condutor de eletricidade", "Inerte quimicamente", "Cor dourada característica", "História de uso em moedas e ornamentos"],
    Plutônio: ["Altamente radioativo", "Usado em reatores nucleares", "Produzido em reações nucleares", "Utilizado em armas nucleares", "Descoberto em 1940", "Tem isótopos com diferentes aplicações"],
    Carbono: ["Fundamental para a vida na Terra", "Forma a base de moléculas orgânicas", "Pode existir em várias formas (diamante, grafite, etc.)", "Usado em nanotecnologia", "Encontrado em todos os organismos vivos"],
    Hélio: ["Gás nobre", "Leve e não reativo", "Utilizado em balões de ar quente", "Usado em atmosferas controladas para soldagem", "Descoberto no espectro solar antes de ser encontrado na Terra"],
    Silício: ["Segundo elemento mais abundante na crosta terrestre", "Usado em chips de computador e semicondutores", "Pode formar liga com outros elementos para criar materiais resistentes", "Encontrado em muitos minerais"],
    Cobre: ["Excelente condutor de eletricidade", "Usado em fios elétricos", "Tem boa maleabilidade e ductilidade", "Cor característica avermelhada", "Utilizado em tubulações de água"],
    Oxigênio: ["Elemento essencial para a vida na Terra", "Componente principal da atmosfera terrestre", "Fundamental para a respiração aeróbica", "Presente na maioria dos compostos orgânicos e inorgânicos"],
    Nitrogênio: ["Abundante na atmosfera terrestre", "Utilizado na produção de fertilizantes", "Essencial para o ciclo do nitrogênio", "Presente em muitos compostos orgânicos", "Gasoso à temperatura ambiente"],
    Lítio: ["Metal alcalino leve", "Usado em baterias recarregáveis", "Pode ser encontrado em alguns medicamentos psiquiátricos", "Abundante em alguns tipos de rochas", "Pode reagir violentamente com água"],
    Enxofre: ["Presente em muitos compostos orgânicos", "Usado na produção de ácido sulfúrico", "Tem um cheiro característico desagradável", "Pode formar cristais como o sulfato de cálcio (gipsita)"],
    Cálcio: ["Importante para a formação e manutenção dos ossos e dentes", "Essencial para a transmissão de impulsos nervosos", "Encontrado em laticínios e vegetais de folhas verdes", "Usado na produção de materiais como cimento e gesso"],
    Zinco: ["Presente em muitas enzimas e proteínas", "Usado em galvanização para proteção contra corrosão", "Essencial para o sistema imunológico", "Pode ser encontrado em alimentos como carne, mariscos e legumes"],
    Alumínio: ["Metal leve e resistente", "Amplamente utilizado em embalagens, construção civil e indústria automobilística", "Pode ser encontrado em forma combinada na argila", "Reciclável em grande quantidade"],
    Sódio: ["Metal alcalino reativo", "Essencial para a regulação do equilíbrio de fluidos no corpo humano", "Presente em grandes quantidades em alimentos processados", "Pode reagir violentamente com água"],
    Cloro: ["Gás altamente reativo", "Usado na purificação de água potável", "Presente no sal de cozinha (cloreto de sódio)", "Pode ser tóxico em altas concentrações", "Essencial para o funcionamento do sistema imunológico"],
    Magnésio: ["Importante para a saúde óssea", "Envolvido em mais de 300 reações enzimáticas no corpo humano", "Presente em alimentos como nozes, vegetais de folhas verdes e grãos integrais", "Usado em ligas metálicas para reduzir peso"],
    Potássio: ["Essencial para a função muscular e cardíaca", "Importante para o equilíbrio eletrolítico do corpo humano", "Presente em alimentos como bananas, batatas e feijões", "Pode ser usado como fertilizante"],
    Mercúrio: ["Único metal líquido em temperatura ambiente", "Altamente tóxico para organismos vivos", "Usado em termômetros e barômetros", "Pode ser encontrado em peixes de água doce e marinhos devido à bioacumulação"],
    Níquel: ["Usado em ligas metálicas, como o aço inoxidável", "Pode causar alergias em algumas pessoas", "Encontrado em meteoritos e minerais terrestres", "Utilizado em moedas e objetos decorativos"],
    Bromo: ["Líquido à temperatura ambiente", "Usado em retardadores de chama", "Pode ser encontrado em águas minerais e oceanos", "Altamente irritante para os olhos, pele e trato respiratório"],
    Sódio: ["Metal alcalino reativo", "Essencial para a regulação do equilíbrio de fluidos no corpo humano", "Presente em grandes quantidades em alimentos processados", "Pode reagir violentamente com água"]
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
