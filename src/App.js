
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import store from "./components/utils/Store";


function App() {
  return (
    <Provider store={store}>
      <UserContext>
      <div className="App">
          
          <Header />
          <Outlet />
          <hr />
          <Footer />
      </div>
      </UserContext>
    </Provider>
      
  );
}


export default App;
