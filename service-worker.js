let isAdding = false;

function addExpense(){
  if(isAdding) return;
  isAdding = true;

  const amount = document.getElementById("amount").value;
  const reason = document.getElementById("reason").value;
  const date = document.getElementById("date").value;

  if(!amount || !reason || !date){
    isAdding = false; // 🔥 important
    return alert("Fill all");
  }

  db.collection("expenses").add({
    amount: Number(amount),
    reason,
    date
  })
  .then(()=>{
    document.getElementById("amount").value = "";
    document.getElementById("reason").value = "";

    loadData();

    window.scrollTo({top:0, behavior:"smooth"});
    console.log("Expense added");
  })
  .catch((err)=>{
    console.error(err);
  })
  .finally(()=>{
    isAdding = false; // 🔥 reset lock
  });
}