var points=0;

$(".pic1").click(function(){
points=points+1;
});


$(".pic2").click(function(){
points=points+2;
});

$(".pic3").click(function(){
points=points+3;
});


$(".pic4").click(function(){
points=points+4;
});

$("#submit").click(function(){
    if (points<12){
        $("#cat").attr("src", "http://s3.weddbook.com/t1/2/5/6/2569276/2-ct-engagement-ring-4-prong-classic-solitaire-ring-man-made-diamond-simulant-round-wedding-ring-sterling-silver-rose-gold-plated.jpg");
    }
    else if (points >11 && points<19){
        $("#cat").attr("src", "https://www.loveandpromisejewelers.com/media/catalog/product/cache/1/image/670x500/9df78eab33525d08d6e5fb8d27136e95/m/a/mae_9x7mm_14kt_rose_gold_oval_fb_moissanite_and_diamond_halo_with_milgrain_engagement_ring_3.jpg");
    }
    else if (points >18 && points<23){
        $("#cat").attr("src", "https://www.diamondmansion.com/skin/frontend/meigeetheme/default/home/img/thumbnail-4.jpg");
    }
    else if (points >22){
        $("#cat").attr("src", "https://s-media-cache-ak0.pinimg.com/736x/ae/15/37/ae1537c25ae0071bd09487722a23386d--rectangle-diamond-ring-rectangle-engagement-ring.jpg");
    }





});
