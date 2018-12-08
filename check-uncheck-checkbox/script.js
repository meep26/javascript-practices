let checkboxes = document.getElementsByName("checkItem[]");
const checker = document.getElementById("checkAll");
const getCheck = document.querySelector("#getChecks");

const isChecked = () => {
   let status = false;
   if (checker.checked) {
      status = true;
   }

   for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = status;
   }
}

checker.addEventListener('change', isChecked);

getCheck.addEventListener('click', () => {
   let itemChecked = [];
   for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
         itemChecked.push(checkboxes[i].dataset.id);
      }
   }

   // Check if the array is empty
   if (itemChecked.length < 1) {
      itemChecked = "No item(s) is checked";
   }
   else {
      itemChecked = `Item checked: ${itemChecked}`;
   }
   
   document.getElementById('itemChecked').innerHTML = itemChecked;

});



