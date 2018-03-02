import ProfileName from '../../src/reducers/profile_name';

jest.unmock('../../src/reducers/profile_name');

describe('The ProfileName reducer', () => {
  describe('when first created', () => {
    it('the profileName should be an empty string', () => {
      const subject = ProfileName(undefined, {});
      expect(subject).toBe('');
    })
  });

  describe('when sent an unknown action', () => {
    it('should not change the state', () => {
      const state = 'foobar';
      const subject = ProfileName(state, {
        type: 'NOT_AN_ACTION'
      });
      expect(subject).toBe(state);
    })
  });
});
