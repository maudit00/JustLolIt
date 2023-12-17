import { Component, Input } from '@angular/core';
import { iSumInfos } from '../../Models/i-summoner';

@Component({
  selector: 'app-summoner-card',
  templateUrl: './summoner-card.component.html',
  styleUrl: './summoner-card.component.scss'
})
export class SummonerCardComponent {

  @Input() summoner!: iSumInfos;

  imgSrc:string = '';


  getTierImg(tier:string) {
    console.log(tier.split(' '));

  switch (tier.split(' ')[0]) {
    case 'DIAMOND':
      this.imgSrc = '../../../assets/img/tiers/diamond.png';
      break;
    case 'PLATINUM':
      this.imgSrc = '../../../assets/img/tiers/platinum.png';
      break;
    case 'GOLD':
      this.imgSrc = '../../../assets/img/tiers/gold.png';
      break;
    case 'SILVER':
      this.imgSrc = '../../../assets/img/tiers/silver.png';
      break;
    case 'BRONZE':
      this.imgSrc = '../../../assets/img/tiers/bronze.png';
      break;
    case 'MASTER':
      this.imgSrc = '../../../assets/img/tiers/master.png';
      break;
    case 'GRANDMASTER':
      this.imgSrc = '../../../assets/img/tiers/grandmaster.png';
      break;
    case 'CHALLENGER':
      this.imgSrc = '../../../assets/img/tiers/challenger.png';
      break;
    case 'NONE':
  }
}
}


