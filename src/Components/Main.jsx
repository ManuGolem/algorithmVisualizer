import ForceGraph2D from "react-force-graph-2d";

export function Main() {
    const data = {
        nodes: [
            { id: 1, name: "Node 1" },
            { id: 2, name: "Node 2" },
            { id: 3, name: "Node 3" },
            { id: 4, name: "Node 4" },
            { id: 5, name: "Node 5" },
        ],
        links: [
            { source: 1, target: 2 },
            { source: 1, target: 3 },
            { source: 2, target: 4 },
            { source: 2, target: 5 },
        ],
    };

    return (
        <main className="mainPage">
            <ForceGraph2D graphData={data} nodeLabel="name" nodeAutoColorBy="id" linkDirectionalArrowLength={6} linkDirectionalArrowRelPos={1} />
        </main>
    );
}
