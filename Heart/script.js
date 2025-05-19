
const heartContainer = document.querySelector('.heart-container');
const rayCount = 130;

for (let i = 0; i < rayCount; i++) {
  const ray = document.createElement('div');
  ray.classList.add('ray');
  heartContainer.appendChild(ray);

  const angleDeg = Math.random() * 360;
  const angleRad = angleDeg * Math.PI / 180;
  const distance = 100 + Math.random() * 100;
  const duration = 1500 + Math.random() * 1000;
  const delay = Math.random() * 1000;

  ray.animate([
    { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.9 },
    {
      transform: `translate(calc(-50% + ${Math.cos(angleRad) * distance}px), calc(-50% + ${Math.sin(angleRad) * distance}px)) scale(0.5)`,
      opacity: 0
    }
  ], {
    duration,
    iterations: Infinity,
    easing: 'ease-out',
    delay
  });
}
