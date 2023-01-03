import Matter from "matter-js";


const Physics = (entities: any, {touches, time, dispatch}: any) => {
    let engine = entities.physics.engine;

    touches.filter((t:any) => t.type === 'press')
        .forEach((t:any) => { 
            Matter.Body.setVelocity(entities.Player.body, {
                x: 0,
                y: -10,
            })

        })
    Matter.Engine.update(engine, time.delta);
    return entities;

}

export default Physics