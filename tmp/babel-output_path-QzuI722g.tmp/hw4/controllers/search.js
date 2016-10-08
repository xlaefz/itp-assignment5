define('hw4/controllers/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    actions: {
      search: function search(e) {
        e.preventDefault();
        console.log("form submitted");
        var searchTerm = this.get('searchTerm');
        this.transitionToRoute('search.results', searchTerm);
      }
    }
  });
});