import Name from '@salesforce/schema/Account.Name';
import { LightningElement ,track} from 'lwc';
export default class BmiCalculator extends LightningElement {
height1=''
height12=''
height2=''
weight1=''  
bmiValue=''   
result=''  

inputhandler(event){
    const {name, value} = event.target
    if(name === "height"){
    this.height1 =value
    }
    if(name === "weight"){
    this.weight1 = value
    }
}

submithandler(event){
        event.preventDefault()
        console.log("height is",this.height1)
        console.log("Weight is",this.weight1)
        this.calculate()
}

calculate(){
    //BMI = weight in kg/(height in meter)^2
    let height2 = Number(this.height1)*(30.48);
    console.log("height2 is",height2)
    let height1 = Number((height2)/100);
    console.log("height1 is",height1)
    let bmi = Number(this.weight1)/(height1*height1);

    console.log("BMI is",bmi)   
    this.bmiValue = Number(bmi.toFixed(2))
    console.log("BMIValue is",this.bmiValue)  
    
    if(this.bmiValue < 18.5){
        this.result = 'Underweight'
    }
    else if(this.bmiValue > 18.5 && this.bmiValue < 25){
        this.result = 'Healthy'
    }
    else if(this.bmiValue > 25 && this.bmiValue < 30){
        this.result = 'Overweight'
    }   
    else{
        this.result = 'Obese'
    }

    console.log("BMI Value is",this.bmiValue)
    console.log("Result is",this.result)
}
recalculate(){
    this.height1=''
    this.weight1=''  
    this.bmiValue=''   
    this.result='' 
}
}