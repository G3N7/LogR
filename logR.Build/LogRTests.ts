describe('logR - open console to see output', () => {
	describe('trace()', () => {
		it('writes to the console', () => {
			logR.trace('Test Trace Log');
		});
	});
	describe('info()', () => {
		it('writes to the console', () => {
			logR.info('Test Info Log');
		});
	});
	describe('warn()', () => {
		it('writes to the console', () => {
			logR.warn('Test Warn Log');
		});
	});
	describe('error()', () => {
		it('writes to the console', () => {
			logR.error('Test Error Log');
		});
	});
	describe('custom()', () => {
		it('writes to the console', () => {
			logR.custom('Test Custom, allows you to provide what ever formatting you would like too.');
		});
	});
});