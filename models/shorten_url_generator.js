function shortenUrl(){
  const lowerWord = "abcdefghijklmnopqrstuvwxyz";
  const upperWord = lowerWord.toUpperCase();
  const numbers = "0123456789";

  const randomWordList = lowerWord.concat(upperWord, numbers).split("");

  let NewShortenUrl = "";
  for (let i = 1; i <= 5; i++) {
    NewShortenUrl +=
      randomWordList[Math.floor(Math.random() * randomWordList.length)];
  }

  return NewShortenUrl;
}


module.exports = shortenUrl