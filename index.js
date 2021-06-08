// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const obj = `{visitorId:37f321029125fe5d40c5c617af4c2ad0}`;
console.log(encodeURI(obj));
const firstOrderFunc = () => console.log('Hello, I am a First order function');
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

// Import stylesheets
const regex = new RegExp(/^a...s$/);
const regex1 = new RegExp(
  '^(feature|bugfix|stage-fix|issue|prerelease|release|hotfix)/[a-z0-9._-]+$'
);
console.log(regex1.test('feature/erer')); // true

const sum = async (a, b) => {
  return a + b;
};
sum(1, 4)
  .then(
    res => {
      console.log(res);
    },
    err => {
      console.error(err);
    }
  )
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('Sohom');
  });
