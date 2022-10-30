import { gsap } from "gsap";
import "./App.css";

function App() {
  var img1, img2, img3, img4, Heading, paragraph;
  img1 = document.getElementsByClassName("img1");
  img2 = document.getElementsByClassName("img2");
  img3 = document.getElementsByClassName("img3");
  img4 = document.getElementsByClassName("img4");
  Heading = document.getElementsByClassName("");
  paragraph = document.getElementsByClassName("");
  var imagesPos = [img4, img1, img2, img3];
  console.log(img1, img2, img3, img4);
  // const imagesInfo = {
  //   Image4: {
  //     DefaulText: "Green box",
  //     para: "This is the green box i can tell you the info about my life",
  //   },

  //   Image1: {
  //     DefaulText: "Red box",
  //     para: "This is the red box i can tell you the info about my life",
  //   },

  //   Image2: {
  //     DefaulText: "black box",
  //     para: "This is the black box i can tell you the info about my life",
  //   },
  //   Image3: {
  //     DefaulText: "Yellow box",
  //     para: "This is the yellow box i can tell you the info about my life",
  //   },
  // };

  const moveDivBackward = () => {
    gsap.fromTo(
      imagesPos[imagesPos.length - 1],
      {
        height: 250,
        x: -50,
        marginTop: 10,
        zIndex: 1,
        duration: 0.5,
      },
      {
        height: 250,
        x: -50, //changing unit can change the effect
        marginTop: 10,
        zIndex: -2,
        duration: 0.5,
      }
    );

    gsap.fromTo(
      imagesPos[1],
      {
        height: 250,
        x: 50,
        marginTop: 10,
        zIndex: -1,
        duration: 0.5,
      },
      {
        height: 300,
        x: 0,
        marginTop: 10,
        zIndex: 2,
        duration: 0.5,
      }
    );

    gsap.fromTo(
      imagesPos[0],
      {
        height: 300,
        x: 0,
        marginTop: 10,
        zIndex: 2,
        duration: 0.5,
      },
      {
        height: 250,
        x: -50,
        marginTop: 10,
        zIndex: 1,
        duration: 0.5,
      }
    );

    gsap.fromTo(
      imagesPos[2],
      {
        height: 250,
        x: 0,
        marginTop: 10,
        // zIndex: -2,
        duration: 0.5,
      },
      {
        height: 250,
        x: 50,
        marginTop: 10,
        zIndex: -1,
        duration: 0.5,
      }
    );
  };

  const moveDivForward = () => {
    //first imag
    gsap.fromTo(
      imagesPos[imagesPos.length - 1],
      {
        height: 250,
        x: -50,
        marginTop: 10,
        zIndex: 1,
        duration: 0.5,
      },
      {
        height: 300,
        x: 0,
        marginTop: 10,
        zIndex: 2,
        duration: 0.5,
      }
    );

    gsap.to(imagesPos[1], {
      height: 250,
      x: -50,
      marginTop: 10,
      zIndex: 0,
      duration: 0.5,
    });

    gsap.fromTo(
      imagesPos[0],
      {
        height: 300,
        x: 0,
        marginTop: 10,
        // zIndex: 1,
        duration: 0.5,
      },
      {
        height: 250,
        x: 50,
        marginTop: 10,
        zIndex: -1,
        duration: 0.5,
      }
    );

    gsap.fromTo(
      imagesPos[2],
      {
        height: 250,
        x: -50,
        marginTop: 10,
        // zIndex: -2,
        duration: 0.5,
      },
      {
        height: 250,
        x: -50,
        marginTop: 10,
        zIndex: 1,
        duration: 0.5,
      }
    );
  };

  const moveForward = () => {
    moveDivForward();
    var curr = imagesPos.pop();
    imagesPos.unshift(curr);
    console.log(imagesPos);
  };

  const moveBackward = () => {
    moveDivBackward();
    var curr = imagesPos.shift();
    imagesPos.push(curr);
    console.log(imagesPos);
  };

  // const defaultText = () => {
  //   console.log(imagesPos[0]);
  //   Heading.innerText = imagesInfo.imagesPos[0].DefaulText;
  // };

  // const paraText = () => {
  //   console.log(imagesPos[0]);
  //   paragraph.innerText = imagesInfo.imagesPos[0].para;
  // };

  return (
    <div className="App">
      <button className="button" onClick={moveBackward}>
        Left
      </button>
      <button className="button" onClick={moveForward}>
        Right
      </button>

      <div className="main">
        <div className="img1">img1</div>
        <div className="img2">img2</div>
        <div className="img3">img3</div>
        <div className="img4">img4</div>
      </div>

      <div>
        <h1 className="heading">Default Text</h1>
      </div>
      <div>
        <p className="para">
          jdsiajfiaksdjiioaksdfioajsifoahsdoifajsdoifja
          dfiasjdiafjsdiojafsdoijfaosijfosdjfsojosdjosd
          dshfoiasdfiosadjfodsjfoasdjfoisdjfoisdjfoidjf
        </p>
      </div>
    </div>
  );
}

export default App;
