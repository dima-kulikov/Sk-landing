function createCircle(container) {
  const circle = document.createElement("div");
  circle.className = "circle";
  container.appendChild(circle);

  const size = Math.floor(Math.random() * (12 - 3 + 1) + 3);
  const posX = Math.random() * (container.clientWidth - size);
  const posY = Math.random() * (container.clientHeight - size);

  const speedX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.2 + 0.2);
  const speedY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.2 + 0.2);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${posX}px`;
  circle.style.top = `${posY}px`;

  return { circle, speedX, speedY };
}

function moveCircles(circles, container) {
  circles.forEach(({ circle, speedX, speedY }) => {
    const currentX = parseFloat(circle.style.left);
    const currentY = parseFloat(circle.style.top);

    const newX = currentX + speedX;
    const newY = currentY + speedY;

    if (newX < 0) {
      circle.style.left = `${container.clientWidth}px`;
    } else if (newX > container.clientWidth) {
      circle.style.left = `0px`;
    } else {
      circle.style.left = `${newX}px`;
    }

    if (newY < 0) {
      circle.style.top = `${container.clientHeight}px`;
    } else if (newY > container.clientHeight) {
      circle.style.top = `0px`;
    } else {
      circle.style.top = `${newY}px`;
    }
  });

  requestAnimationFrame(() => moveCircles(circles, container));
}

function createCircles(container, count) {
  const circles = [];
  for (let i = 0; i < count; i++) {
    const circle = createCircle(container);
    circles.push(circle);
  }
  return circles;
}

window.onload = function () {
  const circlePageDiv = document.querySelector(".circle-page");
  let circles = [];

  if (circlePageDiv) {
    circles = createCircles(circlePageDiv, 40);
    moveCircles(circles, circlePageDiv);
  }
};
