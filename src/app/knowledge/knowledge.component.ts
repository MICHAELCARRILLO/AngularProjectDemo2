import { Component, OnInit } from '@angular/core';
import { KnowledgeService } from './services/knowledge.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  knowledges: Array<any> = [];

  constructor(private service: KnowledgeService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((response:any) => {
      this.knowledges = response;
      console.log(this.knowledges);
    });
  }  
}
