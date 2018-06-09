import * as h from "handlebars"
let fs = require("fs");
import * as Marked from "marked";
import * as HighlightJS from "highlight.js"
import * as typedoc from "typedoc"
import { ConsoleLogger } from "typedoc/dist/lib/utils";
let filename = './docs/template.hbs';
let source = fs.readFileSync(filename, 'utf-8');
let datasource = fs.readFileSync("./docs/data.json");

Marked.setOptions({
    highlight: (text: any, lang: any) => getHighlighted(text, lang)
});

/**
* Highlight the synatx of the given text using HighlightJS.
*
* @param text  The text taht should be highlightes.
* @param lang  The language that should be used to highlight the string.
* @return A html string with syntax highlighting.
*/
function getHighlighted(text: string, lang?: string): string {
try {
    if (lang) {
        return HighlightJS.highlight(lang, text).value;
    } else {
        return HighlightJS.highlightAuto(text).value;
    }
} catch (error) {
    this.application.logger.warn(error.message);
    return text;
}
}
function GenerateFunctionSig(e)
: string
{
    var params = [];
    // need to extract the call signature possibly
    if(e.signatures[0].parameters)
    {
        e.signatures[0].parameters.forEach(parameter => {
            let p = parameter.name + (parameter.type.name?": " + parameter.type.name:"");
            if(parameter.flags.isOptional)
            {
                p = `[${p}]`;
            }
            params.push(p);
        });
    }
    return "("+params.join(", ")+")";
}
function RewriteCommentToMarkdown(e)
{
    if(e.comment && e.comment.text)
    {
        e.comment.text = Marked.parse(e.comment.text);
    }
}
datasource = JSON.parse(datasource);
//console.log(datasource);
let remappedData : any = {};
datasource["children"].forEach(element => {
    let subArray = {};
    if(element.children)
    {
        element["children"].forEach(childElement => {
            subArray[childElement.name] = childElement;
            // clear out all the children that have the "isPrivate" flag set
            RewriteCommentToMarkdown(childElement);
            if(childElement.children)
            {
                for (let i = childElement.children.length-1; i >= 0; i--) {
                    RewriteCommentToMarkdown(childElement.children[i]);

                    let te = childElement.children[i];
                    let dr = new typedoc.DeclarationReflection(te);
                    if(te.flags.isPrivate)
                    {
                        childElement.children.splice(i, 1);
                        continue;
                    }
                    let sig = "";
                    // generate the signatures
                    if(te.kindString)
                    {
                        switch(te.kindString)
                        {
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

remappedData = {classes:[
    remappedData['"Game"'].Game,
    remappedData['"Actor"'].Actor,
    remappedData['"Actor"'].ActorGroup,
    remappedData['"Drawing"'].Drawing,
    remappedData['"Vector"'].Vector
]}
let template = h.compile(source);
// going to eventually do some preprocessing of the json, but not today
    fs.writeFile("./docs/index.html", template(remappedData), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 