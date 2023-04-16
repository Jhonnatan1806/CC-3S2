import * as React from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Image from 'next/image';


export default function Home() {
  return (
    <main className="h-screen">
      <section className="h-full w-full flex justify-center items-center">
        <div className="flex flex-col w-[750px] h-[600px] bg-gray-300 p-8 rounded-xl">
          <div className="flex justify-between items-center">
            <div className="w-[15%] flex justify-center">
              <Image
                src="https://cdn2.iconfinder.com/data/icons/symbols-8/50/1F198-sos-button-A-512.png"
                alt="SOS button"
                className="max-w-[60px]"
                width={60}
                height={60}
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
          <div className="flex flex-grow mt-8 gap-4 ">
            <div className="flex flex-col justify-between w-[20%]">
              <FormControl>
                <FormLabel>Blue Player</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="human"
                    control={<Radio />}
                    label="Human"
                  />
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="S"
                        control={<Radio />}
                        label="S"
                        style={{ marginLeft: '10px' }}
                      />
                      <FormControlLabel
                        value="O"
                        control={<Radio />}
                        label="O"
                        style={{ marginLeft: '10px' }}
                      />
                    </RadioGroup>
                  <FormControlLabel
                    value="computer"
                    control={<Radio />}
                    label="Computer"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="flex flex-grow h-full bg-white rounded-xl">
              <canvas id="canvasGame"></canvas>
            </div>
            <div className="flex flex-col justify-between w-[20%]">
              <FormControl>
                <FormLabel>Red Player</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="human"
                    control={<Radio />}
                    label="Human"
                  />
                  <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="S"
                        control={<Radio />}
                        label="S"
                        style={{ marginLeft: '10px' }}
                      />
                      <FormControlLabel
                        value="O"
                        control={<Radio />}
                        label="O"
                        style={{ marginLeft: '10px' }}
                      />
                    </RadioGroup>
                  <FormControlLabel
                    value="computer"
                    control={<Radio />}
                    label="Computer"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap mt-8 ">
            <Button variant="contained">
              <Image
                src="/images/save.svg" // Ruta al archivo SVG en tu proyecto
                alt="save"
                width={18}
                height={18}
              />
              <p className="ml-2">Record Game</p>
            </Button>
            <p><strong>Current Turn: </strong>blue (or red)</p>
            <div className="flex flex-col gap-2">
              <Button variant="contained">Replay</Button>
              <Button variant="contained">New Game</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
