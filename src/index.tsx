import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useMediaQuery } from "@react-hook/media-query";
import TreeEditor from "./components/TreeEditor";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./index.css";
import "./monaco-css.css";

const Index = () => {
  const matches = useMediaQuery("only screen and (min-width: 450px)");
  if (matches) {
    return (
      <Provider store={store}>
        <ChakraProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={TreeEditor} />
            </Switch>
          </Router>
        </ChakraProvider>
      </Provider>
    );
  } else {
    return (
      <div className="bg-editorprimary text-white h-screen flex items-center justify-center text-center font-semibold">
        <div>
          The application is not yet supported on mobile, please open{" "}
          <span className="text-green-500"> CodeTree</span> on a computer
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Index />, document.querySelector("#root"));
