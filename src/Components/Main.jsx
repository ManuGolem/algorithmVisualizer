import ForceGraph2D from "react-force-graph-2d";
import { Buttons } from "./Buttons";

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
            { source: 2, target: 1 },
            { source: 3, target: 1 },
            { source: 4, target: 1 },
            { source: 5, target: 1 },
        ],
    };
    function obtenerVecinos(id) {
        const arregloVecinos = data.links.filter((obj) => obj.target.id === id).map((nodo) => nodo.source);
        arregloVecinos.push(data.links.filter((obj) => obj.source.id === id).map((nodo) => nodo.target));
        return arregloVecinos;
    }
    function callback() {
        const vecinosDeNodoUno = obtenerVecinos(5);
        console.log(vecinosDeNodoUno);
    }
    return (
        <main className="mainPage">
            <Buttons callback={callback} />
            <ForceGraph2D graphData={data} nodeLabel="name" nodeAutoColorBy="id" />
        </main>
    );
}
