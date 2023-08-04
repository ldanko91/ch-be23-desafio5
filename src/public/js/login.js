const form =document.getElementById('loginForm')

form.addEventListener('submit', e =>{
    e.preventDefault();

    const data= new FormData(form);
    const obj={}
    data.forEach((value,key)=>obj[key]=value);

    fetch('/api/sessions/login',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result => result.json())
        .then(json => {

            if (json.status === 'success') {
                window.location.replace('/');
            } else {
                alert('Error en el inicio de sesión. Por favor, inténtalo de nuevo. Si aún no tienes usuario y contraseña, visita nuestra seccion de registro.');
        }
    })

        .catch(error => {
            console.error('Error en la solicitud:', error);
            alert('Error en el inicio de sesión. Por favor, inténtalo de nuevo más tarde.');
        });
})