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
          if (isLoading) return <div>Loding...</div>;

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
