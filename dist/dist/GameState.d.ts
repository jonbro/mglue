declare type GameStateEnum<T extends string> = {
    [K in T]: K;
};
declare const GameState: GameStateEnum<"title" | "game">;
declare type GameState = typeof GameState;
export { GameState };
