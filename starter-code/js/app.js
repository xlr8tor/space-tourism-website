




(function (){
    let list = document.querySelector('.list');
    let header = ['00 HOME', '01 DESTINATION', '02 CREW', '03 TECHNOLOGY'];

    function Tracker() {
        this.position = 0;
    }
    
    Tracker.prototype.setPosition = function(newPosition){
        this.position = newPosition;
    }
    
    Tracker.prototype.getPosition = function(){
        return this.position;
    }

    let tracker = new Tracker();
    


list.addEventListener('click',(e) => {
   e.target.classList.remove('active')
    console.log(e.target)
//     Array.from(list.children).forEach(elem => {
//         elem.classList.remove("active");
//        let link = e.target.innerText;
//        if(!elem.classList.contains('active') && elem.innerText == link){
//             elem.classList.add("active");  
//         }
//         else {
//             elem.classList.remove("active");
//         }

//    })
})
})()



