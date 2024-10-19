import UserList from "./components/UserList";
import UsersForm from "./components/UsersForm";

const App = () => {
  return (
    <div className="flex">
      <UsersForm />
      <UserList />
    </div>
  );
};

export default App;
