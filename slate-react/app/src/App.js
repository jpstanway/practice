import { useEffect, useCallback, useMemo, useState } from 'react';
import { createEditor, Editor, Transforms, Text } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

// code block renderer example
const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>;
}

// leaf renderer
const Leaf = props => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}

// custom commands example
const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    });

    return !!match;
  },
  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code',
    });

    return !!match;
  },
  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },
  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: n => Editor.isBlock(editor, n) }
    )
  }
}

// functions to store content as plain text
const serialize = value => {
  return (
    value.map(n => Node.string(n)).join('\n')
  )
}

const deserialize = string => {
  return string.split('\n').map(line => {
    return {
      children: [{ text: line }]
    }
  });
}

function App() {
  const editor = useMemo(() => withReact(createEditor()), []);
  // const [value, setValue] = useState(
  //   deserialize(localStorage.getItem('content')) || ''
  // );
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('content')) || [
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ]
  );

  // rendering functions
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;  
    }
  }, []);

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />;
  }, []);

  const handleKeyDown = (event) => {
    if (!event.ctrlKey) return;

    switch (event.key) {
      case '`': {
        event.preventDefault();
        CustomEditor.toggleCodeBlock(editor);
        break;
      }

      case 'b': {
        event.preventDefault();
        CustomEditor.toggleBoldMark(editor);
        break;
      }
      default:
        break;
    }    
  }

  // saves changes to local storage
  const handleOnChange = (value) => {
    setValue(value);

    //const content = serialize(value);
    const content = JSON.stringify(value);
    localStorage.setItem('content', content);
  }

  return (
    <Slate 
      editor={editor}
      value={value}
      onChange={newValue => handleOnChange(newValue)}
    >
      <div>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleBoldMark(editor);
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleCodeBlock(editor);
          }}
        >
          Code Block
        </button>
      </div>
      <Editable 
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </Slate>
  );
}

export default App;
