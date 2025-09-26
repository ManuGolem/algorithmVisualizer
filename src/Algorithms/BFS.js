import { getIncidents, createTree } from "../Utils/utils";
let discover = {};
let V;
let E;
let father = {};
function BFS(graph, vertex) {
    V = graph.filter((e) => e.data.source == undefined);
    E = graph.filter((e) => e.data.source != undefined);
    let L = [[vertex]];
    let i = 0;
    discover = new Array(V.length).fill(false);
    discover[vertex] = true;
    while (L[i].length > 0) {
        L[i + 1] = [];
        L[i].forEach((u) => {
            const verticesIncidents = getIncidents(E, u);
            verticesIncidents.forEach((v) => {
                if (!discover[v]) {
                    discover[v] = true;
                    father[v] = u;
                    L[i + 1].push(v);
                }
            });
        });
        i++;
    }
    const treeBFS = createTree(vertex, father);
    return treeBFS;
}

export { BFS };
