document.getElementById('buildForm').addEventListener('click', function () {
    const form = document.getElementById('dynamicForm');
    form.innerHTML = ''; 

    const fieldCount = parseInt(prompt('How many fields do you want in the form?'));

    for (let i = 0; i < fieldCount; i++) {
        const fieldType = prompt(`Enter type for field ${i + 1} (ex. text, email, number, password):`);
        const fieldLabel = prompt(`Enter label for field ${i + 1}:`);

        const fieldDiv = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.textContent = fieldLabel;
        input.type = fieldType;

        fieldDiv.appendChild(label);
        fieldDiv.appendChild(input);
        form.appendChild(fieldDiv);
    }
    
    const submitButton = document.createElement('input');
    submitButton.setAttribute('id','submitBtn')
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);
});
