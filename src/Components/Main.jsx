import ForceGraph2D from "react-force-graph-2d";
import { Buttons } from "./Buttons";
import { DFSInit } from "../Algorithms/DFS";
export function Main() {
    const data = {
        nodes: [
            { id: 0, name: "Node 0" },
            { id: 1, name: "Node 1" },
            { id: 2, name: "Node 2" },
            { id: 3, name: "Node 3" },
            { id: 4, name: "Node 4" },
        ],
        links: [
            { source: 3, target: 0 },
            { source: 4, target: 0 },
            { source: 2, target: 0 },
            { source: 3, target: 2 },
        ],
    };
    function dfsCallback() {
        DFSInit(data, 2);
    }
    return (
        <main className="mainPage">
            <Buttons callback={dfsCallback} />
            <ForceGraph2D graphData={data} nodeLabel="name" nodeAutoColorBy="id" />
        </main>
    );
}
