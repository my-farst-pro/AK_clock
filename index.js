   

let hr = document.getElementById ("hors");

let min = document.getElementById ("mint");
let sec = document.getElementById ("secind");

function displytaime() {
  let date = new Date ();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

      let hRotation = 30 * hh + mm / 2;
        let mRotation = 6 * mm;
        let sRotation = 6 * ss;


        hr.style.transform = `rotate(${hRotation}deg)`;
        min.style.transform = `rotate(${mRotation}deg)`;
        sec.style.transform = `rotate(${sRotation}deg)`;

}
 setInterval(displytaime, 1000);




  