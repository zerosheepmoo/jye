let action = function (value, o) {
    if (value.includes("정예은")) {
        let t = new Date();
        let m = t.getMonth();
        let d = t.getDate();
        if (m === 0 && d === 12) {
            o.innerHTML = `<pre style="font-size: 0.3em";>
db   db  .d8b.  d8888b. d8888b. db    db     
88   88 d8' \`8b 88  \`8D 88  \`8D \`8b  d8'
88ooo88 88ooo88 88oodD' 88oodD'  \`8bd8'    
88~~~88 88~~~88 88~~~   88~~~      88         
88   88 88   88 88      88         88        
YP   YP YP   YP 88      88         YP       

d8888b. d888888b d8888b. d888888b db   db d8888b.  .d8b.  db    db db
88  \`8D   \`88'   88  \`8D \`~~88~~' 88   88 88  \`8D d8' \`8b \`8b  d8' 88 
88oooY'    88    88oobY'    88    88ooo88 88   88 88ooo88  \`8bd8'  YP 
88~~~b.    88    88\`8b      88    88~~~88 88   88 88~~~88    88     
88   8D   .88.   88 \`88.    88    88   88 88  .8D 88   88    88    db
Y8888P' Y888888P 88   YD    YP    YP   YP Y8888D' YP   YP    YP    YP

                    (\`-')  _ 
              .->    ( OO).-/ 
   <-.--. ,--.'  ,-.(,------. 
 (\`-'| ,|(\`-')'.'  / |  .---' 
 (OO |(_|(OO \     / (|  '--.  
,--. |  | |  /   /)  |  .--'  
|  '-'  / \`-/   /\`   |  \`---. 
\`-----'    \`--'     \`------' 

</pre>
`
        }
        else {
            o.innerHTML = `<pre style="font-size: 7px;">
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
    t.type = "text";
    t.placeholder = "...Plz input!";
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