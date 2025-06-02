/* 
Primeiro a entrar é o último a sair
último elemento é o primeiro a sair
o topo sempre será o primeiro elemento
*/

class Node {
    constructor(value){ // criando um objeto
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.topoPilha = null
    }
    push(value){ 
        // adiciona no final do array (topo da pilha)
        let newNode = new Node(value)
        newNode.next = this.topoPilha
        this.topoPilha = newNode
    }

    pop(){ 
        // remove e retorna o último elemento (topo da pilha)
        if(!this.topoPilha){
            return null
        }

        let poppedValue = this.topoPilha.value
        this.topoPilha = this.topoPilha.next
        return poppedValue
    }

    peek(){
        // retorna o topo da pilha sem remover
        if(!this.topoPilha) return null
        return this.topoPilha.value
    }

    isEmpty (){
        // verifica se a pilha está vazia
        return this.topoPilha === null
    }

    
}

function Stack(){
    this.items = []
    this.top = -1

    this.push = function(elemento){
        this.topoPilha++
        this.items[this.topoPilha] = elemento
    }

    this.pop = function(){
        if(this.topoPilha < 0) return null

        let elemento = this.items[this.topoPilha]
        this.items[this.topoPilha] = undefined
        this.topoPilha--
        return elemento
    }
}
