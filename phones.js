const phones = [
  "8(999)123-45-67",
  "+7 999 1234567",
  "89991234567",
  "7 (999) 123 45 67",
  "12345",
];

function formatter(phonesList) {
    for (let i = 0; i < phonesList.length; i++) {
    
        const result = phonesList[i].replace(/\D/g, "").replace(/^.(\d{3})(\d{3})(\d{2})(\d{2})$/, (match, g1, g2, g3, g4) => {
            return `+7 ${g1} ${g2}-${g3}-${g4}`;
        });
    
        if (!/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/.test(result)) {
            console.log(`${phonesList[i]} -> не похоже на телефон`);
            return;
        }
            console.log(`${phonesList[i]} → ${result}`);
      }
}

formatter(phones);