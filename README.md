# typescript-ezlog

> This library is no longer maintained or ready for production.
> I recommended using [roarr](https://github.com/gajus/roarr#readme) for logging in nodejs/web projects.

Easy TypeScript library for logging in Nodejs.

* Easy to integrate in Typescript projects
* Easy to create custom loggers by using generalization
* Easy to save logs to file
* Set loglevel with envoirment variables
* Set tag for file to find dedicated code
* colorful

## Installation

```bash
npm install --save typescript-ezlog
```

Requires typescript 2.7.1 (tested).

## Usage

```typescript
import { Logger } from 'typescript-ezlog';

const log: Logger = new Logger('tag');

log.err(new Error('error'));
log.warn('warning');
log.info('info');
log.deb('deb');
```

### FileLogger

```typescript
import { FileLogger } from 'typescript-ezlog';

const log: FileLogger = new FileLogger('tag');

log.err(new Error('this goes to console and error.log file'));
log.warn('this goes to console and verbose.log file');
log.info('this goes to console and verbose.log file');
log.deb('this goes to console and verbose.log file');
```

### Custom

```typescript
import { Logger, Level } from 'typescript-ezlog';

class CustomLogger extends Logger { 

    protected log(level: Level, data: string) { 
        //logs to console with color
        this.logToConsole(level, data);
        //do whatever you want
    }

    protected getTimestamp(): string { 
        //return preferred timestamp string
        return '';
    }

    protected transform(level: Level, data: any[]): string { 
        //applies tag, timestamp and builds a string
        return this.transform(level, data);
    }

}
```

