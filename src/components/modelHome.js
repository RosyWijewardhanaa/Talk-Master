import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const ModelHome = () => {

  const [newResponse, setNewRespone] = useState("");
  const [pastInput, setPastInput] = useState("");
  const [newInput, setNewInput] = useState("");
  const [newTyping, setNewTyping] = useState("");

  useEffect(() => {
    async function query(data) {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    }

    query({
      inputs: {
        past_user_inputs: [`${pastInput}`], //pastinput
        generated_responses: [`${newResponse}`], //newresponse
        text: `${newInput}`, //newinput
      },
    }).then((response) => {
      console.log(JSON.stringify(response));
      setNewRespone(response.generated_text);
      setPastInput(response.past_user_inputs);
    });
  },[newInput]);

  const handleSend = () => {
    setNewInput(newTyping);
    setNewTyping('');
  };

  return (
    <div>
      <Grid container style={{ padding: "50px" }}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Type Here.."
            variant="outlined"
            value={newTyping}
            onChange={(e) => setNewTyping(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "20px" }}>
          <Button variant="outlined" onClick={handleSend}>Send</Button>
        </Grid>
      </Grid>

      <div
        style={{
          padding: "30px",
          margin: "0px 50px",
          border: "1px solid #8cbae8",
        }}
      >
      {newResponse}
      </div>
    </div>
  );
};

export default ModelHome;
