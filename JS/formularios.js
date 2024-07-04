async function buscarPersona(nombre,apellido,mail){
    /* http://localhost:3000 ahi iria el url de donde este subido el proyecto*/
    /*   alert(`http://localhost:3000/personas/${nombre}/${apellido}/${mail}`) */ 
    const response = await fetch(`http://localhost:3000/personas/${nombre}/${apellido}/${mail}`)
    const persona = await response.json()
    return persona
}

document.addEventListener('DOMContentLoaded',()=>{

    const formPresupuesto = document.getElementById('formPresupuesto');

    /* Agregar Presupuesto */
    formPresupuesto.addEventListener('submit',async(e) =>{

        e.preventDefault()
        const formData = new FormData(formPresupuesto);
        const persona = buscarPersona(formData.get('nombre'),formData.get('apellido'),formData.get('mail'))

        const idPersona = persona.get('idPersona');


        if(idPersona === null){
            const dataPersona = {
                nombre: formData.get('nombre'),
                apellido: formData.get('apellido'),
                mail: formData.get('mail'),
                whatsapp: null /*Habria que cambiar en la DB y poner un solo campo contacto con mail/wpp*/
            }

            const response = await fetch('http://localhost:3000/personas',{
                method: 'POST',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify(dataPersona)
            })

            const result = await response.json();
            idPersona = result.get('idPersonaAutoincremental')
        }

        alert('Llegueeeeeeeee')
        const data = {
            idPersona: idPersona,
            estilo: formData.get('estilo'),
            referencia: formData.get('referencia'),
            zonaCuerpo: formData.get('zonaCuerpo'),
            tamanioCM: formData.get('tamanioCM'),
        }

        const response = await fetch('http://localhost:3000/presupuestos',{
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(data)
        })

        const result = await response.json();
        alert("Su consulta fue enviada con ÉXITO.")

        // formPresupuesto.reset()

    })

  





})