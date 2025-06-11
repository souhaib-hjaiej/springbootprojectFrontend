// services/fournisseur.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from '../../entities/fournisseur.entity';
import { environement } from '../../environement';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private baseUrl = environement.apiUrl + '/api/fournisseurs';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.baseUrl);
  }

  getById(id: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.baseUrl}/${id}`);
  }

  create(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(this.baseUrl, fournisseur);
  }

  update(id: number, fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.patch<Fournisseur>(`${this.baseUrl}/${id}`, fournisseur);
  }

 

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }


  searchByNom(nom: string): Observable<Fournisseur[]> {
  return this.http.get<Fournisseur[]>(`${this.baseUrl}/search/nom/${nom}`);
}

searchByContact(contact: string): Observable<Fournisseur[]> {
  return this.http.get<Fournisseur[]>(`${this.baseUrl}/search/contact/${contact}`);
}

searchByNote(note: number): Observable<Fournisseur[]> {
  return this.http.get<Fournisseur[]>(`${this.baseUrl}/search/note/${note}`);
}

}