const log =  console.log
log(typeof String)
log(typeof Array)
log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return 0 in this ? this[0] : null
}

log([].first())
log([1,2,3,4,5].first())
log(['a', 'b', 'c'].first())

String.prototype.toString = function(){
    return 'Lascou tudo'
}
log('Escola Cod3r'.reverse())