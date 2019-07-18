import { DiceService } from './dice.service';

describe('DiceService', () => {
  it('should have a score of 0 when just initialized', () => {
    const diceService = new DiceService();

    expect(diceService.score).toEqual(0);
  });

  it('should generate a number between 1 and 6 when throwDice is called', () => {
    const diceService = new DiceService();

    const throwValue = diceService.throwDice();

    expect(throwValue).toBeGreaterThanOrEqual(1);
    expect(throwValue).toBeLessThanOrEqual(6);
  });

  it('should return "Not so good" when throw is 1', () => {
    const diceService = new DiceService();

    const throwValue = 1;
    const message = diceService.message(throwValue);

    expect(message).toEqual('1 - Not so good');
  });

  it('should return "Well" when throw is 3', () => {
    const diceService = new DiceService();

    const throwValue = 3;
    const message = diceService.message(throwValue);

    expect(message).toEqual('3 - Well');
  });

  it('should return "Brilliant" when throw is 5', () => {
    const diceService = new DiceService();

    const throwValue = 5;
    const message = diceService.message(throwValue);

    expect(message).toEqual('5 - Brilliant');
  });

  it('should accumulate values send to the scoreAdd method', () => {
    const diceService = new DiceService();
    const throwValue1 = 5;
    const throwValue2 = 2;

    diceService.scoreAdd(throwValue1);
    diceService.scoreAdd(throwValue2);
    const actual = diceService.score;
    const expected = throwValue1 + throwValue2;

    expect(actual).toEqual(expected);
  });

  it('should reset score to 0 when cleared', () => {
    const diceService = new DiceService();

    diceService.scoreAdd(5);
    diceService.clear();
    const actual = diceService.score;

    expect(actual).toEqual(0);
  });
});
