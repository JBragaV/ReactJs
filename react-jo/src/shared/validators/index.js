import validator from 'validator';

class ValidatorForm{

    errors = [
        {erroName: "nome", mensagem: "Nome Obrigatório"},
        {erroName: "livro", mensagem: "Livro Obrigatório"},
        {erroName: "preco", mensagem: "Preco Obrigatório, deve ser númerico e acima de 0,01"}
    ];
    
    valida(dados){
        const {nome, livro, preco } = dados;
        const vazios = this.estaVazio({nome, livro});
        const decimal = this.isFloat(preco);
        if(vazios && decimal){
            return true;
        }else{
            return false;
        }
    }
    
    estaVazio(dados){
        let contador = 0; 
        for(var dado in dados){
            let dadoAtual = dado;
            if(!validator.isEmpty(dados[dado])){
                contador++;
                this.errors = this.errors.filter(error => {
                    return error.erroName !== dadoAtual;
                })
            }
        }
        if(contador === 2){
            return true;
        }
        return false;
    }

    isFloat(preco){
        if(validator.isFloat(preco, { min: 0.01, locale: 'pt-BR' })){
            this.errors = this.errors.filter(error => {
                return error.erroName !== "preco";
            })
            return true;
        }else{
            return false;
        }
    }

    errosArray(){
        return this.errors;
    }

}

export default ValidatorForm;