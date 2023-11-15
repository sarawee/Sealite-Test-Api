import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  romanToInt(s: string): number {
    const romanValues: { [key: string]: number } = {
      A: 1,
      B: 5,
      Z: 10,
      L: 50,
      C: 100,
      D: 500,
      R: 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
      const currentSymbol = s[i];
      const currentValue = romanValues[currentSymbol];
      const nextSymbol = s[i + 1];
      const nextValue = romanValues[nextSymbol];

      if (nextValue > currentValue) {
        result += nextValue - currentValue;
        i++;
      } else {
        result += currentValue;
      }
    }

    return result;
  }
}
