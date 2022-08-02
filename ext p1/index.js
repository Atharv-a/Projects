let myLeads=[];
const inputEl=document.getElementById("input-el");
const inputBtn =document.getElementById("inpuq");
const  ulEl=document.getElementById("list");
const deleteBtn=document.getElementById("delete-btn");
const tabBtn=document.getElementById("tab-btn");
if(localStorage.getItem("myLeads"))
{
     myLeads=JSON.parse(localStorage.getItem("myLeads"));
     render(myLeads);
     
}
function render(leads)
{
let listItems=""
   for(let x=0;x< leads.length;x++)
   {  
      listItems+=`
      <li>
           <a href='${leads[x]}' target='_blank'>
               ${leads[x]}
           </a>
      </li>`;
   }
   ulEl.innerHTML=listItems;
};


 deleteBtn.addEventListener("dblclick",function(){
     localStorage.clear();
     myLeads=[];
     ulEl.innerHTML=null;

 });

inputBtn.addEventListener("click",function(){
     myLeads.push(inputEl.value);
     if(myLeads[myLeads.length-1]==='')
     {
        myLeads.pop();
        return
     }
     inputEl.value="";
     localStorage.setItem("myLeads",JSON.stringify(myLeads));
     render(myLeads);
});
 
tabBtn.addEventListener('click',()=>{
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){    
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    });
     
});

