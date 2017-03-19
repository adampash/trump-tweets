import Twitter from 'twitter';
import moment from 'moment-timezone';

import { asyncPipe } from './utils/pipe';

const client = new Twitter({
  consumer_key: 'HKMD3ekLJRqf1cD4ggWTTarhA',
  consumer_secret: 'Qx5nj5yNZtIaEHFY2Y3pxICZiF7a9ZfjWa4ZeqyIQZI7ZFZ6Dz',
  access_token_key: '648523-TTUnaTbeb5Gz2SLlZX39ptq8fb3O2fzcKu46baw3CQy',
  access_token_secret: 'Z1oPQRkOf7AcOyz4ncKrjqcHMvPXeyn1evXGtBHrLy26e',
});

export const getLatestTweets = screen_name => {
  const params = { screen_name };
  return new Promise((resolve, reject) => {
    client.get('statuses/user_timeline', params, (error, tweets) => {
      if (!error) {
        resolve(tweets);
      } else {
        reject(error);
      }
    });
  });
};

const TZ = 'America/New_York';
export const tweetedToday = tweets => {
  const today = moment().tz(TZ);
  return tweets.filter(({ created_at }) =>
    moment(new Date(created_at)).tz(TZ).isSame(today, 'day'));
};

// 1. get latest tweets
// 2. filter number of tweets tweeted _today_
// 3 check if # of tweets is > 1
export const didTrumpTweet = async () => {
  const tweets = await asyncPipe('realDonaldTrump')(
    getLatestTweets,
    tweetedToday
  );
  return {
    numTweets: tweets.length,
    tweets,
  };
};

const didUserTweet = username => {};
