/*
The Singleton Pattern is ideal for managing shared resources like configuration data, caches, or connection pools.
It’s also useful for ensuring that specific services or components within your application maintain a single instance,
improving consistency and reducing potential conflicts.
 */

//Example 1
const Singleton = (function () {
    let instance;
    function createInstance() {
        return {
            message: "I am the only instance!",
            showMessage: function () {
                console.log(this.message);
            },
        };
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log('singleton1 === singleton2------->', singleton1 === singleton2); // true


//Example 2
class Logger {
    constructor() {
        this.logs = [];
    }

    log(message) {
        this.logs.push(message);
    }

    showLogs() {
        console.log(this.logs);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }
}

const loggerInstance1 = Logger.getInstance();
loggerInstance1.log('Log message 1');
loggerInstance1.log('Log message 2');
loggerInstance1.showLogs();

const loggerInstance2 = Logger.getInstance();
loggerInstance2.log('Log message from another file');

loggerInstance2.showLogs();
//Observer Pattern
