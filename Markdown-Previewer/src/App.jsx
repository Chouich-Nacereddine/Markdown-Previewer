import { useState , useEffect } from "react";
import {marked} from "marked";

function App() {
  const [markdown, setMarkdown] = useState(`# Heading 1
  ## Heading 2
  [Link](https://www.example.com)
  \`inline code\`
  \`\`\`
  // Code block
  function example() {
    return 'Hello, World!';
  }
  \`\`\`
  - List item 1
  - List item 2
  > Blockquote
  ![Image](https://via.placeholder.com/150)
  **Bold text**`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const renderMarkdown = () => {
    return { __html: marked(markdown) };
  };

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">Markdown Previewer</h1>
         <div className="p-10 bg-gray-600 w-full h-[max-content] grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl">
          <div>
            <h2 className="text-xl font-semibold mb-2">Editor</h2>
            <textarea
              id="editor"
              className="w-full h-[67vh] p-2 border border-gray-300 rounded"
              value={markdown}
              onChange={handleChange}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Preview</h2>
            <div
              id="preview"
              className="w-full h-[max-content] p-2 border border-gray-300 rounded"
              dangerouslySetInnerHTML={renderMarkdown()}
            />
          </div>
        </div> 
      </div>
    </>
  );
}

export default App;
