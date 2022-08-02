function renderLeads()
{
let listItems=""
   for(let x=0;x< myLeads.length;x++)
   {  
      listItems+=`
      <li>
           <a href='${myLeads[x]}' target='_blank'>
               ${myLeads[x]}
           </a>
      </li>`;
   }
   ulEl.innerHTML=listItems;
};
