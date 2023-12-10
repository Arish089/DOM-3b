let myform = document.querySelector('form');
let name = document.getElementById("name");
let Id = document.getElementById("doctorID");
let specialisation = document.getElementById("specialisation");
let exp = document.getElementById("exp");
let email = document.getElementById("email");
let mobile = document.getElementById("mbl");
let submit = document.getElementById("submit");
let Tbody = document.querySelector('tbody');
let Alldata =[];

submit.addEventListener('click',function(e)
{
    e.preventDefault();
    let data ={};
    data.input1 = name.value;
    data.input2 = Id.value;
    data.input3 = specialisation.value;
    data.input4 = exp.value;
    data.input5 = email.value;
    data.input6 = mobile.value;

    Alldata.push(data);
    console.log(Alldata);

  Tbody.innerHTML = null;
Alldata.map((ele) =>
{
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('td');
    td1.innerText = ele.input1;
    td2.innerText = ele.input2;
    td3.innerText = ele.input3;
    td4.innerText = ele.input4;
    td5.innerText = ele.input5;
    td6.innerText = ele.input6;
    
        if(Number(td4.innertext) <= 1 ){
            td7.innerText = "Trainee";
        }
        else if(Number(td4.innerText) > 1 && Number(td4.innerText) < 5){
            td7.innerText = "Junior";
        }
        else{
            td7.innerText = "Senior";
        }
        td8.innerText = "Delete";
        td8.style.backgroundColor = "red";
        
        td8.addEventListener('click',function()
        {
            Tbody.innerHTML=null;
        })
        
      row.append(td1,td2,td3,td4,td5,td6,td7,td8);
      Tbody.append(row);
      
      
})
})