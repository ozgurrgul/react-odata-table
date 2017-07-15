# React-OData-Table

This component provides a table similar to DataTable. You can pass an OData Url and columns you want to show as `props`. Does'not support `$expand` operation in Odata.


## Ìnstallation: 

```
npm i -s react-odata-table
```

Bootstap CDN:

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
```

## Usage 


``` js

import React from 'react'
import ReactDom from 'react-dom'
import { ODataTable } from 'react-odata-table'

var columnsAndKeys =  [
    {serverKey: "ID", visualName: "ID", type: 'num', orderBy: true, key: true},
    {serverKey: "Name", visualName: "Name", type: 'string'}
]

class TestApp extends React.Component {

    render() {

        return (
            <div style={{padding: 10}}>
                <ODataTable
                    columnsAndKeys={columnsAndKeys}
                    odataUrl={"http://services.odata.org/V4/OData/OData.svc/Products"}
                    paginationLocation="top"
                />
            </div>
        )
    }

}

```

## Output

![alt text](https://cdn.rawgit.com/lugrugzo/react-odata-table/master/pic/SS1.png "")