import { LastnameUppercasePipe } from './lastname-uppercase.pipe';

describe('LastnameUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new LastnameUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
