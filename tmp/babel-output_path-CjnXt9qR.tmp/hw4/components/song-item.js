define('hw4/components/song-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    isExplicit: _ember['default'].computed('song.trackExplicitness', function () {
      return this.get('song.trackExplicitness') === 'explicit';
    })
  });
});