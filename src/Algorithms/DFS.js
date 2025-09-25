import { getIncidents } from "../Utils/utils";
let explored = [];
let V;
let E;
let father = [];
function DFSInit(graph, vertex) {
    V = graph.nodes;
    E = graph.links;
    explored = new Array(V.length).fill(false);
    DFS(vertex);
    console.log(explored, father);
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
