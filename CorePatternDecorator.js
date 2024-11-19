// Profile interface representing the base component
class Profile {
    constructor(name, email, profilePicture) {
        this.name = name;
        this.email = email;
        this.profilePicture = profilePicture;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Profile Picture: ${this.profilePicture}`);
    }
}

// Concrete component representing basic profile without any additional features
class BasicProfile extends Profile {
    constructor(name, email, profilePicture) {
        super(name, email, profilePicture);
    }
}

// Decorator class implementing the Profile interface
class ProfileDecorator extends Profile {
    constructor(profile) {
        super(profile.name, profile.email, profile.profilePicture);
        this.profile = profile;
    }

    display() {
        this.profile.display();
    }
}

// Concrete decorator adding a bio to the profile
class BioDecorator extends ProfileDecorator {
    constructor(profile, bio) {
        super(profile);
        this.bio = bio;
    }

    display() {
        super.display();
        console.log(`Bio: ${this.bio}`);
    }
}

// Concrete decorator adding social media links to the profile
class SocialMediaDecorator extends ProfileDecorator {
    constructor(profile, socialMediaLinks) {
        super(profile);
        this.socialMediaLinks = socialMediaLinks;
    }

    display() {
        super.display();
        console.log(`Social Media Links: ${this.socialMediaLinks}`);
    }
}

// Usage
let basicProfile = new BasicProfile("John Doe", "john@example.com", "profile.jpg");
basicProfile.display();
console.log('__________');
let profileWithBio = new BioDecorator(basicProfile, "I'm a software engineer.");
profileWithBio.display();
console.log('__________');
let profileWithSocialMedia = new SocialMediaDecorator(basicProfile, "@johndoe");
profileWithSocialMedia.display();

console.log('__________________________________________________________________')

/*
паттер декоратор чудово підходить для додавання нової поведінки нашим обєктам, без необхідності модифікувати
поведінку за замовчуванням. Також ми уникаємо необхідності створювати велику кількість підкласів.
*/

class Coffee {
    cost () {
        return 5
    }
}

const sugar = coffee => {
    const cost = coffee.cost()
    coffee.cost = () => cost + 1
}

const small = coffee => {
    const cost = coffee.cost()
    coffee.cost = () => cost - 1
}

const large = coffee => {
    const cost = coffee.cost()
    coffee.cost = () => cost + 1
}

const withMilk = coffee => {
    const cost = coffee.cost()
    coffee.cost = () => cost + 2
}

const largeWithMilk = coffee => {
    large(coffee)
    withMilk(coffee)
    const cost = coffee.cost()

    coffee.cost = () => cost
}

const coffee = new Coffee()
console.log('Basic price: ', coffee.cost());
largeWithMilk(coffee)
sugar(coffee)
console.log('Final price: ', coffee.cost());


