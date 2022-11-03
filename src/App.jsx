import "./App.css";

// Assets
import Person from "./assets/person.jpeg";
import Flag from "./assets/UK.jpeg";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="ImgContainer">
          <img className="CardImg" src={Person} alt="Person" />
        </div>
        <div className="ContentContainer">
          <div className="ContentHeading">Visitor Visa</div>
          <div className="ContentBody">
            <div className="ContentBodyField">
              <div className="ContentBodyFieldTitle">Name: &nbsp; </div>
              <div className="ContentBodyFieldText">Laura Jensen</div>
            </div>

            <div className="ContentBodyField">
              <div className="ContentBodyFieldTitle">Country: &nbsp; </div>
              <div className="ContentBodyFieldText">United Kingdoms</div>
            </div>

            <div className="ContentBodyField">
              <div className="ContentBodyFieldTitle">College: &nbsp; </div>
              <div className="ContentBodyFieldText">Trinity, London</div>
            </div>

            <div className="ContentBodyField">
              <div className="ContentBodyFieldTitle">Says </div>
              <div className="ContentBodyFieldText">
                &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis laboriosam dolorum minima rerum, quibusdam animi
                ullam. Assumenda tempore ipsam quidem.
              </div>
            </div>
          </div>
        </div>
        <div className="ContentFlag">
          <img className="ContentFlagImg" src={Flag} alt="Flag" />
        </div>
      </div>
    </div>
  );
}
export default App;
