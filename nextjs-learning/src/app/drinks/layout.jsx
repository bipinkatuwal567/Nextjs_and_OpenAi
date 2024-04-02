import React from "react";

const Drinkslayout = ({children}) => {
  return (
    <div className="max-w-xl">
      <div className=" mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest next-learning</code>
        </pre>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Drinkslayout;
