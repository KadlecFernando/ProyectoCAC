async function buscarPersona(nombre,apellido,mail){
    /* http://localhost:3000 ahi iria el url de donde este subido el proyecto*/
    /*   alert(`http://localhost:3000/personas/${nombre}/${apellido}/${mail}`) */ 
    const response = await fetch(`http://localhost:8080/personas/${nombre}/${apellido}/${mail}`)
    const persona = await response.json()
    return persona;
}

async function crearPersona(formData){
    const dataPersona = {
        nombre: formData.get('nombre'),
        apellido: formData.get('apellido'),
        mail: formData.get('mail'),
        whatsapp: null /*Habria que cambiar en la DB y poner un solo campo contacto con mail/wpp*/
    }

    const response = await fetch('http://localhost:8080/personas/',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(dataPersona)
    })

    const result = await response.json();

    /* el return era asi de cortito y al pie*/
    return result.idPersonaAutoincremental;
}


document.addEventListener('DOMContentLoaded',()=>{

    const formPresupuesto = document.getElementById('formPresupuesto');

    /* Agregar Presupuesto */
    formPresupuesto.addEventListener('submit',async(e) =>{

        e.preventDefault()
        const formData = new FormData(formPresupuesto);
        const persona = buscarPersona(formData.get('nombre'),formData.get('apellido'),formData.get('mail'))

        /* le cambie a let, y use la misma dentro del if para que la tome como lo mismo ya sea que existe la persona,
         o que la crea en el momento (tiene q ser declarada afuera)*/

        let idPersona = persona.idPersona;

        if(idPersona === undefined){
            idPersona = await crearPersona(formData)
        }

        const estiloSelect = document.getElementById('estilo'); // Obtener el elemento select
        const estiloSeleccionadoTexto = estiloSelect.options[estiloSelect.selectedIndex].text;

        const data = {
            idPersona: idPersona,
            estilo: estiloSeleccionadoTexto,
            referencia: formData.get('referencia'),
            zonaCuerpo: formData.get('zonaCuerpo'),
            tamanioCM: formData.get('tamanioCM'),
        }

        const response = await fetch('http://localhost:8080/presupuestos',{
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(data)
        })

        const result = await response.json();
        alert("Su consulta fue enviada con ÉXITO.")

        formPresupuesto.reset()

        /* Agregar Mensaje */

        const formMensaje = document.getElementById('formMensaje');
        
        formMensaje.addEventListener('submit',async(e) =>{

            e.preventDefault()
            const formData = new FormData(formMensaje);
            const persona = buscarPersona(formData.get('nombre'),formData.get('apellido'),formData.get('mail'))
    
            /* le cambie a let, y use la misma dentro del if para que la tome como lo mismo ya sea que existe la persona,
             o que la crea en el momento (tiene q ser declarada afuera)*/
    
            let idPersona = persona.idPersona;
    
            if(idPersona === undefined){
                idPersona = await crearPersona(formData)
            }
    
            const data = {
                idPersona: idPersona,
                mensaje: formData.get('mensaje')
            }
    
            const response = await fetch('http://localhost:8080/mensajes',{
                method: 'POST',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify(data)
            })
    
            const result = await response.json();
            alert("Su mensaje fue enviado con ÉXITO.")

            formPresupuesto.reset()
        
        })

    })
})