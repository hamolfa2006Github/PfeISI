import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../mesServices/shared-data-service.service';
import { DemandesService } from '../mesServices/demandes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = 'Société de Transfert depuis l\'Aéroport';
  auth!:boolean;
  cli!:any;

  constructor(private router: Router,
    private sharedDataService: SharedDataService,
    private demandeService:DemandesService) {}

  versDemandeTransfert() {
      this.router.navigateByUrl('/demande-transfert');
  }

  /*versAuthentification() {
      this.router.navigateByUrl('/authentification');
  }*/

  async versAuthentificationOuTransfertsActifs() {
    try {
      this.cli = await this.sharedDataService.recupererClientFromStorage();
  
      if (this.cli == null) {
        this.router.navigateByUrl('/authentification');
        console.log('Aucun client trouvé dans le LocalStorage.');
      } else {
        this.router.navigateByUrl('/transferts-actifs');
      }
    } catch (error) {
      // Gérer les erreurs éventuelles ici
      console.error(error);
    }
  }
  
  
}//fin classe
