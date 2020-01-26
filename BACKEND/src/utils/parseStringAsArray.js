module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim()); //trim remove espaçamento antes e depois de um string
}