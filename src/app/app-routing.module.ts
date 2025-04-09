import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PannesComponent } from './pages/pannes/pannes.component';
import { EquipementsComponent } from './pages/equipements/equipements.component';
import { InterventionsComponent } from './pages/interventions/interventions.component';
import { TechniciensComponent } from './pages/techniciens/techniciens.component';
import { PlanificationComponent } from './pages/planification/planification.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pannes', component: PannesComponent },
  { path: 'equipements', component: EquipementsComponent },
  { path: 'interventions', component: InterventionsComponent },
  { path: 'techniciens', component: TechniciensComponent },
  { path: 'planification', component: PlanificationComponent },
  { path: '**', redirectTo: 'dashboard' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
