"use strict";
exports.__esModule = true;
var h = require("handlebars");
var fs = require("fs");
var Marked = require("marked");
var HighlightJS = require("highlight.js");
var typedoc = require("typedoc");
var filename = './docs/template.hbs';
var source = fs.readFileSync(filename, 'utf-8');
var datasource = fs.readFileSync("./docs/data.json");
Marked.setOptions({
    highlight: function (text, lang) { return getHighlighted(text, lang); }
});
/**
* Highlight the synatx of the given text using HighlightJS.
*
* @param text  The text taht should be highlightes.
* @param lang  The language that should be used to highlight the string.
* @return A html string with syntax highlighting.
*/
function getHighlighted(text, lang) {
    try {
        if (lang) {
            return HighlightJS.highlight(lang, text).value;
        }
        else {
            return HighlightJS.highlightAuto(text).value;
        }
    }
    catch (error) {
        this.application.logger.warn(error.message);
        return text;
    }
}
function GenerateFunctionSig(e) {
    var params = [];
    // need to extract the call signature possibly
    if (e.signatures[0].parameters) {
        e.signatures[0].parameters.forEach(function (parameter) {
            var p = parameter.name + (parameter.type.name ? ": " + parameter.type.name : "");
            if (parameter.flags.isOptional) {
                p = "[" + p + "]";
            }
            params.push(p);
        });
    }
    return "(" + params.join(", ") + ")";
}
function RewriteCommentToMarkdown(e) {
    if (e.comment && e.comment.text) {
        e.comment.text = Marked.parse(e.comment.text);
    }
}
datasource = JSON.parse(datasource);
//console.log(datasource);
var remappedData = {};
datasource["children"].forEach(function (element) {
    var subArray = {};
    if (element.children) {
        element["children"].forEach(function (childElement) {
            subArray[childElement.name] = childElement;
            // clear out all the children that have the "isPrivate" flag set
            RewriteCommentToMarkdown(childElement);
            if (childElement.children) {
                for (var i = childElement.children.length - 1; i >= 0; i--) {
                    RewriteCommentToMarkdown(childElement.children[i]);
                    var te = childElement.children[i];
                    var dr = new typedoc.DeclarationReflection(te);
                    if (te.flags.isPrivate) {
                        childElement.children.splice(i, 1);
                        continue;
                    }
                    var sig = "";
                    // generate the signatures
                    if (te.kindString) {
                        switch (te.kindString) {
                            case "Property":
                                sig = ": <span class='type'>" + te.type.name + "</span> = <span class='default_value'>" + te.defaultValue + "</span>";
                                break;
                            case "Method":
                                sig = GenerateFunctionSig(te);
                                break;
                        }
                    }
                    childElement.children[i].signature = sig;
                }
            }
        });
        remappedData[element.name] = subArray;
    }
});
// yeah, need to do a ton of parsing
/*
 * things I want to display
 * Game.Game
 * Actor.Actor
 * Actor.ActorGroup
 * Drawing.Drawing
 * Vector.Vector
 * Keyboard.Keyboard
 * Mouse.Mouse
 * Random.Random
 * Color.Color
 * Config.Config
 * ParticleSystem.ParticleSystem
 * Actor.TextActor
 *
 */
remappedData = { classes: [
        remappedData['"Game"'].Game,
        remappedData['"Actor"'].Actor,
        remappedData['"Actor"'].ActorGroup,
        remappedData['"Drawing"'].Drawing,
        remappedData['"Vector"'].Vector
    ] };
var template = h.compile(source);
// going to eventually do some preprocessing of the json, but not today
fs.writeFile("./docs/index.html", template(remappedData), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
