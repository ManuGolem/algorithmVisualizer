function getIncidents(edges, id) {
    const verticesIncidents = edges.filter((obj) => obj.target.id === id).map((nodo) => nodo.source.id);
    const incidentes = edges.filter((e) => e.source.id === id).map((e) => e.target.id);
    verticesIncidents.push(...incidentes);
    return verticesIncidents;
}
function createTree(vertex, father) {
    let nodes = [];
    let links = [];
    nodes.push({ id: vertex, name: `Node ${vertex}` });
    father.forEach((e, i) => {
        nodes.push({ id: i, name: `Node ${i}` });
        links.push({ source: e, target: i });
    });
    return { nodes, links };
}
export { getIncidents, createTree };
