import { Notyf } from 'notyf';


const notyf = new Notyf()

export class Util{

    Alert(status, msg){
        if (status == "error") {
            return notyf.error({
                message: msg,
                dismissible: true,
                position: {
                    x: 'center',
                    y: 'bottom'
                },
                duration: 3000,
                icon: true 
            })
        } else {
            return notyf.success({
                message: msg,
                dismissible: true,
                position: {
                    x: 'center',
                    y: 'bottom'
                },
                duration: 3000,
                icon: true 
            })
        }
    }

    genId(len = 5) {
        let id = "";
        let char = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

        for (let i = 0; i < len; i++){
            let rand =Math.floor(Math.random() * char.length);
            id += char[rand];
        }

        return id;
    }
}