import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  tarefas = [
    new Tarefa("1", "Angular", false),
    new Tarefa("2", "Prova de PI", true),
    new Tarefa("3", "Estudar Java", false),
    new Tarefa("4", "Treinar", true),
    new Tarefa("5", "Ler Sapiens", false) 
  ];

  constructor() { }

  listarTodos(): Tarefa[]{
    return this.tarefas;
  }

  adicionar(tarefa: Tarefa) {
    tarefa.id = new Date().getTime().toString();
    tarefa.concluido = false;
    this.tarefas.push(tarefa);
  }

  listarId(id: string): Tarefa {
    const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
    if (!tarefa) {
      return new Tarefa('', '', false);
    }
    return tarefa;
  }
  editar(tarefa: Tarefa) {
    this.tarefas = this.tarefas.map(t => {
      if (tarefa.id === t.id) {
        t.nome = tarefa.nome;
      }
      return t;
    });
  }

// Outra forma de fazer:
  editar2(tarefa: Tarefa) {
    const index = this.tarefas.findIndex(t => t.id === tarefa.id);
    this.tarefas[index].nome = tarefa.nome;
  }


  remover(tarefaId: string){
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== tarefaId);
  }

  //Outra forma de remover
  remover2(tarefaId: string) {
    const index = this.tarefas.findIndex(t => t.id === tarefaId);
    this.tarefas.splice(index, 1);
  }

  

}
