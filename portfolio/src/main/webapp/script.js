// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random quote to the page.
 */
function addRandomQuote() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];
  
  const quotes =
      ['adventure awaits', 'trust the timing of your life', 'walk at your own pace; there\'s no need to rush', 'grow through what you go through',
      'when winter passes, spring always comes', 'remember why you started', 'love more than yesterday but less than tomorrow'];
  
  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('greeting-container');
  quoteContainer.innerText = quote;
}

/**
 * Fetches message from server and adds to DOM
 */
 async function getFromServer(){
     // Fetch comments
    const response = await fetch('/data');
    console.log('Fetching data...');
    // Handle response
    const comments = await response.text();
    console.log('Handling response...');

    // Add it to the page
    document.getElementById('greeting-container').innerText = comments;
    console.log('Done!');
    console.log(comments);

 }


