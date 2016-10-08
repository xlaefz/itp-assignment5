define('hw4/components/song-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isExpensive: _ember['default'].computed('song.price', function () {
      return this.get('song.price') < 1;
    }),

    isPopular: _ember['default'].computed('song.playCount', function () {
      return this.get('song.playCount') >= 20;
    })
  });
});