import { Buttons } from "./Buttons";
import { useState, useRef } from "react";
import { useCytoscape } from "../CustomHooks/useCytoscape";
export function Main() {
    const [tree, setTree] = useState();
    const cyRef = useRef(null);
    const cyTreeRef = useRef(null);
    const graphExample = [
        {
            // node a
            data: { id: "a" },
        },
        {
            // node b
            data: { id: "b" },
        },
        {
            data: { id: "c" },
        },
        {
            data: { id: "d" },
        },
        {
            data: { id: "ab", source: "a", target: "b" },
        },
        {
            data: { id: "ac", source: "c", target: "a" },
        },
        {
            data: { id: "cb", source: "c", target: "b" },
        },
        {
            data: { id: "bd", source: "b", target: "d" },
        },
    ];
    useCytoscape(cyRef, graphExample);
    useCytoscape(cyTreeRef, tree);
    return (
        <main className="mainPage">
            <Buttons setTree={setTree} graph={graphExample} />
            <div className="grafos">
                <article className="container">
                    <h1>Graph</h1>
                    <div id="cy" ref={cyRef} className="graph" />
                </article>
                {tree && (
                    <article className="container">
                        <h1>Tree of graph</h1>
                        <div id="cy-tree" ref={cyTreeRef} className="graph " />
                    </article>
                )}
            </div>
        </main>
    );
}
