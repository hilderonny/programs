# Entstehungsgeschichte

## 04.05.2024

Die Blockly-Toolbox, mit der man die Toolbox selbst erstellen kann, ist nun mit sich selbst definiert. Das Ziel dabei war, alles von Grund auf nur mit Blockly programmieren und definieren zu können, also auch die Blockly-Konfiguration wie Toolboxen und Blöcke selbst.

## 02.05.2024

Die HTML-Dateien des Blockeditors lassen sich nun vollständig durch den Blockeditor selbst bearbeiten. Die Blockly-relevanten Definitionen sind dabei innrhalb eines HTML-Kommentars am Ende der HTML-Datei selbst enthalten.

## 01.05.2024

Nachdem der HTML Editor in seinen Grundfunktionen zum Speichern und Löschen von Dateien und zum Bearbeiten von Verzeichnisstrukturen fertig war, habe ich angefangen, den Block Editor zu bauen.
Und zwar nur mit dem HTML Editor. Auf Visual Studio Code habe ich ab diesem Zeitpunkt verzichtet. Das war zwar etwas mühselig, da der Komfort gefehlt hat, hat aber erst mal funktioniert.
Um ein wenig Farbe reinzubringen, habe ich dann doch den [CodeFlask Editor](https://github.com/kazzkiq/CodeFlask) eingebunden, zumindest für html, js und css.

Der Block Editor sollte zunächst reines HTML-Bearbeiten beherrschen. Dazu habe ich Blöcke erstellt, die HTML-Elemente darstellen und die Grundstruktur des Editors vom Layout her an den HTML-Editor angepasst.

## 27.04.2024

Die Grundidee bei diesen Programmen besteht darin, dass man die Programme mit sich selbst erstellt und dass man dazu eine visuelle Oberfläche benutzt. Mir hat Blockly bzw. Scratch gefallen.

Bis zu dem Punkt, an welchem das Programm `htmleditor` Verzeichnisstrukturen anzeigen und bearbeiten und zusätzlich Dateien bearbeiten konnte, habe ich mit einem Texteditor gearbeitet und die Quellcodes des Programms "von Hand" erstellt.

Genauso auf Serverseite: Hier verwende ich mein `nodejs-webserver` Repository. Auch hier habe ich die Quellcodes von Hand erstellt. Dabei wird es vorerst auch bleiben, da sich die Quellen in naher Zukunft vermutlich relativ selten ändern werden. Außerdem muss ich momentan den Server bei jeder Änderung von Hand neu starten.