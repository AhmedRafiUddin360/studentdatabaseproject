console.log("hello this is js file");
function SubmitEvent() {
  let Name = document.getElementById('sname').value;

  let pin = document.getElementById("pin").value;
  const bpin = document.getElementById('biopin').value;
  const branch = document.getElementById("branch");
  const sem = document.getElementById("sem");
  const year = document.getElementById("year");
  const scon = document.getElementById('scon').value;
  const adhaar = document.getElementById('Aadhar').value;
  let Email = document.getElementById("Email").value;
  let address = document.getElementById('address').value;
  let fname = document.getElementById("fname").value;
  const fnum = document.getElementById("fnum").value;
  let dob = document.getElementById("dob").value;
  var gen1 = document.getElementById('male');
  var gen2 = document.getElementById('female');
  if (Name == false) {
    alert("Enter name ");
  } else if (pin == false) {
    alert("enter pin");
  } else if (bpin == false) {

    alert("enter bio metric id");
   }
  else if (branch.selectedIndex === 0) {
    alert("Please select an option.");
  }


  else if (sem.selectedIndex === 0) {
    alert("select your semister");
  } else if (year.selectedIndex === 0) {
    alert("select your year");
  }
  else if (scon == false) {
    alert("enter your contact");
  }
  else if (adhaar == false) {
    alert("enter Adhaar number");
  }
  else if (Email == false) {
    alert("enter email id ");
  }
  //  else if (Email!=false) {
  //   // validation of email need to be done



  //  }
  else if (address == false) {
    alert("enter your address");
  }
  else if (fname == false) {
    alert("enter enter your father name");
  }
  else if (fnum == false) {
    alert("enter your father number");
  }
  else if (dob == false) {
    alert("enter your date of birth ");
  }
  else if (!gen1.checked && !gen2.checked) {

    alert("select gender ");
  }
  else {
    const selectedOption = branch.options[branch.selectedIndex];
    alert("You selected: " + selectedOption.value);
    const selectedsem = sem.options[sem.selectedIndex];
    alert("You selected: " + selectedsem.value);
    const selectedyear = year.options[year.selectedIndex];
    alert("You selected: " + selectedyear.value);
    alert("You selected: " + Email);
    alert("all values entered");
  }

}