import React, { useState } from "react";

const Circles = () => {
  const [circles, setCircles] = useState([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const handleClick = (e) => {
    const { clientX, clientY } = e;
    const radius = 20+Math.floor(Math.random()*100);
    const newCircle={ x: clientX, y: clientY, radius }
    if(circles.length==2){
        setCircles([])
    }
    else{
        const updatedCircles=[...circles,newCircle];
        setCircles(updatedCircles)
        if(updatedCircles.length==2){
            checkIntersection(updatedCircles[0],updatedCircles[1])
        }
    }
   
  };
  const checkIntersection=(circle1,circle2)=>{
    let d=Math.sqrt(((circle1.x-circle2.x)**2)+((circle1.y-circle2.y)**2))
    if(d<circle1.radius+circle2.radius){
        setIsIntersecting(true)
    }
    else{
        setIsIntersecting(false)
    }
  }

    const circleStyle = (x, y, radius) => ({
    position: 'absolute',
    left: x - radius,
    top: y - radius,
    width: radius * 2,
    height: radius * 2,
    borderRadius: '50%',
    backgroundColor: 'rgba(219, 35, 35, 0.5)',
  });
    const viewportStyle = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    backgroundColor: isIntersecting ? 'lightcoral' : 'lightblue',
    overflow: 'hidden',
  };
  return (
    <div
      style={viewportStyle}
      onClick={handleClick}
    >
      {
        circles.map((circle,ind)=>(
            <div key={ind} style={circleStyle(circle.x,circle.y,circle.radius)}>

            </div>
        ))
      }
      
    </div>
  );
//     return (
//     <div style={viewportStyle} onClick={handleClick}>
//       {circles.map((circle, index) => (
//         <div
//           key={index}
//           style={circleStyle(circle.x, circle.y, circle.radius)}
//         />
//       ))}
//     </div>
//   );
};

export default Circles;

// const [circles, setCircles] = useState([]);
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   const handleClick = (e) => {
//     const { clientX, clientY } = e;
//     const radius = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

//     const newCircle = { x: clientX, y: clientY, radius };

//     if (circles.length === 2) {
//       setCircles([]);
//       setIsIntersecting(false);
//     } else {
//       const updatedCircles = [...circles, newCircle];
//       setCircles(updatedCircles);

//       if (updatedCircles.length === 2) {
//         checkIntersection(updatedCircles[0], updatedCircles[1]);
//       }
//     }
//   };

//   const checkIntersection = (circle1, circle2) => {
//     const dx = circle1.x - circle2.x;
//     const dy = circle1.y - circle2.y;
//     const distance = Math.sqrt(dx * dx + dy * dy);

//     if (distance < circle1.radius + circle2.radius) {
//       setIsIntersecting(true);
//     } else {
//       setIsIntersecting(false);
//     }
//   };

//   const viewportStyle = {
//     width: '100vw',
//     height: '100vh',
//     position: 'relative',
//     backgroundColor: isIntersecting ? 'lightcoral' : 'lightblue',
//     overflow: 'hidden',
//   };

//   const circleStyle = (x, y, radius) => ({
//     position: 'absolute',
//     left: x - radius,
//     top: y - radius,
//     width: radius * 2,
//     height: radius * 2,
//     borderRadius: '50%',
//     backgroundColor: 'rgba(219, 35, 35, 0.5)',
//   });

//   return (
//     <div style={viewportStyle} onClick={handleClick}>
//       {circles.map((circle, index) => (
//         <div
//           key={index}
//           style={circleStyle(circle.x, circle.y, circle.radius)}
//         />
//       ))}
//     </div>
//   );
