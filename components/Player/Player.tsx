import React, { useState } from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'
import AnimatedSprite from 'react-native-animated-sprite'
import playerSprite from './sprite/playerSprite'


interface pos {
    x: number,
    y: number
}

interface size {
    width: number,
    height: number
}

type color = string;

interface Player {
    world: any,
    color: color,
    pos: pos,
    size: size
}

const Player = (props: any) => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - widthBody/2;
    const yBody = props.body.position.y - heightBody/2;

    const color = props.color;

    const [animationTypeState, setAnimationTypeState] = useState('IDLE')
    const tweenOptions = {
      tweenType: 'sine-wave',
      startXY: [xBody, yBody],
      xTo: [xBody],
      yTo: [yBody],
      duration: 1000,
      loop: false
    }

    return (

<View style={{left: xBody, top: yBody}}>
      <AnimatedSprite
          sprite={playerSprite}
          animationFrameIndex={playerSprite.animationIndex(animationTypeState)}
          loopAnimation={true}
          coordinates={{
            top: 0,
            left: 0,
          }}
          size={{
            width: widthBody,
            height: heightBody,
          }}
   //       draggable={true}
   //       tweenOptions = {tweenOptions}
   //       tweenStart={'fromMethod'}
        />
</View>

    
    )
}

export default (world:any, color: color, pos: pos, size: size) => {
  const initialPlayer = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {label: 'Player'}
  );
  Matter.World.add(world, initialPlayer);
  return {
    body: initialPlayer,
    color,
    pos,
    renderer: <Player />
  }
}
