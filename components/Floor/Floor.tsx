import React from 'react'
import Matter from 'matter-js'
import { View } from 'react-native'

interface pos {
    x: number,
    y: number
}

interface size {
    width: number,
    height: number
}

type color = string;

interface Floor {
    world: any,
    color: color,
    pos: pos,
    size: size
}


const Floor = (props: any) => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - widthBody/2;
    const yBody = props.body.position.y - heightBody/2;

    const color = props.color;

    return (
        <View style={{
            backgroundColor: color,
            borderWidth: 1,
            borderColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody,
        }}/>
    )
}

export default (world:any, color: color, pos: pos, size: size) => {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {label: 'Floor', isStatic: true}
  );
  Matter.World.add(world, initialFloor);
  return {
    body: initialFloor,
    color,
    pos,
    renderer: <Floor />
  }
}
