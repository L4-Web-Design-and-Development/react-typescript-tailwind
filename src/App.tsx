import ListItem from "./components/ListItem";
import Paragraph from "./components/Paragraph";
import Link from "./components/Link";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto">
      <div className="m-8 p-20 rounded-xl bg-sky-100 shadow-xl">
        <h1 className="text-6xl font-bold text-blue-500 mb-8 text-center">
          Counter
        </h1>
        <div className="text-center">
          <Paragraph>
            Can you update the component code so that clicking the 'Add' button
            below makes the number shown increment by one every time?
          </Paragraph>
        </div>
        <div className="flex items-center justify-center p-10">
          <div>
            <div className="bg-white rounded-full flex items-center justify-center w-64 h-64">
              <h2 className="text-indigo-700 text-6xl">1</h2>
            </div>
            <div className="mt-10 flex justify-center">
              <button className="bg-indigo-700 text-white text-2xl px-12 py-6 rounded-lg">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
