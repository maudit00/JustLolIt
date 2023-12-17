import { environment } from '../../../environments/environment.development';
import { RiotService } from '../../Services/riot.service';
import { iSumInfos, iSummoner } from './../../Models/i-summoner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-summoners',
  templateUrl: './summoners.component.html',
  styleUrl: './summoners.component.scss',
})
export class SummonersComponent {
  summoner!: iSummoner;
  sumInfo: iSumInfos = {
    leagueId: '',
    queueType: '',
    tier: '',
    rank: '',
    summonerId: '',
    summonerName: '',
    leaguePoints: 0,
    wins: 0,
    losses: 0,
    veteran: false,
    inactive: false,
    freshBlood: false,
    hotStreak: false,
  };
  info: iSumInfos[] = [];
  id: string = environment.sisilloId;
  imgSrc: string = '';

  constructor(private riotSvc: RiotService) {
    this.riotSvc.getSummonerInfo(this.id).subscribe((res) => {
      this.info = res;
      this.getTierImg(res[0].tier);
      console.log(this.imgSrc);
      console.log(this.sumInfo, this.info);
    });
  }

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
