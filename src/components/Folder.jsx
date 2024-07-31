import { useState } from "react"

const Folder = ({ data, insertNodeHandler }) => {
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    })
    const newFolderHandler = (e, isFolder) => {
        e.stopPropagation()
        setExpand(true)
        setShowInput({
            visible: true,
            isFolder
        })
    }
    const addFolderHandler = e => {
        if (e.keyCode == 13 && e.target.value) {
            setShowInput({ ...showInput, visible: false })
            insertNodeHandler(data.id, e.target.value, showInput.isFolder)
        }
    }
    if (data.isFolder)
        return (
            <div style={{
                marginTop: 5,

            }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>
                        📁 {data.name}
                    </span>
                    <div>
                        <button onClick={e => newFolderHandler(e, true)}>
                            Folder +
                        </button>
                        <button onClick={e => newFolderHandler(e, false)}>
                            File +
                        </button>
                    </div>
                </div>
                <div
                    style={{
                        display: expand ? 'block' : 'none',
                        paddingLeft: '25px'
                    }}
                >
                    {showInput.visible && (
                        <div className="inputContainer">
                            <span>
                                {showInput.isFolder ? '📁' : '📄'}
                            </span>
                            <input
                                type='text'
                                onBlur={() => setShowInput({ ...showInput, visible: false })}
                                onKeyDown={addFolderHandler}
                                className="inputContainerInput"
                                autoFocus
                            />
                        </div>
                    )}
                    {data.items.map(i => (
                        <Folder insertNodeHandler={insertNodeHandler} data={i} key={i.id} />
                    ))}
                </div>
            </div>
        )
    else
        return (
            <span className="file">
                📄 {data.name}
            </span>
        )
}

export default Folder