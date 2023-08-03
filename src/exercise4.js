const exercise4 = () => {
    const str = `${document.getElementById('stringP').value}`;
    if (str) {
        const palindrome = _verificarPalindromo(str);
        document.getElementById('isPalindrome').innerHTML = palindrome;
    }
    
}

function _verificarPalindromo(palavra) {
    palavra = palavra.toLowerCase().replace(/\s/g, '');
  
    for (let i = 0; i < palavra.length / 2; i++) {
      if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }