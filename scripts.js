document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generate-timestamp');
    const display = document.getElementById('timestamp-display');

    button.addEventListener('click', () => {
        const timestamp = generateCurrentTimestamp();
        display.textContent = timestamp;
    });
});

function generateCurrentTimestamp() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    let millisecond = String(now.getMilliseconds()).padStart(4, '0');

    if (millisecond.length < 4) {
        millisecond = millisecond.padEnd(4, '1');
    }

    // Formatı oluştur
    return `${year}${month}${day}${hour}${minute}${second}${millisecond}`;
}
