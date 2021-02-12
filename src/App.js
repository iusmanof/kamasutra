import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {

  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="/dialogs/" render={() => <Dialogs names={props.state.dialogPage.names} messages={props.state.dialogPage.messages} />} />
        <Route
          path="/profile/"
          render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost} />}
        />
    </div>
  );
};

export default App;
