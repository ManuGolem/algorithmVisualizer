import { useRef, useEffect } from "react";
import cytoscape from "cytoscape";

export function useCytoscape(containerRef, elements) {
    const instanceRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !elements) return;

        instanceRef.current = cytoscape({
            container: containerRef.current,
            elements,
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
            layout: {
                name: "breadthfirst",
                directed: true,
                padding: 10,
            },
        });

        return () => {
            instanceRef.current?.destroy();
            instanceRef.current = null;
        };
    }, [containerRef, elements]);

    return instanceRef;
}
