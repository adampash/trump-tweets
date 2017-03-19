const alexaResponse = text => ({
  version: '1.0',
  response: { outputSpeech: { type: 'PlainText', text } },
});

export default alexaResponse;
