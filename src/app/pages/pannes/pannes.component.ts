import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Panne } from 'src/app/entities/panne.entity';
import { PanneService } from 'src/app/services/panneService/panne.service';

@Component({
  selector: 'app-pannes',
  templateUrl: './pannes.component.html',
  styleUrls: ['./pannes.component.scss']
})
export class PannesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description', 'category', 'date_signalement', 'actions'];
  pannes: Panne[] = [];
  panneForm!: FormGroup; 
  equipements = [
    { id: 1, nom: 'Equipement 1' },
    { id: 2, nom: 'Equipement 2' },
    { id: 3, nom: 'Equipement 3' }
  ];
  constructor(public modalService: NgbModal,private panneService: PanneService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    // this.panneForm = this.formBuilder.group({});
    this.getPannes();
  }
  openModal(content:any){
    this.panneForm = this.formBuilder.group({
      description: ['', Validators.required],
      category: ['', Validators.required],
      dateSignalement: ['', Validators.required],
      equipement: [null, Validators.required]
    });
    this.modalService.open(content, {
      size: 'lg'
  }) ;
  }
  editPanne(panne : Panne){

  }
  deletePanne(id : number){

  }
  getPannes() {
    this.panneService.getPannes().subscribe((data) => {
      this.pannes = data;
    });
  }
  onSubmit(){

  }
}
