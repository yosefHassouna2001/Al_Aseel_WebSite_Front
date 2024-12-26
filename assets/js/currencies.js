// 1. الأزرار (شراء/بيع)
const buyButton = document.getElementById("buy-button");
const saleButton = document.getElementById("sale-button");
let transactionType = "buy"; // الحالة الافتراضية هي "شراء"

buyButton.addEventListener("click", () => {
    buyButton.classList.add("active", "text-light");
    buyButton.classList.remove("text-secondary");

    saleButton.classList.remove("active", "text-light");
    saleButton.classList.add("text-secondary");

    transactionType = "buy"; // تغيير الحالة إلى شراء
    updateExchangeRate();
    convertCurrency();
});

saleButton.addEventListener("click", () => {
    saleButton.classList.add("active", "text-light");
    saleButton.classList.remove("text-secondary");

    buyButton.classList.remove("active", "text-light");
    buyButton.classList.add("text-secondary");

    transactionType = "sale"; // تغيير الحالة إلى بيع
    updateExchangeRate();
    convertCurrency();
});

// 2. تحديث العملة (الرمز + العلم)
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const fromCode = document.getElementById("from-code");
const toCode = document.getElementById("to-code");
const fromFlag = document.getElementById("from-flag");
const toFlag = document.getElementById("to-flag");

function updateCurrency(selectElement, codeElement, flagElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const currencyCode = selectedOption.value;
    const flagPath = selectedOption.dataset.flag;

    codeElement.textContent = currencyCode;
    flagElement.src = `assets/images/flag/${flagPath}`;
}

fromCurrencySelect.addEventListener("change", () => {
    updateCurrency(fromCurrencySelect, fromCode, fromFlag);
    updateExchangeRate();
    convertCurrency();
});

toCurrencySelect.addEventListener("change", () => {
    updateCurrency(toCurrencySelect, toCode, toFlag);
    updateExchangeRate();
    convertCurrency();
});

// 3. تحويل العملات (المبلغ)
const fromAmountInput = document.getElementById("from-amount");
const toAmountInput = document.getElementById("to-amount");

function convertCurrency() {
    const fromRate = parseFloat(
        fromCurrencySelect.selectedOptions[0].dataset[transactionType]
    );
    const toRate = parseFloat(
        toCurrencySelect.selectedOptions[0].dataset[transactionType]
    );
    const fromAmount = parseFloat(fromAmountInput.value) || 0;

    const convertedAmount = (fromAmount * toRate) / fromRate;
    toAmountInput.value = convertedAmount.toFixed(2);
}

fromAmountInput.addEventListener("input", () => {
    convertCurrency();
});

// 4. تحديث سعر الصرف
const rateNoteCurrency = document.getElementById("rate-note-currency");
const rateNote = document.getElementById("rate-note");
const rateNoteAuthor = document.getElementById("rate-note-athor");

function updateExchangeRate() {
    const fromRate = parseFloat(
        fromCurrencySelect.selectedOptions[0].dataset[transactionType]
    );
    const toRate = parseFloat(
        toCurrencySelect.selectedOptions[0].dataset[transactionType]
    );

    rateNoteCurrency.innerHTML = `<b>${fromCurrencySelect.value}</b>`;
    rateNoteAuthor.innerHTML = `<b>${toCurrencySelect.value}</b>`;

    const exchangeRate = toRate / fromRate;
    rateNote.textContent = exchangeRate.toFixed(2);
}

// استدعاء الوظائف عند تحميل الصفحة
updateExchangeRate();
convertCurrency();
