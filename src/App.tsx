import { BreachProvider } from 'features/main/context';
import Main from 'features/main/Main';
import Success from 'features/success/Success';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BreachProvider>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/success'
          element={<Success />}
        />
      </Routes>
    </BreachProvider>
  );
};

export default App;
