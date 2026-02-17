export function visualizationTemplate(): string {
  return [
    "import matplotlib.pyplot as plt",
    "import seaborn as sns",
    "",
    "values = [1, 3, 2, 5, 4]",
    "sns.set_theme(style='whitegrid')",
    "",
    "plt.plot(values)",
    "plt.title('Series')",
    "plt.xlabel('step')",
    "plt.ylabel('value')",
    "plt.show()",
    "",
    "# Interactive options",
    "# import plotly.express as px",
    "# import bokeh.plotting as bk",
  ].join("\n");
}
