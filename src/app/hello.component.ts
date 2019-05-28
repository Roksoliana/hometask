import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  private name: string;
  public searchText:string;
  private idCount: number=5;
  public todos = [
    {id:1, text:'learn angular', done:true},
    {id:2, text:'build an angular app', done:false},
    {id:3, text:'modify', done:true},
    {id:4, text:'test', done:false},
    {id:5, text:'close', done:false}
    ];

  private count: number=this.todos.filter(i=>i.done).length;

  constructor() {}

  private add(value: string): void{
    this.todos=[ ... this.todos, { id:this.idCount++, text: value, done:false}];
  }
  private remove(id:number): void{
    this.todos=this.todos.filter(a=>a.id!=id);
    this.count=this.cal();
  }
  private clean(){
    this.todos=[];
    this.count=0;
  }
  private search(term: string){
    this.todos=this.todos.filter(i=>i.text.search(term)!=-1);
  }
  private someFunction(i: number){
    this.todos[i].done=!this.todos[i].done;
    this.count=this.cal();
  }
  private cal(){
    return this.todos.filter(i=>i.done).length;
  }
}
