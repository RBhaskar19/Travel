let users=[
    {name: 'John', email: 'john@example.com',password: 'password'},
    {name: 'John1', email: 'john1@example.com',password: 'password1'},
    {name: 'John2', email: 'john2@example.com',password: 'password2'},
    {name: 'John3', email: 'john3@example.com',password: 'password3'},
    {name: 'John4', email: 'john4@example.com',password: 'password4'},
    {name: 'John5', email: 'john5@example.com',password: 'password5'},
    {name: 'John6', email: 'john6@example.com',password: 'password6'}
]
let curIndex = -1;
document.getElementById('submit').onclick=()=>{  
    let curemail=document.getElementById('email').value;
    let pass=document.getElementById('pass').value;
    for (let i = 0; i < users.length; i++) {
        const obj = users[i];
        if(obj.email==curemail &&obj.password==pass){
            curIndex=i;
            break;
        }
    }
    if(curIndex!=-1){
        console.log(curIndex);
        window.location.href="/index.html"
        
    }
    else{
        alert('Invalid email or password');
    }
    console.log("email",curemail);
    console.log("pass",pass);
}

// export { curIndex as default,curIndex,users};
