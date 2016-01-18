'use strict'

function pipes(src, procs, ctx) {
    for (let proc of procs)
        src = proc(src, ctx)
    return src
}

module.exports = pipes
