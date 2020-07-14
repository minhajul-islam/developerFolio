import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Main from "./containers/Main";
//
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   );
// }
//


import Chat from './service/chat/components/Chat/Chat';
import Join from './service/chat/components/Join/Join';
import Main from "./containers/Main";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Main} />
            <Route path="/join" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
    );
}

export default App;
