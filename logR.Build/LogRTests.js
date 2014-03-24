describe('logR - open console to see output', function () {
    describe('trace()', function () {
        it('writes to the console', function () {
            logR.trace('Test Trace Log');
        });
    });
    describe('info()', function () {
        it('writes to the console', function () {
            logR.info('Test Info Log');
        });
    });
    describe('warn()', function () {
        it('writes to the console', function () {
            logR.warn('Test Warn Log');
        });
    });
    describe('error()', function () {
        it('writes to the console', function () {
            logR.error('Test Error Log');
        });
    });
    describe('custom()', function () {
        it('writes to the console', function () {
            logR.custom('Test Custom, allows you to provide what ever formatting you would like too.');
        });
    });
});
//# sourceMappingURL=LogRTests.js.map
