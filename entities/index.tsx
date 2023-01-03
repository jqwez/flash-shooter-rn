import Matter from "matter-js"
import Player from "../components/Player/Player"
import Floor from "../components/Floor/Floor"

import { Dimensions } from "react-native"

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default (restart:any) => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    engine.gravity.y = 0.4;

    return {
        physics: {engine, world},
        Player: Player(world, 'green', {x: 50, y: 100}, {width: 50, height: 50}),
        Floor: Floor(world, 'blue', {x: 50, y: windowHeight-10}, {width: 1000, height: 20})

    }
}