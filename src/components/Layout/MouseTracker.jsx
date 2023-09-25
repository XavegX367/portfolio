function MouseTracker() {
    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;

    var circle = {
    el: document.getElementById('circle'),
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    w: 80,
    h: 80,
    update: function() {
        let el = document.getElementById('circle');
        var l = this.x - this.w / 2;
        var t = this.y - this.h / 2;
        el.style.transform = 'translate3d(' + l + 'px,' + t + 'px, 0)';
    }
    };

    window.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    });

    setInterval(move, 1000 / 60);

    function move() {
    circle.x = lerp(circle.x, mouseX, 0.1);
    circle.y = lerp(circle.y, mouseY, 0.1);
    circle.update();
    }

    function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
    }


  return (
    <div className="-z-50" id='circle'></div>
  )
}

export default MouseTracker