let para = document.getElementById('count')
var number=para.textContent;
let i =0;
let price = 125;

function increment(){
    number++;
    // console.log(number)
    para.innerText=number;   

}

function decrement(){
    if(number>0){
    number--;
    // console.log(number)
    para.innerText=number;   
 }
}


function active(){
   
    let box = document.getElementById("cartBox")
    let x1 = document.getElementById("pro_Img")
    let x2 = document.getElementById("pro_para")
    let x3 = document.getElementById("delIcon")
    let x4 = document.getElementById("pro_check_out")
   
    // let x6 = document.getElementById("Name")
    // let x7 = document.getElementById("pro_total")

    if(i%2===0){
      box.classList.remove("C_B")  //to remove class name from element

      if(number>0){
          x1.src="image-product-1-thumbnail.jpg"
          x2.textContent = `Fall Limited Edition Sneakers ${price}x${number} ${price*number}`
          x3.src="icon-delete.svg";
          x1.classList.remove("pi")
          x3.classList.remove("di")
          x4.classList.remove("cout")
        
      } 
      else if(number==0){
        x1.className="proimg pi"
        x2.textContent="your cart is empty"
        x3.className="del_icon di"
        x4.className="check_out cout"
     
      }

       i++;

      }

    else if(i%2!==0){
        box.className = "cart_box C_B";    //to add class name into element
        i++;
      }
    //   console.log(i);
}



function change_pic(event){
  let v1 = event.srcElement.id;
  let v2 = document.getElementById("big_img")


  switch(v1){
    case "img1":  v2.src="image-product-1.jpg"
      break;

    case "img2":  v2.src="image-product-2.jpg"
      break;

    case "img3":  v2.src="image-product-3.jpg"
      break;

    case "img4":  v2.src="image-product-4.jpg"
      break;
  }
}




function addToCart(){
    let v1 = document.getElementById("totalNumber")
    if(number>0){
      v1.innerText=number;
      v1.classList.remove("_Tnum")
    }
    else if(number==0){
      v1.className="total_number _Tnum"
    }

    console.log(number);
}