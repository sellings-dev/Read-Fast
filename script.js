const button = document.querySelector('button');
button.onclick = startReading;

function getWords() {
  const textarea = document.querySelector('textarea');
  const text = textarea.value;

  const wordsArray = text.split(' ');

  return wordsArray;
}

async function updateWord( word, wordArea ) {
  const wordParse = document.createTextNode(word);
  wordArea.replaceChild(wordParse, wordArea.firstChild)
}

async function startReading() {
  const wordArea = document.querySelector('#word');
  const main = document.getElementById('main');
  main.toggleAttribute('hidden');
  
  const words = getWords();
  const firstWord = document.createTextNode(words[0]);
  wordArea.appendChild(firstWord);
  let i = 1;
  let interval = setInterval(() => {
    updateWord(words[i], wordArea);
    i++;
    if(i == words.length) clearInterval(interval);
  }, 1000/(400 / 60));
}

