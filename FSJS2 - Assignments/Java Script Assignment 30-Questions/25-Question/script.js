// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more


let age = 28;
let weight = 60;
let height = 170/100; 
function calculatesBMI(){
    let bmi = weight/(height*height);
    if (age>=20)
    {
        if (bmi<18.5){
            console.log(`Your age is: ${age} and your BMI is: ${bmi}.\nHence, You are Underweight.`);
        }
        else if ((bmi>18.5)&&(bmi<24.9)) {
            console.log(`Your age is: ${age} and your BMI is: ${bmi}.\nHence, You are Normal Weight.`);
        }
        else if ((bmi>25)&&(bmi<29.9)) {
            console.log(`Your age is: ${age} and your BMI is: ${bmi}.\nHence, You are Overweight.`);
        }
        else if(bmi>=30){
            console.log(`Your age is: ${age} and your BMI is: ${bmi}.\nHence, You are Obese.`);
        }
    }
    else{
    console.log("Your age is not enough to calculates your the Body mass index(BMI).")
    }
}
calculatesBMI();
