export interface iSummoner {
  id: string
  accountId: string
  puuid: string
  name: string
  profileIconId: number
  revisionDate: number
  summonerLevel: number
}

export interface iRanked {
  leagueId: string
  queueType: string
  tier: string
  rank: string
  summonerId: string
  summonerName: string
  leaguePoints: number
  wins: number
  losses: number
  veteran: boolean
  inactive: boolean
  freshBlood: boolean
  hotStreak: boolean
}

export interface iInfos {
  general:iSummoner
  ranked:iRanked
}

export interface iPreset {
  id:string;
  accountId:string;
  puuid:string;
  name:string;
}
