// selection fetch

const searchBtn = document.getElementById('searchBtn');


// add events listener

searchBtn.addEventListener('click', handleSearch);


// main function function 
function handleSearch() {
    const searchUser = getInputValue('searchUser');
    if (searchUser === '') {
        clearProfile();
        showAlert('please enter a valid user name','alert alert-danger');
        return;
    }
    setInputValue('searchUser', '');
    fetch(`https://api.github.com/users/${searchUser}`)
        .then(res => res.json())
        .then(data => {
            if(data.message === 'Not Found'){
                showAlert('user not found','alert alert-danger');
            }else{
                const profile = new ShowProfile(data);
            }
        });



}



