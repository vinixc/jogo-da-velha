import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService} from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
    this.jogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de inicio deve ser exibida
   * @returns boolean
   */
  get showInicio():boolean{
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibida
   * @returns boolean
   */
  get showTabuleiro():boolean{
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim deve ser exibida
   * @returns boolean
   */
  get showFinal():boolean{
    return this.jogoDaVelhaService.showFinal;
  }

  /**
   * Inicia os dados de um novo jogo
   * @return void
   */
  iniciarJogo(): void{
    this.jogoDaVelhaService.iniciaJogo();
  }

  /**
   * Realiza uma jogada ao clicar um local no tabuleiro.
   * @param posX 
   * @param posY 
   * @returns void
   */
  jogar(posX: number, posY: number): void{
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a coordenada informada.
   * @param posX 
   * @param posY 
   * @returns boolean
   */
  exibirX(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

   /**
   * Retorna se a peça X deve ser exibida para a coordenada informada.
   * @param posX 
   * @param posY 
   * @returns boolean
   */
  exibirO(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcacao de vitoria deve ser exibida para a coordenada informada.
   * @param posX 
   * @param posY 
   * @returns boolean
   */
  exibirVitoria(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar.
   * @returns number
   */
  get jogador(): number{
    return this.jogoDaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo
   * @returns void
   */
  novoJogo():void{
    this.jogoDaVelhaService.novoJogo();
  }





}
