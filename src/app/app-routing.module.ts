import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KnowledgeComponent} from "./knowledge/knowledge.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {KnowlegdeFormComponent} from "./knowlegde-form/knowlegde-form.component";

const routes: Routes = [
  {path: '', component: NavbarComponent, children: [
    {path: '', component: KnowledgeComponent},
    {path: 'knowledge', component: KnowledgeComponent},
    {path: 'admin', children: [
        {path: 'knowledge', children: [
            {path: 'new', component: KnowlegdeFormComponent}
          ],}
      ]},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
