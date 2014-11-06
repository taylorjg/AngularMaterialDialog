/**
 * Created by jonathantaylor on 02/11/2014.
 */
(function () {

    "use strict";

    window.nameListApp = window.nameListApp || {};
    window.nameListApp.models = window.nameListApp.models || {};

    window.nameListApp.models.nameListModel = function (items) {

        var _calculateInitialValueOfNextId = function (items) {
            var highestId = 0;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id > highestId) {
                    highestId = items[i].id;
                }
            }
            return highestId + 1;
        };

        var _replaceItem = function (id, replacement) {
            for (var i = 0; i < _items.length; i++) {
                if (_items[i].id === id) {
                    (replacement) ? _items.splice(i, 1, replacement) : _items.splice(i, 1);
                    break;
                }
            }
        };

        var _items = items;
        var _nextId = _calculateInitialValueOfNextId(_items);

        return {

            items: _items,

            resetItems: function(newItems) {
                _items.splice(0, _items.length);
                for (var i = 0; i < newItems.length; i++) {
                    _items.push(newItems[i]);
                }
            },

            addItem: function (item) {
                item.id = _nextId++;
                _items.push(item);
                return _items;
            },

            editItem: function (item) {
                _replaceItem(item.id, item);
                return _items;
            },

            deleteItem: function (item) {
                _replaceItem(item.id, null);
                return _items;
            }
        };
    };
}());
