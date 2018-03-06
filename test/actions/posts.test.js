import agent from 'superagent';
import __RewireAPI__, * as actions from '../../src/actions/posts';

jest.unmock('../../src/actions/posts');

describe('Post actions', () => {
  describe('setPostStatus', () => {
    const setPostsStatus = __RewireAPI__.__get__('setPostsStatus');

    it('Returns an action object with status', () => {
      const status = 'FETCHING';
      const action = setPostsStatus(status);

      expect(action).toEqual({
        type: 'SET_POSTS_STATUS',
        postsStatus: status
      });
    });
  });

  describe('fetchPosts', () => {
    it('dispatches actions to set posts', (done) => {
      const setPostsStatus = jest.fn();
      __RewireAPI__.__Rewire__('setPostsStatus', setPostsStatus);

      const dispatch = jest.fn();
      const resolvedPromise = Promise.resolve({
        body: []
      });
      agent.get = jest.fn(() => resolvedPromise);

      actions.fetchPosts()(dispatch);

      expect(setPostsStatus).toHaveBeenCalledWith('FETCHING');

      resolvedPromise.then(() => {
        expect(dispatch).toHaveBeenCalled();
        expect(setPostsStatus).toHaveBeenCalledWith('SUCCESS');
        done();
      });
    });
  });
});
