const exercise8 = () => {
    const numberCap = parseFloat(document.getElementById('numberCap').value);
    const numberRate = parseFloat(document.getElementById('numberInterest').value);
    const numberInvestment = parseInt(document.getElementById('numberTimeInvestment').value);
    if (numberCap && numberRate && numberInvestment) {
        const interestRateDecimal = numberRate / 100;
        const valorFinal = numberCap * (1 + interestRateDecimal) ** numberInvestment;
        document.getElementById('resultSimulation').innerHTML = valorFinal.toFixed(2);
    }
    
}