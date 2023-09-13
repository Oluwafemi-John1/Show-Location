// alert("Hi")


const dispLocation = () => {
    navigator.geolocation.getCurrentPosition((posi)=>{
        console.log(posi.coords);
        let lati = (posi.coords.latitude).toFixed(2)
        let longi = (posi.coords.longitude).toFixed(2)
        showLocation.innerHTML = `
            <h3 align="center">You are currently at ${lati} &deg;N and ${longi} &deg;E</h3>
        `
    })
}