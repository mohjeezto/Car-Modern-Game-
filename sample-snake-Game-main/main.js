// const x= 10
// const z=20
// var y =30
// console.log(x+z+y)
// let b="hello"
// let data= [ 10,40.50,60]


// const users = {x:10,y:20,T:30}
// console.log(data)
// console.log(users.x)



// // if () {
// //     alert("it true")
// // } else{
// //     alert("it false")
// // }


// function great(name){
//  return `hallo  ${name}`
// }


// great("maxamed")


/*  dfghjk    */


// hjjjjj


let canvas=document.getElementById("canvasGame")
let ctx =canvas.getContext("2d")



///eventListaning
document.addEventListener('keydown', e=>{
   if(e.key==="ArrowUp" && direction.y===0) direction={x:0,y:-gridSize}
   if(e.key==="ArrowDown" && direction.y===0) direction={x:0,y:gridSize}

   if(e.key==="ArrowLeft" && direction.x===0) direction={x:-gridSize,y:0}
   if(e.key==="ArrowRight" && direction.x===0) direction={x:gridSize,y:0}
})



let  gridSize= 20
let snake =[{x:gridSize,y:gridSize}]
let direction= {x:gridSize,y:0}
let food = randomFood()

setInterval(()=>{
 draw()
 randomFood()
 UpdateGame()
},300)



function draw(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height)


    //draw snake

    ctx.fillStyle="Red"
    snake.forEach(part=>ctx.fillRect(part.x, part.y,gridSize,gridSize))


    ctx.fillStyle="Green"
    ctx.fillRect(food.x ,food.y, gridSize,gridSize)

}

function randomFood(){
    return{
        x:Math.floor(Math.random()*(canvas.width/gridSize))* gridSize,
        y:Math.floor(Math.random()*(canvas.height/gridSize))* gridSize
    }
}



function UpdateGame(){
    let head= {x:snake[0].x+ direction.x, y:snake[0].y+direction.y}
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || head.y >= canvas.height) {
        return   GameOver()
    }

    snake.unshift(head)

    if(head.x===food.x&& head.y===food.y){
       food= randomFood()

    }else{
        snake.pop()
    }
}


function GameOver(){
    alert("game Over Try Again")
      gridSize= 20
 snake =[{x:gridSize,y:gridSize}]
 direction= {x:gridSize,y:0}
 food = randomFood()
}