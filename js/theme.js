(function ($) {

AjaxSolr.theme.prototype.result = function (doc, snippet) {
  var output = "<div class='resultDoc'><h2>" + doc.id.toString().replace("http://wiktionary.dbpedia.org/resource/","") + '</h2>';
output += "<div class='label'><b>Label: </b>" + doc.label.toString().replace("@de","")+"<\div>";

// parse Language
if(doc.language != undefined){
for(var i = 0; i < doc.language.length; i++)
	output+="<div class='language'><b>Language: </b>" + doc.language[i].toString().replace("@de","").replace("http://wiktionary.dbpedia.org/terms/","")+"<\div>";
}

if(doc.hasPoS !=undefined){  
for(var j = 0; j< doc.hasPoS.length;j++)
output += "<div class='pos'><b>PoS["+j+"]: </b>" + doc.hasPoS[j].toString().replace("http://wiktionary.dbpedia.org/terms/","")+"<\div>";
}

// parse Etymology
if(doc.hasEtymology != undefined){
for(var i = 0; i < doc.hasEtymology.length; i++)
	output+="<div class='etymology'><b>Etymology["+i+"]: </b>" + doc.hasEtymology[i].toString().replace("@de","")+"<\div>";
}

// parse Meaning
if(doc.hasMeaning != undefined){
for(var i = 0; i < doc.hasMeaning.length; i++)
	output+="<div class='meaning'><b>Meaning["+i+"]: </b>" + doc.hasMeaning[i].toString().replace("@de","")+"<\div>";
}

// parse Example
if(doc.hasExampleSentence != undefined){
for(var i = 0; i < doc.hasExampleSentence.length; i++)
	output+="<div class='example'><b>Example["+i+"]: </b>" + doc.hasExampleSentence[i].toString().replace("@de","")+"<\div>";
}

// parse HyphenationSingular
if(doc.hasHyphenationSingular != undefined ){
for(var i = 0; i < doc.hasHyphenationSingular.length; i++)
	output+="<div class='hyphenationSingular'><b>HyphenationSingular: </b>" + doc.hasHyphenationSingular[i].toString().replace("@de","")+"<\div>";
}

// parse HyphenationPlural
if(doc.hasHyphenationPlural != undefined ){
for(var i = 0; i < doc.hasHyphenationPlural.length; i++)
	output+="<div class='hyphenationPlural'><b>HyphenationPlural: </b>" + doc.hasHyphenationPlural[i].toString().replace("@de","")+"<\div>";
}

output+="</div>";
  return output;
};

AjaxSolr.theme.prototype.snippet = function (doc) {
  var output = '';
 
    output += doc.hasPoS + ' ' + doc.hasMeaning;

  return output;
};

AjaxSolr.theme.prototype.tag = function (value, weight, handler) {
  return $('<a href="#" class="tagcloud_item"/>').text(value).addClass('tagcloud_size_' + weight).click(handler);
};

AjaxSolr.theme.prototype.facet_link = function (value, handler) {
  return $('<a href="#"/>').text(value).click(handler);
};

AjaxSolr.theme.prototype.no_items_found = function () {
  return 'no items found in current selection';
};

})(jQuery);
