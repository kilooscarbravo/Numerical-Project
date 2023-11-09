import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-center items-center lg:px-32 px:-5 gap-10 bg-gradient-to-r from-[#ffd6d6] to-[#fcfafa]">
      <div className="w-full lg:w-2/3 space-y-4 mt-14">
        <h1 className="font-semibol text-5xl text-center lg:text-center leading-tight">
          Website calcurate math problem by using numerical method to solve
          fucking equation
        </h1>
        <div className="flex flex-row justify-center gap-6">
          <Button title="พอดีไม่ค่อยมีใจซักเท่าไหร่ แต่อยากมีเกรด"></Button>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
