"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shinyTemplate = shinyTemplate;
function shinyTemplate() {
    return [
        "library(shiny)",
        "ui <- fluidPage(sliderInput('n', 'n', 1, 10, 5), plotOutput('plot'))",
        "server <- function(input, output) {",
        "  output$plot <- renderPlot(plot(1:input$n))",
        "}",
        "shinyApp(ui, server)"
    ].join("\n");
}
