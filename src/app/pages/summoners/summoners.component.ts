import { environment } from '../../../environments/environment.development';
import { RiotService } from '../../Services/riot.service';
import { iSumInfos, iSummoner } from './../../Models/i-summoner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-summoners',
  templateUrl: './summoners.component.html',
  styleUrl: './summoners.component.scss'
})
export class SummonersComponent {
summoner!:iSummoner;
sumInfo:iSumInfos = {
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
  hotStreak: false
}
info: Partial<iSumInfos>[] = [];
id:string = environment.sisilloId;
constructor(private riotSvc:RiotService){
  this.riotSvc.getSummonerInfo(this.id).subscribe((res)=>{
    this.sumInfo = res
    console.log(this.sumInfo, this.info);
   })
}


  getSummoner() {
   this.riotSvc.getSummonerInfo(this.id).subscribe((res:iSumInfos)=>{
    this.sumInfo = res;
    console.log(this.sumInfo);
   })
  }
}
