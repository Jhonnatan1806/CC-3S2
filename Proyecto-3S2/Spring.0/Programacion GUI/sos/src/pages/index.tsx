import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Home() {
  return (
    <main className="h-screen">
      <section className="h-full w-full flex justify-center items-center">
        <div className="flex flex-col w-[750px] h-[600px] bg-gray-300 p-8 rounded-xl">
          <div className="flex justify-between items-center">
            <div className="w-[15%] flex justify-center">
              <img
                src="https://cdn2.iconfinder.com/data/icons/symbols-8/50/1F198-sos-button-A-512.png"
                className="max-w-[60px]"
              />
            </div>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="simple"
                  control={<Radio />}
                  label="Simple Game"
                />
                <FormControlLabel
                  value="general"
                  control={<Radio />}
                  label="General Game"
                />
              </RadioGroup>
            </FormControl>
            <div className="w-[15%] flex justify-center">Board Size</div>
          </div>
          <div className="flex flex-grow mt-8">
            <div className="flex flex-col justify-between w-[15%]">
              <div>Blue Player</div>
              <div>
                <div>Human</div>
                <div>Computer</div>
              </div>
              <div>Record Game</div>
            </div>
            <div className="flex flex-col flex-grow mx-8">
              <div className="flex flex-grow bg-white rounded-xl">.</div>
              <div className="flex justify-center mt-8">Current Turn</div>
            </div>
            <div className="flex flex-col justify-between w-[15%] text-right">
              <div>Red Player</div>
              <div>
                <div>Human</div>
                <div>Computer</div>
              </div>
              <div>
                <div>Replay</div>
                <div>New Game</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
