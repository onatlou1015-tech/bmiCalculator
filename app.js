document.addEventListener('DOMContentLoaded', function () {    

    const weightInput = document.querySelector('#weight');
    const heightInput = document.querySelector('#height');
    const calculateBtn = document.querySelector('#calculate');
    const clearBtn = document.querySelector('#clear');

    calculateBtn.addEventListener('click', () => {
        
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if(!weight || !height || weight < 0 || height < 0){
            const outputDiv = document.querySelector('.output');
            outputDiv.textContent = 'Please enter valid weight and height';
            return;
        }

        const bmi = parseFloat(weight/(height*height) * 10000);

        const imageDiv = document.querySelector('.bmi-chart');
        const outputDiv = document.querySelector('.output');        

        let category = '';
        let imageSrc = '';

        if(bmi < 18.5){
            category = "Underweight";
            imageSrc = 'img/underweight.png';
            imageAlt = "Underweight";
        } 

        imageDiv.src = imageSrc;
        imageDiv.alt = imageAlt;
        outputDiv.textContent = `Your BMI (${category}) is ${bmi.toFixed(1)}.`;
    });

    clearBtn.addEventListener('click', function () {
        weightInput.value = '';
        heightInput.value ='';    

        const imageDiv = document.querySelector('.bmi-chart');
        const outputDiv = document.querySelector('.output');

        imageDiv.src='img/bmi-cover.png';
        imageDiv.alt = 'BMI Chart';
        outputDiv.textContent="ENTER YOUR WEIGHT AND HEIGHT";
    });
});