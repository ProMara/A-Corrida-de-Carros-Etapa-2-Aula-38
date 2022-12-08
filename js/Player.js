class Player {
  constructor(){
    this.indice = 0;
    this.nome = null;
    this.posicaoX = 0;
    this.posicaoY = 0;
  }

  addPlayer() {
    if(this.indice ==1){
      this.posicaoX = width/2 - 100;
    }else{
      this.posicaoX = width/2 + 100;
    }
    //escrever no banco de dados as informações do jogador
    database.ref("players/player"+this.indice).set({
      nome:this.nome,
      posicaoX: this.posicaoX,
      posicaoY: this.posicaoY,
    })

   
  }
  //atualizar a quantidade de jogadores
  atualizarQuantidade(quantidade){
    database.ref("/").update({
      playerCount:quantidade
    })
  }

  //ler a quantidade de jogadores
  lerQuantidade(){
    database.ref("playerCount").on("value", (data)=>{
      playerCount = data.val();
    })
  }
  atualizar(){
    database.ref("players/player"+this.indice).update({
      posicaoX: this.posicaoX,
      posicaoY: this.posicaoY,
      
    })
  }

  //função estática que pega todos os players do banco de dados e guarda em uma variável
  static pegarInfo(){
    database.ref("players").on("value", (data)=>{
      allPlayers = data.val();
    })
  }
}
