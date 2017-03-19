import assert from 'assert';

import { getLatestTweets, tweetedToday, didTrumpTweet } from './twitter';

// describe('getLatestTweets', () => {
//   it('gets tweets based on username', () => {
//     getLatestTweets('realDonaldTrump');
//     assert.equal(true, true);
//   });
// });
// describe('didTrumpTweet', () => {
//   it('checks how many tweets trump has done today', async () => {
//     const numTweets = await didTrumpTweet()
//   });
// });
describe('tweetedToday', () => {
  it('returns tweets created today (since midnight)', () => {
    const tweets = [
      { created_at: new Date() },
      { created_at: 'Sat Mar 18 12:23:37 +0000 2017' },
      { created_at: 'Sat Mar 17 12:23:37 +0000 2017' },
    ];
    assert.deepEqual(tweetedToday(tweets), tweets.slice(0, 1));
  });
});
// describe('didUserTweet', () => {
//   it('tests didUserTweet(username)', () => {
//     const username = '';
//     assert.equal(didUserTweet(username), true);
//   });
// });
//
