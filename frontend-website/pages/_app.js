import TopBar from "../src/components/Layouts/TopBar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../src/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <TopBar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
