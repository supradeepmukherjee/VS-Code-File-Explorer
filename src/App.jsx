import { useState } from 'react';
import Folder from './components/Folder';
import jsonData from './data/folderData';
import useTreeTraversal from './hooks/useTreeTraversal';

function App() {
  const [data, setData] = useState(jsonData)
  const { insertNode } = useTreeTraversal()
  const handleInsertNode = (id, item, isFolder) => {
    setData(insertNode(data, id, item, isFolder))
  }
  return (
    <>
      <Folder insertNodeHandler={handleInsertNode} data={data} />
    </>
  )
}

export default App