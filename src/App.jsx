import { Route, Routes } from "react-router-dom";
import {IndexPage} from './pages/index'
import {LoginPage} from './pages/login'

const App = () => {
  return (  
     <Routes>
      <Route  path='/' exact Component={IndexPage} />
      <Route path="/login" exact Component={LoginPage} />
    </Routes>
  );
}
 
export default App;