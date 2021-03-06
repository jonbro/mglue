export interface LeaderboardScore {
    playerId: number;
    score: number;
    time?: number;
    rank?: number;
}
declare class Leaderboard {
    static playerIdKey: string;
    static playerId: number;
    static scores: LeaderboardScore[];
    static lastScore: number;
    static urlRoot: string;
    static init(url: string): void;
    static get(isGettingLast?: boolean, isGettingBest?: boolean): void;
    static set(score: number): void;
}
export { Leaderboard };
