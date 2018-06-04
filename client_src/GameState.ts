// NOTE: this is really not great, should just replace it with some kind of simpler state lookup,
// either functions that resolve to numbers or just strings
// https://stackoverflow.com/questions/46025487/create-extendable-enums-for-use-in-extendable-interfaces

type GameStateEnum<T extends string> = {[K in T]: K};
// create an enum from given values
function makeEnum<T extends string>(...vals: T[]): GameStateEnum<T> {
    const ret = {} as GameStateEnum<T>;
    vals.forEach(k => ret[k] = k)
    return ret;
}
  
  // take an existing enum and extend it with more values
function extendEnum<T extends string, U extends string>(
    firstEnum: GameStateEnum<T>, ...vals: U[]): GameStateEnum<T | U>
{
    return (<any>Object).assign(makeEnum(...vals), firstEnum) as any;  
}
const GameState = makeEnum("title", "game");
type GameState = typeof GameState;
export {GameState};