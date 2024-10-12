function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('main').style.display = 'none';
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('userExperience').style.display = 'block';
    alert('Thank you for your valuable feedback')
}

function submitFinal() {
    alert('Thank you for providing your feedback. We will get back to you soon.')
    document.getElementById('userInfo').style.display = 'none';
    location.reload();
}

const submitButton=document.getElementById('submitBtn');
const submitF=document.getElementById('feedbackBtn');

submitButton.onclick = submitFeedback;
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });

submitF.onclick = submitFinal;