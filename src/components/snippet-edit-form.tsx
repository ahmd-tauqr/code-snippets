'use client';

import { Editor } from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import { useState } from 'react';
import * as actions from '@/actions/index';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  const editSnippetAction = actions.updateSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height='40vh'
        theme='vs-dark'
        language='javascript'
        defaultValue={code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button className='p-2 border rounded' type='submit'>
          Save
        </button>
      </form>
    </div>
  );
}
