import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./components/Counter";
import Users from "./components/Users";

function App() {
  return (
    <Provider store={store}>
      <Users />
      <Counter />
    </Provider>
  );
}

export default App;
