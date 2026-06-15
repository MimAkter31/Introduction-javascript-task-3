// function openModel() {
//     document.getElementById("myModel").style.display = "block";
// }

// function closeModel() {
//     document.getElementById("myModel").style.display = "none";
// }

// function validateForm() {
//     let name = document.getElementById("name").value;

//     if (name == "") {
//         alert("Name is required");
//         return false;
//     }

//     alert("Form Submitted Successfully");
//     return true;
// }

// document.getElementById("colorselect").addEventListener("change", function () {
//     document.body.style.backgroundColor = this.value;
// });
document.getElementById("colorselect").addEventListener("change",function(){
    document.body.style.backgroundColor = this.value;
});
function openModel(){
    document.getElementById("myModal").style.display="block";

}
function closeModel(){
    document.getElementById("myModal").style.display="none";
}
function validateForm(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
if (name == ""|| email == ""){
    alert("Name is require");
    return false;
}
alert ("Form Submitted Successfully");
return true;}