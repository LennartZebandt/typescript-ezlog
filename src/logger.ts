import * as util from 'util';
import { Level } from './level';
import { Color } from './color';

declare const process : {
    env: {
      LOG_LEVEL: number
    }
  }
  
export class Logger { 

    public static currentLevel: Level = process.env.LOG_LEVEL || Level.DEB;

    constructor(public tag: string) { }

    public err(...data: any[]) { 
        this.checkLevel(Level.ERR, data);
    }

    public warn(...data: any[]) { 
        this.checkLevel(Level.WARN, data);
    }

    public info(...data: any[]) { 
        this.checkLevel(Level.INFO, data);
    }

    public deb(...data: any[]) { 
        this.checkLevel(Level.DEB, data);
    }

    protected log(level: Level, data: string) { 
        this.logToConsole(level, data);
    }

    protected transform(level: Level, data: any[]): string { 
        data.unshift(this.tag);
        data.unshift(this.getTimestamp());
        let transformed: string = '';
        data.forEach((part) => {
            if (part instanceof Object) {
                transformed += util.inspect(part);
            } else if (part! instanceof String) {
                transformed += String(part);
            } else { 
                transformed += part;
            }
            transformed += ' ';
        });
        return transformed;
    }

    protected logToConsole(level: Level, data: string) {
        data = this.getColor(level) + data + Color.RESET;
        switch (level) { 
            case Level.ERR:
                console.error(data);    
                break;    
            case Level.WARN:
                console.warn(data);
                break;
            case Level.INFO:
                console.info(data);
                break;
            case Level.DEB:
                console.log(data);
                break;
        }
    }

    private checkLevel(level: Level, data: any[]) {        
        console.log('currentLevel', Logger.currentLevel); 
        if (Logger.currentLevel < level) return;
        this.log(level, this.transform(level, data));
    }

    protected getTimestamp(): string { 
        const d = new Date();
        return d.toISOString();
    }

    protected getColor(level: Level): string{
        switch (level) { 
            case Level.ERR:
                return Color.RED;
            case Level.WARN:
                return Color.YELLOW;
            case Level.INFO:
                return Color.GREEN;
            case Level.DEB:
                return Color.BLUE;  
            default:
                return Color.WHITE;
        }
    }

}