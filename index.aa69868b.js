const page = document.querySelector("body").dataset.page;
if (page === "pricing") {
    const proPlanDiv = document.querySelector(".proPlan");
    const proPlanOptions = proPlanDiv.querySelectorAll(".option");
    const proPlanPurchaseDiv = document.querySelector(".proPlanPurchase");
    proPlanOptions.forEach((option)=>{
        option.addEventListener("click", ()=>{
            proPlanOptions.forEach((option)=>{
                option.classList.remove("selected");
            });
            option.classList.add("selected");
            if (option.dataset.option === "monthly") proPlanPurchaseDiv.dataset.option = "monthly";
            else proPlanPurchaseDiv.dataset.option = "yearly";
        });
    });
}

//# sourceMappingURL=index.aa69868b.js.map
