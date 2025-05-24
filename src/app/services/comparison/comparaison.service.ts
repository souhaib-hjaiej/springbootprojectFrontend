// comparaison.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OffreFournisseur } from '../../entities/entities/offre-fournisseur.entity';
import { environement } from '../../environement';

@Injectable({
  providedIn: 'root'
})
export class ComparaisonService {
  private baseUrl = environement.apiUrl + '/api/comparaison/produit';

  constructor(private http: HttpClient) {}

 getComparaisonByProduit(produit: string): Observable<OffreFournisseur[]> {
    return this.http.get<OffreFournisseur[]>(this.baseUrl, {
      params: { produit }
    });
  }
}
