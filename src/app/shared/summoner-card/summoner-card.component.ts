import { Component, Input } from '@angular/core';
import { iInfos } from '../../Models/i-summoner';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-summoner-card',
  templateUrl: './summoner-card.component.html',
  styleUrl: './summoner-card.component.scss'
})
export class SummonerCardComponent {

  @Input() summoner!: iInfos;

  imgSrc:string = '';
  iconUrl:string = environment.profileIcon


  getTierImg(tier:string) {
    console.log(this.summoner)
    if(tier == undefined) {
      return  '../../../assets/img/tiers/unranked.png'
    }
  switch (tier.split(' ')[0]) {
    case 'DIAMOND':
      return'../../../assets/img/tiers/diamond.png';

    case 'PLATINUM':
      return'../../../assets/img/tiers/platinum.png';

    case 'GOLD':
      return'../../../assets/img/tiers/gold.png';

    case 'SILVER':
      return'../../../assets/img/tiers/silver.png';

    case 'BRONZE':
      return'../../../assets/img/tiers/bronze.png';

    case 'MASTER':
      return'../../../assets/img/tiers/master.png';

    case 'GRANDMASTER':
      return'../../../assets/img/tiers/grandmaster.png';

    case 'CHALLENGER':
      return'../../../assets/img/tiers/challenger.png';

    case '':
      return'../../../assets/img/tiers/unranked.png';

    default:
      return ''
  }
}


}


