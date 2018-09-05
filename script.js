"use strict";

/*
3. Создать функционал фотогалереи. Имеется статичный json-набор миниатюр, на основании которого строится сетка
изображений со ссылками на полноразмерные картинки.*/


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

function Menu(id, className, items) {
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

function GalleryItem(id, src, href, className) {
    Container.call(this, '', 'menu-item');
    this.id = id;
    this.src = src;
    this.href = href;
    this.className = className;
}

GalleryItem.prototype = Object.create(Container.prototype);

GalleryItem.prototype.render = function () {
    var img = document.createElement('img');
    var a = document.createElement('a');

    img.className = this.className;
    img.id = this.id;
    img.src = this.src;
    console.log(this.href);
    a.href = this.href;
    a.setAttribute('target', '_blank');
    a.appendChild(img);

    return a;
};

function Button(id, className, type, value) {
    Container.call(this, id, className);
    this.type = type;
    this.value = value;
}

Button.prototype = Object.create(Container.prototype);

Button.prototype.render = function () {
    var input = document.createElement('input');

    input.className = this.className;
    input.id = this.id;
    input.type = this.type;
    input.value = this.value;


    return input;
};

