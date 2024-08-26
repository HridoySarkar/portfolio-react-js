window.onload = () => {
    try {
        // $(selector).countMe(delay,speed)
        $(".counter_box1").countMe(50, 50);
        $(".counter_box2").countMe(100, 120);
        $(".counter_box3").countMe(400, 500);
        $(".counter_box4").countMe(300, 300);
    } catch (error) {
        console.log(error);
    }

    try {
        new Filterizr('.gallery_container',{});
    } catch (error) {
        console.log(error);
    }
}