import"./script-B3YnSE4A.js";let o=document.getElementById("shop"),l=[{id:"mah",name:"Multi-Glam Face Pen-Light",price:4,desc:"The SHEGLAM MultiGlam Face Pen your ultimate beauty tool,matte highlight  design.",img:"./img/sheglammm.webp"},{id:"mmah",name:"sheglam Blush",price:9,desc:"Get flushed with our Color Bloom Liquid Blush featuring nourishing ingredients and a long-wearing,lightweight gel-cream formula that loves your skin",img:"./img/sheglam2.webp"},{id:"maah",name:" Face & Under Eye Setting Powder",price:5,desc:"You and your glam have got a good thing going",img:"./img/podr.webp"},{id:"mahl",name:"Jelly-Licious Hydrating Lip & Blush Tint",price:6.24,desc:"SHEGLAM Jelly-licious Tinted Blush Stick features a bouncy jelly texture.",img:"./img/tint.webp"},{id:"mm",name:"Primer-Blueberry+AHA",price:5,desc:"SHEGLAM Jelly-licious Tinted Blush Stick features a bouncy jelly texture.",img:"./img/ss.jpg"},{id:"nn",name:" Setting Spray",price:7,desc:"Matte Fresh Setting Spray provides a mattifying effect while ",img:"./img/hh.jpg"},{id:"aa",name:" Foundation Stick-Almond",price:5,desc:" foundation, you've come to the right place. Our SHEGLAM Skin",img:"./img/kk.jpg"},{id:"dd",name:"Sun Sculpt Liquid  Tan",price:3.33,desc:"Warm up your sculpt with our Sun Beam Matte Liquid Bronzer! Featuring",img:"./img/ll.jpg"},{id:"cc",name:" Jelly Glaze Stick",price:7,desc:"SHEGLAM Crystal Jelly Glaze Stick! This dazzling wonder combines",img:"./img/cc.jpg"},{id:"oo",name:" Eyeshadow Primer",price:3,desc:"Matte Fresh Setting Spray provides a mattifying effect while ",img:"./img/nn.jpg"},{id:"xx",name:" Volumizing Mascara",price:6.24,desc:" meet our most volumizing mascara thanks to its high-definition tip.",img:"./img/xx.jpg"},{id:"ww",name:"Sharp Eyeliner",price:2,desc:"Warm up your sculpt with our Sun Beam Matte Liquid Bronzer! Featuring",img:"./img/ww.jpg"},{id:"zz",name:"  Lip Gloss-Sweet ",price:7,desc:"Your lip gloss game is in for an upgrade! Our newest lip gloss lays",img:"./img/zz.jpg"},{id:"pp",name:" te Lipstick-Rule Breaker",price:6.72,desc:"Matte Fresh Setting Spray provides a mattifying effect while ",img:"./img/pp.jpg"},{id:"yy",name:"  Lip Oil-Loco For Coco",price:4.24,desc:" meet our most volumizing mascara thanks to its high-definition tip.",img:"./img/yy.jpg"},{id:"tt",name:" Cushion Liquid Lipstick",price:5.25,desc:"Lip Gloss, so you're sure to adore our new lipstick version",img:"./img/tt.jpg"},{id:"qq",name:"  Glacier Glo Smoothing Primer ",price:7.96,desc:"Your lip gloss game is in for an upgrade! Our newest lip gloss lays",img:"./img/qq.jpg"},{id:"pp",name:" Glacier Lipstick-Rule Breaker",price:6.72,desc:" love your Matte Fresh Setting Spray provides a mattifying effect while  ",img:"./img/pp.jpg"},{id:"vv",name:" Lunar Orbit Blush Ball-Delight",price:6.22,desc:" meet our most volumizing mascara thanks to its high-definition tip.",img:"./img/vv.jpg"},{id:"ch ch",name:"Cherry Cheek & Lip Cream Stack",price:5.27,desc:" When you love your beauty stash but you love your itty bitty mini bag too.",img:"./img/chch.jpg"}],r=JSON.parse(localStorage.getItem("data"))||[],c=()=>o.innerHTML=l.map(e=>{let{id:i,name:t,price:m,desc:n,img:s}=e,a=r.find(g=>g.id===i)||[];return`    <div  id=product-id-${i}   class="item">
<img src=${s} alt="" width="400">
<div class="details">
  <h3>
  ${t}
  </h3>
  <p>
  ${n}</p>
<div class="price">
  <h2>$ ${m}</h2>
  <div class="buttons">
    <i   onclick="decrement(${i})"       class="bi bi-dash-lg"></i>
    <div  id=${i}  class="quantity">

    ${a.item===void 0?0:a.item}
    
    </div>
    <i   onclick="increment(${i})"   class="bi bi-plus-lg"></i>
  </div>
</div>
</div>
</div>`}).join("");c();let d=()=>{let e=document.getElementById("cartAmount");e.innerHTML=r.map(i=>i.item).reduce((i,t)=>i+t,0)};d();
