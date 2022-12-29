import React, { useState } from "react";

const accData = [
  {
    id: 1,
    ques: "How are you?",
    ans: "Georgeous",
  },
  { id: 2, ques: "Whats you day?", ans: "Doing great" },
  {
    id: 3,
    ques: "How about your position?",
    ans: "Software Developer",
  },
];
function accordin() {
  const [click, setClick] = useState(null);

  const toggle = (id) => {
    console.log(id);
    if (click === id) {
      return setClick(null);
    }
    setClick(id);
  };
  return (
    <>
      <div>
        {accData.map((ques) => {
          return (
            <>
              <div className="acc" key={ques.id}>
                <h1>{ques.ques}</h1>

                <h1 onClick={() => toggle(ques.id)}>+</h1>
              </div>
              {click === ques.id ? <p>{ques.ans}</p> : ""}
            </>
          );
        })}
      </div>
    </>
  );
}
export default accordin;
