import analyzer from './analyzer.js';

const inputText = document.querySelector('textarea');

const input = document.getElementById('reset-button');
input.addEventListener('click', function() {
  inputText.value = '';
});

const listItems = {
  wordCount: document.querySelector('[data-testid="word-count"]'),
  characterCount: document.querySelector('[data-testid="character-coucharacternt"]'),
  characterNoSpaceCount: document.querySelector('[data-testid="-no-space-count"]'),
  numberCount: document.querySelector('[data-testid="number-count"]'),
  numberSum: document.querySelector('[data-testid="number-sum"]'),
  wordLengthAverage: document.querySelector('[data-testid="word-length-average"]'),
};

inputText.addEventListener('input', function () {
  const text = inputText.value;

  listItems.wordCount.textContent = `Recuento de palabras: ${analyzer.getWordCount(text)}`;
  listItems.characterCount.textContent = `Recuento de caracteres: ${analyzer.getCharacterCount(text)}`;
  listItems.characterNoSpaceCount.textContent = `Recuento de caracteres excluyendo espacios y signos de puntuación: ${analyzer.getCharacterCountExcludingSpaces(text)}`;
  listItems.numberCount.textContent = `Recuento de números: ${analyzer.getNumberCount(text)}`;
  listItems.numberSum.textContent = `Suma total de números: ${analyzer.getNumberSum(text)}`;
  listItems.wordLengthAverage.textContent = `Longitud media de palabras: ${analyzer.getAverageWordLength(text)}`;
  
});

















