import { Buttons } from "./Buttons";
import { useState, useRef, useEffect } from "react";
import cytoscape from "cytoscape";
export function Main() {
    const [tree, setTree] = useState();
    const cyRef = useRef(null);
    const cyInstanceRef = useRef(null);
    const cyTreeRef = useRef(null);
    const data = [
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
    useEffect(() => {
        if (!cyRef.current) return;
        cyInstanceRef.current = cytoscape({
            container: cyRef.current,
            elements: data,
            style: [
                {
                    selector: "node",
                    style: {
                        "background-color": "#666",
                        label: "data(id)",
                    },
                },

                {
                    selector: "edge",
                    style: {
                        width: 1,
                        "line-color": "#ccc",
                        "target-arrow-color": "#ccc",
                        "target-arrow-shape": "none",
                        "curve-style": "bezier",
                    },
                },
            ],

            layout: { name: "breadthfirst", directed: true, padding: 10, direction: "leftward" },
        });

        return () => cyInstanceRef.current?.destroy();
    }, []);
    useEffect(() => {
        if (cyInstanceRef.current) {
            cyInstanceRef.current.resize();
            cyInstanceRef.current.fit();
        }

        if (!tree || !cyTreeRef.current) return;

        const cyTree = cytoscape({
            container: cyTreeRef.current,
            elements: tree,
            style: [
                {
                    selector: "node",
                    style: {
                        "background-color": "#0074D9",
                        label: "data(id)",
                    },
                },
                {
                    selector: "edge",
                    style: {
                        width: 2,
                        "line-color": "#aaa",
                        "target-arrow-color": "#aaa",
                        "target-arrow-shape": "none",
                        "curve-style": "bezier",
                    },
                },
            ],
            layout: { name: "breadthfirst", directed: true, padding: 10 },
        });

        return () => cyTree.destroy();
    }, [tree]);
    return (
        <main className="mainPage">
            <Buttons setTree={setTree} graph={data} />
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
