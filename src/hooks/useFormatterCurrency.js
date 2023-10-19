const useFormatterCurrency = (currency, lang) => {
    const formatterCurrency = new Intl.NumberFormat(lang, {
        style: 'currency',
        currency: currency
    })
    return formatterCurrency.format
}
export default useFormatterCurrency;