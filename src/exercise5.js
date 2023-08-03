const exercise5 = () => {
    const number = parseFloat(document.getElementById('numberT').value);
    if (number) {
        const table = _exibirTabuada(number);
        console.log('table', table);
        if (table && table != undefined) {
            _buildTable(table, number);
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
    
    function _buildTable(tableData, number) {
        const tableResultDiv = document.getElementById('tableResult');
        tableResultDiv.innerHTML = '';
  
        const table = document.createElement('table');
        for (let i = 1; i <= 10; i++) {
          const row = document.createElement('tr');
          for (let j = 1; j <= 1; j++) {
            const cell = document.createElement('td');
            cell.textContent = `${number} x ${i} = ${tableData[i - 1]}`;
            row.appendChild(cell);
          }
          table.appendChild(row);
        }
  
        tableResultDiv.appendChild(table);
    }
}