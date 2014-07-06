class LogConfig {
	FontFamily: string;
	PieceOfFlair: string;

	//Log Colors
	WarnColor: string;
	ErrorColor: string;
	TraceColor: string;
	InfoColor: string;

	//Log Headers
	WarnHeaders: string;
	ErrorHeaders: string;
	TraceHeaders: string;
	InfoHeaders: string;

	//Output Log Levels
	WarnOn: boolean;
	ErrorOn: boolean;
	TraceOn: boolean;
	InfoOn: boolean;
	CustomOn: boolean;

	SupportCustomLogs: boolean;
}

interface ILogR {
	info(...args: any[]): void;
	warn(...args: any[]): void;
	error(...args: any[]): void;
	trace(...args: any[]): void;
	custom(...args: any[]): void;
}

class LogR implements ILogR {

	constructor(config: LogConfig) {
		this._config = config;
	}

	private _config: LogConfig;

	private _doLog(...args: any[]) {
		if (window.console) {
			try {
				console.log.apply(console, args);
			} catch (e) {
				logConfig.SupportCustomLogs = false;
				var internalArgs = [];
				for (var i = 0; i < args.length; i++) {
					internalArgs.push(args[i]);
				}
				console.log(internalArgs.join(", "));
			}
		}
	}

	private _addBackgroundColorAndText(color, text, inputArgs) {

		if (logConfig.SupportCustomLogs) {
			[].splice.call(inputArgs, 0, 0, 'background:' + color + ';font-family:"' + logConfig.FontFamily + '"');
		}

		var header = (logConfig.SupportCustomLogs == true ? '%c ' : '') + text + ' ' + logConfig.PieceOfFlair + ' ';
		[].splice.call(inputArgs, 0, 0, header);
	}

	public info(...args: any[]) {
		if (logConfig.InfoOn) {
			this._addBackgroundColorAndText(logConfig.InfoColor, logConfig.InfoHeaders, args);
			this._doLog.apply(this._doLog, args);
		}
	}

	public warn(...args: any[]) {
		if (logConfig.WarnOn) {
			this._addBackgroundColorAndText(logConfig.WarnColor, logConfig.WarnHeaders, args);
			this._doLog.apply(this._doLog, args);
		}
	}

	public custom(...args: any[]) {
		if (logConfig.CustomOn) {
			this._doLog.apply(this._doLog, args);
		}
	}

	public error(...args: any[]) {
		if (logConfig.ErrorOn) {
			this._addBackgroundColorAndText(logConfig.ErrorColor, logConfig.ErrorHeaders, args);
			this._doLog.apply(this._doLog, args);
		}
	}

	public trace(...args: any[]): void {
		if (logConfig.TraceOn) {
			this._addBackgroundColorAndText(logConfig.TraceColor, logConfig.TraceHeaders, args);
			this._doLog.apply(this._doLog, args);
		}
	}
}

var logConfig: LogConfig = {
	//General Presentation
	FontFamily: 'DejaVu Sans Mono',
	PieceOfFlair: '-=~=-',

	//Log Colors
	WarnColor: '#ffd894',
	ErrorColor: '#ff9494',
	TraceColor: '#94ffb0',
	InfoColor: '#94fdff',

	//Log Headers
	WarnHeaders: 'WARN',
	ErrorHeaders: 'ERROR',
	TraceHeaders: 'TRACE',
	InfoHeaders: 'INFO',

	//Configure Logging
	WarnOn: true,
	ErrorOn: true,
	TraceOn: true,
	InfoOn: true,
	CustomOn: true,

	SupportCustomLogs: true
};

var logR = new LogR(logConfig);