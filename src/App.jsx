function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[500px] text-white rounded-2xl h-[300px] bg-[#313A49]">
          <p className="text-center mt-8 text-[14px]">ADVICE # 117</p>
          <h1 className="text-center w-[420px] mt-8 text-[28px] mx-auto">
            "it is easy to sit up take notice, what's difficult is getting up
            and taking action".
          </h1>
          <img
            src="/images/pattern-divider-desktop.svg "
            className="mx-auto mt-7"
            alt=""
          />
          <img
            src="/images/icon-dice.svg"
            className="mx-auto mt-5 forHover hover:bg-[#53FFAB] cursor-pointer  hover:shadow-[#53FFAB] bg-[#53FFAB] p-4 rounded-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
