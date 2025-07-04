# DataFetcher Render Props Component

This project demonstrates how to create a reusable **DataFetcher** component using the **Render Props** pattern in React. It fetches data from an API and allows child components to render the data as needed.

## 🔗 Live Demo

Check out the live demo: [https://thriving-quokka-e72a21.netlify.app/](https://thriving-quokka-e72a21.netlify.app/)

## 📌 Features

- Reusable `DataFetcher` component
- Data passed to children using **Render Props**
- Type-safe with TypeScript
- Handles loading and error states
- Demonstrates flexible rendering of fetched data

## 🚀 How It Works

1. `DataFetcher` receives a `url` prop.
2. It uses `useEffect` to fetch data when the component mounts.
3. While data is being fetched, it displays a `"Loading..."` message.
4. If the fetch fails, it shows an error message.
5. Once data is fetched, it passes the data to a child component using the **Render Props** pattern.

## ⚙️ Render Props Usage (From This Project)

Here’s how the `DataFetcher` component is used with render props to fetch and display a list of users:

```tsx
import DataFetcher from "./DataFetcher";

interface User {
  id: number;
  name: string;
}

const Users = () => {
  return (
    <div>
      <DataFetcher<User[]>
        url="https://jsonplaceholder.typicode.com/users"
        render={(data, isLoading, error) => {
          if (isLoading) return <div>Loading...</div>;

          if (error) return <div>Error: {error}</div>;

          return (
            <ul>
              {data?.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
};

export default Users;
```

This example shows:

- A generic `DataFetcher<User[]>` to fetch user data
- Handling of loading and error states
- Flexible rendering of the fetched data list

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Fetch API**
- **Render Props Pattern**

## 📦 Usage

To use the `DataFetcher` component:

1. Pass a valid API `url` as a prop.
2. Use a function as a `render` prop to access `data`, `loading`, and `error`.

## 💡 Example API Used

This example uses the public API:
<https://jsonplaceholder.typicode.com/users>

## 📋 Error Handling

If the request fails due to a network issue or an invalid URL, the component gracefully displays an error message.
