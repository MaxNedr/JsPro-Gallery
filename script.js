'use strict';

/*3. Создать функционал фотогалереи. Имеется статичный json-набор миниатюр, на основании которого
строится сетка изображений со ссылками на полноразмерные картинки.*/

function Container(id, className) {
    this.id = id;
    this.className = className;

}

Container.prototype.myRemove = function (id) {
    var elem = document.getElementById(id);
    return elem.parentElement.removeChild(elem);
};

Container.prototype.render = function () {
    var div = document.createElement('div');

    div.className = this.className;
    div.id = this.id;

    return div;
};
function GalleryImage(id, className, items) {
    Container.call(this, id, className);

    this.items = items;
}
Menu.prototype = Object.create(Container.prototype);

Menu.prototype.render = function () {
    var div = document.createElement('div');

    div.className = this.className;
    div.id = this.id;

    this.items.forEach(function (item) {
        if (item instanceof Container) {
            div.appendChild(item.render());
        }
    });

    return div;
};
