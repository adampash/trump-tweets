import { DID_TRUMP_TWEET, READ_TWEETS } from './intents';
import { didTrumpTweet } from './twitter';

export const alexaHandler = async (event, _context, callback) => {
  const { request: { intent: { name: intent } } } = event;

  callback(null, await getResponse(intent, event));
};

const getResponse = async (intent, event) => {
  switch (intent) {
    case DID_TRUMP_TWEET:
      const { numTweets } = await didTrumpTweet();
      if (numTweets > 0) {
        return alexaResponse(
          `Trump has tweeted ${numTweets} times today. I'm sorry.`
        );
      }

      return alexaResponse(`Good news: Trump has not tweeted today`);
    // case READ_TWEETS:
    //   return stereoHandler.turnOn(event);
    default:
      return alexaResponse(`I didn't do a good job`);
  }
};
