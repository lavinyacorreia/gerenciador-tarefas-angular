import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';
import { TarefaService } from 'src/app/servicos/tarefa.service';
import { Ordenacao } from 'src/app/utils/ordenacao.enum';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  tarefas: Tarefa[]=[];
  tarefa: Tarefa = new Tarefa('','',false);
  ordem: Ordenacao = Ordenacao.ASC;
  
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.tarefaService.listarTodos(this.ordem);
  }

  completeTask(id: string) {
    this.tarefaService.completeTask(id);
    this.tarefas = this.tarefaService.listarTodos(this.ordem);
  }

  removerId(tarefaId: string){
    this.tarefas = this.tarefaService.listarTodos(this.ordem);
  }

  remover() {
    this.tarefaService.remover(this.tarefa.id);
    this.tarefas = this.tarefaService.listarTodos(this.ordem);
  }

  ordenar() {
    if (this.ordem === Ordenacao.ASC) {
      this.ordem = Ordenacao.DESC;
    } else {
      this.ordem = Ordenacao.ASC;
    }
    this.tarefas = this.tarefaService.listarTodos(this.ordem);
  }

  ascendente() {
    return this.ordem === Ordenacao.ASC;
  }
}
