Hier sind Generatoren für diverse Dateiendungen drin.

Das sind alles Javascript-Module die als default export eine
Code Generator Funktion (siehe https://developers.google.com/blockly/guides/create-custom-blocks/code-generation/overview#block-code_generators)
enthalten.

Jede Dateiendung hat ein eigenes Unterverzeichnis und darin Generatoren für die einzelnen Blöcke.
Jeder Block hat einen eigenen Generator. Die Generatoren sind Module, die eine Funktion
   async function generate(block)
enthalten und eine String zurückgeben müssen.

"css/margin-left.js" enthält zum Beispiel einen Generator, der das margin-left Attribut
generiert. "css/style.js" generiert eine Styledefinition, die wiederum Attribute enthält.