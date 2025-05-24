// services/commande-achat.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeAchatRequest } from '../../entities/commande-achat.entity';
import { environement } from '../../environement';

@Injectable({
  providedIn: 'root'
})
export class CommandeAchatService {
  private baseUrl = environement.apiUrl + '/api/commandes';

  constructor(private http: HttpClient) {}

  createCommande(request: CommandeAchatRequest): Observable<string> {
    return this.http.post(this.baseUrl, request, {
      responseType: 'text'  
    });
  }
}