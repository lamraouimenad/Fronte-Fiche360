import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Collaborateur } from '../models/collaborateur';
@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  private  baseUrl="http://localhost:8089/fiche360/collaborateur/1";


  constructor( private httpClient:HttpClient) { }

  getProfileList():Observable<Collaborateur>{
    return this.httpClient.get<Collaborateur>(`${this.baseUrl}`);
  }
}
