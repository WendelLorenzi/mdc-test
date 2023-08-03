const exercise7 = () => {
    const note1 = parseFloat(document.getElementById('numberSub1').value);
    const note2 = parseFloat(document.getElementById('numberSub2').value);
    const note3 = parseFloat(document.getElementById('numberSub3').value);
    if (note1 && note2 && note3) {
        const averageGrade = (note1 + note2 + note3) / 3;
        document.getElementById('averageGrade').innerHTML = averageGrade;
    }
    
}
