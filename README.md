# typescript-ezlog
Easy TypeScript library for logging in Nodejs.

Not tested yet!

### Features:
* Easy to integrate in Typescript projects
* Easy to create custom loggers by using generalization
* Easy to save logs to file
* Set loglevel with envoirment variables
* Set tag for file to find dedicated code
* Fucking colorful

### Easy Example

```typescript
import { Logger } from 'typescript-ezlog';

const log: Logger = new Logger('tag');

log.err(new Error('error'));
log.warn('warning');
log.info('info');
log.deb('deb');
```

### Output
<span style="color:red">2018-02-05T21:31:04.284Z tag Error: error
    at Object.<anonymous> (/Users/lennart/Projekte/typescript-ezlog/index.ts:5:9)
    at Module._compile (module.js:570:32)
    at Module.m._compile (/usr/local/lib/node_modules/ts-node/src/index.ts:422:23)
    at Module._extensions..js (module.js:579:10)
    at Object.require.extensions.(anonymous function) [as .ts] (/usr/local/lib/node_modules/ts-node/src/index.ts:425:12)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Function.Module.runMain (module.js:604:10)
    at Object.<anonymous> (/usr/local/lib/node_modules/ts-node/src/_bin.ts:177:12)</span>
<br>
<span style="color:yellow">2018-02-05T21:31:04.488Z tag warning</span>
<br>
<span style="color:green">2018-02-05T21:31:04.490Z tag info</span>
<br>
<span style="color:blue">2018-02-05T21:31:04.490Z tag debug</span>

### FileLogger Example

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

