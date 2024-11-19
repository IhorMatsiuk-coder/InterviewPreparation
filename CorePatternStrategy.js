// Example 1
class NotificationStrategy {
    sendNotification(user, message) {
        throw new Error("sendNotification method must be implemented");
    }
}

class SmsNotification extends NotificationStrategy {
    sendNotification(user, message) {
        console.log(`Sending SMS to ${user}: ${message}`);
    }
}

class EmailNotification extends NotificationStrategy {
    sendNotification(user, message) {
        console.log(`Sending Email to ${user}: ${message}`);
    }
}
class PhoneNotification extends NotificationStrategy {
    sendNotification(user, message) {
        console.log(`Sending Phone message to ${user}: ${message}`);
    }
}

class NotificationService {
    constructor(notificationStrategy) {
        this.notificationStrategy = notificationStrategy;
    }

    setNotificationStrategy(notificationStrategy) {
        this.notificationStrategy = notificationStrategy;
    }

    notifyUser(user, message) {
        this.notificationStrategy.sendNotification(user, message);
    }
}

const smsNotification = new SmsNotification();
const notificationService = new NotificationService(smsNotification);
notificationService.notifyUser('John Doe', 'Your bank account is ready.');

const emailNotification = new EmailNotification();
notificationService.setNotificationStrategy(emailNotification);
notificationService.notifyUser("Jane Doe", "Your bank account is ready.");

const phoneNotification = new PhoneNotification();
notificationService.setNotificationStrategy(phoneNotification);
notificationService.notifyUser("Jane Doe", "Your bank account is ready.");

console.log('____________________________________________________')
//Example 2
class StrategyManager {
    constructor() {
        this._strategies = []
    }

    addStrategy(strategy) {
        this._strategies = [...this._strategies, strategy];
    }

    getStrategy(name) {
        return this._strategies.find(strategy => strategy._name === name);
    }
}

class Strategy {
    constructor(name, handler) {
        this._name = name;
        this._handler = handler;
    }

    doAction() {
        this._handler()
    }
}

const strategyManager = new StrategyManager();
const strategy1 = new Strategy('Strategy1', () => console.log('Strategy1'));
const strategy2 = new Strategy('Strategy2', () => console.log('Strategy2'));

strategyManager.addStrategy(strategy1);
strategyManager.addStrategy(strategy2);

const strategyA = strategyManager.getStrategy('Strategy1');
strategyA.doAction();

const strategyB = strategyManager.getStrategy('Strategy2');
strategyB.doAction()

const strategyC = strategyManager.getStrategy('Strategy3');

try {
    strategyC.doAction()
} catch (e) {
    console.error('Caught error', e.message);
}

