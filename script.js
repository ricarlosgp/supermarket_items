/*-------- ATIVIDADE 02

  Capture 02 items para compor a lista de um supermercado.
  
  Após capturar os 02 items, imprima-os, separando por vírgula.

*/

alert(`Insira dois items para compor a lista de um supermercado.
            Script criado por: ricarlosgp@gmail.com`)


let items = []; // criei um array vazio para ser inserido os dados manulamente através do laço de repetição for.

//aqui estou fazendo uma estrutura de repetição ou laço de repetição com o for. Tenho uma variável de controle let item que inicia com zero(let item = 0); enquanto o item for menor que dois (item <2); pegue o item e adicione mais um item (item ++) e execute o bloco que está dentro das chaves {} até satisfazer o item < 2. Esse incremento ++ fica assim: 0+0 = 0 ; 0 + 1 = 1 e 1 + 1 = 2(que não satisfaz ao item que têm que ser menor que dois). Então em minha lista vai conter 02 produtos pois a contagem iniciou em 0+0.
for(let item = 0; item < 2; item ++) 

{
    let itemName = prompt("Digite o item " + (item + 1 )) //declarei uma nova variável let itemName e atribui um valor de pormp para visualizar na tela a string e concatenar com (item + 1). Esse (item + 1) é para visualizar o nome Digite o item 1. Se tirar o +1 o texto fica: Digite o ítem 0. Se colocar 5 fica: Digite o item 5 e etc....

    items[item] = itemName //aqui está sendo preenchido o array vazio. Estou reatriuindo a variável items com um array items[item] de todo o processo do escopo {} e vai receber a variável itemName
    //esse items é a variável que está fora do laço de repetição for. Quem está dentro do laço pode ler quem está fora dele. Agora quem está fora do laço não pode ler o que consta dentro dele.
}

alert("Sua lista foi composta por: " + items) //após criado os itens, irá mostra em tela o array da variavel let items[] após percorrer todo o laço de repetição




