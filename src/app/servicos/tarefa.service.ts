
import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[]{
    return JSON.parse(localStorage['tarefas'] || '[]');
  }

  adicionar(tarefa: Tarefa) {
    tarefa.id = new Date().getTime().toString();
    tarefa.concluido = false;
    const tarefas = this.listarTodos();
    tarefas.push(tarefa);
    this.persistir(tarefas);
  }

  listarId(id: string): Tarefa {
    const tarefa = this.listarTodos().find(tarefa => tarefa.id === id);
    if (!tarefa) {
      return new Tarefa('', '', false);
    }
    return tarefa;
  }
  editar(tarefa: Tarefa) {
    const tarefas = this.listarTodos().map(t => {
      if (tarefa.id === t.id) {
        t.nome = tarefa.nome;
      }
      return t;
    });
  }

// Outra forma de fazer:
  editar2(tarefa: Tarefa) {
    const tarefas = this.listarTodos();
    const index = tarefas.findIndex(t => t.id === tarefa.id);
    tarefas[index].nome = tarefa.nome;
    this.persistir(tarefas);
  }


  remover(tarefaId: string){
    const tarefas = this.listarTodos().filter(tarefa => tarefa.id !== tarefaId);
    this.persistir(tarefas);
  }

  //Outra forma de remover
  remover2(tarefaId: string) {
    const tarefas = this.listarTodos();
    const index = tarefas.findIndex(t => t.id === tarefaId);
    tarefas.splice(index, 1);
    this.persistir(tarefas);
  }


  completeTask(id: string) {
    const tarefas = this.listarTodos();
    for(let tarefa of tarefas) {
      if(tarefa.id == id) {
        tarefa.concluido = !tarefa.concluido;
      }
    }
    this.persistir(tarefas);
  }


  private persistir(tarefas: Tarefa[]){
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
