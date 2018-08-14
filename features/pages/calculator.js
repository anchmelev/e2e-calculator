'use strict';

module.exports = {

    calculatorPage: {
        '0': element(by.css('#cwbt43')),
        '1': element(by.css('#cwbt33')),
        '2': element(by.css('#cwbt34')),
        '3': element(by.css('#cwbt35')),
        '4': element(by.css('#cwbt23')),
        '5': element(by.css('#cwbt24')),
        '6': element(by.css('#cwbt25')),
        '7': element(by.css('#cwbt13')),
        '8': element(by.css('#cwbt14')),
        '9': element(by.css('#cwbt15')),
        '.': element(by.css('#cwbt44')),
        '-': element(by.css('#cwbt36')),
        plus: element(by.css('#cwbt46')),
        mines: element(by.css('#cwbt36')),
        multiply: element(by.css('#cwbt26')),
        divide: element(by.css('#cwbt16')),
        equal: element(by.css('#cwbt45')),
        clear: element(by.css('#cwbt06')),
        display: element(by.css('#cwos')),
    },

    enter: function (numberStr) {
        var calculatorPage = this.calculatorPage;
        var result = numberStr.split('');
        result.forEach(number => {
            browser.actions().mouseUp(calculatorPage[number]).perform();
        });
    },

    clickPlus: function() {
        var calculatorPage = this.calculatorPage;
        browser.actions().mouseUp(calculatorPage.plus).perform();
    },

    clickEqual: function() {
        var calculatorPage = this.calculatorPage;
        browser.actions().mouseUp(calculatorPage.equal).perform();
    },

    clickMines: function() {
        var calculatorPage = this.calculatorPage;
        browser.actions().mouseUp(calculatorPage.mines).perform();
    },

    go: function (site) {
        browser.waitForAngularEnabled(false);
        browser.get(site);
    },

    clear: function () {
        browser.actions().mouseUp(calculatorPage.clear).perform();
    }
};
