window.onload = () => {
    try {
        // $(selector).countMe(delay,speed)
        $(".counter_box1").countMe(100, 100);
        $(".counter_box2").countMe(100, 200);
        $(".counter_box3").countMe(300, 500);
        $(".counter_box4").countMe(100, 200);
    } catch (error) {
        console.log(error);
    }

    try {
        new Filterizr('.gallery_container',{});
    } catch (error) {
        console.log(error);
    }
}