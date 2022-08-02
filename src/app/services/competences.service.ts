import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  private  baseUrl="http://localhost:8089/fiche360/agence/1";


  constructor( private httpClient:HttpClient) { }

  getCompetencesList():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }
}
