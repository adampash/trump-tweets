import Twitter from 'twitter';
import moment from 'moment-timezone';

import { asyncPipe } from './utils/pipe';

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
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
