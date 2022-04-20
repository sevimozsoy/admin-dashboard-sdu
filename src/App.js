import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List"
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/> 
              {/* userId is a parameter */}
              <Route path="new" element={<New/>}/>
            </Route>
    
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/> 
              {/* userId is a parameter */}
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
