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
  
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.tarefaService.listarTodos();
  }

  completeTask(id: string) {
    for(let tarefa of this.tarefas) {
      if(tarefa.id == id) {
        tarefa.concluido = !tarefa.concluido;
      }
    }
  }

}
