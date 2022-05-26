import { addTwoNumbers } from '../../Problems/addTwoNumbers';


describe("大数相加", () => {

  it("通过", () => {
    const input = [
      ['111111111111111111111111111', '111111111111111111111111111'],
      ['234', '999116']
    ];
    const output = [
      '222222222222222222222222222',
      '999350'
    ];
    for (let i = 0; i < input.length; i++) {
      expect(addTwoNumbers(input[i][0], input[i][1])).toEqual(output[i]);
    }
  });
});