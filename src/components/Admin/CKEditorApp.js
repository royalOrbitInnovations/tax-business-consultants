import React, { useRef, useMemo } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// Preserve your existing CSS for styling
import "ckeditor5/ckeditor5.css";
import "./CKE.css";

export default function CKEditorApp({
  initialData = "",
  onChange = () => {},
  placeholder = "Type or paste your content here!",
}) {
  const editorContainerRef = useRef(null);
  const editorWordCountRef = useRef(null);

  const config = useMemo(
    () => ({
      toolbar: {
        items: [
          "findAndReplace",
          "textPartLanguage",
          "|",
          "heading",
          "|",
          "bold",
          "italic",
          "underline",
          "fontSize",
          "|",
          "specialCharacters",
          "link",
          "insertTable",
          "blockQuote",
          "|",
          "bulletedList",
          "numberedList",
          "todoList",
          "outdent",
          "indent",
        ],
        shouldNotGroupWhenFull: false,
      },

      heading: {
        options: [
          {
            model: "paragraph",
            title: "Paragraph",
            class: "ck-heading_paragraph",
          },
          {
            model: "heading1",
            view: "h1",
            title: "Heading 1",
            class: "ck-heading_heading1",
          },
          {
            model: "heading2",
            view: "h2",
            title: "Heading 2",
            class: "ck-heading_heading2",
          },
          {
            model: "heading3",
            view: "h3",
            title: "Heading 3",
            class: "ck-heading_heading3",
          },
        ],
      },

      fontSize: {
        options: ["tiny", "small", "default", "big", "huge"],
        supportAllValues: false,
      },

      link: {
        addTargetToExternalLinks: true,
        defaultProtocol: "https://",
        decorators: {
          toggleDownloadable: {
            mode: "manual",
            label: "Downloadable",
            attributes: { download: "file" },
          },
        },
      },

      list: {
        properties: {
          styles: true,
          startIndex: true,
          reversed: true,
        },
      },

      menuBar: { isVisible: true },

      table: {
        contentToolbar: [
          "tableColumn",
          "tableRow",
          "mergeTableCells",
          "tableProperties",
          "tableCellProperties",
        ],
      },

      placeholder,
    }),
    [placeholder]
  );

  return (
    <div className="main-container">
      <div
        className="editor-container editor-container_classic-editor editor-container_include-block-toolbar editor-container_include-word-count w-[60vw] min-h-[50vh]"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor w-[60vw] min-h-[50vh]">
          <CKEditor
            editor={ClassicEditor}
            data={initialData}
            config={config}
            onReady={(editor) => {
              const wordCount = editor.plugins.get("WordCount");
              if (wordCount) {
                editorWordCountRef.current?.appendChild(
                  wordCount.wordCountContainer
                );
              }
            }}
            onAfterDestroy={() => {
              if (editorWordCountRef.current) {
                Array.from(editorWordCountRef.current.children).forEach(
                  (child) => child.remove()
                );
              }
            }}
            onChange={(event, editor) => onChange(editor.getData())}
          />
        </div>

        <div
          className="editor_container__word-count"
          ref={editorWordCountRef}
        />
      </div>
    </div>
  );
}
