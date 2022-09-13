import Navbar from "./components/Navbar";
import Jurnal from "./components/jurnal";
function App() {
  return (
    <>
      <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <Jurnal />
                </div>
            </div>
        </div>

    </>
  );
}

export default App;
