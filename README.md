# User Profile Card

## How to install

1. Download the example [or clone the repo](https://github.com/Zabzuki/user-profile-card.git)

2. `npm install`
3. `npm start`
4. Ready to use!

## Description

user-profile-card displays users that are fetched from [Randomuser.me API](https://randomuser.me/) in a responsive and friendly way even for mobile devices There is also added a `TextField` where you add HEX code that are applied in the background color. This value (color) is stored in Local Storage so when you refresh the page, the selected background color will be still the same.

## Technologies

1. ReactJS
2. Material-UI

## Architecture

The parent component of the whole project is the `UserCardManager` which has two children, `UserCard` and `ColorPicker`.

## Fetch data

The fetch method is in the parent component and returning 20 users in every call. Their data are passed at the `UserCard` component where used dynamically.

```
const fetchUsers = () => {
    fetch("https://randomuser.me/api?results=20")
      .then((res) => res.json())
      .then((body) => {
        //console.log(body);
        setUsers((previousUsers) => {
          return [...previousUsers, ...body.results];
        });
      })
      .catch((error) => {
        setError(true);
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

If fetch don't return anything, the `<Error>` component will be rendered.
![](images/error.png)

## Background color

The background color can be changed by adding a HEX code in to the `TextField`, which is also stored in Local Storage so when the page is refreshed the color will still be the selected one.

In `index.js` the children components are wrapped from a `<ThemeProvider>` which customising the theme content. In `theme.js` is created the `MuiThemeProvider` which is used in `ThemeProvider`.

```
  let newTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      background: {
        default: color,
      },
    },
  };

  const setBackgroundColor = (color) => {
    localStorage.setItem("color", color);
    setColor(color);
  };

  return (
    <ThemeContext.Provider value={setBackgroundColor}>
      <MuiThemeProvider theme={newTheme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
```

with `theme={newTheme}` the color is updated (by changing the default background color). The update procedure take place from the `setBackgroundColor` callback which store value to Local Storage and calls the `setColor`.
By adding React Context in `ThemeProvider.js` the props are available in any component

```
const ThemeContext = React.createContext(theme);
```

which are called in `ColorPicker.js` where the `setBackgroundColor` method can be easily used in the `onChange`, so when the `TextField` value changed, will be updated in Local Storage also.

## Uni Tests
