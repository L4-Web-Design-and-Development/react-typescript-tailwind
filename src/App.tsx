import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto">
      <div className="m-8 p-20 rounded-xl bg-sky-100 shadow-xl">
        <h1 className="text-6xl font-bold text-blue-500 mb-8 text-center">
          Handling User Input
        </h1>
        <Paragraph>
          Update the component code to track what the user types into the input
          field below and print it out to the space directly below.
        </Paragraph>
        <div className="flex flex-col mb-6">
          <label
            htmlFor="user-input"
            className="text-gray-400 text-lg pl-2 mb-2"
          >
            Message
          </label>
          <input
            id="user-input"
            className="px-6 py-4 text-2xl"
            placeholder="Type something..."
          />
        </div>
        <div className="p-6">
          <div className="p-6 bg-white rounded-lg flex justify-between items-center">
            <p className="tracking-wide text-gray-600 text-2xl">
              You typed:{" "}
              <span className="bg-green-200 px-4 py-2 rounded-md text-green-600">
                ???
              </span>
            </p>
            <button className="bg-indigo-400 text-white px-4 py-2 rounded-md">
              Clear Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
