let jogador = 0;

function criaTabuleiro(){
    return{
        inicia(){
            this.cliqueBotoes();
            //this.verificaVitoria();
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn')){
                    this.insereJogada(el);
                }
            }.bind(this))
        }, 

        insereJogada(el){
            if(el.innerText){
                alert('Posição ocupada!');
                return;
            } 
            if(jogador%2 === 0){
                el.innerText = '⭕';
            }
            else{
                el.innerText = '❌';
            }
            jogador++;
        },

        verificaTabuleiro(){
            
        }
    }
}

const tabuleiro = criaTabuleiro();
tabuleiro.inicia();