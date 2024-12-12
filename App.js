import React from 'react';
// import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import MainPage from './COMPONENTS/Home';
// import Dashboard from './COMPONENTS/dashboard/Dashboard';
// import SignUp from './COMPONENTS/Register';
import Blog from './COMPONENTS/Home/Blog';
// import SignIn from './COMPONENTS/signin';
// import About from './components/About';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<SignIn/>} />
    //     <Route path="/Home" element={<MainPage/>} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </Router>
    <Blog/>
  );
}
export default App;
