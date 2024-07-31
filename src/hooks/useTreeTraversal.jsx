
const useTreeTraversal = () => {
    const insertNode = (tree, id, item, isFolder) => {
        if (tree.id == id && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            })
            return tree
        }
        return { ...tree, items: tree.items.map(i => insertNode(i, id, item, isFolder)) }
    }
    return { insertNode }
}

export default useTreeTraversal