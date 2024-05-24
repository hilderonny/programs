Hier ist für jede Dateiendung ein eigener Parser enthalten.
Diese Parser spucken Blockdefinitionen aus.

"css.js" kann zum Beispiel CSS-Dateien parsen.

Die Parser müssen "js" als Endung haben, da sie sonst nicht als Modul importiert werden können.


Javascript
==========

REGEX-Matcher
-------------

Variablendeklaration: 'var blockdefinitionurl = ((("./blocks/" + toolboxname) + "/") + (blockname + ".json"))'.match(/^var\s(\w+)\s=\s(.*)$/)