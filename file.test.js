const functions = require('./file');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = document.defaultView;

describe('adding', function ()
{
    test('Equals 6', function ()
    {
        expect(functions.equals(1, 5, "add")).toEqual(6);
    });
});