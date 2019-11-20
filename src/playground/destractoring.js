// const person = {
//     // name: 'Andrew',
//     age: 22,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };
//
// const {name = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;
//
// console.log(name, age, city, temperature);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//       // name: 'Penguin'
//   }
// };
//
// const {title, author} = book;
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(`The book ${title} by ${author} was published by ${publisherName}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [subject, , mPrice] = item;
console.log(`A medium ${subject} costs ${mPrice}`);