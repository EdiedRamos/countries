import AppRouter from "./Routes/AppRouter";

import { Header } from "./Layouts";

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
