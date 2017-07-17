import React from 'react'
import ReactDom from 'react-dom'
import { ODataTable } from '../../src'

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


ReactDom.render(<TestApp/>, document.getElementById('app'));