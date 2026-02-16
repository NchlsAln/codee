export function imageTemplate(): string {
  return [
    "img = imread('cameraman.tif');",
    "blur = imgaussfilt(img, 2);",
    "imshow(blur);"
  ].join("\n");
}
