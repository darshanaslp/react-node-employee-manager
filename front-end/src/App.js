import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/pages/UserList";
import AddUser from "./components/pages/AddUser";
import EditUser from "./components/pages/EditUser";
import { Provider } from "react-redux"
import store from "./components/redux/store"

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
