import { Level } from './level';

export { Logger } from './logger';
export { SimpleFileLogger } from './simpleFileLogger';
export { Level } from './level';
export { Color } from './color';

let currentLevel: Level = parseInt(process.env.LOG_LEVEL);
currentLevel = currentLevel === null || isNaN(currentLevel) ? Level.DEB : currentLevel;

export function getCurrentLevel(): Level {
    return currentLevel;
}

export function setCurrentLevel(level: Level) {
    currentLevel = level;
}