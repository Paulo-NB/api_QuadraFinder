
class Payments{
    constructor(pid, pmethod, ptotal, pdate, piduser, pidlocation){
        this.id = pid
        this.method = pmethod
        this.total = ptotal
        this.date = pdate
        this.iduser= piduser
        this.idlocation = pidlocation 
    }

    /* Colocar outro metodos aqui*/
}

module.exports = Payments
