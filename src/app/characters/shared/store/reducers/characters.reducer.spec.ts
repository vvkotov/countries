import { charactersReducer, initialState } from './characters.reducer';

describe('Characters Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = charactersReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
