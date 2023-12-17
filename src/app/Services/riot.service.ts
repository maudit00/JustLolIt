import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iSumInfos, iSummoner } from '../Models/i-summoner';

@Injectable({
  providedIn: 'root'
})
export class RiotService {

  constructor(private http:HttpClient) { }

  euwUrl : string = '${environment.euw1}';
  getSummonerByName(name: string) {
    return this.http.get<iSummoner>(environment.by_name + name)
  }
  getSummonerInfo(summonerId: string) {
  return this.http.get<iSumInfos>(environment.summonerInfo + summonerId)
  }

}
