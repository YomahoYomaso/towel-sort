
// You should implement your task here.

module.exports = function towelSort (matrix) {

    var alpha = [];
    if(typeof matrix !== 'undefined' && matrix.length > 0) {
        for(var i = 0 ; i < matrix.length; i++) {
            if(i % 2 === 0) {
                alpha = alpha.concat(matrix[i]);
            } else {
                alpha = alpha.concat((matrix[i]).reverse());
            }
        }
        return alpha;
    } else {
        return [];
    }
}
