"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blocTemplate = blocTemplate;
function blocTemplate() {
    return [
        "import 'package:bloc/bloc.dart';",
        "",
        "class CounterCubit extends Cubit<int> {",
        "  CounterCubit() : super(0);",
        "",
        "  void increment() => emit(state + 1);",
        "}"
    ].join("\n");
}
