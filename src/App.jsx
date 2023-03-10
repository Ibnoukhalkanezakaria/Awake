import React from "react";

function App() {
  return (
    <div className="App Wrapper">
      <div className="">
        <div className="nav flex py-8 justify-between">
          <div className="logo secondary-clr f-1 font-bold">Awake</div>
          <div className="social flex">
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  className="secondary-clr text-2xl font-normal"
                >
                  Facrebook
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/"
                  className="secondary-clr text-2xl font-normal"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/"
                  className="secondary-clr text-2xl font-normal"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero max-w-[900px] container-left container-top leading-[80px]">
          <span className="secondary-clr f-2xl font-bold ">
            Copywriter and author based in New York City. Currently juggling
            words at Gavrilles & Co.
          </span>
        </div>
        <div className="flex flex-row  container-left mt-[100px] mb-[50px]">
          <div>
            {/* <hr className="hr" /> */}
            <span className="secondary-clr basis-1/1">----------------</span>
          </div>
          <div>
            <span className="secondary-clr text-xl">Intro</span>
          </div>
          <div>
            <p className="secondary-clr max-w-[500px] text-xl">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between container-left">
          <div>
            <span className="secondary-clr text-xl">(02 - 04)</span>
          </div>
          <div>
            <span className="secondary-clr text-xl">Work</span>
          </div>
          <div>
            <p className="secondary-clr  max-w-[500px] text-xl">
              Don’t worry about sounding professional. Sound like you. There are
              over 1.5 billion websites out there, but your story is what’s
              going to separate this one from the rest. If you read the words
              back and don’t hear your own voice in your head, that’s a good
              sign you still have more work to do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
