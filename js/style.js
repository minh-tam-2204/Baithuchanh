window.onload=function()
{
    let images = document.querySelectorAll(".thumb img");
    let m = document.getElementById("main")
    for (let im of images)
    {
        im.onclick=function()
        {
            m.src=this.src;
        }
    }
    let products = document.querySelectorAll(".products > .product")
    let buttons =document.querySelectorAll(".buttons button");
    for (let b of buttons)
    {
        b.onclick=function()
        {
            let txt=this.getAttribute("rel")
            m.setAttribute("src",`../images/galaxys8/${txt}1.jpg`)
            for (let i=0;i<images.length; i++)
            {
                images[i].src=`../images/galaxys8/${txt}${i+1}.jpg`
            }
            for (let p of products)
            {
                p.style.background = `linear-gradient(${this.style.backgroundColor},lightblue)`
            }
        }
    }
}
