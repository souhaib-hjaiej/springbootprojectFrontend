// historique-achats.component.ts
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoriqueAchatsService } from '../../services/historyachat/historique-achats.service';
import { HistoriqueAchats } from '../../entities/historique-achats.entity';

@Component({
  selector: 'app-historique-achats',
  templateUrl: './historique-achats.component.html',
  styleUrls: ['./historique-achats.component.scss']
})
export class HistoriqueAchatsComponent implements OnInit {
  historiques: HistoriqueAchats[] = [];
  selectedHistorique: HistoriqueAchats | null = null;
  newDelai: number = 0;  // Add this property declaration

  constructor(
    private historiqueService: HistoriqueAchatsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadHistoriques();
  }

  loadHistoriques(): void {
    this.historiqueService.getAll().subscribe({
      next: (data) => this.historiques = data,
      error: (err) => console.error('Error loading history:', err)
    });
  }

  openUpdateModal(content: any, historique: HistoriqueAchats): void {
    this.selectedHistorique = historique;
    this.newDelai = historique.delai_livraison;  // Initialize the value
    this.modalService.open(content);
  }

  updateDelai(): void {
    if (this.selectedHistorique) {
      this.historiqueService.updateDelai(this.selectedHistorique.id, this.newDelai).subscribe({
        next: (response) => {
          alert(response);
          this.loadHistoriques();
          this.modalService.dismissAll();
        },
        error: (err) => console.error('Error updating delivery time:', err)
      });
    }
  }
}