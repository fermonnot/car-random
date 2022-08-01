window.onload = () => {
    let body = document.body

    body.style.backgroundColor = "green"
    body.style.height = "100vh"
    body.style.display = "flex"
    body.style.justifyContent = "center"
    body.style.alignItems = "center"



    let card = document.querySelector("#app")
    card.style.border = "1px solid black"
    card.style.height = "400px"
    card.style.width = "280px"
    card.style.borderRadius = "20px"
    card.style.backgroundColor = "white"
    card.style.position = "relative"
    card.style.textContent = "center"
   

    

    let iconR= () => {
    let arrI = ["&spades;","&clubs;", "&hearts;", "&diams;"]
    let icon = arrI[Math.floor(Math.random() * arrI.length)]
        return icon
    }
    
    let creaI= iconR()
    
    
    let colorR= () =>{

        if(creaI === "&diams;"||creaI === "&hearts;"){
           return creaI.backgroundColor="red" 
           
        }
        if(creaI === "&diams;"||creaI === "&hearts;") {
            return creNum.backgroundColor= "red"

        }
    }
    let randomC= colorR()
    

    let containerIcon = document.createElement("div")
    containerIcon.style.width = "60px"
    containerIcon.style.height = "auto"
    containerIcon.innerHTML = creaI
    containerIcon.style.textAlign = "center"
    containerIcon.style.fontSize = "60px"
    containerIcon.style.margin="0px 5px"
    containerIcon.style.color= randomC
    card.appendChild(containerIcon)


    let numR = () => {
        let arrN = ["5", "3", "2", "7", "2", "J", "A"]
        let num = arrN[Math.floor(Math.random() * arrN.length)]
        return num
    }
    
    let creNum = numR()
    
    let containerNumero = document.createElement("div")   
    containerNumero.innerHTML= creNum
    containerNumero.style.fontSize = "150px"
    containerNumero.style.width = "280px"
    containerNumero.style.height = "auto"
    containerNumero.style.textAlign = "center"
    containerNumero.style.lineHeight="250px"
    containerNumero.style.color= randomC

    card.appendChild(containerNumero)

   

    let containerIcon2 = document.createElement("div")
    
    containerIcon2.innerHTML = creaI
    containerIcon2.style.width = "60px"
    containerIcon2.style.height = "auto"
    containerIcon2.style.float = "right"
    containerIcon2.style.textAlign = "center"
    containerIcon2.style.margin = "0px 5px"
    containerIcon2.style.fontSize = "70px"
    containerIcon2.style.color= randomC

    card.appendChild(containerIcon2)
}