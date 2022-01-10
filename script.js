// Characters to be escaped [.*+?^${}()|[\]\\] 

// selecionando um elemento HTML pelo seu id
const txtinput = document.querySelector('#text-to-search');

function search() {
    // pegando só o valor do elemento 
    let text = txtinput.value;
    
    
    // selecionando um elemento HTML pelo seu id
    let paragraph = document.querySelector('#paragraph');

    // esse replace troca tudo q ta na primeira parte pela segunda, a letra g aqui representa todas as ocorrências
    text = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // esse RegExp 
    let pattern = new RegExp(`${text}`, "gi");

    // letra i: Executa a busca ignorando letras maiúsculas e minúsculas.

    // letra g: Executa uma pesquisa global (encontre todas os resultados em vez de parar após a primeira ocorrência).

    // textContent é exatamente isso, o texto de um elemento html
    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);

    console.log(text);
}

// documentação do RegExp (Regular expressions)
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

// site pra teste de regex
// https://regexr.com/