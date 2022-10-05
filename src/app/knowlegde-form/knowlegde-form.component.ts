import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Knowledge } from '../knowledge/model/knowledge';
import { KnowledgeService } from '../knowledge/services/knowledge.service';

@Component({
  selector: 'app-knowlegde-form',
  templateUrl: './knowlegde-form.component.html',
  styleUrls: ['./knowlegde-form.component.css']
})
export class KnowlegdeFormComponent implements OnInit {

  submitted: boolean = false;
  knowledges:Array<any> = [];
  TempKnowledge:Knowledge;
  
  knowledgeForm: FormGroup = this.formBuilder.group({
    avatarUrl: ['', {validators: [Validators.required], updatedOn: 'change'}],
    title: ['', {validators: [Validators.required, Validators.maxLength(60)], updatedOn: 'change'}],
    subtitle: ['', {validators: [Validators.required], updatedOn: 'change'}],
    urlToImage: ['', {validators: [Validators.required], updatedOn: 'change'}],
    content: ['', { validators: [Validators.required, Validators.maxLength(200)],  updatedOn: 'change'}]
  });

  constructor(private formBuilder: FormBuilder, private service: KnowledgeService) { 
        this.TempKnowledge = {} as Knowledge;
  }

  knowledge: Array<any> = [];

  ngOnInit(): void {
  }

  //from fields
  get avatarUrl() {
    return this.knowledgeForm.get('avatarUrl');
  }

  get title() {
    return this.knowledgeForm.get('title');
  } 

  get subtitle() {
    return this.knowledgeForm.get('subtitle');
  }

  get urlToImage() {
    return this.knowledgeForm.get('urlToImage');
  }

  get content(){
    return this.knowledgeForm.get('content');
  }

  //form logic 

  submitForm() {
    console.log(this.knowledgeForm.value);
    this.submitted = true;
  }

  Add(){
      this.TempKnowledge = this.knowledgeForm.value;
      this.TempKnowledge.id = 0;
      this.service.addKnowledge(this.TempKnowledge).subscribe((response: any) => {
        this.knowledges.push(...response);
        console.log(this.knowledges);
      });
  }

}
