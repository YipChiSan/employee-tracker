function getIDFromCombinedData(data) {
    return parseInt(data.split(". ")[0]);
}

module.exports = getIDFromCombinedData;