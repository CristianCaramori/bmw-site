import mock from '../utils/mock';

//mock.onPost('/api/home/login').reply(200, {
    //'id' : 1,
    //'username': 'cristian',
    //'email': 'fowrgplays@gmai.com'
//});

mock.onPost('/api/home/login').reply((config) => { 
  
    const { email, password } = JSON.parse(config.data);
  

    if (email !== 'fowrgplays@gmail.com' || password !== 'serena.06'){
        return [400, { message: 'Seu e-mail ou senha estão incorretos'}]
    }

    const user = {
        'id' : 1,
        name: 'Cristian Caramori',
        'username': 'cristian',
        'email': 'fowrgplays@gmai.com' 
    }
    
    return [200, { user }]
});