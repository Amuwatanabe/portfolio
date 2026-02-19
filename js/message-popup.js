const svg = document.getElementById("messageSvg");

// SVGの中央座標
const vb = svg.viewBox.baseVal;
const centerX = vb.x + vb.width / 2;
const centerY = vb.y + vb.height / 2;

svg.querySelectorAll(":scope > g").forEach(g => {
  g.addEventListener("click", e => {
    e.stopPropagation();

    // 他のキャラをリセット
    svg.querySelectorAll(":scope > g").forEach(el => {
      el.classList.remove("active");
      el.classList.add("dim");
      el.style.transform = "";
    });

    // ★ 最前面にする（超重要）
    svg.appendChild(g);

    // クリックしたgだけ強調
    g.classList.remove("dim");
    g.classList.add("active");

    // そのgの現在位置を取得
    const box = g.getBBox();
    const gx = box.x + box.width / 2;
    const gy = box.y + box.height / 2;

    // 中央へ寄せる移動量
    const moveX = centerX - gx;
    const moveY = centerY - gy;

    // 中央に寄せて拡大
    g.style.transform =
      `translate(${moveX}px, ${moveY}px) scale(1.8)`;
  });
});

// 背景クリックで全部戻す（任意）
svg.addEventListener("click", () => {
  svg.querySelectorAll(":scope > g").forEach(el => {
    el.classList.remove("active", "dim");
    el.style.transform = "";
  });
});
