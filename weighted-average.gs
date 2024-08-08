function WEIGHTED_AVERAGE(quantityRange, priceRange) {
    if (quantityRange.length != priceRange.length) {
        throw "quantityRange and priceRange must be the same length";
    }

    var total = 0;
    var quantityTotal = 0;

    for (var i = 0; i < quantityRange.length; i++) {
        total += quantityRange[i][0] * priceRange[i][0];
        quantityTotal += quantityRange[i][0];
    }

    return total / quantityTotal;
}
