import { environment } from '../../../environments/environment.development';
import { RiotService } from '../../Services/riot.service';
import { iInfos, iPreset, iRanked, iSummoner } from './../../Models/i-summoner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-summoners',
  templateUrl: './summoners.component.html',
  styleUrl: './summoners.component.scss',
})
export class SummonersComponent {
  summonerGeneral!: iSummoner;
  summonerRanked!: iRanked;
  info!: iInfos;
  infoArr: iInfos[] = [];
  presetArr: iPreset[] = environment.summonerArr


  constructor(private riotSvc: RiotService) {
    this.presetArr.forEach(element => {
      this.getSummonerInfo(element.name);
    })
    this.getSummonerInfo("fwafwaoigawiwaff")
    this.getSummonerInfo("pero99")
  }


  getSummonerInfo (name:string) {
    this.riotSvc.getSummonerByName(name).subscribe((res) => {
      this.summonerGeneral = res
      this.riotSvc.getSummonerInfoSolo(this.summonerGeneral.id).subscribe((res) => {
        this.summonerRanked = res[0]
        this.infoArr.push({general: this.summonerGeneral, ranked: this.summonerRanked})
      })
    })
  }

  }

  // getSummoners (summoner:iPreset) {
  //   if(summoner.name.includes(' ')){
  //   summoner.name.replace(' ','%20')
  //   }
  //   this.riotSvc.getSummonerByName(summoner.name).subscribe((res) => {
  //     this.summonerGeneral.push(res)
  //   })

  // }


