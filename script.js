window.onload = () => {
    const ratings = document.querySelectorAll('.rating li');
    const submitBtn = document.querySelector('.ratings-container button');
    const selectedRating = document.querySelector('.rating-selected span');
    const ratingStart = document.querySelector('.rating-start');
    const ratingEnd = document.querySelector('.rating-end');

    ratings.forEach(rating => {
        rating.addEventListener('click', (e) => {
            const clickedRating = e.target;
            if (!clickedRating.classList.contains('chosen')){
                ratings.forEach(r => r.classList.remove('chosen'));
                clickedRating.classList.add('chosen');
            } else {
                clickedRating.classList.remove('chosen');
            }
        })
    })

    submitBtn.addEventListener('click', () => {
        let index = Array.from(ratings).indexOf(document.querySelector('.chosen'))
        if (!Array.from(ratings).some((r) => r.classList.contains('chosen'))) {
            alert('Please select a star rating!')
        } else {
            // Show the selected rating in the UI
            selectedRating.textContent = parseInt(index + 1);
            
            submitBtn.classList.add('button-clicked')
            
            // Hide the start rating and show the end rating
            setTimeout(() => {
                ratingStart.style.display = 'none';
            ratingEnd.style.display = '';
            }, 3000)
            
        }
    })
}