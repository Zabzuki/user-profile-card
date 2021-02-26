# User Profile Card

## How to install

1. Download the example [or clone the repo](https://github.com/Zabzuki/user-profile-card.git)

2. `npm install`
3. `npm start`
4. Ready to use!

## Description

user-profile-card displays users that are fetched from [Randomuser.me API](https://randomuser.me/) in a responsive and friendly way even for mobile devices There is also added a `TextField` where you add HEX code that are applied in the background color. This value (color) is stored in Local Storage so when you refresh the page, the selected background color will be still the same.

## Architecture

The parent component of the whole project is the `UserCardManager` which has two children, `UserCard` and `ColorPicker`.

## Fetch data

The fetch method is in the parent component and returning 20 users in every call. Their data are passed at the `UserCard` component where used dynamically. If the users don't exist, an error will be logged in to the console.

```
const fetchUsers = () => {
    fetch("https://randomuser.me/api?results=20")
      .then((res) => res.json())
      .then((body) => {
        setUsers((previousUsers) => {
          return [...previousUsers, ...body.results];
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
```

it will be recalled -4 users before the end of the fetched users array.

```
const [index, setIndex] = useState(0);
const numUsers = users.length;


if (index >= numUsers - 4) {
      fetchUsers();
    }
```

## Background color

The background color can be changed by adding a HEX code in to the `TextField`, which is also stored in Local Storage so when the page is refreshed the color will still be the selected one.

First of all running the command:

`npm install use-local-storage`

which helps keep track of the color value even after refresh.

```
const [color, setColor] = useLocalStorage("color");

const setBackgroundColor = () => {
  document.body.style.setProperty("background-color", color);
};

useEffect(() => {
  setBackgroundColor();
}, [color]);
```

By calling the `setBackgroundColor` in the `onChange` method of the `TextField` the value can be seen in the Local Storage of the website. In addition by calling `setBackgroundColor` in the `useEffect` method the color will be applied in the website even after a refresh.
