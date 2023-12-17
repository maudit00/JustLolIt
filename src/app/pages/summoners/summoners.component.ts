import { environment } from '../../../environments/environment.development';
import { RiotService } from '../../Services/riot.service';
import { iPreset, iSumInfos, iSummoner } from './../../Models/i-summoner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-summoners',
  templateUrl: './summoners.component.html',
  styleUrl: './summoners.component.scss',
})
export class SummonersComponent {
  summoner!: iSummoner;
  sumInfo!: iSumInfos;
  info: iSumInfos[] = [];
  presetArr: iPreset[] = environment.summonerArr
  imgSrc: string = '';

  constructor(private riotSvc: RiotService) {
    this.presetArr.forEach((preset) => {
      this.riotSvc.getSummonerInfoSolo(preset.id).subscribe((res) => {
        this.info.push(res[0])
      });
    })
    console.log(this.info)
  }


}
