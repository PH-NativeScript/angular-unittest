import { JasmineSpiesService } from './jasmine-spies.service';

describe('JasmineSpyTest', () => {
  it('should return 7 when addition is called with 3 and 4', () => {
    const service = new JasmineSpiesService();
    const number1 = 3;
    const number2 = 4;

    spyOn(service, 'logger');
    spyOn(service, 'returnNumberBetweenOneAndTen').and.returnValue(5);

    const actual = service.addition(number1, number2);

    expect(actual).toBe(12);

    expect(service.logger).toHaveBeenCalled();
    expect(service.logger).toHaveBeenCalledTimes(1);
    expect(service.logger).toHaveBeenCalledWith(
      'Somebody performed a calculation'
    );
  });
});
