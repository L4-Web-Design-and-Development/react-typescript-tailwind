import ListItem from "./components/ListItem";
import Paragraph from "./components/Paragraph";
import Link from "./components/Link";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto">
      <div className="m-8 p-20 rounded-xl bg-sky-100 shadow-xl">
        <h1 className="text-6xl font-bold text-blue-500 mb-8 text-center">
          Hello world!
        </h1>
        <Paragraph>
          This project has multiple branches to help you get used to coding in
          React.
        </Paragraph>
        <Paragraph>
          Use GitHub Desktop to switch between the branches and complete the
          tasks. Create your own branches from these to work on your solutions
          independently from the original code.
        </Paragraph>
        <div className="m-8 p-10 rounded-xl bg-white">
          <Paragraph>
            A list of the branches and their recommended order is shown below.
          </Paragraph>
          <ol className="my-4 ml-16">
            <ListItem>Counter</ListItem>
            <ListItem>Handling User Input</ListItem>
            <ListItem>ToDo List App</ListItem>
          </ol>
        </div>
        <Paragraph>
          You should also ensure your solutions are styled professionally using{" "}
          <Link url="https://tailwindcss.com/">Tailwind CSS</Link>.
        </Paragraph>
        <Paragraph>
          Be sure to use an online Tailwind CSS cheatsheet like{" "}
          <Link url="https://nerdcave.com/tailwind-cheat-sheet">this one</Link>{" "}
          online to help you.
        </Paragraph>
      </div>
    </div>
  );
}

export default App;
