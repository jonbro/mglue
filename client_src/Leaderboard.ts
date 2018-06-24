import * as LZString from "lz-string";
export interface LeaderboardScore
{
    playerId:number;
    score:number;
    time?:number;
    rank?:number;
}
class Leaderboard
{
    static playerIdKey : string = "worm-drive";
    static playerId : number;
    static scores : LeaderboardScore[];
    static lastScore : number = 0;
    static urlRoot : string = "";
    static init(url : string)
    {
        Leaderboard.urlRoot = url;
        var playerIdStorage = localStorage.getItem(Leaderboard.playerIdKey);
        if (playerIdStorage == null) {
            window.fetch(Leaderboard.urlRoot + '/api/nextPlayerId').
                then(function (result) { return result.json(); }).
                then(function (json) {
                    Leaderboard.playerId = json.id;
                    localStorage.setItem(Leaderboard.playerIdKey, String(Leaderboard.playerId));
                });
        }
        else {
            Leaderboard.playerId = Number(playerIdStorage);
        }
    }
    static get(isGettingLast = false, isGettingBest = false)
    {
        if (Leaderboard.playerId == null) {
            Leaderboard.scores = null;
            return;
        }
        var uri = Leaderboard.urlRoot + '/api/score';
        if (isGettingLast) {
            uri += "?score=" + Leaderboard.lastScore + "&count=9";
        }
        else if (isGettingBest) {
            uri += "?playerId=" + Leaderboard.playerId;
        }
        window.fetch(uri).
            then(function (result) { return result.json(); }).
            then(function (json) {
                Leaderboard.scores = json;
                if (isGettingLast) {
                    Leaderboard.scores.push({ score: Leaderboard.lastScore, playerId: Leaderboard.playerId });
                    Leaderboard.scores = Leaderboard.scores.sort(function (a,b) {
                        if(a.score < b.score)
                        {
                            return -1;
                        }else if(a.score > b.score)
                        {
                            return 1;
                        }
                        return 0;
                    });
                }
            });
    }
    static set(score:number)
    {
        Leaderboard.lastScore = score;
        window.fetch(Leaderboard.urlRoot+"/api/key?playerId=" + Leaderboard.playerId).
            then(function (result) { return result.json(); }).
            then(function (json) {
                let key = json.key;
                var headers = new Headers();
                headers.append('Content-Type', 'application/json');
                var encDataStr = LZString.compressToEncodedURIComponent(JSON.stringify({
                    key: key,
                    score: {
                        playerId: Leaderboard.playerId,
                        score: score
                    }
                }));
                window.fetch(Leaderboard.urlRoot + '/api/score', {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        data: encDataStr
                    })
                });
            });
    }
}
export { Leaderboard }