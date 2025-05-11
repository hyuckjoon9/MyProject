const cursors = document.querySelectorAll('.custom-cursor');
const trailData = [];

// 초기값 설정
cursors.forEach(() => {
  trailData.push({ x: 0, y: 0 });
});

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateTrail() {
  // 각 커서에 대해 부드럽게 이동
  trailData.forEach((pos, i) => {
    const next =
      i === 0
        ? { x: mouseX, y: mouseY } // 첫 커서는 마우스를 바로 따라감
        : trailData[i - 1]; // 나머지는 앞 커서를 따라감

    // 보간 (interpolation)
    pos.x += (next.x - pos.x) * 0.5;
    pos.y += (next.y - pos.y) * 0.5;

    // 실제 DOM 위치 이동
    cursors[i].style.left = `${pos.x}px`;
    cursors[i].style.top = `${pos.y}px`;
  });

  requestAnimationFrame(animateTrail);
}

animateTrail();
