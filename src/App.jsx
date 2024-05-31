import { useState } from "react";

function App() {
  let [advice, setAdvice] = useState(
    `It is easy to sit up and take notice, what's difficult is getting up and taking action.`
  );
  let [adviceNumber, setAdviceNumber] = useState(1);

  async function adviceGenerator() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let user = await response.json();
    setAdvice(user.slip.advice);
    setAdviceNumber((adviceNumber) => adviceNumber + 1);
  }

  return (
    <>
      <div className="flex  lg:justify-center  items-center h-screen">
        <div className="w-[35vw] text-white rounded-2xl min-h-[300px] h-auto bg-[#313A49] py-8 px-6 flex flex-col justify-between">
          <div>
            <p className="text-center text-[14px]">ADVICE #{adviceNumber}</p>
            <h1 className="text-center mt-8 text-[28px]">"{advice}"</h1>
            <img
              src="/images/pattern-divider-desktop.svg"
              className="mx-auto mt-7"
              alt=""
            />
          </div>
          <div className="flex justify-center  ">
            <img
              src="/images/icon-dice.svg"
              className="forHover relative -bottom-[60px] hover:bg-[#53FFAB] cursor-pointer hover:shadow-[#53FFAB] bg-[#53FFAB] p-4 rounded-full"
              alt=""
              onClick={adviceGenerator}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
