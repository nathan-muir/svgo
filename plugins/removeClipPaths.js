'use strict';

exports.type = 'perItem';

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

    item.removeAttr('clip-path');

    return !(item.isElem('clipPath'))
};
