// document.addEventListener('DOMContentLoaded', () => {
//     const nav = document.querySelector('.nav')
//     const sidebar = document.querySelector('.sidebar')
//     const container = document.querySelector('.container')

//     console.log(nav.offsetWidth)
//     console.log(sidebar.offsetWidth)
    
//     container.style.left = window.width - nav.width
//     container.style.right = window.width - sidebar.width
// })


items = document.querySelectorAll(".nav-item")
items.forEach((item) => {
    item.addEventListener("click", () => {
        for(let itemWhenClick of items)  {
            itemWhenClick.classList.remove("active")
        }
        item.classList.add("active")
    })
})

// let canvas = document.getElementById('pointer')
// let ctx = canvas.getContext('2d')

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// function drawBall(x, y) {
//     ctx.beginPath()
//     ctx.arc(x, y, 10, 0, Math.PI * 2)
//     ctx.fillStyle = "white"
//     ctx.fill()
//     ctx.closePath()
//   }
  
//   function draw(x, y) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     drawBall(x, y)
//   }

// draw(canvas.height / 2 , canvas.width / 2); // initial draw

// canvas.addEventListener('mousemove', function(e) {
//   draw(e.pageX, e.pageY); // the coordinates of the mouse
// });


  