const phoneNumbers = {
    true: [
        "1234567890", "123-456-7890", "123.456.7890", "123 456 7890",
        "+1 1234567890", "+1 123-456-7890", "+1 123.456.7890", "+1 123 456 7890",
        "1 1234567890", "1 123-456-7890", "1 123.456.7890", "1 123 456 7890",
        "1 (123)4567890", "1 (123)-456-7890", "1 (123).456.7890", "1 (123) 456 7890",
        "+1 (123) 456-7890",
        "1 (123) 456-7890",
        "+11234567890",
        "(123) 456-7890",
    ],
    false: [
        "1234-567-890", 
        "12 3456 7890",
        "+12 (123) 456-7890", 
        "(12) 345-6789",
        "123-456-789" 
    ]
}

const urls = {
    true: [
        "https://cs.uml.edu", "http://cs.uml.edu", "ftp://cs.uml.edu",
        "https://cs.uml.edu/path", "http://cs.uml.edu/path", "ftp://cs.uml.edu/path",
        "https://cs.umass.lowell.edu", "cs.uml.edu", "google.com",
    ],
    false: [
        "https:/cs.umass.lowell.edu", 
        "htps://cs.uml.edu",
        "uml",
        "www.google",
    ]
}

const emails = {
    true: [
        "firstnamelastname@example.com",
        "firstname.lastname@example.co.uk",
        "firstname-lastname@example.org",
        "firstname.lastname@example123.com",
        "firstname.lastname@example.travel",
        "firstname.lastname@example.museum",
        "firstname.lastname@example.computer",
        "firstname.lastname@example.tips",
        "firstname.lastname@example.jobs",
        "firstname.lastname@example.info",
    ],
    false: [
        "firstname.lastname@",
        "example.com",
        "@example.com",
        "firstname.lastname@.com",
        "firstname.lastname@.123",
        "firstname.lastname@ex&ample.com",
        "firstname.lastname@ example.com",
        "firstname.lastname@example.c",
        "firstname.lastname@example",
        "firstname.lastname@example.c@om",
        "firstname.lastname@example.c-o-m",
        "firstname.lastname@example.c-o-m",
        "firstname.lastname@example.com ",
        " firstname.lastname@example.com",
        "firstname.lastname @example.com",
        "firstname.lastname@example. com",
        "firstname.lastname@example.com123",
    ]
}

const emailRegexMatch = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegexMatch = /^(\+?1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
const urlRegexMatch = /^((https|http|ftp):\/\/)?(www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})(\/[^\s]*)?$/;


console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

console.log('validating emails\n')
for (const [_, value] of Object.entries(emails)) {
    for (const email of value) {
        if (emailRegexMatch.test(email)) {
            console.log(`email address - ${email} is valid`);
        } else {
            console.log(`email address - ${email} is invalid`);
        }
    }
    console.log('***********************************************')
}
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
console.log('validating phone numbers\n')
for (const [_, value] of Object.entries(phoneNumbers)) {
    for (const phoneNumber of value) {
        if (phoneRegexMatch.test(phoneNumber)) {
            console.log(`phone number - ${phoneNumber} is valid`);
        } else {
            console.log(`phone number - ${phoneNumber} is invalid`);
        }
    }
    console.log('***********************************************')
}
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

console.log('validating URLs\n')
for (const [_, value] of Object.entries(urls)) {
    for (const url of value) {
        if (urlRegexMatch.test(url)) {
            console.log(`URL - ${url} is valid`);
        } else {
            console.log(`URL - ${url} is invalid`);
        }
    }
    console.log('***********************************************')
}
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
