import { Table } from 'antd';
import axios from "axios";
import { useEffect, useState } from "react";

const API_HOST = "/";
const instance = axios.create({
    baseURL: API_HOST
});

const columns = [
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'teacher',
        dataIndex: 'teacher',
        key: 'teacher'
    },
    {
        title: 'roomCode',
        dataIndex: 'roomCode',
        key: 'roomCode'
    }
];

function Course() {
    const [dataSource, setDataSource] = useState(false);
    useEffect(() => {
        instance.get("/mockCourse").then((res) => {
            setDataSource(res.data)
        })
    })
    return (
        <div>
            <div className='tmpdiv'>
                <h1>題目區</h1>
            </div>
            <Table columns={columns} dataSource={dataSource} />
        </div>
    );
}

export default Course;