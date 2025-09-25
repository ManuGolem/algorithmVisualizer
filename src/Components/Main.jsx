import ForceGraph2D from "react-force-graph-2d";
import { Buttons } from "./Buttons";
import { DFSInit } from "../Algorithms/DFS";
import { useState } from "react";
export function Main() {
    const [tree, setTree] = useState();

    let data = {
        nodes: [
            { id: 0, name: "Node 0" },
            { id: 1, name: "Node 1" },
            { id: 2, name: "Node 2" },
            { id: 3, name: "Node 3" },
            { id: 4, name: "Node 4" },
            { id: 5, name: "Node 5" },
            { id: 6, name: "Node 6" },
            { id: 7, name: "Node 7" },
        ],
        links: [
            { source: 0, target: 1 },
            { source: 1, target: 3 },
            { source: 1, target: 4 },
            { source: 2, target: 5 },
            { source: 2, target: 6 },
            { source: 3, target: 4 },
            { source: 3, target: 7 },
        ],
    };

    function dfsCallback() {
        setTree(DFSInit(data, 2));
    }
    return (
        <main className="mainPage">
            <Buttons callback={dfsCallback} />
            <div className="grafos">
                <article className="container">
                    <h1>Graph</h1>
                    <ForceGraph2D graphData={data} width={300} height={400} nodeLabel="name" nodeAutoColorBy="id" />
                </article>
                {tree && tree.nodes && (
                    <article className="container">
                        <h1>Tree of DFS</h1>
                        <ForceGraph2D graphData={tree} width={300} height={400} nodeLabel="name" nodeAutoColorBy="id" />
                    </article>
                )}
            </div>
        </main>
    );
}
