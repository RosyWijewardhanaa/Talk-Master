import React from "react";

const ModelHome = () => {
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  query({
    inputs: {
      past_user_inputs: ["Which movie is the best ?"],
      generated_responses: ["It's Die Hard for sure."],
      text: "Can you explain why ?",
    },
  }).then((response) => {
    console.log(JSON.stringify(response));
  });

  return(
    <div>
        Hello Talk
    </div>
  );
};

export default ModelHome;
