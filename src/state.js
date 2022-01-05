/**
 * Copyright (c) Facebook, Inc. and its affiliates. 
 */

const GlobalCounter = require('./global_counter')
const GlobalString = require('./global_string')
const GlobalMap = require('./global_map')

module.exports.createGlobalCounterSignal = GlobalCounter.createGlobalCounterSignal
module.exports.createGlobalStringSignal = GlobalString.createGlobalStringSignal
module.exports.createGlobalPeersMap = GlobalMap.createGlobalPeersMap
