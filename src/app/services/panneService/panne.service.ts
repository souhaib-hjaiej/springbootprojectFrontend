import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panne } from 'src/app/entities/panne.entity';
import { environement } from 'src/app/environement';

@Injectable({
  providedIn: 'root'
})
export class PanneService {

  constructor(private http: HttpClient) { }

  getPannes(): Observable<Panne[]> {
    return this.http.get<Panne[]>(environement.apiUrl + '/pannes/get-all');
  }

  addPanne(panne: Panne): Observable<Panne> {
    return this.http.post<Panne>(environement.apiUrl + '/pannes/create', panne);
  }

  updatePanne(panne: Panne): Observable<Panne> {
    return this.http.put<Panne>(`${environement.apiUrl + '/pannes'}/${panne.id}`, panne);
  }

  deletePanne(id: number): Observable<void> {
    return this.http.delete<void>(`${environement.apiUrl + '/pannes'}/${id}`);
  }
}
