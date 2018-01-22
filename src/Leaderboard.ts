import * as LZString from "lz-string";

class Leaderboard
{
    static playerIdKey : string = "worm-drive";
    static playerId : number;
    static scores : any[];
    static lastScore : number;
    static init()
    {
        var playerIdStorage = localStorage.getItem(Leaderboard.playerIdKey);
        if (playerIdStorage == null) {
            window.fetch('/api/nextPlayerId').
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
    static get()
    {
        let isGettingBest = true;
        let isGettingLast = false;
        if (Leaderboard.playerId == null) {
            Leaderboard.scores = null;
            return;
        }
        var uri = '/api/score';
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
        window.fetch("/api/key?playerId=" + Leaderboard.playerId).
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
                window.fetch('/api/score', {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        data: encDataStr
                    })
                });
            });
    }
}