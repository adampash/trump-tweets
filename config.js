module.exports.fetchConsumerKey = () => process.env.TWITTER_CONSUMER_KEY;
module.exports.fetchConsumerSecret = () => process.env.TWITTER_CONSUMER_SECRET;
module.exports.fetchAccessToken = () => process.env.TWITTER_ACCESS_TOKEN_KEY;
module.exports.fetchAccessSecret = () =>
  process.env.TWITTER_ACCESS_TOKEN_SECRET;
