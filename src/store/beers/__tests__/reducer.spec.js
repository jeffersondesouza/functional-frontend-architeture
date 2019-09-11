import reducer from '../reducer';
import INITIAL_STATE from '../state';
import actions from '../actions';

describe('TEST: friendsReducer', () => {
  describe('CONTEXT: default state when no match action type', () => {
    it('should return default state', () => {
      const newState = reducer(undefined, { type: 'any' });
      expect(newState).toEqual(INITIAL_STATE);
    });
  });

  describe('CONTEXT: LOAD_FRIENDS', () => {
    it('should return LOAD_FRIENDS_REQUEST state ', () => {
      const newState = reducer(
        INITIAL_STATE,
        actions.loadFriendsRequest('12345')
      );
      expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadingFriends: true,
        loadFriendsFailed: false,
      });
    });

    it('should return LOAD_FRIENDS_SUCCESS state ', () => {
      const newState = reducer(
        INITIAL_STATE,
        actions.loadFriendsSuccess(LOAD_SUCCES_PAYLOAD)
      );

      expect(newState).toEqual({
        ...LOAD_SUCCES_EXPECTED,
        error: {},
      });
    });

    it('should return LOAD_FRIENDS_FAILURE state ', () => {
      const error = { msg: 'error', status: 5 };
      const newState = reducer(
        INITIAL_STATE,
        actions.loadFriendsFailure(error)
      );
      expect(newState).toEqual({
        ...INITIAL_STATE,
        error: { ...error },
        isLoadingFriends: false,
        loadFriendsFailed: true,
      });
    });
  });
});

const LOAD_SUCCES_PAYLOAD = {
  profile_completion: 60,
  status: 0,
  response: [
    {
      address__state: 'RS',
      user__first_name: '1wtlm@rockmailapp.com',
      user__last_name: '1wtlm@rockmailapp.com',
    },
    {
      address__state: 'RJ',
      user__first_name: '9s1ex@geo-crypto.com',
      user__last_name: '9s1ex@geo-crypto.com',
    },
  ],
  total: 2,
};

const LOAD_SUCCES_EXPECTED = {
  invitedFriends: [
    {
      addressState: 'RS',
      firstName: '1wtlm@rockmailapp.com',
      lastName: '1wtlm@rockmailapp.com',
    },
    {
      addressState: 'RJ',
      firstName: '9s1ex@geo-crypto.com',
      lastName: '9s1ex@geo-crypto.com',
    },
  ],
  isLoadingFriends: false,
  loadFriendsFailed: false,
  maxInvitations: 10,
  remainingInvitations: 8,
  total: 2,
};
