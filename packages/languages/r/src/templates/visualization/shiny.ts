export function shinyTemplate(): string {
  return [
    "library(shiny)",
    "ui <- fluidPage(sliderInput('n', 'n', 1, 10, 5), plotOutput('plot'))",
    "server <- function(input, output) {",
    "  output$plot <- renderPlot(plot(1:input$n))",
    "}",
    "shinyApp(ui, server)"
  ].join("\n");
}
