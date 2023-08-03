const exercise6 = () => {
    const str = `${document.getElementById('stringV').value}`;
    if (str) {
        const volwelCouting = _countVowels(str);
        document.getElementById('volwelsCounting').innerHTML = volwelCouting;
    }
    
}

function _countVowels(sentence) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (var i = 0; i < sentence.length; i++) {
        var char = sentence.charAt(i);
        if (vowels.indexOf(char) !== -1) {
          vowelCount++;
        }
      }

    return vowelCount;
}