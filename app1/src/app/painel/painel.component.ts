import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Frase} from '../shared/frase.model';
import {FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public progressop:number=0
  public frases:Frase[]= FRASES
  public instrucao:string='Traduza a frase:'
  public resposta:string=''
  public rodada:number=0
  public rodadaFrase:Frase
  public tentativas=3
  @Output() public encerrarJogo=new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }
  

  public atualizaResposta(resposta:Event):void{
    this.resposta=(<HTMLInputElement>resposta.target).value
  }

  public verificarResposta():void{

    if (this.resposta==this.rodadaFrase.frasePtbr) {
      alert('A tradução está correta')
      this.rodada++
      this.progressop=this.progressop+ (100/this.frases.length)
      if(this.rodada===4){
        this.encerrarJogo.emit('vitoria')
      }
      this.atualizaRodada()
    }else{
      this.tentativas--
      if(this.tentativas===-1){
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizaRodada():void{
    this.rodadaFrase=this.frases[this.rodada]
    this.resposta=''

  }

}
