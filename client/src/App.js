import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// import { auth } from "./auth/Auth";
// import { onAuthStateChanged } from "firebase/auth";
// import StateContext from "../../Context/Context";

function App() {
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // const uid = user.uid;
  //     handleuserId(user.uid);
  //     handleuserName(user.displayName ?? user.email);
  //     history.push("/Home");
  //     console.log(uid, "SignIn");
  //   } else {
  //     handleEmail("");
  //     handlePassword("");
  //     handleuserId(null);
  //     history.push("/Login");
  //     console.log("SignOut");
  //   }
  // });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Profile/:Username">
          <Profile />
        </Route>
        <Route path="/">
          <Redirect to="/Login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
