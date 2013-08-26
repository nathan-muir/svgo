'use strict';

exports.type = 'perItemReverse';

exports.active = true;

/*
 * Remove clipPaths
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Kir Belevich
 */
exports.fn = function(item) {
    item.removeAttr('stroke-linecap');
    item.removeAttr('stroke-linejoin');
    item.removeAttr('stroke-miterlimit');
    if(item.isElem('path'))
      item.removeAttr('stroke-fill', 'none');
    return true;
};
