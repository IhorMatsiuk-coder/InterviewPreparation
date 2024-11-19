// Example 1
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(callback) {
        this.observers.push(callback);
    }

    unsubscribe(callback) {
        this.observers = this.observers.filter(observer => observer !== callback);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

const newsObserver = new Observable();

function updateNews(news) {
    console.log(`News Alert: ${news}`);
}

function updateWeather(news) {
    console.log(`Weather Alert: ${news}`);
}

newsObserver.subscribe(updateNews);
newsObserver.subscribe(updateWeather);


const headlines = ['Breaking News 1', 'Breaking News 2', 'Breaking News 3'];
const randomNews = headlines[Math.floor(Math.random() * headlines.length)];
newsObserver.notify(randomNews);

console.log('________________________________________________')

// Example 2
// Subject - Blog class
class Blog {
    constructor() {
        this.subscribers = [];
    }

    // add a subscriber (observer)
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    // remove a subscriber (observer)
    unsubscribe(subscriberToRemove) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== subscriberToRemove);
    }

    // Notify when there is a new article
    publishNewArticle(article) {
        this.subscribers.forEach(subscriber => {
            subscriber.notify(article);
        });
    }
}

// Observer - Subscriber class
class Subscriber {
    constructor(name) {
        this.name = name;
    }

    // notification method
    notify(article) {
        console.log(`${this.name} got a notification : new article! - "${article}"`);
    }
}

// Let's create a blog
const myBlog = new Blog();

// With three random users
const subscriber1 = new Subscriber('Alice');
const subscriber2 = new Subscriber('Bob');
const subscriber3 = new Subscriber('Charlie');

// The subscribers join to the blog
myBlog.subscribe(subscriber1);
myBlog.subscribe(subscriber2);
myBlog.subscribe(subscriber3);

// New article!
myBlog.publishNewArticle('Les dernières tendances en programmation');

// Result : Each subscriber got a notification

// Unsubscribe a user
myBlog.unsubscribe(subscriber2);

// New article!
myBlog.publishNewArticle('Guide de démarrage rapide en développement web');

// Result : Only Alice AND Charlie got a notification.
