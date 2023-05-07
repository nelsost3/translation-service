# Language translation microservice communication contract

This microservice allows the user to translate languages by using a text translator API service. It is written in JavaScript (Node.js).

## Why is the project useful?

The project is useful because it offers the ability to understand translations in multiple languages found all over the world. This allows the ability to communicate with someone where it might not be possible otherwise and can also be used as a means for learning.

## Installation

1.) The installation of a source code editor such as **Visual Studio Code** (https://code.visualstudio.com/)  
2.) The installation of **Node.js** (https://nodejs.org/en)  
3.) The installation of the **Request Module** (https://www.geeksforgeeks.org/node-js-request-module/#)  
4.) A free subscription to **RapidAPI** for a basic translation service which allows 100,000 characters per month and 1,000 requests.  
    The subscription service can be found here: (https://rapidapi.com/dickyagustin/api/text-translator2/pricing)

## Requesting data from the microservice

To get a language translation, the microservice will need to make a POST request to Text Translation API endpoint with the three const variables shown below:    
>>1.)	**source_language**: the original language the user will enter (ex. ‘en’ for English).  
>>2.)	**target_language**: the language the user would like to be the translation output language from the source (ex. ‘fr’ for French).  
>>3.)	**text_translation**: the text input which will be converted (ex. ‘What is your name?’) by the user. The text entry in this input field should be from the     source_language as the language of origin.  
The user will need to run **npm install request** in the terminal and then run **node microservice.js**. Shown below is an example call:

![display output](https://user-images.githubusercontent.com/91235854/236703295-9cd4fc82-bfb5-411e-8280-256914e0d22e.png)
---

## Receiving data from the microservice

The microservice will receive data as a string from the API Text Translator web server.  
An example of a full return without parsing the file will be as shown below:  

Example:  

**`{ 
    "status": "success",  
    "data": {  
        "translatedText": "Quel est ton nom?"  
    }  
}  `**
1.	**“status”**: is the first part within the string that shows “success” in requesting the translation.  
2.	**“data”** is the second part that holds within it "translatedText": "Quel est ton nom?"  
The implementation of my microservice currently uses parsing to isolate the text translation by itself.  
**`const result = JSON.parse(translation);       // convert text into a JavaScript object`**  
**`translatedText = result.data.translatedText;  // to select the data (translation) result`**  
As shown above the segment of code **`const result = JSON.parse(translation);`** uses JSON.prase() to convert the string so the data becomes a JavaScript object.  
The second line **`translatedText = result.data.translatedText;`**  then isolates the translation by itself within the data result using data.translatedText so when using **`console.log(translatedText);`** the console will display the translated phrase ‘Quel est ton nom?’ by itself for the user.
The user will need to make a **GET** request to the microservice and return the translation such as the example above for translated phrase **‘Quel est ton nom?’** which can be held in a const variable. Within the JavaScript file after receiving the information from the **POST** API request earlier. 

## Running the microservice

1. first get the request from the user interface entries for the three variables: **source_language**, **target_language**, and **text_translation**.   The source_language and target_language will need to match Language Codes so the API can recognize them (examples are ‘en’ for English and ‘fr’ for French). A full list of the language codes can be found here (https://rapidapi.com/dickyagustin/api/text-translator2/details).
2. The const variables for **source_language**, **target_language**, and **text_translation** will need to be adjusted via the user’s selection from the drop-down menus for selected languages along with the text user entry for translation on the frontend. One possibility might be to use useState with an import from ‘react’ to handle the adjustments in the language selection options. 

At the present moment the microservice returns the text translation via hard coded constant variables to show the translation API is working correctly and is also accurate. My partner is using five languages and told me them in advance so here are the language codes listed before for the different languages:

English is '**en**', Spanish is '**es**', French '**fr**', Chinese '**zh-CN**', and German is '**de**'.

## UML sequence diagram

![diagram](https://user-images.githubusercontent.com/91235854/236703949-4cce281a-6cb9-4c8d-a842-87d4d02b37c0.png)
---










