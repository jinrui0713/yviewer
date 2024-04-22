document.addEventListener('DOMContentLoaded', () => {  
  //ターゲットの要素を取得
  const ripples = document.querySelectorAll('ul.menu > li > *, ol.menu > li > *');

  //位置を取得
  const RippleEffect = e => {
    const ripple = e.target.closest('li > *');//クリックされたボタンを取得
    const cover = document.createElement('span');//span作る
    const coversize = ripple.offsetWidth;//要素の幅を取得
    const loc = ripple.getBoundingClientRect();//絶対座標の取得
    const x = e.pageX - loc.left - window.scrollX - (coversize / 2);
    const y = e.pageY - loc.top - window.scrollY - (coversize / 2);
    pos = 'top:' + y + 'px; left:' + x + 'px; height:' + coversize + 'px; width:' + coversize + 'px;';

    //spanを追加
    ripple.appendChild(cover);
    cover.setAttribute('style', pos);
    cover.setAttribute('class', 'rp-effect');//クラス名追加
    
    //しばらくしたらspanを削除
    setTimeout(() => cover.remove(), 700);
  };

  ripples.forEach(ripple => {
    ripple.addEventListener('mousedown', RippleEffect);
  });
});