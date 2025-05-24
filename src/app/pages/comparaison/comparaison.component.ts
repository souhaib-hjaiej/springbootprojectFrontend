import { Component } from '@angular/core';
import { ComparaisonService } from '../../services/comparison/comparaison.service';
import { OffreFournisseur } from '../../entities/entities/offre-fournisseur.entity';

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.scss']
})
export class ComparaisonComponent {
  produitNom: string = '';
  offres: OffreFournisseur[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private comparaisonService: ComparaisonService) {}

  compareOffres(): void {
    if (!this.produitNom.trim()) {
      this.errorMessage = 'Veuillez saisir un nom de produit.';
      this.offres = [];
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.offres = [];

    // Appel au service avec la query param produit
    this.comparaisonService.getComparaisonByProduit(this.produitNom).subscribe({
      next: (data) => {
        this.offres = data;
        this.isLoading = false;
        if (this.offres.length === 0) {
          this.errorMessage = 'Aucune offre trouvée pour ce produit.';
        }
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des données de comparaison.';
        this.isLoading = false;
        console.error('Erreur API:', err);
      }
    });
  }

 
}
