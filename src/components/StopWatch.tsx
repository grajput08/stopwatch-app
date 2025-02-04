import React from "react";
import useStopwatch from "./UseTimer";

function AppStopWatch() {
  const { time, start, pause, reset } = useStopwatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Stopwatch</h1>
        <div className="text-4xl font-mono text-center mb-6">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={start}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Start
          </button>
          <button
            onClick={pause}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          >
            Pause
          </button>
          <button
            onClick={reset}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppStopWatch;
