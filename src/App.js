import LoginPage from "./components/auth/LoginPage";
import HotelsPage from "./components/hotels/HotelsPage";
import NewHotel from "./components/hotels/NewHotel";

function App() {
  return (
    <div className="App">
      <HotelsPage />
      <NewHotel />
      <LoginPage />
    </div>
  );
}

export default App;
