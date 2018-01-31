import { LogLevels } from './logLevels';

const logLevel = !process.env.LOG_LEVEL || isNaN(process.env.LOG_LEVEL) ? 3 : parseInt(process.env.LOG_LEVEL);

export default class Logger { 

    constructor(private tag: string) { }

    public debug(text: string) { 
        this.transform(LogLevels.Debug, text);
    }

    public info(text: string) {
        this.transform(LogLevels.Info, text);
    }

    public warn(text: string) { 
        this.transform(LogLevels.Warn, text);
    }

    public err(text: string) { 
        this.transform(LogLevels.Err, text);
    }

    private getTimestamp(): string { 
        const d = new Date();
        return d.toISOString();
    }

    public transform(level: LogLevels, input: string): string { 
        return Date.now() + ' ' + this.tag + ' ' + input;
    }

}