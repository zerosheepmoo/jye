let action = function (value, o) {
    if (value.includes("정예은")) {
        o.innerHTML = `<pre>
________  __            __          __      __                      __  __ 
/        |/  |          /  |        /  |    /  |                    /  |/  |
$$$$$$$$/ $$/   ______  $$ |____   _$$ |_   $$/  _______    ______  $$ |$$ |
$$ |__    /  | /      \\ $$      \\ / $$   |  /  |/       \\  /      \\ $$ |$$ |
$$    |   $$ |/$$$$$$  |$$$$$$$  |$$$$$$/   $$ |$$$$$$$  |/$$$$$$  |$$ |$$ |
$$$$$/    $$ |$$ |  $$ |$$ |  $$ |  $$ | __ $$ |$$ |  $$ |$$ |  $$ |$$/ $$/ 
$$ |      $$ |$$ \\__$$ |$$ |  $$ |  $$ |/  |$$ |$$ |  $$ |$$ \\__$$ | __  __ 
$$ |      $$ |$$    $$ |$$ |  $$ |  $$  $$/ $$ |$$ |  $$ |$$    $$ |/  |/  |
$$/       $$/  $$$$$$$ |$$/   $$/    $$$$/  $$/ $$/   $$/  $$$$$$$ |$$/ $$/ 
              /  \\__$$ |                                  /  \\__$$ |        
              $$    $$/                                   $$    $$/         
               $$$$$$/                                     $$$$$$/          
        </pre>`
    }
    else {
        o.innerHTML =""
    }
}

let resetInnerHTML = function(o) {
    o.innerHTML = ""
}

document.addEventListener("DOMContentLoaded", function(){
    let jyeCon = document.getElementById("jye");

    let t = document.createElement("input");
    t.type = "text"
    let o = document.createElement("div");

    let b = document.createElement("button");
    b.textContent = "Confirm";
    t.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            action(t.value, o);
        }
    });
    b.addEventListener("click", function(event) {
        action(t.value, o);
    })
    jyeCon.appendChild(t);
    t.parentElement.appendChild(b);
    t.parentElement.appendChild(o);
    o.className = "jye-output";
    b.className = "jye-button";
    t.className = "jye-input";
});