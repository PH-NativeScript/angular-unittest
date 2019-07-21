import { UnittestMeComponent } from './unittest-me.component';

describe('UnittestMeComponent', () => {
  it('should return 7 when addition method is called with numbers 3 and 4', () => {
    // Arrange
    const component = new UnittestMeComponent();
    const number1 = 3;
    const number2 = 4;
    const expected = 7;
    let actual: number;

    // act
    actual = component.addition(number1, number2);

    // Assert
    expect(actual).toBe(expected);
  });
});
