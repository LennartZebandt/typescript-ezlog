import { WriteStream, createWriteStream } from 'fs';
import { Logger } from './logger';
import { Level } from './level';

export class FileLogger extends Logger { 

    static errFileStream: WriteStream = createWriteStream('error.log', {flags: 'a'});
    static verboseFileStream: WriteStream = createWriteStream('combined.log', {flags: 'a'});

    protected log(level: Level, data: string) { 
        super.logToConsole(level, data);
        data += '\n';
        if (level === Level.ERR) { 
            FileLogger.errFileStream.write(data);
        }
        FileLogger.verboseFileStream.write(data);
    }

}