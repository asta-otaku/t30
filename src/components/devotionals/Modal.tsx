import { EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useState } from "react";

function DevotionalModal() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [contentState, setContentState] = useState<string | null>(null);

  const handleContentStateChange = (contentState: any) => {
    setContentState(draftToHtml(contentState));
  };

  const handleEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="z-[200] max-w-[90vw] md:max-w-7xl max-h-[80vh] w-full overflow-auto bg-white relative rounded-xl"
    >
      <div className="flex justify-between flex-wrap gap-4 items-center px-4 md:px-12 border-b py-4">
        <div className="flex gap-2 items-center">
          <h1 className="font-medium text-lg text-[#101828]">
            Create new devotional
          </h1>
          <h6 className="bg-[#F5F6F7] py-0.5 px-2 font-medium text-xs rounded-full">
            Auto-saved 1 minute ago
          </h6>
        </div>
        <div className="flex gap-2 items-center">
          <button className="border rounded-lg px-3 py-2 text-[#344054] font-medium text-xs">
            Save as draft
          </button>
          <button className="border rounded-lg px-3 py-2 font-semibold text-xs flex items-center gap-1 bg-black text-white">
            Continue
          </button>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto w-full flex flex-col items-center gap-8 py-8">
        <Editor
          editorState={editorState}
          toolbarClassName="editor-toolbar"
          wrapperClassName="editor-wrapper"
          editorClassName="editor"
          onEditorStateChange={handleEditorStateChange}
          onContentStateChange={handleContentStateChange}
          spellCheck
        />
      </div>
    </div>
  );
}

export default DevotionalModal;
