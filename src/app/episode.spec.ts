import { Episode } from './episode';

describe('Episode', () => {
  it('should create an instance', () => {
    expect(new Episode(1, 'dolar', 'today' , 'S01E01', 'test.com', []))
      .toBeTruthy();
  });
});
