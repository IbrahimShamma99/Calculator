const handleDisplayEqualize = display => {
    var total = 0;
    const values = display.split('+').join(',').split('-').join(",").split(',');
    const signs = display.split('1')
        .join(',').split('2')
        .join(',').split('3')
        .join(',').split('4')
        .join(',').split('5')
        .join(',').split('6')
        .join(',').split('7')
        .join(',').split('8')
        .join(',').split('9')
        .join(",").split(',')
        .join("").split("");
    let ops = signs.length;
    for (var i = 0; i < ops; i++) {
        var op = signs[i];
        if (i === 0) {
            if (op === "+") { total = parseInt(values[0]) + parseInt(values[1]) };
            if (op === "-") { total = values[0] - values[1] };
            continue;
        };
        if (op === "+") { total = parseInt(total) + parseInt(values[i + 1]) };
        if (op === "-") { total = total - values[i + 1] };
    }
    return total;
}

export default handleDisplayEqualize;