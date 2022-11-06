function calculateBMI(){
    let weight=document.getElementById('weight').value
    let height=document.getElementById('height').value
    let result=document.getElementById('output')
    let height_status=false, weight_status=false

    let bmi = (weight/(height*height)*10000)

    document.getElementById('heading').innerHTML = 'Your BMI is:'
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)
    
    if (bmi <= 18.5) {
        document.getElementById('message').innerHTML = 'It is Underweight'
    } else if (bmi >= 18.5 && bmi <= 25) {
        document.getElementById('message').innerHTML = 'It is Normal'
    } else{
        document.getElementById('message').innerHTML = 'It is Overweight'
    } 
    

    if(height==='' || isNaN(height) || (height <=0)){
        document.getElementById('height_error').innerHTML = 'Please enter valid height';
    } else{
        document.getElementById('height_error').innerHTML='';
        height_status=true;
    }
    
    if(weight==='' || isNaN(weight) || (weight <=0)){
        document.getElementById('weight_error').innerHTML = 'Please enter valid weight';
    } else{
        document.getElementById('weight_error').innerHTML='';
        weight_status=true;
    }
    
}


function reload() {
    window.location.reload()
}