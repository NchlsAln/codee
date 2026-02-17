export function cythonExtensionsTemplate(): string {
  return [
    "# example.pyx",
    "# cython: language_level=3",
    "def add(int a, int b):",
    "    return a + b",
    "",
    "# setup.py",
    "# from setuptools import setup",
    "# from Cython.Build import cythonize",
    "# setup(ext_modules=cythonize('example.pyx'))",
  ].join("\n");
}
