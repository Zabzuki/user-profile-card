# User Profile Card

## How to install

1. Download the example [or clone the repo](https://github.com/Zabzuki/user-profile-card.git)

2. `npm install`
3. `npm start`
4. Ready to use!

## Description

user-profile-card displays users that are fetched from [Randomuser.me API](https://randomuser.me/) in a responsive and friendly way. There is also added a `TextField` where you add HEX code that are applied in the background color. This value (color) is stored in Local Storage so when you refresh the page, the selected background color will be still the same.

## Architecture

The parent component of the whole project is the `UserCardManager` which has two children, `UserCard` and `ColorPicker`.

## Fetch data

The fetch method is in the parent component and returning 20 users in every call.

```
const fetchUsers = () => {
    fetch("https://randomuser.me/api?results=20")
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setUsers((previousUsers) => {
          return [...previousUsers, ...body.results];
        });
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
