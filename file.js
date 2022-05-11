const equals = function (a, b, c)
{
    if (c === "add")
    {
        return +a + +b;
    }
    else if (c === "subtract")
    {
        return +a - +b;
    }
    else if (c === "multiply")
    {
        return +a * +b;
    }
    else if (c === "divide")
    {
        return +a / +b;
    }
}

module.exports = equals;