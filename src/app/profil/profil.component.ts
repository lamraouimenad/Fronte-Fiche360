import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../models/collaborateur';
import { CollaborateurService } from '../services/collaborateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  collaboratteurs!:Collaborateur[];

  constructor(private collaborateurService : CollaborateurService) { }

  ngOnInit(): void {
    this.getProfileList();
  }
private getProfileList(){
  this.collaborateurService.getProfileList().subscribe(data => {
    var result = [];
    result.push(data)
    this.collaboratteurs=result;
  });
}
}
