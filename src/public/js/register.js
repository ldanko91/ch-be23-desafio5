const form =document.getElementById('registerForm')

form.addEventListener('submit', e =>{
    e.preventDefault();

    const data= new FormData(form);
    const obj={}
    data.forEach((value,key)=>obj[key]=value);

    fetch('/api/sessions/register',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result => result.json())
        .then(json => {
            if (json.status === 'success') {
                alert('Registro exitoso. ¡Bienvenido!');
                window.location.replace('/');

            } else {
                alert('Error en el registro. Por favor, inténtalo de nuevo.');
            }
        })

        .catch(error => {
            console.error('Error en la solicitud:', error);
            alert('Ha ocurrido un error en la solicitud. Por favor, inténtalo de nuevo más tarde.');
        });
})