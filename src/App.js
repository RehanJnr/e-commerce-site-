import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./components/Admin/AdminDashboard";
import UserView from "./components/User/UserView";

import Header from "./components/Header";
import { ProductProvider } from "./components/ProductContext";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductProvider> 
        <Header></Header>
        <Routes>
          <Route path="/user" element={<UserView/>} />
          <Route path='/admin' element={<AdminDashboard></AdminDashboard>}/>
          </Routes>
          </ProductProvider>
      </header>
    </div>
  );
}

export default App;
