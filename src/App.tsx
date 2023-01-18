import ListItem from "./components/ListItem";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen max-w-2xl mx-auto">
      <div className="p-20 rounded-xl bg-sky-100">
        <h1 className="text-6xl font-bold text-blue-500 mb-8 text-center">
          Hello world!
        </h1>
        <Paragraph>
          Your task is to replace this content with code that will build a ToDo
          app. It should allow the user to:
        </Paragraph>
        <ol className="my-4 ml-16">
          <ListItem>Create a ToDo</ListItem>
          <ListItem>Delete ToDos</ListItem>
          <ListItem>Edit ToDos</ListItem>
        </ol>
        <Paragraph>
          You should also ensure the app is styled professionally using Tailwind
          CSS.
        </Paragraph>
        <Paragraph>
          Be sure to use an online Tailwind CSS cheatsheet like{" "}
          <a
            className="text-blue-500 hover:text-blue-700 underline"
            href="https://nerdcave.com/tailwind-cheat-sheet"
          >
            this one
          </a>{" "}
          online to help you.
        </Paragraph>
      </div>
    </div>
  );
}

export default App;
