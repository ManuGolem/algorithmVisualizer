import { DFSInit } from "../Algorithms/DFS";
import { BFS } from "../Algorithms/BFS";

export function Buttons({ setTree, graph }) {
    function dfsCallback() {
        setTree(DFSInit(graph, 2));
    }
    function bfsCallback() {
        setTree(BFS(graph, 0));
    }
    return (
        <article>
            <button onClick={() => dfsCallback()}>DFS</button>
            <button onClick={() => bfsCallback()}>BFS</button>
        </article>
    );
}
