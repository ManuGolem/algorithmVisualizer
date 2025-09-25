import { getIncidents, createTree } from "../Utils/utils";
let explored = [];
let V;
let E;
let father = [];
function DFSInit(graph, vertex) {
    V = graph.nodes;
    E = graph.links;
    explored = new Array(V.length).fill(false);
    DFS(vertex);
    const treeGraph = createTree(vertex, father);
    return treeGraph;
}
function DFS(u) {
    explored[u] = true;
    const verticesIncidents = getIncidents(E, u);
    verticesIncidents.forEach((v) => {
        if (!explored[v]) {
            DFS(v);
            father[v] = u;
        }
    });
}
export { DFSInit };
