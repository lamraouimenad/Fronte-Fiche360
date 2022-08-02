import { Component, OnInit } from '@angular/core';
import { competences } from '../models/competences';
import { CompetencesService } from '../services/competences.service';
import { Collaborateur } from '../models/collaborateur';
import { CollaborateurService } from '../services/collaborateur.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  competences!:competences[];

  constructor(private competencesService : CompetencesService, private collaborateurService : CollaborateurService) { }

  ngOnInit(): void {
    this.getProfileList();
  }
private getProfileList(){
  this.competencesService.getCompetencesList().subscribe(data => {
    var result = [];
    result.push(data)
    this.competences=result;
  });
}

}
