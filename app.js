function areaTriangle() {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);
    if (a && b && c) {
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        if (isNaN(area)) {
            document.getElementsByClassName('result')[0].innerText = "Invalid";
        } else {
            document.getElementsByClassName('result')[0].innerText = `${area.toFixed(2)}`;
        }
    }
}