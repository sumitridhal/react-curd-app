//localStorage persistence
var STORAGE_KEY = "items";
//localStorage.clear();
var itemStorage = {
  fetch: function() {
    var saved = localStorage.getItem(STORAGE_KEY);
    var items = saved !== null
      ? JSON.parse(saved)
      : [
          {
            username: "Jondi Rose",
            fullname: "Alfred Jond Rose",
            point: 1234,
            notes: "super user"
          },
          {
            username: "Dulal",
            fullname: "Jonathan Smith",
            point: 23,
            notes: "new user"
          }
        ];
    items.forEach(function(item, index) {
      item.id = index;
    });
    itemStorage.uid = items.length;
    return items;
  },
  save: function(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
};
