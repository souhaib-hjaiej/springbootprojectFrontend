import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseursComponent } from './pages/fournisseurs/fournisseurs.component';
import { CommandeAchatComponent } from './pages/commande-achat/commande-achat.component';
import { HistoriqueAchatsComponent } from './pages/historique-achats/historique-achats.component';
import { ComparaisonComponent } from './pages/comparaison/comparaison.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'fournisseur', component: FournisseursComponent },
  { path: 'achat', component: CommandeAchatComponent },
  { path: 'history', component: HistoriqueAchatsComponent },
  { path: 'comparaison-offres', component: ComparaisonComponent },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
