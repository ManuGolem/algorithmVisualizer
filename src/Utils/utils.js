function getIncidents(edges, id) {
    const verticesIncidents = edges.filter((obj) => obj.target.id === id).map((nodo) => nodo.source.id);
    const incidentes = edges.filter((e) => e.source.id === id).map((e) => e.target.id);
    verticesIncidents.push(...incidentes);
    return verticesIncidents;
}
export { getIncidents };
