function Funcionario(nome, cargo, salario){
    this.nome = nome
    this.cargo = cargo
    let _salario = salario

    this.aumento = function () {  
        _salario *= 1.2
        console.log(_salario)
    }

    this.getSalario = function(){
        return _salario
    }

    this.setSalario = function(valor){
        _salario = valor
        console.log(valor)
    }
}


// 3 instancias
function Gerente(nome) {  
    Funcionario.call(this, nome, 'Gerente', 12000)
    
    this.aumento = function () {  
        this.setSalario(this.getSalario() * 1.05)
    }
}

function Estagiario(nome) {  
    Funcionario.call(this, nome, 'Estagiario', 800)

    this.aumento = function () {  
        this.setSalario(this.getSalario() * 1.5)
    }
}

function Dev(nome) {  
    Funcionario.call(this, nome, 'Desenvolvedor', 2996)
}


// 3 funcionarios
const carlos = new Gerente('Carlos')
const felipe = new Estagiario('Felipe')
const tallyson = new Dev('Tallyson')

console.log(carlos)
console.log(carlos.getSalario())
carlos.aumento()

console.log(felipe)
console.log(felipe.getSalario())
felipe.aumento()

console.log(tallyson)
console.log(tallyson.getSalario())
tallyson.aumento()
