class Landing{
    //properties

    travelUsers={
        "vijay" :{username:"vijay",password:"1234"},
        "Amal" :{username:"Amal",password:"1234"},
        "Jenson" :{username:"Jenson",password:"1234"},
        "Alwin" :{username:"Alwin",password:"1234"},
        "Manu" :{username:"Manu",password:"1234"}
    }
    //methods

    //to store data permenently in browser local storage
    //" JSON.stringify " to convert into string
    saveData(){
        localStorage.setItem("traveldata",JSON.stringify(this.travelUsers))
    }

    //to get data from local storage
    //" JSON.parse " to convert to original form from stirng that converted earlier
    getData(){
        this.travelUsers=JSON.parse(localStorage.getItem('traveldata'))
        console.log(this.travelUsers);
    }

    //to register new user
    register(){
        this.getData()
        let user = reguser.value
        //console.log(user);
        let pswd = regpswd.value
        //console.log(pswd);

        //perfom if user doesn't enter anything
        if(user=='' || pswd==''){
            alert("Please enter valid inputs")
        }
        else{
            //checking user in database or not
            if(user in this.travelUsers){
                console.log(this.travelUsers);
                alert('User already exists')

                //to clear input screen
                reguser.value=''
                regpswd.value=''
            }
            else{
                //adding user to database
                this.travelUsers[user]={username:user,password:pswd}
                console.log(this.travelUsers);
                alert('Registration completed succesfully')
                this.saveData()
                window.location='index.html'
            }
        }
    }
    login(){
        this.getData()
        let user = loguser.value
        //console.log(user);
        let pswd = logpswd.value
        //console.log(pswd);

        if(user=='' || pswd==''){
            alert("Please enter valid inputs")
        }
        else{
            if(user in this.travelUsers){
                if(this.travelUsers[user].password==pswd){
                    alert('Login completed successfully')
                    localStorage.setItem('user',user)
                    window.location='./home.html'
                }
                else{
                    alert('Invalid password entered')
                }
            }
            else{
                alert('User not found, please register first')
                window.location='./register.html'
            }
        }
    }

}
const obj=new Landing()
