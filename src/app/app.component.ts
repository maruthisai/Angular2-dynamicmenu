import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuData = [
    {
        "id": 1,
        "name": "Profit",
        "path": "/profit",
        "subnav": {title:"Profit", entity:{'test':'test'}},
        "submenu": [
          {
              "id": 2,
              "name": "P&L",
              "subnav": {title:"P&L", entity:{'test':'test'}},
              "path": "/pl",
              "submenu":[
                {
                    "id": 24,
                    "name": "Assesment Balance",
                    "subnav": {title:"Assesment Balance", entity:{'test':'test'}},
                    "path": "/profit",
                    "submenu":[
                      {
                          "id": 242,
                          "name": "Sub ledger",
                          "path": "/subledger",
                          "subnav": {title:"Sub ledger", entity:{'test':'test'}},
                          "submenu":[
                            {
                                "id": 2424,
                                "name": "Remaining Balance",
                                "subnav": {title:"Remaining Balance", entity:{'test':'test'}},
                                "path": "/profit"
                            }
                          ]
                      }
                    ]
                }
              ]
          }
        ]
    },
    {
      "id":3,
      "name": "Balance Sheet",
      "subnav": {title:"Balance Sheet", entity:{'test':'test'}},
      "path": "/balancesheet",
      "submenu": [
        {
              "id": 262,
              "name": "Spending",
              "subnav": {title:"Spending", entity:{'test':'test'}},
              "path": "/balance"
        },
        {
              "id": 272,
              "name": "Expenditure",
              "subnav": {title:"Expenditure", entity:{'test':'test'}},
              "path": "/balance"
        }
      ]
    },
    {
      "id": 1209,
      "name": "Reports",
      "subnav": {title:"Reports", entity:{'test':'test'}},
      "path":"/profits"
    }
  ]
  subnavDataOnMenuChange(event){
  }
}
