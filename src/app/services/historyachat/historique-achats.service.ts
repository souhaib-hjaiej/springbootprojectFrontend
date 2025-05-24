
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoriqueAchats } from '../../entities/historique-achats.entity';
import { environement } from '../../environement';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueAchatsService {
  private baseUrl = environement.apiUrl + '/api/historiques';

  constructor(private http: HttpClient) {}

  getAll(): Observable<HistoriqueAchats[]> {
    return this.http.get<HistoriqueAchats[]>(this.baseUrl);
  }

  updateDelai(id: number, newDelai: number): Observable<string> {
    return this.http.patch(`${this.baseUrl}/${id}/delai`, newDelai, {
      responseType: 'text'
    });
  }
}