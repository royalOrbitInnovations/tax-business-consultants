// CKEditorApp.js (formerly SKEEditor.js)

import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
/*
  This imports from a local "ckeditor5" directory/bundle (your custom build).
  Make sure that custom build includes the Font plugin. If not, you’ll need to 
  rebuild or install @ckeditor/ckeditor5-font and integrate it.
*/
import {
  ClassicEditor,
  Autoformat,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  BlockToolbar,
  Bold,
  Essentials,
  FindAndReplace,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  ListProperties,
  Markdown,
  Paragraph,
  PasteFromMarkdownExperimental,
  PasteFromOffice,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  TextTransformation,
  // Removed Title,
  TodoList,
  Underline,
  WordCount,
  // Add Font (if it's in your custom build):
  Font,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import "./CKE.css"; // Custom CSS overrides (if any).

// If you have a license key, update it accordingly
const LICENSE_KEY =
  "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDMxMTk5OTksImp0aSI6IjcyYWIyZmM5LTFjYmYtNDNiYi05ZDBkLWVlNTllNGQ0ZTkxMiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjA4MmY5NTYwIn0.63iQqbKABasujvIFzVeiSn_iSL0jY17PYkC44vj6FCjC3SuUFiZ71HkGFx-czFJ610DofVc2se-U0A8VoTC79A";

export default function CKEditorApp({
  initialData = "",
  onChange = () => {},
  placeholder = "Type or paste your content here!",
}) {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const editorWordCountRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) {
      return {};
    }

    return {
      editorConfig: {
        // 1. Customize your toolbar items
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
            // Add fontSize to let users pick a text size
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

        // 2. Load the necessary plugins
        plugins: [
          Autoformat,
          Autosave,
          BalloonToolbar,
          BlockQuote,
          BlockToolbar,
          Bold,
          Essentials,
          FindAndReplace,
          Heading,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          ListProperties,
          Markdown,
          Paragraph,
          PasteFromMarkdownExperimental,
          PasteFromOffice,
          SpecialCharacters,
          SpecialCharactersArrows,
          SpecialCharactersCurrency,
          SpecialCharactersEssentials,
          SpecialCharactersLatin,
          SpecialCharactersMathematical,
          SpecialCharactersText,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableProperties,
          TableToolbar,
          TextPartLanguage,
          TextTransformation,
          // Removed Title plugin, so first line won't be forced as heading
          TodoList,
          Underline,
          WordCount,
          // Add the Font plugin
          Font,
        ],

        // 3. Optional balloon & block toolbars
        balloonToolbar: [
          "bold",
          "italic",
          "|",
          "link",
          "|",
          "bulletedList",
          "numberedList",
        ],
        blockToolbar: [
          "bold",
          "italic",
          "|",
          "link",
          "insertTable",
          "|",
          "bulletedList",
          "numberedList",
          "outdent",
          "indent",
        ],

        // 4. Customize heading levels if you want
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
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },

        // 5. FontSize configuration
        fontSize: {
          // Display text-based choices or numeric sizes
          options: ["tiny", "small", "default", "big", "huge"],
          supportAllValues: false, // set true if you want the user to type any size
        },

        initialData,
        licenseKey: LICENSE_KEY,

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

        placeholder,

        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
      },
    };
  }, [isLayoutReady, initialData, placeholder]);

  return (
    <div className="main-container">
      <div
        className="editor-container editor-container_classic-editor editor-container_include-block-toolbar editor-container_include-word-count"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor">
          <div ref={editorRef}>
            {editorConfig && (
              <CKEditor
                editor={ClassicEditor}
                config={editorConfig}
                onReady={(editor) => {
                  // WordCount plugin: attach to DOM if needed
                  const wordCount = editor.plugins.get("WordCount");
                  if (wordCount) {
                    editorWordCountRef.current?.appendChild(
                      wordCount.wordCountContainer
                    );
                  }
                }}
                onAfterDestroy={() => {
                  // Clean up WordCount DOM nodes
                  if (editorWordCountRef.current) {
                    Array.from(editorWordCountRef.current.children).forEach(
                      (child) => child.remove()
                    );
                  }
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  onChange(data);
                }}
              />
            )}
          </div>
        </div>

        <div
          className="editor_container__word-count"
          ref={editorWordCountRef}
        />
      </div>
    </div>
  );
}
