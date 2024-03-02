
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./components/UserContext";
function App() {
  return (
    <UserContext>
    <div className="App">
        
        <Header />
        <Outlet />
        <hr />
        <Footer />
    </div>
    </UserContext>
      
  );
}


export default App;
