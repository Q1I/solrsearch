var Manager;

function init() {

  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/'
//solrUrl: 'http://139.18.2.158:8080/solr/'
    });
    Manager.addWidget(new AjaxSolr.ResultWidget({
      id: 'result',
      target: '#docs'
    }));
    Manager.addWidget(new AjaxSolr.PagerWidget({
      id: 'pager',
      target: '#pager',
      prevLabel: '&lt;',
      nextLabel: '&gt;',
      innerWindow: 1,
      renderHeader: function (perPage, offset, total) {
        $('#pager-header').html($('<span/>').text('displaying ' + Math.min(total, offset + 1) + ' to ' + Math.min(total, offset + perPage) + ' of ' + total));
      }
    }));

Manager.addWidget(new AjaxSolr.TextWidget({
  id: 'text',
  target: '#search',
  field: 'label',
fields: [ 'label', 'hasMeaning', 'hasPoS' ,'id']
}));



    Manager.init();
    Manager.store.addByValue('q', '*:*');
    Manager.doRequest();
  });

}

function result(doc, snippet) {
  var output = '<div><h2>' + doc.id + '</h2>';
  //output += '<p id="links_' + doc.label + '" class="links"></p>';
output += '<b>Label:</b> ' + doc.label ;
  output += '<p>' + snippet + '</p></div>';
  return output;
};

function snippet (doc) {
  var output = '<b>Snippet:</b> ';

    output += doc.hasPoS + ' , ' + doc.hasMeaning;

  return output;
};
