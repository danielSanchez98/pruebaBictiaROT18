

document.addEventListener('DOMContentLoaded', ()=>{
    let rot_13
    const msgEncoded= document.querySelector('#msgEncoded');
    const msgDecoded= document.querySelector('#msgDecoded');
    const resDecoded = document.querySelector('#resDeco');
    const resEncoded = document.querySelector('#resCodi');

    class ROT_13{

        constructor(){
            this.rango=new RegExp("[a-z]", "i");
            this.min='A'.charCodeAt(0);
            this.max='Z'.charCodeAt(0);
            this.factor=13;
            this.resultado="";
            this.textoIngresado="";
        }

        setTextoIngresado(texto){
            this.textoIngresado=texto.toUpperCase();
        }

                    // Ecuacion de cifrado de Cesar [ x - 65 + n ] % 26 +65
                    // donde x = Número de la letra (ASCII), n=valor fijo (En este caso 13, debido a la codificacion rot13)

        descifrarMsg(){
            for (let i = 0; i < this.textoIngresado.length; i++) {
              this.resultado += (this.rango.test(this.textoIngresado[i]) ?
                String.fromCharCode((this.textoIngresado.charCodeAt(i) - this.min + this. factor) % (this.max - this.min +1) + this.min) : this.textoIngresado[i] ) ;
             
            }
        }
        encriptarMsg(){
            for (let i = 0; i < this.textoIngresado.length; i++) {
              this.resultado += (this.rango.test(this.textoIngresado[i]) ?
                String.fromCharCode((this.textoIngresado.charCodeAt(i) + this.min + this. factor) % (this.max - this.min +1) + this.min) : this.textoIngresado[i] ) ;
             
            }

        }
        getMsg(){
            return this.resultado;
        }
    }

    document.querySelector('.decodificar button').addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(msgEncoded.value);
        rot_13= new ROT_13();
        rot_13.setTextoIngresado(msgEncoded.value);
        rot_13.descifrarMsg()
        resDecoded.innerHTML =`<b>Mensaje: </b> ${msgEncoded.value} <b>Resultado: </b>${rot_13.getMsg()}` ;
        msgEncoded.value='';
    })

    document.querySelector('.codificar button').addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(msgDecoded.value);
        rot_13= new ROT_13();
        rot_13.setTextoIngresado(msgDecoded.value);
        rot_13.encriptarMsg();
        resEncoded.innerHTML= `<b>Mensaje: </b> ${msgDecoded.value} <b>Resultado: </b>${rot_13.getMsg()}`;
        msgDecoded.value=''
    })

  



})