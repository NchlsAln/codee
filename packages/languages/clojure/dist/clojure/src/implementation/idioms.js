"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureIdioms = void 0;
exports.clojureIdioms = [
    {
        name: "Immutable collections",
        description: "Favor persistent vectors, maps, and sets over mutation."
    },
    {
        name: "Threading macros",
        description: "Use -> and ->> to express pipelines."
    },
    {
        name: "Destructuring",
        description: "Destructure maps/vectors in bindings and fn args."
    },
    {
        name: "Protocols",
        description: "Define polymorphism with defprotocol/extend-type."
    },
    {
        name: "Multimethods",
        description: "Use defmulti/defmethod for flexible dispatch."
    },
    {
        name: "STM and agents",
        description: "Use atoms/refs/agents for coordinated state updates."
    }
];
