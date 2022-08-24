import AppRouter from "./Routes/AppRouter";

import { Header } from "./Layouts";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
