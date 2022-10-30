import { useState } from "react";
import { gsap } from "gsap";
import "./App.css";

// MUI
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";

function App() {
  const [current, setCurrent] = useState(0);

  var img1, img2, img3, img4;
  img1 = document.getElementsByClassName("AnimiatedCarouselImageOne");
  img2 = document.getElementsByClassName("AnimiatedCarouselImageTwo");
  img3 = document.getElementsByClassName("AnimiatedCarouselImageThree");
  img4 = document.getElementsByClassName("AnimiatedCarouselImageFour");
  var imagesPos = [img4, img1, img2, img3];
  var content = [
    {
      title: "Australia Visitor Visa",
      text: "This app is something that every teenager needs. I've been using this app for a while now, and not only does it give me a experience of using a debit card as a teenager, but also gives me idea about savings and many other useful things.",
      name: "Lisa Maria",
      rating: 5,
    },
    {
      title: "USA Visitor Visa",
      text: "FamPay has definitely made my children familiar and aware of their finances. Really happy how the app works, very easy and convenient to adapt. I really wish there was something like this during our time.",
      name: "John Doe",
      rating: 5,
    },
    {
      title: "Canada Work Permit",
      text: "lorem ipsum dolor sit amet previs",
      name: "Laura Johnson",
      rating: 4,
    },
    {
      title: "USA Investor Visa",
      text: "it's been a very convenient tool since. My son has his UPI ID and card without any bank account. He can use it to get his app trials and food ordering etc. He has started saving money through the streak!",
      name: "Mary Jane",
      rating: 4,
    },
  ];

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
    setCurrent(Math.abs((current + 1) % 4));
    moveDivForward();
    var curr = imagesPos.pop();
    imagesPos.unshift(curr);
  };

  const moveBackward = () => {
    if (current === 0) setCurrent(3);
    else setCurrent(Math.abs(current - 1));
    moveDivBackward();
    var curr = imagesPos.shift();
    imagesPos.push(curr);
  };

  return (
    <div className="AnimatedCarousel">
      <div className="AnimatedCarouselImgsContainer">
        <div className="AnimiatedCarouselImgs">
          <div className="AnimiatedCarouselImageOne">img1</div>
          <div className="AnimiatedCarouselImageTwo">img2</div>
          <div className="AnimiatedCarouselImageThree">img3</div>
          <div className="AnimiatedCarouselImageFour">img4</div>
        </div>
        <div>
          <ArrowBackIosIcon onClick={moveForward} />
          <ArrowForwardIosIcon onClick={moveBackward} />
        </div>
      </div>

      <div className="AnimatedCarouselContentContainer">
        <div>
          <Rating name="read-only" value={content[current].rating} readOnly />
        </div>

        <div>
          <h1 className="AnimiatedCarouselHeading">{content[current].title}</h1>
        </div>

        <div>
          <p>
            <b>{content[current].name}</b>
          </p>
        </div>

        <div>
          <p className="AnimiatedCarouselText">{content[current].text}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
