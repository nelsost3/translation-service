// Reference: https://rapidapi.com/dickyagustin/api/text-translator2/details

const request = require('request');

const source_language = 'en';                     // the source language: 'en' for English
const target_language = 'fr';                     // the target translation language: 'fr' for French
const text_translation = 'What is your name?';    // the text string we would like to translate from source to target language

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  form: {
    source_language: source_language,
    target_language: target_language,
    text: text_translation
  }
};

request(options, function (error, response, translation) {
	if (error) throw new Error(error);

  const result = JSON.parse(translation);       // convert text into a JavaScript object
  translatedText = result.data.translatedText;  // to select the data (translation) result

	console.log(translatedText);
});