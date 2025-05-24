// components/commande-achat.component.ts
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandeAchatService } from '../../services/achatcommande/commande-achat.service';
import { FournisseurService } from '../../services/fournisseur/fournisseur.service';
import { Fournisseur } from '../../entities/fournisseur.entity';

@Component({
  selector: 'app-commande-achat',
  templateUrl: './commande-achat.component.html',
  styleUrls: ['./commande-achat.component.scss']
})
export class CommandeAchatComponent implements OnInit {
  commandeForm: FormGroup;
  fournisseurs: Fournisseur[] = [];
  statuts = ['EN_COURS', 'VALIDEE', 'LIVREE', 'ANNULEE'];

  constructor(
    private fb: FormBuilder,
    private commandeService: CommandeAchatService,
    private fournisseurService: FournisseurService
  ) {
    this.commandeForm = this.fb.group({
      date: [new Date(), Validators.required],
      statut: ['EN_COURS', Validators.required],
      fournisseurId: [null, Validators.required],
      lignes: this.fb.array([this.createLigne()])
    });
  }

  ngOnInit(): void {
    this.loadFournisseurs();
  }

  loadFournisseurs(): void {
    this.fournisseurService.getAll().subscribe(data => {
      this.fournisseurs = data;
    });
  }

  get lignes(): FormArray {
    return this.commandeForm.get('lignes') as FormArray;
  }

  createLigne(): FormGroup {
    return this.fb.group({
      produit: ['', Validators.required],
      quantite: [1, [Validators.required, Validators.min(1)]],
      prix_unitaire: [0, [Validators.required, Validators.min(0)]]
    });
  }

  addLigne(): void {
    this.lignes.push(this.createLigne());
  }

  removeLigne(index: number): void {
    this.lignes.removeAt(index);
  }

  onSubmit(): void {
    if (this.commandeForm.valid) {
      this.commandeService.createCommande(this.commandeForm.value).subscribe({
        next: (response) => {
          alert(response);
          this.commandeForm.reset();
          this.lignes.clear();
          this.addLigne();
        },
        error: (err) => {
          console.error('Error creating commande:', err);
          alert('Error creating commande');
        }
      });
    }
  }
}