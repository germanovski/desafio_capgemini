import React from 'react';
import { Table} from 'antd';

export default function TableCustom({data, columns})
{
    
    return(
        <Table columns={columns} dataSource={data} />
    )
}