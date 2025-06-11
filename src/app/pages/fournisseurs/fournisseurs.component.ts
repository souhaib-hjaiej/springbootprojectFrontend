// components/fournisseurs.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Fournisseur } from '../../entities/fournisseur.entity';
import { FournisseurService } from '../../services/fournisseur/fournisseur.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent implements OnInit {
  fournisseurs: Fournisseur[] = [];
  searchNom = '';
  searchContact = '';
  searchNote: number | null = null;

  displayedColumns: string[] = ['id', 'nom', 'contact', 'qualite_service', 'note', 'actions'];
  fournisseurForm!: FormGroup;
  isEditMode = false;
  currentFournisseurId: number | null = null;

  constructor(
    private fournisseurService: FournisseurService,
    private formBuilder: FormBuilder,
    public modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadFournisseurs();
  }

  loadFournisseurs(): void {
    this.fournisseurService.getAll().subscribe(data => this.fournisseurs = data);
  }
searchFournisseurs(): void {
  if (this.searchNom) {
    this.fournisseurService.searchByNom(this.searchNom).subscribe(data => {
      this.fournisseurs = data;
    });
  } else if (this.searchContact) {
    this.fournisseurService.searchByContact(this.searchContact).subscribe(data => {
      this.fournisseurs = data;
    });
  } else if (this.searchNote !== null) {
    this.fournisseurService.searchByNote(this.searchNote).subscribe(data => {
      this.fournisseurs = data;
    });
  } else {
    this.loadFournisseurs(); // fallback to load all
  }
}

  openModal(content: any, fournisseur?: Fournisseur): void {
    if (fournisseur) {
      this.isEditMode = true;
      this.currentFournisseurId = fournisseur.id;
      this.fournisseurForm = this.formBuilder.group({
        nom: [fournisseur.nom, Validators.required],
        contact: [fournisseur.contact, Validators.required],
        qualite_service: [fournisseur.qualite_service, Validators.required],
        note: [fournisseur.note, [Validators.required, Validators.min(0), Validators.max(10)]]
      });
    } else {
      this.isEditMode = false;
      this.currentFournisseurId = null;
      this.fournisseurForm = this.formBuilder.group({
        nom: ['', Validators.required],
        contact: ['', Validators.required],
        qualite_service: ['', Validators.required],
        note: [0, [Validators.required, Validators.min(0), Validators.max(10)]]
      });
    }

    this.modalService.open(content, { size: 'lg' });
  }

  onSubmit(): void {
    if (this.fournisseurForm.valid) {
      const formValues = this.fournisseurForm.value;

      const fournisseur: Fournisseur = {
        id: this.currentFournisseurId ?? null,
        nom: formValues.nom,
        contact: formValues.contact,
        qualite_service: formValues.qualite_service,
        note: formValues.note
      };

      if (this.isEditMode && this.currentFournisseurId !== null) {
        this.fournisseurService.update(this.currentFournisseurId, fournisseur).subscribe(() => {
          this.loadFournisseurs();
          this.modalService.dismissAll();
        });
      } else {
        this.fournisseurService.create(fournisseur).subscribe(() => {
          this.loadFournisseurs();
          this.modalService.dismissAll();
        });
      }
    }
  }

  deleteFournisseur(id: number): void {
    this.fournisseurService.delete(id).subscribe(() => {
      this.loadFournisseurs();
    });
  }
  searchByNom() {
  if (!this.searchNom) return;
  this.fournisseurService.searchByNom(this.searchNom).subscribe((res) => {
    this.fournisseurs = res;
  });
}

searchByContact() {
  if (!this.searchContact) return;
  this.fournisseurService.searchByContact(this.searchContact).subscribe((res) => {
    this.fournisseurs = res;
  });
}

searchByNote() {
  if (this.searchNote == null) return;
  this.fournisseurService.searchByNote(this.searchNote).subscribe((res) => {
    this.fournisseurs = res;
  });
}

}