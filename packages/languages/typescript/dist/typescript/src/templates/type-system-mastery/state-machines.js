"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateMachinesTemplate = stateMachinesTemplate;
function stateMachinesTemplate() {
  return [
    "type State = { status: 'idle' } | { status: 'loading' } | { status: 'done' };",
    "type Event = 'FETCH' | 'RESOLVE';",
    "",
    "function transition(state: State, event: Event): State {",
    "  if (state.status === 'idle' && event === 'FETCH') return { status: 'loading' };",
    "  if (state.status === 'loading' && event === 'RESOLVE') return { status: 'done' };",
    "  return state;",
    "}",
    "",
    "// XState integration can derive types from machines",
  ].join("\n");
}
