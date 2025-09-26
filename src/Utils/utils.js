function getIncidents(edges, id) {
    const verticesIncidents = [];
    edges.forEach((obj) => {
        const data = obj.data;
        if (data.source === id) {
            verticesIncidents.push(obj.data.target);
        } else if (data.target === id) {
            verticesIncidents.push(obj.data.source);
        }
    });
    return verticesIncidents;
}
function createTree(vertex, father) {
    let tree = [];
    //Push the root
    tree.push({ data: { id: vertex } });
    Object.entries(father).forEach(([key, value]) => {
        tree.push({ data: { id: key } });
        tree.push({ data: { id: key.concat(value), source: value, target: key } });
    });
    console.log(tree);
    return tree;
}
export { getIncidents, createTree };
