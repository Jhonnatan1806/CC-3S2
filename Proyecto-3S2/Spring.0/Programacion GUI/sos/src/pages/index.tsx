export default function Home() {
  return (
    <main className="h-screen">
      <section className="h-full w-full flex justify-center items-center">
        <div className="flex flex-col w-[750px] h-[600px] bg-blue-200 p-8 rounded-xl">
          <div className="flex justify-between">
            <div>SOS</div>
            <div>Single Game</div>
            <div>General Game</div>
            <div>Board Size</div>
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
              <div className="flex flex-grow bg-white rounded-xl">
                .
              </div>
              <div className="flex justify-center mt-8">
                Current Turn
              </div>
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
