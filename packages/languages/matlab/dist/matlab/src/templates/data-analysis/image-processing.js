"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageTemplate = imageTemplate;
function imageTemplate() {
    return [
        "img = imread('cameraman.tif');",
        "blur = imgaussfilt(img, 2);",
        "imshow(blur);"
    ].join("\n");
}
