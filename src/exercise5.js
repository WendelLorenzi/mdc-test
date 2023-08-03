const exercise5 = () => {
    const number = parseFloat(document.getElementById('numberT').value);
    if (number) {
        const table = _exibirTabuada(number);
        console.log('table', table);
        if (table && table != undefined) {
            document.getElementById('tableResult').innerHTML;
        }
    }

    function _exibirTabuada(numeroUsuario) {
        const listTable = [];
          for (let i = 1; i <= 10; i++) {
            listTable.push(numeroUsuario * i);
            if (i > 9) {
                return listTable;
            }
          }
        }
    
}