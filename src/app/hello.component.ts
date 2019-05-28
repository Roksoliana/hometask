import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  private name: string;
  public searchText:string;
  public todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false},
    {text:'modify', done:true},
    {text:'test', done:false},
    {text:'close', done:false}
    ];

  private count: number=this.todos.filter(i=>i.done).length;

  constructor() {}

  private add(value: string): void{
    // this.todos.push({text: value, done:false});
    this.todos=[ ... this.todos, {text: value, done:false}];
  }
  private remove(id:number): void{
    this.todos.splice(id, 1);
    this.count=this.cal();
  }
  private clean(){
    this.todos=[];
    this.count=0;
  }
  private search(term: string){
    this.todos.filter(i=>i.text.search(term)!=-1);
  }
  private someFunction(i: number){
    this.todos[i].done=!this.todos[i].done;
    this.count=this.cal();
  }
  private cal(){
    return this.todos.filter(i=>i.done).length;
  }
}
