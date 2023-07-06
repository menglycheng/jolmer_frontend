
import React, { useState } from "react";

import dynamic from "next/dynamic";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditDescription = ({ initialValue, onChange }) => {

  const [editorState, setEditorState] = useState(() => {
    if (initialValue) {
      const contentState = convertFromRaw(JSON.parse(initialValue));
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  const handleDescriptionChange = (newEditorState) => {
    setEditorState(newEditorState);
    const contentState = newEditorState.getCurrentContent();
    const htmlText = draftToHtml(convertToRaw(contentState));
    onChange(htmlText);
  };

  const toolbar = {
    options: ["inline", "list", "textAlign"],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough", "monospace"],
      bold: {},
      italic: {},
      underline: {},
      strikethrough: {},
    },
    list: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ["unordered", "ordered", "indent", "outdent"],
      unordered: {},
      ordered: {},
      indent: {},
      outdent: {},
    },
    textAlign: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ["left", "center", "right", "justify"],
      left: {},
      center: {},
      right: {},
      justify: {},
    },
  };

  const editorStyle = {
    background: "white",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  };

  const wrapperStyle = {
    background: "#E9E8E8",
  };

  const toolbarStyle = {
    background: "white",
  };

  return (
    <div className="">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleDescriptionChange}
        editorStyle={editorStyle}
        wrapperStyle={wrapperStyle}
        toolbarStyle={toolbarStyle}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={toolbar}
      />
    </div>
  );
};

export default EditDescription;
