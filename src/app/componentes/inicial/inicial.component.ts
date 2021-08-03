import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';
import { TarefaService } from 'src/app/servicos/tarefa.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  tarefas: Tarefa[]=[];
  tarefa: Tarefa = new Tarefa('','',false);
  
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.tarefaService.listarTodos();
  }

  completeTask(id: string) {
    this.tarefaService.completeTask(id);
    this.tarefas = this.tarefaService.listarTodos();
  }

  removerId(tarefaId: string){
      this.tarefa = this.tarefaService.listarId(tarefaId);
  }

  remover() {
    this.tarefaService.remover(this.tarefa.id);
    this.tarefas = this.tarefaService.listarTodos();
  }
}
