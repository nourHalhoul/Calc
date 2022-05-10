const calc = require('./file.js');

describe('adding', function ()
{
    test('Equals 6', function ()
    {
        expect(adding(1, 5)).toEqual(6);
    });
});

const adding = function (a, b)
{
    for (i = 0; i < num.length - 1; i++)
    {
        if (num[i].textContent == a)
        {
            num[i].click();
            continue;
        }
    }
    add[0].click();
    for (i = 0; i < num.length - 1; i++)
    {
        if (num[i].textContent == b)
        {
            num[i].click();
            continue;
        }
    }
    return +digit1 + +digit2;
}