import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KnowledgeComponent} from "./knowledge/knowledge.component";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";

const routes: Routes = [
  {path: '', component: NavbarComponent, children: [
    {path: 'knowledge', component: KnowledgeComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
