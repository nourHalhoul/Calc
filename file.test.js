const calc = require('./file');

const add = function (a, b)
{
    num[a].click();
    add.click();
    num[b].click();
    return result[0].textContent = +digit1 + +digit2;
}

describe('adding', function ()
{
    test('Equals 250', function ()
    {
        expect(add(100, 150)).toEqual(250);
    });
});