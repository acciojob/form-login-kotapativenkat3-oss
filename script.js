function getFormvalue() {
    //Write your code here
	       const firstname = document.getElementsByName("fname")[0].value;
        const lastname = document.getElementsByName("lname")[0].value;
        alert(`${firstname} ${lastname}`);
        event.preventDefault();

}
