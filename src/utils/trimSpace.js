const trimSpace = (stringValue) => {
    const numberValue = +stringValue.replace(/ /g, '')
    return numberValue
}
export default trimSpace;